interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatPanelProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSend: () => void;
  isProcessing: boolean;
}

function ChatPanel({ 
  messages, 
  input, 
  onInputChange, 
  onKeyPress, 
  onSend,
  isProcessing 
}: ChatPanelProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chat-panel">
      <div className="chat-messages">
        {messages.length === 0 && (
            <div style={{ 
            textAlign: 'center', 
            color: 'var(--text-muted)',
            padding: '40px',
            fontSize: '14px'
          }}>
            <p>👋 Say "Hey Jeanie" to get started</p>
            <p style={{ marginTop: '8px', fontSize: '12px' }}>
              I can help you with coding, research, and more
            </p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`chat-message ${message.role}`}
          >
            <div className="chat-message-content">
              {message.content}
            </div>
            <div className="chat-message-time">
              {formatTime(message.timestamp)}
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="chat-message assistant">
            <div className="chat-message-content">
              <span style={{ display: 'flex', gap: '4px' }}>
                <span style={{ animation: 'blink 0.5s infinite' }}>●</span>
                <span style={{ animation: 'blink 0.5s infinite', animationDelay: '0.2s' }}>●</span>
                <span style={{ animation: 'blink 0.5s infinite', animationDelay: '0.4s' }}>●</span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message or ask me anything..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          disabled={isProcessing}
        />
        <button 
          className="glass-btn"
          onClick={onSend}
          disabled={isProcessing || !input.trim()}
          title="Send message"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;
