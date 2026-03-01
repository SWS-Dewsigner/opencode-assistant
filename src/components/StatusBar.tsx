interface StatusBarProps {
  isListening: boolean;
  isProcessing: boolean;
  wakeWord: string;
}

function StatusBar({ isListening, isProcessing, wakeWord }: StatusBarProps) {
  return (
    <div className="glass-statusbar">
      <div className="glass-statusbar-left">
        <div className="status-indicator">
          <span 
            className={`status-dot ${isListening ? 'listening' : isProcessing ? 'processing' : ''}`} 
          />
          <span>
            {isProcessing ? 'Processing...' : isListening ? 'Listening' : 'Ready'}
          </span>
        </div>
        
        <div className="status-indicator">
          <span>Wake: "{wakeWord}"</span>
        </div>
      </div>

      <div className="glass-statusbar-right">
        <div className="status-indicator">
          <span>Jeanie Assistant v0.1.0</span>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
