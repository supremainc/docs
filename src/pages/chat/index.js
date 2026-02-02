import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './chat.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{
    title: string;
    similarity: number;
    url: string;
  }>;
}


function ChatPage() {
  const { siteConfig: {customFields}} = useDocusaurusContext();
  const PROJECT_ID = 'gfyiunrxdmzfxmphkymr';
  const API_URL = `https://${PROJECT_ID}.functions.supabase.co/rag-chat`;
  const SUPABASE_SERVICE_ROLE_KEY = customFields.SUPABASE_SERVICE_ROLE_KEY || '';

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

  return (
    <Layout>
      <Head>
        <title>BioStar X Documentation Assistant | Suprema Docs</title>
        <meta name="description" content="Use the BioStar X Documentation Assistant to get personalized answers and support based on your documentation needs." />
      </Head>
      <div className={styles.chatPageContainer}>
        <div className={styles.chatPageContent}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <h1 className={styles.chatTitle}>📚 Documentation Assistant</h1>
            <p className={styles.chatSubtitle}>Ask questions about our products and services</p>
          </div>

          {/* Messages Container */}
          <div className={styles.chatMessagesContainer}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>👋</div>
                <h2>Welcome to the Documentation Assistant</h2>
                <p>Ask me anything about our products and services. I'll help you find the right information.</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.chatMessage} ${
                    message.role === 'user'
                      ? styles.userChatMessage
                      : styles.assistantChatMessage
                  }`}
                >
                  <div className={styles.chatMessageBubble}>
                    {message.role === 'assistant' ? (
                      <div className={styles.chatMarkdown}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      message.content
                    )}
                  </div>
                  {message.sources && message.sources.length > 0 && (
                    <div className={styles.chatSources}>
                      <strong>📖 Sources:</strong>
                      <ul>
                        {message.sources.map((source, idx) => (
                          <li key={idx}>
                            <a href={source.url} target="_blank" rel="noopener noreferrer">
                              {source.title}
                            </a>
                            <span className={styles.similarity}>
                              {(source.similarity * 100).toFixed(1)}% match
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className={`${styles.chatMessage} ${styles.assistantChatMessage}`}>
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
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              className={styles.chatInput}
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              className={styles.chatSendButton}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              {isLoading ? '⏳' : '→'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;