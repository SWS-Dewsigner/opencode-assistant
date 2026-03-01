import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';

interface AppState {
  wake_word: string;
  voice_enabled: boolean;
  is_listening: boolean;
  sleep_mode_enabled: boolean;
  sleep_mode_start: string;
  sleep_mode_end: string;
  ollama_host: string;
}

interface SettingsPanelProps {
  appState: AppState;
  onClose: () => void;
  onUpdate: (key: string, value: any) => void;
}

function SettingsPanel({ appState, onClose, onUpdate }: SettingsPanelProps) {
  const [wakeWord, setWakeWord] = useState(appState.wake_word);
  const [voiceEnabled, setVoiceEnabled] = useState(appState.voice_enabled);
  const [sleepEnabled, setSleepEnabled] = useState(appState.sleep_mode_enabled);
  const [sleepStart, setSleepStart] = useState(appState.sleep_mode_start);
  const [sleepEnd, setSleepEnd] = useState(appState.sleep_mode_end);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleSaveWakeWord = () => {
    onUpdate('wake_word', wakeWord);
  };

  const handleToggleVoice = () => {
    const newValue = !voiceEnabled;
    setVoiceEnabled(newValue);
    onUpdate('voice_enabled', newValue);
  };

  const handleToggleSleep = () => {
    const newValue = !sleepEnabled;
    setSleepEnabled(newValue);
    onUpdate('sleep_mode', { 
      enabled: newValue, 
      start: sleepStart, 
      end: sleepEnd 
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsUploading(true);
    setUploadError(null);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const imageData = Array.from(new Uint8Array(arrayBuffer));
      
      const imagePath = await invoke<string>('upload_avatar_image', { imageData });
      setUploadedImage(imagePath);
      localStorage.setItem('jeanie_avatar_path', imagePath);
    } catch (err) {
      setUploadError(String(err));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <h2 className="settings-title">Settings</h2>
          <button className="settings-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 41 17.12 13.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3 className="settings-section-title">Voice Assistant</h3>
            
            <div className="settings-item">
              <div>
                <div className="settings-label">Wake Word</div>
                <div className="settings-description">Word to activate the assistant</div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  className="settings-input"
                  value={wakeWord}
                  onChange={(e) => setWakeWord(e.target.value)}
                  onBlur={handleSaveWakeWord}
                />
              </div>
            </div>

            <div className="settings-item">
              <div>
                <div className="settings-label">Voice Response</div>
                <div className="settings-description">Speak responses aloud</div>
              </div>
              <button 
                className={`settings-toggle ${voiceEnabled ? 'active' : ''}`}
                onClick={handleToggleVoice}
              >
                <div className="settings-toggle-knob" />
              </button>
            </div>
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">Sleep Mode</h3>
            
            <div className="settings-item">
              <div>
                <div className="settings-label">Enable Sleep Mode</div>
                <div className="settings-description">Research new features during sleep</div>
              </div>
              <button 
                className={`settings-toggle ${sleepEnabled ? 'active' : ''}`}
                onClick={handleToggleSleep}
              >
                <div className="settings-toggle-knob" />
              </button>
            </div>

            {sleepEnabled && (
              <>
                <div className="settings-item">
                  <div>
                    <div className="settings-label">Start Time</div>
                  </div>
                  <input
                    type="time"
                    className="settings-input"
                    value={sleepStart}
                    onChange={(e) => {
                      setSleepStart(e.target.value);
                      onUpdate('sleep_mode', { 
                        enabled: sleepEnabled, 
                        start: e.target.value, 
                        end: sleepEnd 
                      });
                    }}
                  />
                </div>

                <div className="settings-item">
                  <div>
                    <div className="settings-label">End Time</div>
                  </div>
                  <input
                    type="time"
                    className="settings-input"
                    value={sleepEnd}
                    onChange={(e) => {
                      setSleepEnd(e.target.value);
                      onUpdate('sleep_mode', { 
                        enabled: sleepEnabled, 
                        start: sleepStart, 
                        end: e.target.value 
                      });
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">AI Configuration</h3>
            
            <div className="settings-item">
              <div>
                <div className="settings-label">Ollama Host</div>
                <div className="settings-description">Local AI server address</div>
              </div>
              <input
                type="text"
                className="settings-input"
                value={appState.ollama_host}
                readOnly
              />
            </div>

            <div className="settings-item">
              <div>
                <div className="settings-label">Model</div>
                <div className="settings-description">Currently using llama3.2</div>
              </div>
              <input
                type="text"
                className="settings-input"
                value="llama3.2"
                readOnly
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">OpenCode Integration</h3>
            
            <div className="settings-item">
              <div>
                <div className="settings-label">CLI Path</div>
                <div className="settings-description">Path to opencode executable</div>
              </div>
              <input
                type="text"
                className="settings-input"
                value="opencode (system PATH)"
                readOnly
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">Avatar Image</h3>
            <div className="settings-description" style={{ marginBottom: '16px' }}>
              Upload your own photo for Jeanie's avatar
            </div>
            
            <div className="settings-item">
              <div>
                <div className="settings-label">Upload Image</div>
                <div className="settings-description">Choose a photo (PNG, JPG)</div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ color: '#aaa', fontSize: '12px' }}
                disabled={isUploading}
              />
            </div>

            {uploadError && (
              <div style={{ color: '#ff6b6b', marginTop: '8px', fontSize: '12px' }}>
                Error: {uploadError}
              </div>
            )}

            {uploadedImage && (
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <img 
                  src={`file://${uploadedImage}`} 
                  alt="Uploaded Avatar"
                  style={{ 
                    maxWidth: '200px', 
                    borderRadius: '8px',
                    border: '2px solid rgba(61, 174, 233, 0.5)'
                  }} 
                />
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#4ade80' }}>
                  Image uploaded! Restart app to see new avatar.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
