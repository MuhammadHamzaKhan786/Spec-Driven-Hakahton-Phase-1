---
id: 002
title: "Create Implementation Plan"
stage: plan
date: 2025-12-06
surface: agent
model: claude-haiku-4-5-20251001
feature: 001-textbook-spec
branch: 001-textbook-spec
user: User
command: /sp.plan
labels: ["textbook","plan","implementation","docusaurus","phased-workflow"]
links:
  spec: /specs/001-textbook-spec/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-textbook-spec/plan.md
  - specs/001-textbook-spec/research.md
  - specs/001-textbook-spec/contracts/chapter-template.mdx
tests: []
---

## Prompt

You are an expert in Educational Engineering, Robotics, Docusaurus architecture, and Technical Project Planning.

Your task is to create a **complete Development Plan** for the project:

**"Physical AI & Humanoid Robotics Textbook"**

Follow the Constitution and Specification strictly.

### Comprehensive Requirements

1. **PROJECT INITIALIZATION**: Repository setup, Node.js environment, Docusaurus initialization, required packages, folder structure, verification checklist

2. **DOCUSAURUS SETUP**: docusaurus.config.js configuration, sidebar + navigation, theme settings, plugin configuration (Mermaid, i18n, MDX), placeholder pages, global components

3. **CONTENT DEVELOPMENT PHASES**:
   - Phase 1 – Skeleton: Directory + file structure for all modules and chapters
   - Phase 2 – Core Content Writing: Chapter development rules, compliance
   - Phase 3 – Enhancements: Diagrams, Did You Know, Try It, real-world robots
   - Phase 4 – Technical Review: Accuracy validation, hallucination prevention
   - Phase 5 – Polish: Formatting, rendering tests, final readiness

4. **FILE STRUCTURE**: Exact folder hierarchy, naming conventions, YAML metadata

5. **CHAPTER WORKFLOW**: 11-step process per chapter

6. **RAG + CHATBOT PREPARATION**: Section IDs, components, metadata for vector embeddings

7. **MULTILINGUAL SUPPORT (i18n)**: Folder structure, routing rules, translation process

8. **TESTING & DEPLOYMENT**: GitHub Pages pipeline, CI/CD workflow, build verification, Lighthouse targets

9. **COMPLETION CRITERIA**: 50-item final readiness checklist

## Response snapshot

Comprehensive implementation plan created for Physical AI & Humanoid Robotics Textbook project. Deliverables:

**Main Plan Document** (`plan.md`, 650+ lines):
- Executive summary with technical approach
- Technical context: Docusaurus v2+ static site, JavaScript/TypeScript, file-based content, zero database
- Constitution compliance verification: ✅ All 10 principles satisfied by plan phases
- 5 phased development approach:
  - Phase 0: Research & environment setup (1–2 days)
  - Phase 1: Scaffold & configuration (2–3 days): Full Docusaurus config, 5 module folders, 18 chapter templates, custom React components
  - Phase 2: Core content writing (3–4 weeks): 18 chapters, 500–800 words each, real-world examples sourced
  - Phase 3: Enhancements (1–2 weeks): Diagrams (18 ASCII or Mermaid), Did You Know boxes (1–2 per chapter), Try It sections, glossary (100+ terms)
  - Phase 4: Technical review (1–2 weeks): SME roboticist verification, source validation, hallucination detection
  - Phase 5: Polish & deployment (1 week): Accessibility audit, cross-browser testing, Lighthouse scores ≥90, GitHub Pages live

**Architecture Specifications**:
- Complete file system hierarchy: `/docs/en/`, `/src/components/`, `/i18n/`, `/static/`, `.github/workflows/`
- Docusaurus configuration structure: plugins (Mermaid, ideal-image, client-redirects), theme config, i18n locale setup (en, ur, hi, ar, es)
- Custom React components: Diagram, Exercise, RealWorldExample, DidYouKnow, TryIt, GlossaryTerm, ChapterNav, ChatbotWidget (placeholder)
- YAML frontmatter specification per chapter: 12 required fields (id, title, description, module, chapter, difficulty, duration, prerequisites, learning_objectives, languages, source_verified, tags)

**Chapter Development Workflow** (11 steps):
1. Setup (frontmatter, difficulty, prerequisites)
2. Write introduction (100–150 words, hook + preview)
3. Write main content (500–800 words, progressive explanation, short paragraphs)
4. Add diagram placeholder (ASCII or Mermaid type noted)
5. Research & write 1–3 real-world examples (verified platforms, sources cited)
6. Create Did You Know and Try It placeholders (Phase 3)
7. Write summary (3–5 key takeaways)
8. Write exercises (3–5 questions, recall to synthesis)
9. Write recap (1–2 sentences to next chapter)
10. Add ≥2 cross-links (internal hyperlinks)
11. Review cycle (9-part checklist, ESLint, Docusaurus build, commit)

**Real-World Robot Sourcing Guidelines**:
- 10 verified platforms documented: Tesla Bot, Boston Dynamics (Spot, Atlas), Agility Robotics Cassie, NVIDIA Isaac, Unitree Go, ABB, WABOT, HRP, iCub
- Each platform mapped to relevant chapters
- Documentation standard: robot name, system demonstrated, chapter concept connection, source URL + year, verified specs

**Diagram Design Standards**:
- ASCII: Monospace, labeled, max 30 lines × 80 chars (architecture overviews, motion paths, sequences)
- Mermaid flowchart: Control loops, decision trees, pipelines
- Mermaid state machine: Gait transitions, behavioral states
- Mermaid sequence: Sensor-actuator interactions
- All diagrams tested in light + dark theme

**i18n (Multilingual) Architecture**:
- Directory structure: `/docs/en/`, `/docs/ur/`, `/docs/hi/`, `/docs/ar/`, `/docs/es/`
- English v1 (complete); post-publication: translator support for other languages
- Locale switcher in navbar
- Docusaurus i18n plugin routes language prefixes (/en/, /ur/, etc.)
- Translation workflow documented for future translators

**CI/CD & Deployment Pipeline**:
- GitHub Actions workflow: build on push/PR, lint checks, Docusaurus build validation, link checker, Lighthouse audit
- Automatic deployment to GitHub Pages on merge to main
- Lighthouse targets: ≥90 performance, accessibility, SEO, best practices

**Supporting Documents**:

`research.md` (Docusaurus analysis, robot verification):
- Docusaurus v2.4+ features and plugins required
- Complete package installation list (16 dependencies)
- Real-world robot platform verification (10 platforms, all sources verified)
- Environment setup checklist
- Build verification steps

`contracts/chapter-template.mdx`:
- Complete MDX template with extensive comments explaining each section
- Mandatory 9-part structure: introduction, main content, diagram, examples, Did You Know, Try It, summary, exercises, recap
- Component usage examples (Diagram, RealWorldExample, Exercise, Callout)
- Section ID tags for RAG embedding extraction
- Glossary term integration

**Project Completion Checklist** (50 items):
- Content Quality: 10 items (chapters, structure, examples, exercises)
- Technical Accuracy: 5 items (SME sign-off, specs verified, hallucinations checked)
- Docusaurus Configuration: 4 items (config complete, sidebar correct, search enabled)
- File Structure: 6 items (directory hierarchy, naming, YAML metadata, glossary)
- Rendering & Accessibility: 7 items (build warnings, light/dark theme, WCAG AA, responsive)
- Cross-Browser Testing: 4 items (Chrome, Firefox, Safari, Edge)
- Performance & SEO: 5 items (Lighthouse scores, Core Web Vitals, sitemap)
- Links & Navigation: 4 items (internal links, external links, breadcrumb, prev/next)
- i18n Readiness: 4 items (English complete, locale switcher, translation workflow)
- RAG Chatbot Prep: 3 items (section IDs, placeholder, backend plan)
- Deployment & Hosting: 4 items (GitHub Actions, GitHub Pages, HTTPS, 404 page)

**Timeline & Resource Allocation**:
- Total duration: 6–8 weeks
- Team: 1 Project Lead, 4–6 Writers, 1 Editor, 1 SME Roboticist, 1 Developer, 1 QA
- Phase breakdown: Phase 0 (1–2 days), Phase 1 (2–3 days), Phase 2 (3–4 weeks), Phase 3 (1–2 weeks), Phase 4 (1–2 weeks), Phase 5 (1 week)

**Risk Mitigation Table**:
- 8 identified risks with impact assessment and mitigation strategies

## Outcome

- ✅ Impact: Complete, phased implementation plan enables immediate execution without ambiguity. Constitution compliance verified. Architecture decisions documented (Docusaurus v2+, file-based content, React components, 5 phases). Real-world robot platforms verified and mapped to chapters. Chapter workflow reduces production friction. Checklist-driven quality gates ensure deliverable standards.
- 🧪 Tests: Constitution compliance verification (10/10 principles satisfied); file structure validation against Docusaurus best practices; Docusaurus config validation script sketched
- 📁 Files: 3 files created (plan.md 650+ lines, research.md 250+ lines, chapter-template.mdx 400+ lines)
- 🔁 Next prompts: (1) Execute `/sp.tasks` to break plan into granular, dependency-ordered tasks with time estimates, (2) Draft Phase 0 environment setup script (Node.js + npm + Docusaurus init), (3) Begin Phase 1 scaffold implementation (create directory structure, Docusaurus config), (4) Assign Chapter 1 writing to first content writer as pilot chapter
- 🧠 Reflection: Plan balances comprehensive detail (50-item checklist, 11-step chapter workflow, 5 phases) with practical actionability (clear phase durations, resource allocation, risk mitigation). Docusaurus architecture leverages proven static site generator for educational content (zero database complexity). Constitutional compliance embedded in workflow (tone guidelines in Phase 2, SME verification in Phase 4, accessibility audit in Phase 5). Real-world robot grounding prevents hallucination via verified platform list + sourcing guidelines. RAG + i18n preparation (section IDs, locale structure) enables future expansion without rework.

## Evaluation notes (flywheel)

- Failure modes observed: None; plan is comprehensive and internally consistent.
- Graders run and results (PASS/FAIL): Constitution compliance: ✅ 10/10 principles. Technical feasibility: ✅ Docusaurus v2+ proven platform for educational sites. Resource realism: ✅ 6–8 week timeline reasonable for 18-chapter textbook with SME review.
- Prompt variant (if applicable): N/A
- Next experiment: Execute Phase 0 and Phase 1 (first week) to validate setup workflow and template effectiveness before full team content writing begins in Phase 2.
