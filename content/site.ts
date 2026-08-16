/**
 * All portfolio content lives here. Edit this file to add a job, a project or a tool —
 * the pages, routes and metadata are generated from it.
 */

export type ArtKind =
  | "gear" | "receipt" | "cross" | "laptop"
  | "term" | "bars" | "nodes" | "braces"
  | "py" | "tag" | "db" | "cloud" | "check" | "spark"
  | "gh" | "in" | "mail" | "panda";

export type Art = { bg: string; fg: string; kind: ArtKind };

export type LinkKind = "live" | "code";

export type Item = {
  slug: string;
  title: string;
  /** right-hand text on the list row (date, handle, main tools…) */
  meta: string;
  /** small italic line under the entry title (role, kind of project…) */
  kind?: string;
  /** dates shown next to `kind` on the entry page */
  when?: string;
  /** file name in /public/shots (without extension) — real screenshot */
  shot?: "quebola" | "zentry" | "pomodoro" | "doces" | "blog";
  /** generated tile when there is no screenshot */
  art?: Art;
  /** paragraphs; a little inline HTML (strong/em/code) is allowed */
  body?: string[];
  chips?: string[];
  /** chips to outline as "main" */
  main?: string[];
  stars?: number;
  links?: [LinkKind, string][];
  /** external rows (GitHub, LinkedIn…) open a new tab instead of an entry */
  ext?: string;
  /** toolbox only: keys into MARKS */
  tools?: string[];
};

export type SectionKey = "work" | "projects" | "toolbox" | "about";

export type Section = {
  key: SectionKey;
  title: string;
  /** rows shown on the home page before "More" */
  show: number;
  /** one polaroid per row instead of a stack of three */
  single?: boolean;
  /** render as the toolbox pinboard */
  board?: boolean;
  items: Item[];
};

export const profile = {
  name: "Rosniel Miguel",
  handle: "Ross",
  role: "Senior Full Stack Developer",
  location: "Curitiba, Paraná, Brasil",
  email: "r16221639@gmail.com",
  github: "https://github.com/Ross-cripto",
  linkedin: "https://www.linkedin.com/in/rosniel-allesta/",
  siteUrl: "https://portfolio-ross.vercel.app",
  tagline: "a curious creator who loves crafting scalable experiences.",
  intro:
    "Senior full stack developer in Curitiba, BR: Python on the back, React on the front, and a soft spot for building small AI tools.",
  updated: "Aug 2026",
};

export const sections: Section[] = [
  {
    key: "work",
    title: "work",
    show: 4,
    items: [
      {
        slug: "alamops", title: "ALAMOPS", meta: "2025 – now",
        kind: "senior full stack developer", when: "Feb 2025 – present",
        art: { bg: "#0f4c5c", fg: "#7fd6c2", kind: "gear" },
        body: [
          "Leading a full-stack automation system with <strong>Python, Flask and React</strong> — operational efficiency up 30%, production downtime down 25%.",
          "Designing and optimising REST APIs for service integration, with solid authentication and error handling, and helping track down production failures before they page anyone.",
        ],
        chips: ["Python", "Flask", "React", "REST APIs"],
      },
      {
        slug: "inovacao-fiscal", title: "Inovação Fiscal", meta: "2024 – 25",
        kind: "senior full stack developer", when: "Feb 2024 – Feb 2025",
        art: { bg: "#1d3f8f", fg: "#bcd0ff", kind: "receipt" },
        body: [
          "Built a fiscal management system with <strong>Django REST APIs and a React frontend</strong> — system integration efficiency up 20%.",
          "Complex PostgreSQL queries and optimisations behind the business logic; code reviews and pull-request flow to keep quality and maintainability high.",
        ],
        chips: ["Python", "Django", "React", "PostgreSQL"],
      },
      {
        slug: "servicios-medicos", title: "Servicios Médicos Cubano", meta: "2023 – 24",
        kind: "senior full stack developer", when: "Jun 2023 – Dec 2024",
        art: { bg: "#8f1d2c", fg: "#ffd6dc", kind: "cross" },
        body: [
          "Developed and maintained an integrated medical platform end to end — Python backend, REST APIs, React frontend.",
          "Named <strong>best IT professional of the year</strong> for contributions to system improvements; continuous work on service infrastructure to keep it stable.",
        ],
        chips: ["Python", "React", "REST APIs", "PostgreSQL"],
      },
      {
        slug: "freelance", title: "Freelancer", meta: "2022 – now",
        kind: "senior full stack developer", when: "Feb 2022 – present",
        art: { bg: "#3b3a36", fg: "#e6ddcf", kind: "laptop" },
        body: [
          "Full-stack applications with Python and SQL databases, tuned for performance.",
          "Authentication and error management done right, and Dockerized deployments for automation projects.",
        ],
        chips: ["Python", "React", "PostgreSQL", "Docker"],
      },
    ],
  },
  {
    key: "projects",
    title: "projects",
    show: 3,
    items: [
      {
        slug: "goza", title: "goza", meta: "Jul 2026", kind: "ai · cli tool", when: "2026",
        art: { bg: "#13261c", fg: "#8fe3b4", kind: "term" },
        body: [
          "<strong>Personality skills for CLI AI agents</strong> — same answer, explained the way a real person (or a whole country) would.",
          "180+ composable profiles for Claude Code, OpenCode & Codex. Pick a person and a nationality; the agent keeps its full accuracy, tools and reasoning — it just answers with that personality. Profiles are inspired by real traits, never an impersonation.",
        ],
        chips: ["Node.js", "JavaScript", "Shell", "agent skills"], stars: 3,
        links: [["code", "https://github.com/Ross-cripto/goza"]],
      },
      {
        slug: "professional-rag", title: "professional rag", meta: "Apr 2026", kind: "ai · python", when: "2026",
        art: { bg: "#1c2542", fg: "#8fa8ff", kind: "bars" },
        body: [
          "<strong>A RAG system that's actually production-ready</strong> — three independent layers instead of one fragile pipeline.",
          "Knowledge (PDF → chunks → embeddings → ChromaDB, with semantic topic metadata), retrieval (metadata pre-filter, then top-k vector search) and validation (confidence score per chunk, file + page citations assembled <em>before</em> the LLM call). Every layer is testable and replaceable.",
        ],
        chips: ["Python", "ChromaDB", "embeddings", "OpenAI API"], stars: 1,
        links: [["code", "https://github.com/Ross-cripto/professional-rag"]],
      },
      {
        slug: "puro-doce", title: "puro doce", meta: "Jun 2026", kind: "web · shop", when: "2026", shot: "doces",
        body: [
          "<strong>Marketing + ordering site for a Curitiba brigadeiro shop</strong>, with a mock Pix checkout that really scans.",
          "Long-scroll landing, persisted cart drawer, cursor trail, and a well-formed EMV \"BR Code\" QR with a valid CRC16 — fictional key, no real charge.",
        ],
        chips: ["Next.js 16", "React 19", "Tailwind v4", "Zustand", "Motion"],
        links: [["live", "https://doces-flame.vercel.app"], ["code", "https://github.com/Ross-cripto/doces"]],
      },
      {
        slug: "blog", title: "the blog", meta: "Apr 2026", kind: "web · writing", when: "2026", shot: "blog",
        body: [
          "<strong>My own blog</strong> — essays and field notes on building for the web, written slowly, published when ready.",
          "Markdown-first: no database, no admin, no login. Add a file to <code>content/posts/</code>, push, it's live. Editorial type in Fraunces + Newsreader.",
        ],
        chips: ["Next.js 16", "Markdown", "Tailwind v4", "Docker"], stars: 3,
        links: [["live", "https://blog-blue-beta.vercel.app"], ["code", "https://github.com/Ross-cripto/blog"]],
      },
      {
        slug: "quebola", title: "quebola.ai", meta: "May 2025", kind: "ai · web app", when: "2025", shot: "quebola",
        body: [
          "<strong>A free AI chatbot that talks about Cuba</strong> — culture, history, slang — like a Cuban would.",
          "Ask it anything in Spanish and it answers with local flavour. Gemini under the hood, answers rendered as markdown, auth-ready.",
        ],
        chips: ["Next.js", "React", "Gemini API", "TailwindCSS"],
        links: [["live", "https://quebola.vercel.app/"]],
      },
      {
        slug: "nest-series", title: "nest series", meta: "Nov 2024", kind: "backend · microservices", when: "2024 – 25",
        art: { bg: "#160f12", fg: "#f0d5dc", kind: "nodes" },
        body: [
          "<strong>A GitHub org of real-world NestJS microservices</strong> — a client gateway in front of independent services, wired the way you'd ship them.",
          "Gateway ↔ products over NestJS microservice transports, Prisma for data, plus users & parking APIs — each service its own repo.",
        ],
        chips: ["TypeScript", "Nest.js", "microservices", "Prisma"],
        links: [["code", "https://github.com/Nest-Microservices-Ross"]],
      },
      {
        slug: "focusflow", title: "focusflow", meta: "Jan 2025", kind: "web · tool", when: "2025", shot: "pomodoro",
        body: [
          "<strong>A minimalist pomodoro that stays out of the way</strong> — timer, session history, notifications and your own music.",
          "Adjustable work/break sliders, upload-a-playlist player, custom notification text. Nothing to sign up for.",
        ],
        chips: ["TypeScript", "Next.js", "TailwindCSS"],
        links: [["live", "https://ross-pro-pomodoro.vercel.app/"]],
      },
      {
        slug: "zentry", title: "zentry clone", meta: "Jan 2025", kind: "web · motion study", when: "2025", shot: "zentry",
        body: [
          "<strong>A pixel-close rebuild of the Awwwards-winning Zentry site</strong> — scroll-driven video, clip-path reveals, the works.",
          "A study in high-end web motion. Heavy on assets — best on a good connection.",
        ],
        chips: ["React", "JavaScript", "TailwindCSS"],
        links: [["live", "https://ross-adward-clone.vercel.app/"]],
      },
      {
        slug: "django-ecommerce", title: "django ecommerce", meta: "Dec 2024", kind: "backend · api", when: "2024",
        art: { bg: "#0b2b1d", fg: "#c9ebd9", kind: "braces" },
        body: [
          "<strong>An e-commerce backend built the Django way</strong> — products, carts, orders and auth behind a clean REST API.",
          "Django REST Framework serializers & views, JWT auth (SimpleJWT), products + users apps, split local/production settings.",
        ],
        chips: ["Python", "Django", "DRF", "JWT"],
        links: [["code", "https://github.com/Ross-cripto/backend-comerce"]],
      },
    ],
  },
  {
    key: "toolbox",
    title: "toolbox",
    show: 99,
    single: true,
    board: true,
    items: [
      {
        slug: "backend", title: "backend", meta: "Python · Django · FastAPI", kind: "where I live",
        tools: ["python", "django", "fastapi", "flask", "node", "nest"],
        art: { bg: "#0f4c5c", fg: "#cfeee8", kind: "py" },
        body: ["Most of my days: Python services with Django, DRF and FastAPI, Flask when it fits, and Node/Nest when the team is on TypeScript. REST by default, GraphQL when the client wants it, JWT for auth."],
        chips: ["Python", "Django", "Django REST", "FastAPI", "Flask", "Node.js", "Nest.js", "GraphQL", "REST APIs", "JWT"], main: ["Python", "Django"],
      },
      {
        slug: "frontend", title: "frontend", meta: "React · Next.js · TypeScript", kind: "what people see",
        tools: ["react", "next", "ts", "js", "tailwind", "mui"],
        art: { bg: "#1c2542", fg: "#dfe6ff", kind: "tag" },
        body: ["React and Next.js with TypeScript, Tailwind for speed, Material UI when a design system is already there. Plain HTML/CSS still matters — this page is proof."],
        chips: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "TailwindCSS", "Material UI", "HTML5", "CSS3"], main: ["React", "Next.js"],
      },
      {
        slug: "databases", title: "databases", meta: "PostgreSQL · MongoDB · Redis", kind: "the source of truth",
        tools: ["postgres", "mysql", "mongo", "redis", "sqlite"],
        art: { bg: "#3b2a1e", fg: "#f1dcc0", kind: "db" },
        body: ["PostgreSQL first — schema design, indexes, query tuning. MySQL and SQLite when the project says so, MongoDB for document shapes, Redis for cache and queues."],
        chips: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"], main: ["PostgreSQL"],
      },
      {
        slug: "devops", title: "devops & cloud", meta: "Docker · Nginx · AWS", kind: "ship it",
        tools: ["docker", "nginx", "aws", "azure", "vercel", "cicd"],
        art: { bg: "#2b3a55", fg: "#dbe6ff", kind: "cloud" },
        body: ["Everything runs in containers. Docker + Compose locally, Nginx in front, deployed to AWS or Azure for clients and Vercel/Heroku for side projects. CI/CD so nothing depends on my laptop."],
        chips: ["Docker", "Docker Compose", "Nginx", "AWS", "Azure", "Vercel", "Heroku", "CI/CD"], main: ["Docker"],
      },
      {
        slug: "testing", title: "testing & practice", meta: "PyTest · Jest · TDD", kind: "keep it working",
        tools: ["pytest", "jest", "tdd", "review", "scrum"],
        art: { bg: "#3f4a2a", fg: "#e4efc9", kind: "check" },
        body: ["PyTest and Jest, TDD when the problem is well-defined, code review always. Agile/Scrum teams, clean architecture, boring and reliable."],
        chips: ["PyTest", "Jest", "TDD", "code review", "Agile / Scrum", "clean architecture"], main: ["PyTest"],
      },
      {
        slug: "ai", title: "ai & llm apps", meta: "RAG · vector search · agents", kind: "the new toys",
        tools: ["rag", "chroma", "openai", "gemini", "claude", "skills"],
        art: { bg: "#4a2a3f", fg: "#f5dcef", kind: "spark" },
        body: ["RAG pipelines with ChromaDB and the OpenAI/Gemini APIs, agent skills for CLI coding tools, and a lot of tinkering with Claude Code. See goza and professional-rag."],
        chips: ["RAG", "vector search", "ChromaDB", "OpenAI API", "Gemini API", "agent skills", "Claude Code"], main: ["RAG"],
      },
    ],
  },
  {
    key: "about",
    title: "about",
    show: 4,
    single: true,
    items: [
      {
        slug: "me", title: "a little about me", meta: "Curitiba, BR",
        art: { bg: "#faf6f2", fg: "#432818", kind: "panda" },
        body: [
          "From a young age I've been captivated by technology and its endless possibilities. Today, as a senior full stack developer, I combine creativity with deep technical expertise to build high-performance, scalable web applications.",
          "My work spans robust Python backends with Flask and Django to dynamic React frontends — always focused on clean architecture and real impact.",
          "Beyond coding, my passion shows on my YouTube channel, where I share tutorials, insights and my personal journey through the tech world. That platform fuels my drive for continuous learning, collaboration and innovation in every project I take on 🚀",
        ],
      },
      { slug: "github", title: "GitHub", meta: "@Ross-cripto", ext: profile.github, art: { bg: "#24292f", fg: "#ffffff", kind: "gh" } },
      { slug: "linkedin", title: "LinkedIn", meta: "rosniel-allesta", ext: profile.linkedin, art: { bg: "#0a66c2", fg: "#ffffff", kind: "in" } },
      { slug: "email", title: "Email", meta: profile.email, ext: `mailto:${profile.email}`, art: { bg: "#c8332e", fg: "#fff2f0", kind: "mail" } },
    ],
  },
];

export const sectionMap = Object.fromEntries(sections.map((s) => [s.key, s])) as Record<SectionKey, Section>;

export function getSection(key: string): Section | undefined {
  return (sections as Section[]).find((s) => s.key === key);
}
export function getItem(key: string, slug: string): { section: Section; item: Item } | undefined {
  const section = getSection(key);
  const item = section?.items.find((i) => i.slug === slug && !i.ext);
  return section && item ? { section, item } : undefined;
}
