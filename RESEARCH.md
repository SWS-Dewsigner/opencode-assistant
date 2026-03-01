# Jeanie Assistant - Research Findings

## Research Completed: 3:08 AM - 3:12 AM EST

This document contains features and capabilities discovered through web research for potential integration into Jeanie Assistant.

---

## 1. VOICE ASSISTANT FRAMEWORKS

### Rust-based
- **Avi-core** - High-performance modular voice assistant framework in Rust
  - Custom DSL, contextual awareness, multi-language support
  - URL: https://github.com/Apoll011/Avi-core
  
- **OpenCrust** - Personal AI assistant platform rewritten in Rust from OpenClaw
  - MIT License
  - URL: http://opencrust.org/

- **ZeroClaw** - Fast, small, autonomous AI assistant infrastructure
  - 18.6k GitHub stars
  - Deploy anywhere, swap anything
  - URL: https://github.com/zeroclaw-labs/zeroclaw

### Python-based
- **Pipecat** - Open source framework for voice and multimodal conversational AI
  - Real-time conversations, multimodal (see/hear/speak)
  - URL: https://github.com/pipecat-ai/pipecat
  
- **Stimm** - Open source voice agent platform
  - Ultra-low latency, real-time conversations over WebRTC
  - Python (79.7%), TypeScript (18.1%)
  - URL: https://github.com/stimm-ai/stimm
  
- **TEN Framework** - Transformative Extensions Network
  - Real-time, multimodal, high-performance, edge-cloud
  - URL: https://theten.ai/

---

## 2. SPEECH TO TEXT (STT)

### Top Open Source Options 2026
- **Moonshine** - Best for edge and mobile devices
- **Parakeet TDT** - Ultra low-latency streaming
- **Whisper Large V3 Turbo / Distil-Whisper** - Faster throughput
- **Whisper Large V3** - Maximum accuracy
- **Voxtral Mini 4B** - Mistral's realtime browser ASR
  - <500ms latency, Apache 2.0 license, Feb 2026
  - URL: https://serenitiesai.com/articles/voxtral-mini-4b-browser-speech-2026
- **Voxtral AI** - Advanced Speech-to-Text
  - 95%+ accuracy, 100+ languages, 30ms latency
  - URL: https://voxtralai.org/
- **Kroko.AI** - Low-footprint models (70MB)
  - 10x real-time on CPU, runs on any device
  - URL: https://kroko.ai/
- **Mozilla DeepSpeech** - Archived but still functional
  - Offline, on-device, Raspberry Pi compatible
  - URL: https://github.com/mozilla/DeepSpeech

---

## 3. TEXT TO SPEECH (TTS)

### Open Source TTS Engines
- **Coqui TTS / XTTS-v2** - Voice cloning with 6-second audio
  - 17 languages, cross-language voice cloning
  - Emotion and style transfer
  - <200ms latency streaming
  - URL: https://github.com/coqui-ai
  - HuggingFace: https://huggingface.co/coqui/XTTS-v2

- **Piper** - Fast, local neural text-to-speech
  - ONNX-based, multiple voices
  - URL: https://github.com/rhasspy/piper

- **Kokoro** - 82M parameters, 96x real-time
  - 50+ voices, voice cloning with Qwen3
  - URL: https://ocdevel.com/blog/20250714-open-source-tts

- **Smallest.ai** - Lightning TTS
  - World's fastest TTS
  - URL: https://smallest.ai/

- **Fish Audio** - TTS with multiple models
  - URL: https://fish.audio/

---

## 4. VOICE CLONING

### Open Source Voice Cloning
- **GPT-SoVITS** - Few-shot voice cloning
  - Train TTS model with just 1 minute of voice data
  - Zero-shot/few-shot TTS, cross-lingual inference
  - MIT License, 55k GitHub stars
  - URL: https://github.com/RVC-Boss/GPT-SoVITS

- **XTTS-v2** - Coqui's voice cloning
  - 6-second audio clip for cloning
  - Multi-lingual, emotion transfer

---

## 5. AI AGENT FRAMEWORKS

### Multi-Agent Orchestration
- **LangGraph** - Low-level orchestration for agents
  - Used by Replit, Uber, LinkedIn, GitLab
  - Long-term memory, human-in-the-loop
  - URL: https://langgraph.agentdevhub.com/

- **AutoGen** - Microsoft's multi-agent framework
  - Conversational agents, tool use

- **CrewAI** - Multi-agent orchestration
  - Role-based agents, task delegation

- **Semantic Kernel** - Microsoft's agent SDK
  - Enterprise-grade, C#/Python/SQL

- **Smolagents** - Lightweight agents
  - Hugging Face ecosystem

---

## 6. COMPUTER VISION / EMOTION DETECTION

### Face Analysis
- **OpenFace 3.0** - Lightweight multitask facial behavior analysis
  - Facial landmarks, gaze tracking, action units
  - URL: https://arxiv.org/abs/2506.02891

- **LibreFace** - Open-source toolkit for deep facial expression analysis
  - IEEE paper, emotion recognition

- **UniFace** - All-in-One face analysis toolkit
  - Production-ready, ONNX Runtime
  - Face detection, recognition, landmarks, gaze, anti-spoofing
  - URL: https://yakhyo.github.io/blog/2025/11/uniface-all-in-one-face-analysis/

- **DeepFace** - Face recognition and attribute analysis
  - Python library, real-time emotion detection
  - URL: https://github.com/serengil/deepface

---

## 7. HOME AUTOMATION INTEGRATION

### Smart Home
- **OpenClaw** - Self-hosted AI agent for automation
  - 50+ integrations, smart home control
  - WhatsApp, Telegram, Discord, iMessage control
  - 10.2k GitHub stars
  - URL: https://openclaw.my/
  - GitHub: https://github.com/openclawaii/openclaw

- **Home Assistant** - Open source home automation
  - 3100+ integrations, local control
  - Open Voice Ecosystem with Wyoming protocol
  - URL: https://www.home-assistant.io/

---

## 8. AI 3D MODEL GENERATION

### Image to 3D
- **TripoSR** - Fast 3D reconstruction from single image
  - Collaboration: Tripo AI + Stability AI
  - Open source, fast generation
  - URL: https://triposrai.com/

- **Meshy AI** - Leading AI 3D model generator
  - Text-to-3D, image-to-3D, texturing
  - URL: https://www.meshy.ai/

- **Luma AI** - Dream Machine
  - Image to 3D, video generation

- **Hunyuan3D** - Tencent's open source
  - Large-scale 3D generation

- **Rodin AI** - Maximum quality for enterprise

---

## 9. IMAGE GENERATION

### Stable Diffusion / ComfyUI
- **ComfyUI** - Node-based generative AI GUI
  - 103k Git  - MostHub stars
 powerful modular diffusion engine
  - URL: https://github.com/Comfy-Org/ComfyUI
  - Website: https://comfy.org/

- **Stable Diffusion 3.5** - Latest SD models
  - Workflow tutorials available

- **Flux.1** - Text-to-image with workflows

---

## 10. VIDEO GENERATION

### Open Source Video
- **Wan 2.1** - Alibaba's open source video
  - Outperforms Sora on VBench (86.22% vs 84.28%)
  - Apache 2.0 license
  - URL: https://github.com/Wan-Video

- **Mochi 1** - Genmo's video generation
  - 3.6k GitHub stars
  - LoRA fine-tuning support

- **Open-Sora** - Democratized video production
  - 28.4k GitHub stars
  - Text-to-video, image-to-video
  - URL: https://open-sora.live/

- **Kandinsky 5.0** - Russian open source
  - 10-second video on consumer GPUs

- **LTX-Video** - Low-latency video generation

---

## 11. LOCAL LLM RUNNERS

### Alternatives to Ollama
- **Llama.cpp** - CPU/GPU inference
  - Most efficient, Vulkan support
  - GGUF format support

- **Llamafile** - Single executable LLMs
  - No installation, portable
  - URL: https://github.com/Mozilla-Ocho/llamafile

- **LM Studio** - GUI for local LLMs
  - Model management, chat interface

- **Jan.ai** - Privacy-first local AI
  - Alternative to Ollama

---

## 12. AUTOMATION TOOLS

### Scripting & Macros
- **AutoHotkey** - Windows automation scripting
  - Powerful, easy to learn
  - Hotkeys, macros, form fillers
  - URL: https://www.autohotkey.com/

- **Robot Framework** - Generic automation
  - Acceptance testing and RPA
  - URL: https://github.com/robotframework/robotframework

- **n8n** - Low-code workflow automation
  - AI integration, powerful extensibility
  - URL: https://n8n.io/

---

## 13. AI CODING TOOLS INTEGRATION

### Code Assistance
- **OpenCode** - Already integrated (user has this)
- **Cursor** - AI-first VS Code fork
  - $20/mo, Composer mode
- **Windsurf** - Codeium's AI editor
  - Cascade flow for multi-step coding
- **Claude Code** - Anthropic's CLI agent
- **Cline** - VS Code extension

---

## 14. EXTENSIBILITY

### Plugin Architectures
- **OpenClaw Skills** - 700+ skills library
  - 12 messaging platform integrations
  - URL: https://openclaw.my/

- **Model Context Protocol (MCP)** - AI plugins standard
  - AI models to connect to data sources
  - URL: https://modelcontextprotocol.info/

- **Dify** - LLM app development platform
  - Plugin system, workflow builder
  - URL: https://dify.ai/

---

## RECOMMENDATIONS FOR JEANIE

### High Priority Integrations
1. **Pipecat** or **Stimm** - For better voice pipeline
2. **Whisper** via Ollama - Already have, ensure it's working
3. **Coqui TTS** - For voice cloning capability
4. **OpenClaw** integration - For automation capabilities
5. **n8n** - For workflow automation

### Medium Priority
1. **ComfyUI** - For image generation workflows
2. **TripoSR** - For 3D model generation
3. **UniFace** - For emotion detection
4. **GPT-SoVITS** - For custom voice cloning

### Future Considerations
1. Video generation (Wan 2.1, Open-Sora)
2. Home Assistant integration
3. More smart home integrations

---

## 15. WAKE WORD DETECTION

### Open Source Options
- **Porcupine** - Picovoice's wake word engine
  - Highly accurate, lightweight, cross-platform
  - Custom wake word training
  - Raspberry Pi, mobile, desktop support
  - URL: https://github.com/Picovoice/porcupine
  - Website: https://picovoice.ai/

- **Snowboy** - Hotword detection
  - Good performance, offline training
  - Used by Mycroft

- **Mycroft Precise** - Neural network based
  - Custom wake words, open source

- **Rhasspy** - Home Assistant voice
  - Multiple wake word systems support
  - URL: https://rhasspy.readthedocs.io/en/latest/wake-word/

- **openWakeWord** - Home Assistant project
  - Open source, on-device
  - URL: https://github.com/rhasspy/openwakeword

---

## 16. MULTIMODAL VISION-LANGUAGE MODELS

### Open Source VLMs
- **LLaVA** - Large Language and Vision Assistant
  - Open source GPT-4V alternative
  - URL: https://llava-vl.github.io/

- **Idefics2** - 8B vision-language model
  - Arbitrary sequences of text and images
  - Hugging Face: https://huggingface.co/blog/idefics2

- **Llama 3.2 Vision** - Meta's multimodal
  - Lightweight, efficient

- **SmolVLM2** - Compact VLM
  - Runs on consumer hardware

---

## 17. MODEL CONTEXT PROTOCOL (MCP)

### MCP Servers & Ecosystem
- **Model Context Protocol** - Open standard
  - "USB-C for AI applications"
  - Standardized tool integration
  - URL: https://modelcontextprotocol.info/
  - Docs: https://modelcontextprotocol.io/

### Popular MCP Servers
- BrowserAct MCP Server
- GitHub MCP
- Puppeteer MCP
- Slack MCP
- Discord MCP
- PostgreSQL MCP
- SQLite MCP
- Notion MCP

---

## 18. VECTOR DATABASES

### Top Open Source
- **Qdrant** - Fastest (4ms p50)
  - Apache 2.0, Rust-based
  - URL: https://qdrant.tech/

- **Weaviate** - Graph + Vector
  - URL: https://weaviate.io/

- **Milvus** - 8 index types
  - GPU support, Milvus

- **ChromaDB** - Embeddings native
  - Python-first, URL: https://www.trychroma.com/

- **pgvector** - PostgreSQL extension
  - Free, ACID + vectors

- **RAGdb** - Single file, serverless
  - Offline RAG
  - URL: https://github.com/abkmystery/ragdb

---

## 19. RAG FRAMEWORKS

### Open Source RAG
- **LangChain** - Most popular
- **LlamaIndex** - Data indexing
- **R2R** - Agentic RAG
  - URL: https://github.com/ArcadeAI/r2r
- **RAGonite** - Flexible RAG pipeline
  - URL: https://github.com/Fraunhofer-IIS/RAGonite
- **UltraRAG** - Modular automated RAG

---

## 20. SCREEN READING & OCR

### OCR Tools
- **Tesseract** - Classic open source OCR
- **PaddleOCR** - Baidu's OCR
- **EasyOCR** - PyTorch-based
- **TrOCR** - Microsoft's transformer OCR

### Screen Reading
- **Screenotize** - OCR for screen content
- **Microsoft Screen Reader AI** - Context-aware

---

## 21. CONTEXT-AWARE COMPUTING

### Ambient AI
- **Everywhere** - Context-aware desktop AI
  - Frosted glass interface, keyboard-driven
  - URL: https://www.scriptbyai.com/context-aware-ai-assistant-everywhere/
  
- **Orbit** - Context-aware inference engine
  - Privacy-first, open source
  - URL: https://github.com/schmitech/orbit

---

## 22. ADDITIONAL TOOLS

### Whisper Variants
- **Whisper.cpp** - C++ port, CPU efficient
  - GGML format, multiple backends
  - URL: https://github.com/ggerganov/whisper.cpp
  
- **Faster Whisper** - Optimized
- **Whisper Streaming** - Real-time

### Voice Processing
- **Voicefixer** - Audio restoration
- **Demucs** - Source separation

---

## IMPLEMENTATION ROADMAP

### Phase 1: Enhanced Voice (Week 1-2)
1. Integrate Whisper via Ollama for STT
2. Add Porcupine or Snowboy for wake word
3. Implement voice activity detection

### Phase 2: Multimodal (Week 3-4)
1. Add vision/camera support
2. Integrate emotion detection (DeepFace)
3. Implement LLaVA via Ollama for vision

### Phase 3: Automation (Week 5-6)
1. Add AutoHotkey integration for macros
2. Integrate n8n workflows
3. Add home automation (Home Assistant)

### Phase 4: Knowledge (Week 7-8)
1. Implement RAG with ChromaDB
2. Add document ingestion
3. Build knowledge base

### Phase 5: Extensions (Week 9-12)
1. Add MCP support
2. Build plugin system
3. Add more integrations

---

*Research completed: 3:16 AM EST, Feb 25, 2026*
*Total search sessions: 15+
*All findings compiled to RESEARCH.md*
