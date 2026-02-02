import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ChatbotModal.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{
    title: string;
    similarity: number;
  }>;
}

const PROJECT_ID = 'gfyiunrxdmzfxmphkymr';
const API_URL = `https://${PROJECT_ID}.functions.supabase.co/rag-chat`;
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmeWl1bnJ4ZG16ZnhtcGhreW1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY4MDYxNSwiZXhwIjoyMDg1MjU2NjE1fQ.BWKdOnDMzY3iCwt9spoi3ruJH-RDecLcR66yYLV4BJY';

export const ChatbotModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    const question = input;
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // 스트리밍 응답을 위한 임시 메시지 생성
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      sources: [],
    };

    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      // 마크다운 형식의 답변
      const answer = data.answer || 'Sorry, I could not generate a response.';
      const sources = data.sources || [];

      // 메시지 업데이트
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: answer, sources }
            : msg
        )
      );
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage =
        'Sorry, there was an error processing your request. Please try again.';

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: errorMessage }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        className={styles.floatingButton}
        aria-label="Open chat assistant"
        title="Ask documentation assistant"
      >
        <span className={styles.icon}>💬</span>
      </button>
    );
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>Documentation Assistant</h3>
          <button
            onClick={handleClose}
            className={styles.closeButton}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages Container */}
        <div className={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div className={styles.emptyState}>
              <p>👋 Hi! I'm your documentation assistant.</p>
              <p>Ask me anything about our products and services.</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.role === 'user'
                    ? styles.userMessage
                    : styles.assistantMessage
                }`}
              >
                <div className={styles.messageContent}>
                  {message.role === 'assistant' ? (
                    <div className={styles.markdown}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
                {message.sources && message.sources.length > 0 && (
                  <div className={styles.sources}>
                    <strong>Sources:</strong>
                    <ul>
                      {message.sources.map((source, idx) => (
                        <li key={idx}>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.title}
                          </a>
                          {' '}(Similarity: {(source.similarity * 100).toFixed(1)}%)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.loadingDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className={styles.inputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className={styles.input}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            {isLoading ? '⏳' : '→'}
          </button>
        </form>
      </div>
    </div>
  );
};
