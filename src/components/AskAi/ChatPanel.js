import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import {
  ActionBarPrimitive,
  AssistantRuntimeProvider,
  AuiIf,
  ComposerPrimitive,
  ErrorPrimitive,
  MessagePrimitive,
  SuggestionPrimitive,
  Suggestions,
  ThreadPrimitive,
  AuiConfig,
  useAuiState,
  useLocalRuntime,
} from '@assistant-ui/react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  CopyIcon,
  FileTextIcon,
  RefreshCwIcon,
  SquareIcon,
  SquarePenIcon,
  XIcon,
} from 'lucide-react';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {createSolisAdapter} from './solisAdapter';
import {MarkdownText} from './MarkdownText';
import {TooltipIconButton} from './TooltipIconButton';
import styles from './thread.module.css';

export default function ChatPanel({onClose}) {
  const {siteConfig} = useDocusaurusContext();
  const {baseUrl, clientCode} = siteConfig.customFields.solis;
  // 세션 토큰과 키 쌍을 재사용하도록 어댑터(클라이언트)는 패널이 살아 있는 동안 하나만 만든다.
  const adapter = useMemo(() => createSolisAdapter(baseUrl, clientCode), [baseUrl, clientCode]);
  // 새 대화를 누르면 key를 바꿔 런타임을 새로 만든다(진행 중인 답변도 함께 취소된다).
  const [threadKey, setThreadKey] = useState(0);

  return (
    <aside
      className={clsx(styles.tokens, styles.panel)}
      aria-label={translate({id: 'askAi.panel.label', message: 'Docs AI 어시스턴트'})}>
      <header className={styles.header}>
        <h2 className={styles.title}>Docs AI Assistant</h2>
        <div className={styles.headerActions}>
          <TooltipIconButton
            tooltip={translate({id: 'askAi.newChat', message: '새 대화'})}
            onClick={() => setThreadKey((key) => key + 1)}>
            <SquarePenIcon />
          </TooltipIconButton>
          <TooltipIconButton tooltip={translate({id: 'askAi.close', message: '닫기'})} onClick={onClose}>
            <XIcon />
          </TooltipIconButton>
        </div>
      </header>
      <Thread key={threadKey} adapter={adapter} />
    </aside>
  );
}

// 대화를 시작하기 전 첫 화면에 보여 줄 제안 질문. 누르면 바로 질문을 보낸다.
const suggestionConfig = () =>
  AuiConfig({
    suggestions: Suggestions([
      translate({id: 'askAi.suggestion.addUser', message: 'BioStar X에서 사용자를 등록하는 방법은?'}),
      translate({id: 'askAi.suggestion.accessGroup', message: '출입 그룹과 출입 레벨의 차이는 무엇인가요?'}),
      translate({id: 'askAi.suggestion.requirements', message: 'BioStar X 서버 설치 사양을 알려 주세요.'}),
      translate({id: 'askAi.suggestion.deviceIp', message: '장치의 IP 주소를 변경하는 방법은?'}),
    ]),
  });

function Thread({adapter}) {
  const runtime = useLocalRuntime(adapter);
  return (
    <AssistantRuntimeProvider runtime={runtime} config={suggestionConfig()}>
      <ThreadRoot />
    </AssistantRuntimeProvider>
  );
}

// ---------- 아래는 assistant-ui 기본 디자인(registry: thread)을 옮긴 것이다 ----------

function ThreadRoot() {
  const isEmpty = useAuiState((s) => s.thread.messages.length === 0);

  return (
    <ThreadPrimitive.Root className={styles.threadRoot}>
      <ThreadPrimitive.Viewport turnAnchor="top" className={styles.viewport}>
        <div className={clsx(styles.container, isEmpty && styles.containerEmpty)}>
          <AuiIf condition={(s) => s.thread.messages.length === 0}>
            <ThreadWelcome />
          </AuiIf>

          <div className={styles.messageGroup}>
            <ThreadPrimitive.Messages>{() => <ThreadMessage />}</ThreadPrimitive.Messages>
          </div>

          <ThreadPrimitive.ViewportFooter className={clsx(styles.viewportFooter, !isEmpty && styles.viewportFooterDocked)}>
            <ThreadScrollToBottom />
            <Composer />
            <AuiIf condition={(s) => s.thread.messages.length === 0 && s.composer.isEmpty}>
              <ThreadSuggestions />
            </AuiIf>
          </ThreadPrimitive.ViewportFooter>
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
}

function ThreadMessage() {
  const role = useAuiState((s) => s.message.role);
  if (role === 'user') return <UserMessage />;
  return <AssistantMessage />;
}

function ThreadScrollToBottom() {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <TooltipIconButton
        tooltip={translate({id: 'askAi.scrollToBottom', message: '맨 아래로 이동'})}
        className={styles.scrollToBottom}>
        <ArrowDownIcon />
      </TooltipIconButton>
    </ThreadPrimitive.ScrollToBottom>
  );
}

function ThreadWelcome() {
  return (
    <div className={styles.welcome}>
      <p className={styles.welcomeMessage}>
        <Translate id="askAi.welcome">무엇을 도와드릴까요?</Translate>
      </p>
      <p className={styles.welcomeHint}>
        <Translate id="askAi.welcome.hint">
          최근 질문 5개를 참고해 답변합니다. 다른 주제를 물어볼 때는 새 대화를 시작하세요.
        </Translate>
      </p>
    </div>
  );
}

function ThreadSuggestions() {
  return (
    <div className={styles.suggestions}>
      <ThreadPrimitive.Suggestions>
        {() => (
          <SuggestionPrimitive.Trigger send className={styles.suggestion}>
            <span aria-hidden className={styles.suggestionMarker}>
              {'>'}
            </span>
            <SuggestionPrimitive.Title className={styles.suggestionTitle} />
          </SuggestionPrimitive.Trigger>
        )}
      </ThreadPrimitive.Suggestions>
    </div>
  );
}

function Composer() {
  return (
    <ComposerPrimitive.Root>
      <div className={styles.composerShell}>
        <ComposerPrimitive.Input
          placeholder={translate({id: 'askAi.placeholder', message: '질문을 입력하세요...'})}
          className={styles.composerInput}
          rows={1}
          autoFocus
          enterKeyHint="send"
          aria-label={translate({id: 'askAi.input', message: '질문 입력'})}
        />
        <div className={styles.composerAction}>
          <AuiIf condition={(s) => !s.composer.canCancel}>
            <ComposerPrimitive.Send asChild>
              <TooltipIconButton
                tooltip={translate({id: 'askAi.send', message: '보내기'})}
                className={styles.sendButton}>
                <ArrowUpIcon />
              </TooltipIconButton>
            </ComposerPrimitive.Send>
          </AuiIf>
          <AuiIf condition={(s) => s.composer.canCancel}>
            <ComposerPrimitive.Cancel asChild>
              <button
                type="button"
                className={clsx(styles.iconButton, styles.sendButton)}
                aria-label={translate({id: 'askAi.stop', message: '답변 중지'})}>
                <SquareIcon className={styles.stopIcon} />
              </button>
            </ComposerPrimitive.Cancel>
          </AuiIf>
        </div>
      </div>
    </ComposerPrimitive.Root>
  );
}

function MessageError() {
  return (
    <MessagePrimitive.Error>
      <ErrorPrimitive.Root className={styles.error}>
        <ErrorPrimitive.Message />
      </ErrorPrimitive.Root>
    </MessagePrimitive.Error>
  );
}

function AssistantMessage() {
  return (
    <MessagePrimitive.Root className={styles.animateIn} data-role="assistant">
      <div className={styles.assistantContent}>
        <MessagePrimitive.Parts components={{Text: MarkdownText, Source: Source, Empty: Indicator}} />
        <MessageError />
      </div>
      <div className={styles.assistantFooter}>
        <AssistantActionBar />
      </div>
    </MessagePrimitive.Root>
  );
}

// Empty는 마지막 파트가 출처일 때도 렌더링되므로, 답변을 만드는 동안에만 표시한다.
function Indicator() {
  const running = useAuiState((s) => s.message.status?.type === 'running');
  if (!running) return null;
  return (
    <span
      className={styles.indicator}
      aria-label={translate({id: 'askAi.thinking', message: '답변을 준비하는 중'})}>
      ●
    </span>
  );
}

// registry: sources (outline 배지). 출처 링크도 새 탭에서 연다.
function Source({url, title}) {
  return (
    <a className={styles.source} href={url} target="_blank" rel="noopener noreferrer">
      <FileTextIcon />
      <span className={styles.sourceTitle}>{title}</span>
    </a>
  );
}

function AssistantActionBar() {
  return (
    <ActionBarPrimitive.Root hideWhenRunning autohide="not-last" className={styles.actionBar}>
      <ActionBarPrimitive.Copy asChild>
        <TooltipIconButton tooltip={translate({id: 'askAi.copy', message: '복사'})}>
          <AuiIf condition={(s) => s.message.isCopied}>
            <CheckIcon />
          </AuiIf>
          <AuiIf condition={(s) => !s.message.isCopied}>
            <CopyIcon />
          </AuiIf>
        </TooltipIconButton>
      </ActionBarPrimitive.Copy>
      <ActionBarPrimitive.Reload asChild>
        <TooltipIconButton tooltip={translate({id: 'askAi.reload', message: '다시 생성'})}>
          <RefreshCwIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Reload>
    </ActionBarPrimitive.Root>
  );
}

function UserMessage() {
  return (
    <MessagePrimitive.Root className={clsx(styles.animateIn, styles.userMessage)} data-role="user">
      <MessagePrimitive.Parts />
    </MessagePrimitive.Root>
  );
}
