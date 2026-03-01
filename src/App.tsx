import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import TitleBar from './components/TitleBar';
import ChatPanel from './components/ChatPanel';
import SettingsPanel from './components/SettingsPanel';
import StatusBar from './components/StatusBar';
import WaveformVisualizer from './components/WaveformVisualizer';
import Avatar from './components/Avatar';
import './styles/glass.css';

interface AppState {
  wake_word: string;
  voice_enabled: boolean;
  is_listening: boolean;
  sleep_mode_enabled: boolean;
  sleep_mode_start: string;
  sleep_mode_end: string;
  ollama_host: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    loadAppState();
  }, []);

  const loadAppState = async () => {
    try {
      const state = await invoke<AppState>('get_app_state');
      setAppState(state);
    } catch (error) {
      console.error('Failed to load app state:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    try {
      const response = await invoke<string>('ollama_chat', {
        message: input,
        context: messages.map(m => `${m.role}: ${m.content}`),
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Error: ${error}`,
        timestamp: Date.now(),
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const handleSearch = async (query: string) => {
    setIsProcessing(true);
    try {
      const results = await invoke<any[]>('search_web', { query });
      const formattedResults = results.map(r => 
        `• ${r.title}\n  ${r.url}\n`
      ).join('\n');
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Search results for "${query}":\n\n${formattedResults}`,
        timestamp: Date.now(),
      }]);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const updateConfig = async (key: string, value: any) => {
    try {
      if (key === 'wake_word') {
        await invoke('set_wake_word', { word: value });
      } else if (key === 'voice_enabled') {
        await invoke('set_voice_enabled', { enabled: value });
      } else if (key === 'sleep_mode') {
        await invoke('set_sleep_mode', { 
          enabled: value.enabled, 
          start: value.start, 
          end: value.end 
        });
      }
      await loadAppState();
    } catch (error) {
      console.error('Config update error:', error);
    }
  };

  return (
    <div className="glass-app">
      <TitleBar 
        title="Jeanie Assistant" 
        onSettingsClick={() => setIsSettingsOpen(!isSettingsOpen)}
      />
      
      <div className="glass-main">
        <div className="glass-split">
          <Avatar isActive={isListening || appState?.voice_enabled === true} />
        </div>
        <div className="glass-content">
          <ChatPanel 
            messages={messages}
            input={input}
            onInputChange={setInput}
            onKeyPress={handleKeyPress}
            onSend={handleSendMessage}
            isProcessing={isProcessing}
          />
          
          {isListening && (
            <WaveformVisualizer 
              isActive={isListening} 
            />
          )}
        </div>

        <div className="glass-controls">
          <button 
            className={`glass-btn voice-btn ${isListening ? 'active' : ''}`}
            onClick={toggleListening}
            title={isListening ? 'Stop listening' : 'Start listening'}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>

          <button 
            className="glass-btn"
            onClick={() => handleSearch(input)}
            disabled={isProcessing || !input.trim()}
            title="Search web"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>

          <button 
            className="glass-btn"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            title="Settings"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
            </svg>
          </button>
        </div>
      </div>

      {isSettingsOpen && appState && (
        <SettingsPanel 
          appState={appState}
          onClose={() => setIsSettingsOpen(false)}
          onUpdate={updateConfig}
        />
      )}

      <StatusBar 
        isListening={isListening}
        isProcessing={isProcessing}
        wakeWord={appState?.wake_word || 'OpenCode'}
      />
    </div>
  );
}

export default App;
