import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import './Avatar.css';

interface AvatarProps {
  isActive: boolean;
}

interface JeanieAppearance {
  name: string;
  age: number;
  description: string;
  appearance: {
    face_shape: string;
    skin_tone: string;
    hair_color: string;
    hair_style: string;
    eye_color: string;
    eye_shape: string;
    nose_shape: string;
    lip_shape: string;
    makeup: string[];
    style: string;
    clothing: string;
  };
}

function Avatar({ isActive }: AvatarProps) {
  const [appearance, setAppearance] = useState<JeanieAppearance | null>(null);

  useEffect(() => {
    loadAppearance();
  }, []);

  const loadAppearance = async () => {
    try {
      const data = await invoke<JeanieAppearance>('get_avatar_appearance');
      setAppearance(data);
    } catch (error) {
      console.error('Failed to load avatar:', error);
    }
  };

  if (!isActive) {
    return (
      <div className="avatar-container avatar-hidden">
        <div className="avatar-placeholder">
          <span>Click to activate Jeanie</span>
        </div>
      </div>
    );
  }

  return (
    <div className="avatar-container holographic">
      <div className="avatar-glow"></div>
      
      <div className="avatar-figure expression-neutral">
        <div className="avatar-head">
          <div className="avatar-hair-back"></div>
          <div className="avatar-face">
            <div className="avatar-eyes">
              <div className="avatar-eye left">
                <div className="avatar-iris">
                  <div className="avatar-pupil"></div>
                  <div className="avatar-reflection"></div>
                </div>
                <div className="avatar-eyelid"></div>
              </div>
              <div className="avatar-eye right">
                <div className="avatar-iris">
                  <div className="avatar-pupil"></div>
                  <div className="avatar-reflection"></div>
                </div>
                <div className="avatar-eyelid"></div>
              </div>
            </div>
            <div className="avatar-eyebrows">
              <div className="avatar-eyebrow left"></div>
              <div className="avatar-eyebrow right"></div>
            </div>
            <div className="avatar-nose"></div>
            <div className="avatar-mouth">
              <div className="avatar-lips">
                <div className="avatar-upper-lip"></div>
                <div className="avatar-lower-lip"></div>
              </div>
            </div>
          </div>
          <div className="avatar-hair-front">
            <div className="avatar-bangs"></div>
            <div className="avatar-side-hair left"></div>
            <div className="avatar-side-hair right"></div>
          </div>
        </div>
        <div className="avatar-neck"></div>
        <div className="avatar-body">
          <div className="avatar-shoulders"></div>
        </div>
      </div>
      
      <div className="holographic-effects">
        <div className="holo-scan-line"></div>
        <div className="holo-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="holo-particle" style={{ animationDelay: `${i * 0.5}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className="avatar-info">
        <div className="avatar-name">{appearance?.name || 'Jeanie'}</div>
        <div className="avatar-status">Ready</div>
      </div>
    </div>
  );
}

export default Avatar;
