# OpenCode MCP-Client AI Assistant Specification

## 1. Project Overview

**Project Name:** Jeanie - Personal AI Assistant  
**Assistant Name:** Jeanie
**Core Functionality:** A fully automated, voice-controlled personal AI assistant that learns user needs, researches solutions proactively, executes tasks across multiple domains (3D modeling, game dev, web development), and continuously improves itself.  
**Target Users:** Single-user personal assistant for advanced technical/creative workflows

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                   KDE Plasma Glassmorphism UI                       │
│                    (Tauri + React + CSS)                             │
├─────────────────────────────────────────────────────────────────────┤
│                      OpenCode CLI Integration                        │
│              (Bidirectional communication via IPC)                   │
├─────────────────────────────────────────────────────────────────────┤
│                      Tauri Desktop Application                       │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  Wake Word   │  │  Voice I/O   │  │  Vision I/O  │              │
│  │  Detection   │  │  (STT/TTS)   │  │  (Camera)    │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    Core AI Brain (Ollama)                     │  │
│  │   - Conversation Manager                                       │  │
│  │   - Task Planning & Execution                                  │  │
│  │   - Context & Memory System                                    │  │
│  │   - Proactive Learning Engine                                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  Web Search  │  │  Task        │  │  Plugin     │              │
│  │  Engine      │  │  Executor    │  │  System     │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    Ollama Local Models                        │  │
│  │   - llm: conversation                                         │  │
│  │   - whisper: speech-to-text                                   │  │
│  │   - vision: image understanding                                │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Functional Requirements

### 3.0 OpenCode CLI Integration
- **Bidirectional IPC:** MCP-client communicates with OpenCode CLI
- **Task Delegation:** Complex coding tasks sent to OpenCode for execution
- **Shared Context:** OpenCode and assistant share conversation history
- **Unified Interface:** Assistant can invoke OpenCode commands directly
- **File Operations:** OpenCode handles file/folder operations requested by assistant

### 3.1 Wake Word System
- **Customizable wake word:** User can set any word/phrase (default: "OpenCode")
- **Detection:** Use Vosk or Whisper for local wake word detection
- **Activation:** Configurable sound/visual feedback on wake
- **Always listening:** Background process when app is running

### 3.2 Voice Input/Output
- **Speech-to-Text:** Local Whisper model via Ollama
- **Text-to-Speech:** Coqui TTS or Piper for natural voice output
- **Voice selection:** Multiple voice options
- **Response mode:** Voice-only by default, text available

### 3.3 Vision System
- **Camera access:** On-demand activation via voice command
- **Emotion detection:** Analyze facial expressions for mood
- **Attention awareness:** Detect when user is present
- **Privacy:** Visual indicator when camera active

### 3.4 Web Search & Research
- **Search engines:** Bing, Google, DuckDuckGo, Yahoo, Bing, Ask, AOL, Yandex, Baidu, Naver
- **Web scraping:** Extract relevant content from search results
- **Auto-research:** Proactive discovery during idle/sleep time
- **Learning:** Remember solutions for future reference

### 3.5 Task Execution
- **3D Modeling:** Research workflows for Blender, generate prompts for image-to-3D models
- **Game Development:** UE5, Unity research and automation
- **Web Development:** Code generation, framework recommendations
- **Image Generation:** Integrate Stable Diffusion, ComfyUI workflows
- **Automation:** Execute shell commands, file operations

### 3.6 Memory & Learning System
- **User preferences:** Remember settings, habits, workflows
- **Context retention:** Long conversation memory
- **Proactive suggestions:** Anticipate needs based on patterns
- **Continuous improvement:** Self-refine during sleep mode

### 3.7 Plugin/Feature System
- **Hot-reload:** Add new features without restart
- **API-first:** All features accessible via plugin interface
- **Sandbox:** Isolated execution for safety

### 3.8 Sleep Mode Research
- **Scheduled tasks:** Run during specified hoursdefault:  (11PM - 6AM)
- **Feature discovery:** Search for new AI tools, workflows
- **Self-improvement:** Update capabilities based on findings

---

## 4. Technical Stack

| Component | Technology |
|-----------|------------|
| Desktop Framework | Tauri 2.x |
| Frontend | React + TypeScript + CSS (Glassmorphism) |
| Frontend Styling | Styled-components + KDE Plasma theme |
| Backend Core | Rust |
| AI Runtime | Ollama (local) |
| OpenCode Integration | Tauri command IPC + subprocess |
| Speech STT | Whisper (Ollama) |
| Speech TTS | Piper or Coqui TTS |
| Wake Word | Vosk |
| Vision | OpenCV + emotion recognition models |
| Database | SQLite (rusqlite) |
| Web Scraping | reqwest + scraper |
| Search | Custom integration with search APIs |

---

## 5. Module Design

### 5.1 `wake_word` module
```rust
pub trait WakeWordDetector {
    fn start(&mut self) -> Result<()>;
    fn stop(&mut self) -> Result<()>;
    fn set_wake_word(&mut self, word: &str) -> Result<()>;
    fn on_wake(&mut self, callback: Box<dyn Fn() + Send>);
}
```

### 5.2 `voice` module
```rust
pub trait SpeechEngine {
    fn speech_to_text(&self, audio: &[u8]) -> Result<String>;
    fn text_to_speech(&self, text: &str) -> Result<Vec<u8>>;
    fn set_voice(&mut self, voice_id: &str);
}
```

### 5.3 `vision` module
```rust
pub trait VisionSystem {
    fn start_camera(&mut self) -> Result<()>;
    fn stop_camera(&mut self) -> Result<()>;
    fn detect_emotion(&self) -> Result<Emotion>;
    fn is_user_present(&self) -> bool;
}
```

### 5.4 `search` module
```rust
pub trait SearchEngine {
    fn search(&self, query: &str, engines: &[SearchEngineType]) -> Result<Vec<SearchResult>>;
    fn scrape(&self, url: &str) -> Result<String>;
}
```

### 5.5 `task_executor` module
```rust
pub trait TaskExecutor {
    fn execute(&self, task: Task) -> Result<TaskResult>;
    fn register_plugin(&mut self, plugin: Box<dyn TaskPlugin>);
}
```

### 5.6 `brain` module
```rust
pub trait AIBrain {
    fn chat(&self, input: &str, context: Context) -> Result<Response>;
    fn plan_task(&self, goal: &str) -> Result<TaskPlan>;
    fn learn(&mut self, experience: &Experience);
}
```

---

## 6. Configuration

```json
{
  "assistant": {
    "name": "OpenCode",
    "wake_word": "hey assistant",
    "voice_enabled": true,
    "voice_id": "default",
    "sleep_mode": {
      "enabled": true,
      "start": "23:00",
      "end": "06:00"
    }
  },
  "ollama": {
    "host": "http://localhost:11434",
    "models": {
      "chat": "llama3.2",
      "vision": "llava",
      "whisper": "whisper"
    }
  },
  "search": {
    "engines": ["google", "bing", "duckduckgo"],
    "max_results": 10
  },
  "plugins": {
    "directory": "./plugins"
  }
}
```

---

## 7. GUI Design

### 7.1 KDE Plasma Glassmorphism Style

**Visual Characteristics:**
- **Blur effect:** 20-30px backdrop blur on all panels
- **Transparency:** 70-80% opacity with subtle gradients
- **Glass borders:** 1px subtle white/light border with 20% opacity
- **Shadows:** Soft drop shadows (0 8px 32px rgba(0,0,0,0.3))
- **Corners:** Rounded corners (12-18px radius)
- **Colors:** Dark theme with accent colors (KDE blue #3DAEE9)
- **Animations:** Smooth 200-300ms transitions

**Window Design:**
- Frameless window with custom title bar
- Custom window controls (minimize, maximize, close)
- Draggable title bar area
- Resizable from all edges

**Components:**
- Glass buttons with hover glow effect
- Frosted glass panels and cards
- Translucent input fields
- Glass modals and dialogs
- Animated waveform visualizer
- Subtle particle effects (optional)

### 7.2 Main Window
- Minimal chrome, always-on-top option
- Waveform visualizer for voice input
- Status indicators (listening, thinking, speaking)
- Quick settings panel

### Settings Panel
- Wake word configuration
- Voice selection
- Sleep mode schedule
- Search engine preferences
- Plugin management
- API/Model configuration

### System Tray
- Background operation
- Quick toggle for voice mode
- Status display

---

## 8. Build Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [ ] Tauri app setup with React frontend
- [ ] Basic wake word detection
- [ ] Voice input/output with Ollama
- [ ] Simple chat interface

### Phase 2: Core Intelligence (Weeks 3-4)
- [ ] Ollama integration for reasoning
- [ ] Web search capability
- [ ] Task planning system
- [ ] Memory/context system

### Phase 3: Advanced Features (Weeks 5-8)
- [ ] Vision/emotion detection
- [ ] Plugin system
- [ ] Task execution automation
- [ ] Sleep mode research

### Phase 4: Polish (Weeks 9-12)
- [ ] UI/UX refinement
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Documentation

---

## 9. Acceptance Criteria

1. **Wake Word:** Assistant responds to custom wake word within 1 second
2. **Voice I/O:** Conversational voice interaction works smoothly  
3. **Search:** Can search top 10 search engines and extract relevant info
4. **Task Execution:** Can plan and execute multi-step tasks
5. **Vision:** Can detect user emotions when camera activated
6. **Sleep Mode:** Performs research during configured sleep hours
7. **Extensibility:** New features can be added via plugin system
8. **Privacy:** All processing (except search) runs locally
9. **System Tray:** Runs in background with quick access menu
10. **3D/Game Dev:** Can research and suggest 3D modeling workflows

---

## 10. Additional Features

### 10.1 3D Modeling & Game Dev Integration
- AI 3D Generators: Research and integrate with 3DAI Studio, Meshy, Rodin
- Workflow Automation: Auto-generate base meshes, optimize for game engines
- Export: Support FBX/OBJ export to Blender, Unity, Unreal Engine

### 10.2 Image Generation Integration
- Stable Diffusion: Local SD via API or ComfyUI
 Automatic1111,- Web UI: ComfyUI integration

### 10.3 System Tray
- Background operation: Minimize to system tray
- Quick actions: Right-click menu for common commands
- Auto-start: Option to start with Windows

### 10.4 Proactive Intelligence
- Pattern learning: Remember user habits and preferences
- Anticipate needs: Suggest actions before asked
- Context awareness: Track active projects and offer relevant help
