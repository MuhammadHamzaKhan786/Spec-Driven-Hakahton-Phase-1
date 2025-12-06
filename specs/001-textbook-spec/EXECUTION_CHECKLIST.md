# Execution Checklist: Physical AI & Humanoid Robotics Textbook

**Project**: Physical AI & Humanoid Robotics Textbook
**Feature Branch**: `001-textbook-spec`
**Start Date**: 2025-12-06
**Estimated Duration**: 6 weeks (41 days)
**Total Phases**: 11
**Total Tasks**: 215

---

## SECTION A: DOCUSAURUS SETUP TASKS (Phase 1–3)

### Phase 1: Project Initialization & Environment Setup (Days 1–2)

**Objective**: Set up git repository, Node.js/npm, folder structure, and GitHub Actions CI/CD pipeline.

#### A.1: Git Repository & Configuration

- [ ] **A.1.1** Navigate to project directory: `cd C:\Users\HAJI\ LAPTOP\OneDrive\Desktop\Hakahton`

- [ ] **A.1.2** Verify git initialized: `git status` (should show current branch)

- [ ] **A.1.3** Create/verify `.gitignore` with these patterns:
  ```
  # Node.js
  node_modules/
  dist/
  build/
  package-lock.json

  # Environment
  .env
  .env.local
  .env.*.local

  # IDE
  .vscode/
  .idea/
  *.swp
  *.swo

  # OS
  .DS_Store
  Thumbs.db

  # Logs
  *.log
  npm-debug.log*

  # Build output
  .docusaurus/
  ```

- [ ] **A.1.4** Create `README.md` with:
  - Project title: "Physical AI & Humanoid Robotics Textbook"
  - Description: "Beginner-friendly 18-chapter textbook on humanoid robotics"
  - Installation: "npm install && npm run dev"
  - Links: GitHub repo, live site (after deployment)

- [ ] **A.1.5** Create `CONTRIBUTING.md` with contributor workflow

#### A.2: Node.js & npm Verification

- [ ] **A.2.1** Verify Node.js v18+: `node --version` (should output v18.x.x or higher)

- [ ] **A.2.2** Verify npm v8+: `npm --version` (should output v8.x.x or higher)

- [ ] **A.2.3** If versions too old, update Node.js from https://nodejs.org/

#### A.3: Project Dependencies Installation

- [ ] **A.3.1** Initialize npm project (if not already done): `npm init -y`

- [ ] **A.3.2** Install Docusaurus core packages:
  ```bash
  npm install @docusaurus/core@latest @docusaurus/preset-classic@latest
  ```
  ✓ **Verify**: Both packages appear in `package.json`

- [ ] **A.3.3** Install plugins and tools:
  ```bash
  npm install @docusaurus/plugin-ideal-image @docusaurus/plugin-search-local mermaid@latest prism-react-renderer
  ```
  ✓ **Verify**: All plugins in `package.json`

- [ ] **A.3.4** Install dev dependencies:
  ```bash
  npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

- [ ] **A.3.5** Install Lighthouse (performance testing):
  ```bash
  npm install --save-dev @lhci/cli@latest lighthouse
  ```

- [ ] **A.3.6** Verify all installations: `npm list` (check for major dependencies)

#### A.4: Folder Structure Creation

**Create these directories:**

- [ ] **A.4.1** Content directories:
  ```bash
  mkdir -p docs/en/module-01-foundations
  mkdir -p docs/en/module-02-sensors-perception
  mkdir -p docs/en/module-03-locomotion
  mkdir -p docs/en/module-04-planning-control
  mkdir -p docs/en/module-05-case-studies
  mkdir -p docs/ur docs/hi docs/ar docs/es
  ```

- [ ] **A.4.2** Component directories:
  ```bash
  mkdir -p src/components
  mkdir -p src/css
  mkdir -p src/pages
  mkdir -p src/theme
  ```

- [ ] **A.4.3** Asset & config directories:
  ```bash
  mkdir -p static/img/diagrams
  mkdir -p static/robots
  mkdir -p i18n/en i18n/ur i18n/hi i18n/ar i18n/es
  mkdir -p .github/workflows
  ```

- [ ] **A.4.4** Verify structure: `find docs -type d | head -20` (should list all module folders)

#### A.5: GitHub Actions CI/CD Pipeline

- [ ] **A.5.1** Create `.github/workflows/build-and-deploy.yml`:
  ```yaml
  name: Build and Deploy Textbook

  on:
    push:
      branches: [ main, master, 001-textbook-spec ]
    pull_request:
      branches: [ main, master ]

  jobs:
    build:
      runs-on: ubuntu-latest

      steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint || true

      - name: Build Docusaurus
        run: npm run build

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          uploadArtifacts: true
          temporaryPublicStorage: true

      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
  ```

- [ ] **A.5.2** Commit GitHub Actions file: `git add .github/workflows/build-and-deploy.yml && git commit -m "Add CI/CD pipeline"`

#### A.6: Phase 1 Completion Checkpoint

- [ ] **A.6.1** Verify git initialized: `git log --oneline | head -5` (should show commits)

- [ ] **A.6.2** Verify npm ready: `npm list @docusaurus/core` (should show version)

- [ ] **A.6.3** Verify folder structure: `ls -la docs/en/module-*/` (should show all 5 modules)

- [ ] **A.6.4** Commit Phase 1:
  ```bash
  git add .
  git commit -m "Phase 1: Project initialization, dependencies, folder structure"
  ```

✅ **Phase 1 Status**: READY FOR PHASE 2

---

### Phase 2: Docusaurus Configuration & Setup (Days 4–6)

**Objective**: Configure Docusaurus, create custom CSS, set up React components, and verify build.

#### B.1: Core Docusaurus Configuration

- [ ] **B.1.1** Create `docusaurus.config.js` in project root:
  ```javascript
  // docusaurus.config.js
  module.exports = {
    title: 'Physical AI & Humanoid Robotics Textbook',
    tagline: 'Beginner-friendly introduction to humanoid robots, sensors, and AI control',
    url: 'https://yourusername.github.io',
    baseUrl: '/textbook-robotics/',
    organizationName: 'yourusername', // GitHub user/org
    projectName: 'textbook-robotics',

    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/yourusername/textbook-robotics/edit/main/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],

    plugins: [
      '@docusaurus/plugin-ideal-image',
      '@docusaurus/plugin-search-local',
      'docusaurus-plugin-mermaid',
    ],

    themeConfig: {
      navbar: {
        title: 'Robotics Textbook',
        items: [
          { to: '/docs/en/intro', label: 'Learn', position: 'left' },
          { to: '/docs/en/glossary', label: 'Glossary', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Made with ❤️ for robotics learners',
      },
      mermaid: {
        theme: { light: 'default', dark: 'dark' },
      },
    },

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ur', 'hi', 'ar', 'es'],
      localeConfigs: {
        en: { label: 'English' },
        ur: { label: 'اردو' },
        hi: { label: 'हिन्दी' },
        ar: { label: 'العربية' },
        es: { label: 'Español' },
      },
    },
  };
  ```

- [ ] **B.1.2** Create `sidebars.js`:
  ```javascript
  module.exports = {
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Module 1: Physical AI Fundamentals',
        items: [
          'module-01-foundations/chapter-01-what-is-physical-ai',
          'module-01-foundations/chapter-02-intro-to-humanoids',
          'module-01-foundations/chapter-03-sensors-explained',
          'module-01-foundations/chapter-04-actuators-motors',
          'module-01-foundations/chapter-05-basic-control-loops',
        ],
      },
      {
        type: 'category',
        label: 'Module 2: Sensors & Perception',
        items: [
          'module-02-sensors-perception/chapter-06-imu-sensors-orientation',
          'module-02-sensors-perception/chapter-07-vision-cameras',
          'module-02-sensors-perception/chapter-08-sensor-fusion-state-estimation',
          'module-02-sensors-perception/chapter-09-perception-in-real-time',
        ],
      },
      // Add Modules 3, 4, 5 similarly...
    ],
  };
  ```

- [ ] **B.1.3** Verify config syntax: `npm run build` (should complete without errors)

#### B.2: Custom CSS Styling

- [ ] **B.2.1** Create `src/css/custom.css`:
  ```css
  /* Color scheme */
  :root {
    --color-primary: #0066cc;
    --color-secondary: #00cc99;
    --color-accent: #ff6b6b;
    --color-text-light: #333333;
    --color-text-dark: #ffffff;
  }

  /* Dark mode */
  [data-theme='dark'] {
    --color-text: var(--color-text-dark);
  }

  /* Admonition boxes */
  .admonition {
    border-left: 4px solid var(--color-primary);
    padding: 12px 16px;
    margin: 16px 0;
    border-radius: 4px;
  }

  .admonition.note {
    background-color: rgba(0, 102, 204, 0.1);
  }

  .admonition.tip {
    background-color: rgba(0, 204, 153, 0.1);
    border-left-color: var(--color-secondary);
  }

  .admonition.warning {
    background-color: rgba(255, 107, 107, 0.1);
    border-left-color: var(--color-accent);
  }

  /* Code blocks */
  code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
  }

  table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  table th {
    background-color: var(--color-primary);
    color: white;
  }
  ```

- [ ] **B.2.2** Verify CSS loads: `npm run serve` (open browser, check styling applied)

#### B.3: Create React Components

- [ ] **B.3.1** Create `src/components/ExerciseBlock.tsx`:
  ```typescript
  import React, { useState } from 'react';

  interface ExerciseProps {
    number: number;
    difficulty: 'recall' | 'comprehension' | 'analysis' | 'synthesis';
    question: string;
    answer?: string;
  }

  export default function ExerciseBlock({ number, difficulty, question, answer }: ExerciseProps) {
    const [showAnswer, setShowAnswer] = useState(false);

    const difficultyColors = {
      recall: '#4CAF50',
      comprehension: '#2196F3',
      analysis: '#FF9800',
      synthesis: '#9C27B0',
    };

    return (
      <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px 0', borderRadius: '4px' }}>
        <p>
          <strong>Exercise {number}</strong>
          <span style={{ marginLeft: '8px', color: difficultyColors[difficulty], fontSize: '12px' }}>
            {difficulty.toUpperCase()}
          </span>
        </p>
        <p>{question}</p>
        {answer && (
          <button onClick={() => setShowAnswer(!showAnswer)} style={{ marginTop: '8px' }}>
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        )}
        {showAnswer && <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f0f0f0' }}>{answer}</div>}
      </div>
    );
  }
  ```

- [ ] **B.3.2** Create `src/components/DiagramWrapper.tsx`:
  ```typescript
  import React from 'react';

  interface DiagramWrapperProps {
    title: string;
    description: string;
    children: React.ReactNode;
  }

  export default function DiagramWrapper({ title, description, children }: DiagramWrapperProps) {
    return (
      <figure style={{ margin: '24px 0', textAlign: 'center' }}>
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '4px', backgroundColor: '#fafafa' }}>
          {children}
        </div>
        <figcaption style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          <strong>{title}</strong>: {description}
        </figcaption>
      </figure>
    );
  }
  ```

- [ ] **B.3.3** Create `src/components/RealWorldExampleBox.tsx` (similar structure)

- [ ] **B.3.4** Create `src/components/DidYouKnowBox.tsx` (callout with icon)

- [ ] **B.3.5** Verify components compile: `npm run build` (should show no TypeScript errors)

#### B.4: Create Chapter Template

- [ ] **B.4.1** Create `docs/chapter-template.mdx`:
  ```mdx
  ---
  id: chapter-NN-kebab-case-title
  title: "Chapter NN: Full Chapter Title"
  description: "One-line summary of what this chapter teaches (20–30 words)."
  module: "module-NN-name"
  chapter: NN
  sidebar_position: NN
  difficulty: beginner | intermediate | advanced
  estimated_time_minutes: 15–20
  prerequisites:
    - chapter-NN-1
  learning_objectives:
    - "Objective 1: specific knowledge gained"
    - "Objective 2"
    - "Objective 3"
  languages: en,ur,hi,ar,es
  source_verified: false
  last_reviewed: YYYY-MM-DD
  tags: ["robotics", "keyword1", "keyword2"]
  ---

  ## Introduction

  [100–150 words: Hook reader with question or story. Preview what they'll learn.]

  ## Main Content

  [500–800 words: Explain concept progressively. 2–4 line paragraphs. Explain jargon on first use.]

  ### Subsection 1
  [Details...]

  ### Subsection 2
  [Details...]

  ## Diagram

  ```mermaid
  flowchart TD
      A["Concept A"]
      B["Concept B"]
      C["Concept C"]
      A --> B
      B --> C
  ```

  ## Real-World Examples

  ### Example 1: Robot Name
  [Description of robot, capability demonstrated, connection to chapter concept. Source: Company/Year]

  ### Example 2: Another Robot
  [Similar structure...]

  :::note **Did You Know?**
  [1–2 surprising facts with sources. Example: "Boston Dynamics Spot can climb stairs because..."]
  :::

  :::tip **Try It!**
  [1–3 hands-on thought experiments or mini-tasks. No code required.]
  - Task 1: Description
  - Task 2: Description
  :::

  ## Summary: Key Takeaways

  - Takeaway 1: [Concise summary]
  - Takeaway 2
  - Takeaway 3
  - Takeaway 4

  ## Exercises

  **Exercise 1 (Recall)**: [Question about definitions or concepts]

  **Exercise 2 (Comprehension)**: [Question requiring explanation]

  **Exercise 3 (Analysis)**: [Question requiring analysis or synthesis]

  *Answer Key*:
  - Ex 1: [Answer]
  - Ex 2: [Answer]
  - Ex 3: [Rubric/Answer]

  ## Chapter Recap

  [1–2 sentences connecting to next chapter or broader context.]

  ## See Also

  - [Chapter N: Topic](/docs/module-XX/chapter-XX)
  - [Chapter M: Related Topic](/docs/module-XX/chapter-XX)
  ```

- [ ] **B.4.2** Save template at: `docs/chapter-template.mdx`

#### B.5: Create Module Index Files

- [ ] **B.5.1** Create `docs/en/module-01-foundations/_category_.json`:
  ```json
  {
    "label": "Module 1: Physical AI Fundamentals",
    "position": 1,
    "link": {
      "type": "generated-index",
      "description": "Build foundations in Physical AI concepts and humanoid robotics basics."
    }
  }
  ```

- [ ] **B.5.2** Repeat for modules 2–5 (adjust position and description)

#### B.6: Create Landing Pages

- [ ] **B.6.1** Create `docs/en/intro.mdx` (welcome page):
  ```mdx
  ---
  id: intro
  title: "Welcome to the Robotics Textbook"
  sidebar_position: 0
  ---

  # Physical AI & Humanoid Robotics Textbook

  Welcome! This textbook teaches the fundamentals of Physical AI and humanoid robotics for beginners.

  ## What You'll Learn

  - **Module 1**: Physical AI Fundamentals (5 chapters)
  - **Module 2**: Sensors & Perception (4 chapters)
  - **Module 3**: Locomotion & Motion (4 chapters)
  - **Module 4**: Planning & Control (3 chapters)
  - **Module 5**: Case Studies & Future (2 chapters)

  ## Learning Paths

  - **Beginner**: Chapters 1–5 (~2 hours)
  - **Intermediate**: Chapters 1–13 (~9 hours)
  - **Advanced**: All chapters (~15 hours)

  Start with [Chapter 1](/docs/module-01-foundations/chapter-01-what-is-physical-ai)!
  ```

- [ ] **B.6.2** Create `docs/en/glossary.mdx` (placeholder with 10 sample terms)

#### B.7: Phase 2 Completion Checkpoint

- [ ] **B.7.1** Verify build: `npm run build` (should complete <30 seconds, zero warnings)

- [ ] **B.7.2** Run local server: `npm run serve` (should start at http://localhost:3000)

- [ ] **B.7.3** Check sidebar: Open browser, verify Module 1–5 structure visible

- [ ] **B.7.4** Test component: Create sample chapter using ExerciseBlock component

- [ ] **B.7.5** Commit Phase 2:
  ```bash
  git add .
  git commit -m "Phase 2: Docusaurus config, custom CSS, React components, templates"
  ```

✅ **Phase 2 Status**: READY FOR CHAPTER DEVELOPMENT

---

## SECTION B: CHAPTER DEVELOPMENT TASKS (Phase 4–7)

### Phase 4: Module 1 Content Writing (Days 7–11) - MVP SCOPE

**Objective**: Write all 5 chapters in Module 1 (Physical AI Fundamentals) with complete 9-part structure.

#### C.1: Chapter 1 - What is Physical AI?

**File**: `/docs/en/module-01-foundations/chapter-01-what-is-physical-ai.mdx`

- [ ] **C.1.1** Copy chapter template to file
  ```bash
  cp docs/chapter-template.mdx docs/en/module-01-foundations/chapter-01-what-is-physical-ai.mdx
  ```

- [ ] **C.1.2** Update frontmatter:
  ```yaml
  id: chapter-01-what-is-physical-ai
  title: "Chapter 1: What is Physical AI?"
  description: "Introduction to Physical AI: robots that perceive, decide, and act in the physical world."
  module: "module-01-foundations"
  chapter: 1
  sidebar_position: 1
  difficulty: beginner
  estimated_time_minutes: 15-20
  prerequisites: []
  learning_objectives:
    - "Define Physical AI and understand how it differs from abstract AI"
    - "Identify real-world examples of Physical AI robots"
    - "Understand the sensor-compute-actuate loop"
  source_verified: false
  last_reviewed: 2025-12-06
  ```

- [ ] **C.1.3** Write Introduction (100–150 words):
  - Hook: "Imagine a robot climbing stairs like a human—this is Physical AI in action."
  - Preview: "In this chapter, you'll learn what Physical AI means, why it matters, and how it powers robots like Tesla Bot and Boston Dynamics Spot."

- [ ] **C.1.4** Write Main Content (500–800 words):
  - Subsection 1: Define Physical AI (robots that interact with physical world)
  - Subsection 2: Explain sensor-compute-actuate loop
  - Subsection 3: Contrast with abstract AI (e.g., chess programs)
  - Subsection 4: Real-world applications

- [ ] **C.1.5** Add Mermaid Diagram (flowchart):
  ```mermaid
  flowchart LR
      A["Physical World"] -->|Sensors| B["Perceive"]
      B -->|Data| C["Compute"]
      C -->|Decisions| D["Actuate"]
      D -->|Action| A
  ```

- [ ] **C.1.6** Add Real-World Examples:
  - **Example 1**: Tesla Bot climbing stairs (demonstrates sensor feedback + motor control)
  - **Example 2**: Boston Dynamics Spot navigating terrain (demonstrates perception + locomotion)
  - Add sources: Tesla.com, BostonDynamics.com

- [ ] **C.1.7** Add "Did You Know?" box:
  - Fact: "Boston Dynamics Spot can climb stairs at a 45-degree angle thanks to advanced balance control."
  - Source: BostonDynamics.com, 2023

- [ ] **C.1.8** Add "Try It!" section:
  - Task 1: Observe a video of Spot climbing stairs; identify sensors and actuators in use
  - Task 2: Sketch a simple robot (3 circles for body, 4 lines for legs); label a sensor and actuator
  - Task 3: Thought experiment: "If a robot's camera breaks, what can it still do?"

- [ ] **C.1.9** Write Summary (3–5 takeaways):
  - Physical AI enables robots to perceive, compute, and act in the real world
  - The sensor-compute-actuate loop is fundamental to robotics
  - Real robots like Tesla Bot and Spot demonstrate Physical AI in practice
  - Physical AI differs from abstract AI in requiring hardware interaction
  - Applications range from manufacturing to exploration to household tasks

- [ ] **C.1.10** Write 3–5 Exercises:
  - **Q1 (Recall)**: Define Physical AI in your own words. What makes it different from a chess AI?
  - **Q2 (Comprehension)**: Explain the sensor-compute-actuate loop. Give an example from your own experience.
  - **Q3 (Analysis)**: If a robot arm needs to pick up a glass of water, what sensors would it need? What actuators?
  - **Answer Key**:
    - Q1: [Provide expected answer]
    - Q2: [Rubric: 2 points for loop explanation, 1 point for clear example]
    - Q3: [Rubric: 1 point per sensor/actuator identified, max 3 points]

- [ ] **C.1.11** Write Recap (1–2 sentences):
  - "Now that you understand what Physical AI is, let's explore the robots that make it possible."
  - "Chapter 2 introduces humanoid robots and their unique advantages."

- [ ] **C.1.12** Add Cross-Links (≥2):
  - Link to Glossary: [Actuator definition](/docs/en/glossary)
  - Link to Chapter 2: [Chapter 2: Intro to Humanoids](/docs/en/module-01-foundations/chapter-02-intro-to-humanoids)
  - Link to Chapter 3: [Chapter 3: Sensors Explained](/docs/en/module-01-foundations/chapter-03-sensors-explained)

- [ ] **C.1.13** Verify Markdown renders:
  ```bash
  npm run serve
  # Open http://localhost:3000/docs/module-01-foundations/chapter-01-what-is-physical-ai
  # Check: Title, sections, diagrams, callouts render correctly
  ```

- [ ] **C.1.14** Quality Checklist:
  - [ ] Word count: 500–800 words main content ✓
  - [ ] Diagram present and labeled ✓
  - [ ] 1–3 real-world examples with verified sources ✓
  - [ ] "Did You Know?" box with source ✓
  - [ ] "Try It!" section with 1–3 tasks ✓
  - [ ] 3–5 exercises with answer keys ✓
  - [ ] Recap + ≥2 cross-links ✓
  - [ ] Tone: Friendly, 2–4 line paragraphs, beginner-friendly ✓
  - [ ] Markdown renders without errors ✓

- [ ] **C.1.15** Commit Chapter 1:
  ```bash
  git add docs/en/module-01-foundations/chapter-01-what-is-physical-ai.mdx
  git commit -m "Ch1: What is Physical AI - complete 9-part structure with diagrams, examples, exercises"
  ```

---

#### C.2: Chapter 2 - Intro to Humanoid Robots

**File**: `/docs/en/module-01-foundations/chapter-02-intro-to-humanoids.mdx`

- [ ] **C.2.1** Copy template and update frontmatter:
  ```yaml
  id: chapter-02-intro-to-humanoids
  title: "Chapter 2: Intro to Humanoid Robots"
  chapter: 2
  sidebar_position: 2
  learning_objectives:
    - "Understand why humanoid form factor is valuable"
    - "Learn about degrees of freedom (DOF)"
    - "Explore real humanoid robots: Atlas, Unitree Go, Tesla Bot"
  ```

- [ ] **C.2.2** Write Introduction:
  - Hook: "Why build robots that look like humans? Isn't that harder?"

- [ ] **C.2.3** Write Main Content (500–800 words):
  - What is a humanoid robot?
  - Advantages of humanoid form (working in human environments, manipulation with hands, etc.)
  - Degrees of Freedom (DOF) concept
  - Examples of humanoid robots

- [ ] **C.2.4** Create ASCII Diagram (humanoid joint layout):
  ```
      ┌─────────┐
      │ Head/14 │
      └────┬────┘
         ┌─┴─┐
      ┌──┤ 7 ├──┐
      │  └───┘  │
    ┌─┴─┐     ┌─┴─┐
    │ 7 │     │ 7 │  (Left/Right Arms)
    └───┘     └───┘
      │        │
    ┌─┴─┐    ┌─┴─┐
    │ 3 │    │ 3 │  (Left/Right Legs)
    └───┘    └───┘
  Caption: Figure 2.1: Humanoid robot joint layout (DOF count shown per limb)
  ```

- [ ] **C.2.5** Add Real-World Examples:
  - Boston Dynamics Atlas: 28 DOF humanoid designed for dynamic tasks
  - Tesla Bot: Planned production humanoid for manufacturing and service
  - Unitree Go: Recent entry in humanoid robotics market

- [ ] **C.2.6** Add "Did You Know?":
  - Fact: "Boston Dynamics Atlas can do backflips despite weighing 80 kg."

- [ ] **C.2.7** Add "Try It!":
  - Count your own joints: How many DOF does your arm have? (Answer: ~7-9 major joints)
  - Challenge: "If a humanoid has 28 DOF and must coordinate all of them, how complex is that?"

- [ ] **C.2.8** Write Summary, Exercises, Recap (same quality checklist as C.1)

- [ ] **C.2.9** Commit Chapter 2:
  ```bash
  git add docs/en/module-01-foundations/chapter-02-intro-to-humanoids.mdx
  git commit -m "Ch2: Intro to Humanoid Robots - humanoid design, DOF, real examples"
  ```

---

#### C.3: Chapter 3 - Sensors Explained

**File**: `/docs/en/module-01-foundations/chapter-03-sensors-explained.mdx`

- [ ] **C.3.1** Frontmatter:
  ```yaml
  id: chapter-03-sensors-explained
  title: "Chapter 3: Sensors Explained"
  chapter: 3
  sidebar_position: 3
  learning_objectives:
    - "Understand types of sensors (IMU, cameras, lidar, touch)"
    - "Learn how sensors work"
    - "Identify sensors on real robots"
  ```

- [ ] **C.3.2** Main Content (500–800 words):
  - What is a sensor? (device that measures physical quantities)
  - Types of sensors:
    - IMU (accelerometers, gyroscopes): Measure orientation and motion
    - Cameras (RGB, depth): Capture visual information
    - Lidar: Measure distance with lasers
    - Touch sensors: Detect contact and pressure
  - How robots use sensors to perceive environment

- [ ] **C.3.3** Mermaid Diagram (sensor-processor-actuator pipeline):
  ```mermaid
  flowchart LR
      A["📷 Sensors<br/>IMU, Camera, Lidar"] -->|Raw Data| B["⚙️ Processor<br/>Real-time Processing"]
      B -->|Decisions| C["🔌 Actuators<br/>Motors, Servos"]
      C -->|Action| D["🤖 Robot Motion"]
  ```

- [ ] **C.3.4** Real-World Examples:
  - Spot's IMU for balance (9-axis IMU for detecting tilt)
  - Tesla Bot's cameras for environment understanding
  - Lidar in autonomous robots for mapping

- [ ] **C.3.5** "Did You Know?":
  - IMU in smartphones: Same technology as in Spot!

- [ ] **C.3.6** "Try It!":
  - Task: List all sensors in your smartphone (accelerometer, gyroscope, etc.)

- [ ] **C.3.7** Exercises with answers, Summary, Recap

- [ ] **C.3.8** Commit Chapter 3

---

#### C.4: Chapter 4 - Actuators & Motors

**File**: `/docs/en/module-01-foundations/chapter-04-actuators-motors.mdx`

- [ ] **C.4.1** Similar structure to Chapters 1–3

- [ ] **C.4.2** Focus on:
  - Definition: Actuators are devices that convert electrical energy to mechanical motion
  - Types: Servo motors (precise control), DC motors (simple), Stepper motors (step-wise control)
  - Specifications: Torque, speed, power consumption
  - Real examples: Tesla Bot arm servos, Boston Dynamics leg motors

- [ ] **C.4.3** Diagram: Motor control loop (feedback from sensor → adjustment)

- [ ] **C.4.4** Real-World Examples:
  - Tesla Bot arm actuators: High-torque servos for manipulation
  - Boston Dynamics Spot leg motors: Coordinated motor control for climbing

- [ ] **C.4.5** Exercises: "Explain why a servo motor is better than a DC motor for a robot arm."

- [ ] **C.4.6** Commit Chapter 4

---

#### C.5: Chapter 5 - Basic Control Loops

**File**: `/docs/en/module-01-foundations/chapter-05-basic-control-loops.mdx`

- [ ] **C.5.1** Similar structure

- [ ] **C.5.2** Focus on:
  - Feedback control: Sensor measures state, processor adjusts based on error
  - Proportional control: Error magnitude determines action magnitude
  - Real examples: Robot arm positioning, balance control

- [ ] **C.5.3** Mermaid Diagram (feedback loop):
  ```mermaid
  flowchart LR
      A["Desired State"] --> B["Compute Error"]
      C["Sensor Feedback"] --> B
      B --> D["Proportional Control"]
      D --> E["Actuate"]
      E --> F["Robot State Changes"]
      F --> C
  ```

- [ ] **C.5.4** Real-World Example:
  - Boston Dynamics Spot maintaining balance on stairs using IMU feedback

- [ ] **C.5.5** "Try It!":
  - Simulate control loop: "Imagine closing your eyes and trying to maintain balance. What feedback does your body use?"

- [ ] **C.5.6** Commit Chapter 5

---

#### C.6: Module 1 Quality Verification

- [ ] **C.6.1** Verify all 5 chapters complete:
  ```bash
  ls -la docs/en/module-01-foundations/chapter-*.mdx
  # Should list 5 files
  ```

- [ ] **C.6.2** Verify each chapter has:
  - [ ] 500–800 words main content
  - [ ] 1 diagram (ASCII or Mermaid)
  - [ ] 1–3 real-world examples with sources
  - [ ] "Did You Know?" box
  - [ ] "Try It!" section
  - [ ] 3–5 exercises with answer keys
  - [ ] Summary (3–5 takeaways)
  - [ ] Recap to next chapter
  - [ ] ≥2 cross-links

- [ ] **C.6.3** Build and render:
  ```bash
  npm run build
  npm run serve
  # Open http://localhost:3000
  # Verify all 5 chapters appear in sidebar
  # Click through each chapter; verify rendering
  ```

- [ ] **C.6.4** Verify tone consistency:
  - All chapters use friendly, conversational tone
  - All paragraphs 2–4 lines
  - All jargon explained on first use

- [ ] **C.6.5** Commit Module 1 completion:
  ```bash
  git add docs/en/module-01-foundations/
  git commit -m "Phase 4 Complete: Module 1 all chapters - 5 chapters, ~7,500-12,000 words, all quality gates met"
  ```

✅ **MVP Milestone Achieved**: Module 1 complete + Docusaurus fully functional

---

### Phase 5–7: Modules 2–5 (Similar Structure)

**Objective**: Write Modules 2, 3, 4, 5 following same 9-part structure as Module 1.

#### D.1: Module 2 Chapters (Sensors & Perception)

- [ ] **D.1.1** Chapter 6: IMU Sensors & Orientation
- [ ] **D.1.2** Chapter 7: Vision & Cameras
- [ ] **D.1.3** Chapter 8: Sensor Fusion & State Estimation
- [ ] **D.1.4** Chapter 9: Perception in Real Time
- [ ] **D.1.5** Quality verification + commit

#### D.2: Module 3 Chapters (Locomotion & Motion)

- [ ] **D.2.1** Chapter 10: Walking Basics & Gaits
- [ ] **D.2.2** Chapter 11: Balance & Stability Control
- [ ] **D.2.3** Chapter 12: Climbing, Jumping & Terrain
- [ ] **D.2.4** Chapter 13: Energy Efficiency & Motion Optimization
- [ ] **D.2.5** Quality verification + commit

#### D.3: Module 4 Chapters (Planning & Control)

- [ ] **D.3.1** Chapter 14: Path Planning & Navigation
- [ ] **D.3.2** Chapter 15: AI Agent Architectures
- [ ] **D.3.3** Chapter 16: Real-Time Decision Making
- [ ] **D.3.4** Quality verification + commit

#### D.4: Module 5 Chapters (Case Studies)

- [ ] **D.4.1** Chapter 17: Tesla Bot Case Study
- [ ] **D.4.2** Chapter 18: Integration Challenges & Future
- [ ] **D.4.3** Quality verification + commit

---

### Phase 8: Technical Review & Accuracy

- [ ] **E.1** Recruit SME (robotics expert)
- [ ] **E.2** SME reviews all 18 chapters for:
  - Technical accuracy
  - Source verification
  - Hallucination detection
  - Clarity for beginners
- [ ] **E.3** Address critical issues immediately
- [ ] **E.4** Create hardware verification spreadsheet
- [ ] **E.5** Obtain SME sign-off

---

### Phase 9–10: Polish & QA

- [ ] **F.1** Copyedit: Grammar, spelling, tone consistency
- [ ] **F.2** Accessibility audit: WCAG AA compliance
- [ ] **F.3** Mobile responsiveness testing
- [ ] **F.4** Lighthouse performance (target: ≥95 all scores)
- [ ] **F.5** Link validation (internal + external)

---

### Phase 11: Deployment

- [ ] **G.1** Push to main branch:
  ```bash
  git checkout main
  git merge 001-textbook-spec
  ```

- [ ] **G.2** GitHub Actions deploys automatically

- [ ] **G.3** Verify live site:
  - [ ] All chapters accessible
  - [ ] Navigation works
  - [ ] Diagrams render
  - [ ] Search functional
  - [ ] Mobile responsive

- [ ] **G.4** Create GitHub Release with version 1.0.0

✅ **TEXTBOOK PUBLISHED** 🎉

---

## QUICK START COMMANDS

### Setup Phase
```bash
# Clone/navigate to project
cd C:\Users\HAJI\ LAPTOP\OneDrive\Desktop\Hakahton

# Install dependencies
npm install

# Create folder structure
mkdir -p docs/en/module-{01,02,03,04,05}-*
mkdir -p src/components src/css src/pages
mkdir -p .github/workflows

# Test build
npm run build

# Start local server
npm run serve
```

### Chapter Development
```bash
# Create chapter file from template
cp docs/chapter-template.mdx docs/en/module-01-foundations/chapter-01-what-is-physical-ai.mdx

# Edit in your text editor, then:
npm run serve
# Open http://localhost:3000/docs/module-01-foundations/chapter-01-what-is-physical-ai

# After editing, commit:
git add docs/en/module-01-foundations/chapter-01-what-is-physical-ai.mdx
git commit -m "Ch1: What is Physical AI - complete 9-part structure"
```

### Deployment
```bash
# When ready to deploy
git checkout main
git merge 001-textbook-spec
git push origin main

# GitHub Actions will automatically:
# 1. Build site
# 2. Run Lighthouse
# 3. Deploy to GitHub Pages
# Live site will appear at: https://<username>.github.io/textbook-robotics/
```

---

**Status**: Ready for execution. Begin with Section A (Docusaurus Setup), then proceed to Section B (Chapter Development).
