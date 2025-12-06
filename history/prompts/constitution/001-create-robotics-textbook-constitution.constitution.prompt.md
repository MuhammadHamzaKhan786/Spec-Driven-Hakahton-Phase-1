---
id: 001
title: "Create Physical AI & Humanoid Robotics Textbook Constitution"
stage: constitution
date: 2025-12-06
surface: agent
model: claude-haiku-4-5-20251001
feature: none
branch: master
user: User
command: /sp.constitution
labels: ["textbook","constitution","robotics","physical-ai","pedagogical-standards"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: []
---

## Prompt

You are an expert in Physical AI, Humanoid Robotics, and Technical Pedagogy.

Your task is to generate a complete, detailed constitution for a textbook project titled:

**"Physical AI & Humanoid Robotics Textbook"**

Follow all instructions below strictly.

### 🧭 PURPOSE OF THE CONSTITUTION

The constitution will define the rules, structure, standards, tone, formatting, and workflows for producing a **15–18 chapter beginner-friendly textbook** teaching:

- Physical AI
- Humanoid robotics
- Sensors & actuators
- Locomotion
- Perception
- Planning & control
- AI agents
- Real-world robotics case studies

It must govern **every chapter**, **every output**, and ensure consistency across the book.

### 📚 BOOK-WIDE REQUIREMENTS

#### Writing Style & Tone

- Friendly, teacher-like, simple explanations
- Avoid jargon unless explained
- 2–4 line paragraphs
- Use real-world stories & analogies
- Include robots: Tesla Bot, Boston Dynamics, Agility Robotics, NVIDIA robotics
- Use diagrams (ASCII or Mermaid)
- Include:
  - **Did You Know?**
  - **Real-World Example**
  - **Try It**

#### Docusaurus Requirements

- Clean Markdown
- Proper headings
- Heavy use of bullet points
- Code blocks when needed
- Supports multilingual toggle (English, Urdu, Hindi, Arabic, Spanish, etc.)

### 📘 CHAPTER STRUCTURE RULES (MANDATORY)

Each chapter MUST include the following:

1. **Introduction**
2. **Main Content**
3. **At least one diagram** (ASCII or Mermaid)
4. **1–3 Real world examples**
5. **Summary / Key Takeaways**
6. **3–5 Exercises**
7. **Short recap**

### 🔧 CONTENT QUALITY RULES

- 100% technically accurate
- No hallucinations
- Use real robotics hardware, sensors, and systems
- Explain all technical terms simply
- Build from beginner → intermediate → advanced
- Cross-link chapters when helpful
- RAG-friendly formatting
- State assumptions if unsure

### 🤝 PERSONAS

Primary persona:
- Expert robotics instructor teaching beginners

Secondary persona:
- Senior AI engineer ensuring correctness

### 🎨 ENGAGEMENT & VISUALS

- Include architecture diagrams
- Motion/locomotion visuals
- Sensor layouts
- Planning/control workflows
- Hands-on mini-tutorials
- Motivating and fun examples

### 📑 GLOBAL AGENT RULES

- Follow this constitution strictly
- Keep all output consistent
- Never sacrifice clarity for complexity
- Always use clean Markdown
- Maintain the same tone across chapters
- Support future translation, RAG chatbot, personalized curriculum paths

### 📏 EVALUATION CRITERIA

The constitution must be judged by:
- Beginner-friendly clarity
- Technical accuracy
- Correct Docusaurus formatting
- Engaging storytelling + visuals
- Smooth flow across all 15–18 chapters

### 📂 FUTURE EXTENSION SUPPORT

Enable:
- Multilingual translation button (Urdu included)
- Personalized chapter difficulty levels
- RAG chatbot integration
- Structured metadata per chapter

### 📝 TASK

**Generate the full constitution document** incorporating all rules above.

The final document should be formatted as:
- Clear sections
- Numbered principles
- Explanation paragraphs
- Enforcement rules
- Workflow guidelines
- Success metrics
- Governance & amendment rules

The final constitution must be:
- Thorough
- Precise
- Complete
- Suitable for long-term textbook governance

## Response snapshot

Comprehensive constitution created for the Physical AI & Humanoid Robotics Textbook project, incorporating 10 core principles, chapter content standards, quality assurance frameworks, development workflows, governance rules, and success metrics. The constitution establishes a beginner-first pedagogical approach grounded in real-world robotics examples (Tesla Bot, Boston Dynamics, Agility Robotics, NVIDIA).

Key outputs:
- **10 Core Principles**: Beginner clarity, teacher-like tone, real-world grounding, consistent structural framework, technical accuracy, Docusaurus formatting, progressive complexity, engagement, multilingual support, consistency
- **Chapter Structure**: Mandatory framework requiring introduction, content, diagrams, real-world examples, Did You Know boxes, Try It sections, summaries, exercises, recaps
- **Quality Standards**: Technical verification checklist, clarity verification, tone consistency, glossary maintenance, metadata requirements
- **Development Pipeline**: Planning → Drafting → Internal Review → Pedagogical Review → Expert Verification → Copyedit → Approval
- **Success Metrics**: Textbook-level (chapters compliant, zero inaccuracies, 85%+ comprehension, correct rendering) and chapter-level (complete framework, sourced examples, consistent tone, verified claims)
- **Governance**: Amendment process, dispute resolution, contributor onboarding, constitution authority
- **Extended Standards**: Glossary (100+ terms), diagram standards (ASCII + Mermaid), cross-chapter linking, YAML metadata per chapter

Document location: `.specify/memory/constitution.md` (400+ lines, comprehensive)

## Outcome

- ✅ Impact: Establishes definitive governance framework for 15–18 chapter beginner-friendly robotics textbook. Enables consistent quality, pedagogical accuracy, and multilingual support. Serves as source of truth for all contributors and future translators.
- 🧪 Tests: Constitutional compliance checklist created (15-point verification) for chapter approval gates.
- 📁 Files: 1 file modified (.specify/memory/constitution.md)
- 🔁 Next prompts: (1) Generate chapter templates based on constitution structure, (2) Create glossary starter with 30+ core terms, (3) Plan chapter sequence and learning objectives (beginner → intermediate → advanced tiers), (4) Draft sample chapter (Chapter 1: What is Physical AI?) to validate constitution in practice
- 🧠 Reflection: Constitution successfully balances competing demands: beginner clarity + expert accuracy, pedagogical engagement + technical rigor, beginner-tier content + advanced-tier extensibility. Real-world robotics grounding (Tesla, Boston Dynamics, Agility, NVIDIA, ABB) prevents hallucination and ensures credibility. Governance section enables long-term maintenance and contributor onboarding without bottlenecks.

## Evaluation notes (flywheel)

- Failure modes observed: None; constitution is comprehensive and internally consistent.
- Graders run and results (PASS/FAIL): N/A (constitution creation, not implementation)
- Prompt variant (if applicable): N/A
- Next experiment: Validate constitution by drafting a single chapter (Chapter 1) using the framework and gathering pedagogical feedback from non-experts to refine tone/clarity guidelines before full textbook production.
