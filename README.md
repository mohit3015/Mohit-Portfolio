# 👨‍💻 Mohit Kumar | AI/ML & GenAI Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-mohit3015.github.io-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mohit3015.github.io/Mohit-Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-mohit3015-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mohit3015)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mohit%20Kumar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohit-kumar-9a33412b3/)
[![Email](https://img.shields.io/badge/Email-mk5972345%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/?view=cm&fs=1&to=mk5972345@gmail.com)


Welcome to the official repository of **Mohit Kumar's Personal Portfolio Website**! Built with a modern and interactive design, this portfolio showcases my work in **Artificial Intelligence, Machine Learning, Generative AI, and RAG systems**.

It features an interactive **RAG Request Trace Simulator**, detailed project case studies, technical skills, certifications, and engineering projects.

---

## 🌐 Live Website

🔗 **Visit the live portfolio:** [**https://mohit3015.github.io/Mohit-Portfolio/**](https://mohit3015.github.io/Mohit-Portfolio/)

---

## 📌 Table of Contents

- [About Me](#-about-me)
- [Key Features & Architecture](#-key-features--architecture)
- [Interactive RAG Request Trace](#-interactive-rag-request-trace)
- [Featured Engineering Projects](#-featured-engineering-projects)
- [Technical Skills Hierarchy](#-technical-skills-hierarchy)
- [Education & Certifications](#-education--certifications)
- [Repository Structure](#-repository-structure)
- [Local Setup & Development](#-local-setup--development)
- [Connect With Me](#-connect-with-me)

---

## 👨‍💻 About Me

Namaste! I'm **Mohit Kumar**, a B.Tech Computer Science and Engineering student specializing in **Artificial Intelligence and Machine Learning (AI & ML)** at I.K. Gujral Punjab Technical University (2022–2026).

- 🤖 **Core Focus:** Retrieval-Augmented Generation (RAG) Systems, Large Language Models (LLMs), and Agentic AI Workflows.
- 🔬 **Quality & Reliability:** Rigorous RAG evaluation frameworks with **DeepEval** (Faithfulness, Answer Relevancy, Context Recall/Precision, Guardrails).
- 👁️ **Computer Vision:** Deep Convolutional Neural Networks (**EfficientNet-B4**, MediaPipe hand tracking, Real-Time HCI).
- 📊 **Predictive Analytics:** Time-series sequence modeling with **Stacked LSTMs**, trend analytics, and algorithmic data preprocessing.
- 🎯 **Aspiration:** Building scalable, observable, and production-grade intelligent AI systems.

---

## ✨ Key Features & Architecture

* **Interactive RAG Request Trace Simulator:** A live 5-stage interactive execution pipeline (`Query` $\rightarrow$ `Embed` $\rightarrow$ `ChromaDB KNN` $\rightarrow$ `Cross-Encoder Rerank` $\rightarrow$ `DeepEval & Generate`) illustrating similarity scores, cross-encoder pruning, and metric verification.
* **Modern Cyber Dark Theme:** High-contrast background hierarchy (`#0a0a0f`, `#101018`, `#151524`) paired with glowing glassmorphism accents, neon borders, and dynamic ambient lighting.
* **Structured Case Studies:** Every project is laid out with an engineering case-study framework: **Problem Statement $\rightarrow$ Architectural Approach $\rightarrow$ Key Engineering & Metrics $\rightarrow$ Tech Stack $\rightarrow$ Source Code / Live Deployment**.
* **Seamless Email Integration:** Direct Gmail composition link (`https://mail.google.com/mail/?view=cm&fs=1&to=...`) plus instant clipboard fallback copy with visual tooltip feedback.
* **Marquee & Ambient Particle Engine:** Lightweight JavaScript canvas particle animation and infinite hardware-accelerated CSS marquee displaying active stack technologies.
* **Fully Responsive:** Tested and optimized across mobile, tablet, and ultra-wide desktop viewports.

---

## 🔍 Interactive RAG Request Trace

The portfolio embeds an interactive real-time visualizer that explains how enterprise RAG systems execute and validate answers:

```
[User Query] ──▶ [Vector Embed] ──▶ [ChromaDB KNN Search] ──▶ [Cross-Encoder Rerank] ──▶ [DeepEval Evaluation & Generation]
                 (MiniLM-L6-v2)     (Top-K Chunks Retrieved)  (ms-marco Filter/Drop)     (Faithfulness: 0.96 | Relevancy: 0.94)
```

1. **INPUT_QUERY:** Validates query length, intent classification, and safety guardrails.
2. **VECTOR_EMBED:** Projects user queries into a dense 1536/384-dimensional semantic space.
3. **CHROMADB_KNN:** Retrieves Top-K chunk candidates ranked by cosine similarity.
4. **CROSS_ENCODER:** Re-scores document-query pairs jointly, pruning irrelevant contexts to prevent context stuffing and hallucinations.
5. **DEEPEVAL_EVAL & GENERATION:** Verifies that the grounded LLM answer adheres to strict Faithfulness, Relevancy, and Context Recall thresholds before serving.

---

## 🚀 Featured Engineering Projects

| Project | Domain | Architecture / Key Tech | Live Demo / Source Code |
| :--- | :--- | :--- | :--- |
| **RAG Evaluation Suite** | LLM • RAG • Quality Assurance | LangChain, ChromaDB, DeepEval, Cross-Encoder, OpenRouter | [💻 GitHub Repo](https://github.com/mohit3015/RAG_Eval_Project) |
| **Deepfake Detection Web App** | Computer Vision • Deep Learning | PyTorch, EfficientNet-B4, OpenCV, Streamlit, Hugging Face | [🌐 Live Streamlit App](https://deepfake-detector-8udmw6gnlmnmqy5yse8kru.streamlit.app/) • [💻 Source Code](https://github.com/mohit3015/deepfake-detector) |
| **Real-Time Sign Language Recognizer** | Computer Vision • Real-Time HCI | MediaPipe (21 Landmarks), CNN (3 Blocks), pyttsx3 Audio TTS | [💻 GitHub Repo](https://github.com/mohit3015/sign-gesture-recognizer) |
| **Stock Market Prediction & Trends** | Machine Learning • Time Series | 4-Layer Stacked LSTM, yfinance, MA100/MA200, Matplotlib | [💻 GitHub Repo](https://github.com/mohit3015/stock-market-prediction) |

### 1. [RAG Evaluation Suite & Automated Regression Testing](https://github.com/mohit3015/RAG_Eval_Project)
- **Problem:** Generative RAG systems frequently suffer from silent hallucinations, context stuffing, and retrieval regressions upon model/prompt modifications.
- **Approach:** Modular RAG architecture combining ChromaDB vector search (`all-MiniLM-L6-v2`), cross-encoder reranking (`ms-marco-MiniLM-L-6-v2`), and `nvidia/nemotron-3-super-120b` via OpenRouter.
- **Evaluation Framework:** 5 evaluation tiers (Component, Pipeline, Application, Safety, Telemetry) across 15+ DeepEval metrics with automated regression CI/CD quality gates (`compare.py` $\rightarrow$ PASS / REVIEW / FAIL).

### 2. [Deepfake Detection System & Web Application](https://github.com/mohit3015/deepfake-detector)
- **Problem:** AI-generated facial manipulations present critical security and misinformation risks.
- **Approach:** Trained **EfficientNet-B4** CNN architecture on the 140K Real & Fake Faces dataset, detecting subtle frequency-domain boundary artifacts.
- **Results & Deployment:** Achieved **91%+ validation accuracy**, evaluated with AUC-ROC and F1-scores. Deployed live on Streamlit Cloud with model weights hosted on Hugging Face Hub.

### 3. [Real-Time Sign Language Gesture Recognition](https://github.com/mohit3015/sign-gesture-recognizer)
- **Problem:** High communication barriers for speech- and hearing-impaired communities.
- **Approach:** Real-time webcam pipeline combining **MediaPipe** 21 hand landmark tracking with custom adaptive square ROI cropping (eliminating 64x64 aspect ratio distortion).
- **Architecture & Audio:** 3-block Conv2D deep network (32 $\rightarrow$ 64 $\rightarrow$ 128 filters) coupled with an asynchronous multithreaded **pyttsx3** Text-to-Speech (TTS) engine, 10-frame sliding stability buffer, and 80% confidence threshold.

### 4. [Stock Market Prediction & Trend Analysis](https://github.com/mohit3015/stock-market-prediction)
- **Problem:** Volatile, non-linear financial time-series data requires sequential dependency modeling to identify price trends.
- **Approach:** Ingested 10+ years of Google (GOOG) financial data with `yfinance`, engineered 100/200-day Moving Averages (MA100/MA200), and structured a 100-step sliding lookback window with MinMax normalization.
- **Neural Network:** Constructed a 4-layer **Stacked LSTM** network (50 $\rightarrow$ 60 $\rightarrow$ 80 $\rightarrow$ 120 units) with sequential Dropout regularization (0.2–0.5) to forecast future closing price trends.

---

## 🛠️ Technical Skills Hierarchy

```
Mohit's Engineering Stack
├── 1. Generative AI & LLMs
│   ├── Frameworks: LangChain, ChromaDB, DeepEval (15+ Metrics), RAG Architecture, Agentic AI
│   └── Retrieval & Prompting: Cross-Encoder Reranker, OpenRouter & LLM APIs, Context Engineering
├── 2. Machine Learning & Data Science
│   ├── Languages & Tooling: Python (Advanced), Scikit-Learn, Pandas, NumPy
│   └── Analytics & Modeling: Time Series, Stacked LSTMs, Regression/Classification, AUC-ROC, EDA
├── 3. Deep Learning & Computer Vision
│   ├── Frameworks & Libraries: PyTorch, TensorFlow / Keras, OpenCV, MediaPipe
│   └── Vision & Audio: EfficientNet-B4, CNNs, Image Preprocessing, pyttsx3 (Audio TTS)
└── 4. Backend, Deployment & Dev Tools
    └── Delivery: Streamlit (Live Apps), FastAPI, Hugging Face Hub, Git & GitHub, Linux/CLI
```

---

## 🎓 Education & Certifications

### 🏛️ Academic Education
* **Bachelor of Technology (B.Tech) — Computer Science & Engineering (AI & ML)**  
  *I.K. Gujral Punjab Technical University, Punjab (2022 – 2026)*  
  *Core Focus:* Machine Learning, Deep Learning, Computer Vision, Generative AI, LLMs & RAG.

### 🏅 Verified Certifications
* **Introduction to Generative AI** — *Intel AI Global Impact Festival (2024)*  
  *Completed a micro-learning module covering Generative AI fundamentals.
* **Python AI/ML Program** — *nfotechmon Pvt. Ltd. (Dec 2025 – May 2026)*  
  *Hands-on learning in Python, NumPy, Pandas, Scikit-Learn, AI/ML and Deep Learning workflows.*

---

## 📁 Repository Structure

```
Mohit-Portfolio/
├── index.html                           # Semantic HTML5 portfolio webpage
├── Mohit.jpg                            # Profile photo
├── Mohit_Kumar_Resume_Updated01.pdf     # Downloadable updated PDF resume
├── README.md                            # Comprehensive portfolio documentation
│
├── css/
│   └── style.css                        # Cyber dark theme styles, animations & responsive media queries
│
└── js/
    └── script.js                        # Dynamic typing effect, RAG trace simulator, particle canvas, copy email
```

---


## 📫 Connect With Me

- 🌐 **Live Portfolio:** [https://mohit3015.github.io/Mohit-Portfolio/](https://mohit3015.github.io/Mohit-Portfolio/)
- 🐙 **GitHub:** [@mohit3015](https://github.com/mohit3015)
- 💼 **LinkedIn:** [Mohit Kumar](https://www.linkedin.com/in/mohit-kumar-9a33412b3/)
- 📧 **Direct Email:** [mk5972345@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=mk5972345@gmail.com)

---
⭐ *If you find this portfolio or any of the linked projects insightful, please consider starring the repository!*
