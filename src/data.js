export const images = {
  home: "https://images.unsplash.com/photo-1577438569227-4b3445c673cf?auto=format&fit=crop&w=2200&q=88",
  moon: "https://images.unsplash.com/photo-1777195680778-f89d025251ac?auto=format&fit=crop&w=2200&q=88",
  eclipse:
    "https://images.unsplash.com/photo-1529788295308-1eace6f67388?auto=format&fit=crop&w=2200&q=88",
  astronaut:
    "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&w=1600&q=84",
  galaxy:
    "https://images.unsplash.com/photo-1706800696671-570820e7ff39?auto=format&fit=crop&w=1600&q=84",
  nebula:
    "https://images.unsplash.com/photo-1708112292872-fd5612affa79?auto=format&fit=crop&w=1600&q=84",
  lunar:
    "https://images.unsplash.com/photo-1777277539249-34020e857900?auto=format&fit=crop&w=1600&q=84",
  earth:
    "https://images.unsplash.com/photo-1700159915592-004562ddcf6f?auto=format&fit=crop&w=1600&q=84",
}

export const profile = {
  name: "Smit Limbasiya",
  role: "ICT Student · Software & AI Developer",
  location: "Gujarat, India",
  introduction:
    "ICT student and developer focused on software engineering, backend systems, Generative AI, machine learning, and scalable applications.",
  personalEmail: "smitlimbasiya24412@gmail.com",
  phone: "+91 xxxxxxxxxx",
}

export const contactConfig = {
  email: profile.personalEmail,
  universityEmail: profile.universityEmail,
  phone: profile.phone,
  github: "https://github.com/SMIT-LIMBASIYA",
  linkedin: "https://linkedin.com/in/smitlimbasiya",
  leetcode: "https://leetcode.com/u/LB_SMIT/",
  gfg: "https://www.geeksforgeeks.org/profile/smitlimbas480q",
}

export const siteConfig = {
  resumePath: "/resume/smit-limbasiya-resume.pdf",
  resumeFileName: "Smit-Limbasiya-Resume.pdf",
}

export const projects = [
  {
    id: "capitalup-ai",
    title: "CapitalUP - Real Time Brokerage Platform",
    category: "FinTech",
    image: "/project-covers/capitalup.png",
    description:
      "A real-time brokerage platform with advanced trading features.",
    detail:
      "The public repository contains the AI component of CapitalUP: PostgreSQL-backed account, order, portfolio, and stock tools; an input guard; intent routing; database migrations; and evaluation datasets. The broader Node.js trading engine described in the resume is not publicly accessible, so its performance claims are intentionally not displayed here.",
    technologies: [
      "Nodejs",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "LangChain",
    ],
    highlights: [
      "Engineered an in-memory price-time priority matching engine using Red-Black Tree.",
      "Enigeered Order-Matching Engine Supporting Market, Limit, IOC, FOK orders with partial fills, cancellation and deterministic per-symbol order processing.",
      "Database-backed tools for stock quotes, portfolios, orders, balances, and profiles",
      "Structured input guard and decision-routing layers for brokerage queries",
      "Public architecture includes async APIs, caching, vector retrieval, and observability dependencies",
    ],
    repository: "https://github.com/UTSKER/CapitalUp",
    demo: null,
    source: "Public repository verified",
  },
  {
    id: "dbuddy",
    title: "DBuddy",
    category: "Generative AI",
    image: "/project-covers/dbuddy.png",
    description:
      "A team-built no-code PostgreSQL workspace for creating, querying, visualizing, and understanding databases with natural-language assistance.",
    detail:
      "DBuddy combines a Next.js interface with PostgreSQL, LangChain, LangGraph, authentication, project history, schema diagrams, query execution, summaries, optimization, imports, exports, and constraint-aware mock-data tooling. Smit is listed as a contributor in the public team repository.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "Jest",
      "Stryker",
    ],
    highlights: [
      "Natural-language project creation, query suggestions, and error parsing",
      "Schema visualization, database summaries, query history, import, and export workflows",
      "Extensive Jest unit suite with mutation-testing configuration",
    ],
    repository: "https://github.com/pranshu05/BackendManager",
    demo: null,
    source: "Public team repository verified",
  },
  {
    id: "profit-pilot",
    title: "Profit-Pilot",
    category: "FinTech",
    image: "/project-covers/profit-pilot.png",
    description:
      "A research-grade reinforcement-learning framework for multi-asset cryptocurrency portfolio management using historical Binance market data.",
    detail:
      "The public team repository implements OHLCV ingestion, technical feature engineering, a custom Gymnasium trading environment, PPO and recurrent PPO training, artifact tracking, risk controls, and held-out evaluation. Repository documentation identifies Smit as a co-author.",
    technologies: [
      "Python",
      "Gymnasium",
      "PPO",
      "Recurrent PPO",
      "LSTM",
      "Binance data",
    ],
    highlights: [
      "Supports BTC/USDT and ETH/USDT with fees, slippage, drawdown limits, and risk controls",
      "Includes local and Colab training pipelines, checkpoints, tests, and evaluation artifacts",
      "Documented PPO test: 1.79% return and 9.55% max drawdown versus a -17.99% equal-weight benchmark",
    ],
    repository: "https://github.com/D-vyesh/Profit-Pilot",
    demo: null,
    source: "Public team repository verified",
  },
  {
    id: "smart-temple",
    title: "Smart Temple Management",
    category: "Machine Learning",
    image: "/project-covers/smart-temple.png",
    description:
      "A full-stack forecasting and operations system for Tirupati pilgrim footfall, staffing, actual-count tracking, and crowd-aware recommendations.",
    detail:
      "The repository combines a SARIMAX forecasting model with an Express and MongoDB backend plus a React operations dashboard. The checked-in notebook reports a 6.4% test MAPE for the buffered SARIMAX forecast; the previously referenced 2.38% figure is not present in the public evidence and is omitted.",
    technologies: [
      "Python",
      "SARIMAX",
      "Express.js",
      "MongoDB",
      "React",
      "Recharts",
    ],
    highlights: [
      "Sequential SARIMAX forecasting bridge with persisted model artifacts",
      "APIs for forecasts, actual pilgrim counts, staff allocation, and authentication",
      "Interactive dashboard for temple operations, wait simulation, and analytics",
    ],
    repository: "https://github.com/SMIT-LIMBASIYA/Smart-Temple-Management",
    demo: null,
    source: "Public repository verified",
  },
  {
    id: "amazon-analytics",
    title: "Amazon Sales Analytics",
    category: "Data",
    image: "/project-covers/amazon-analytics.png",
    description:
      "A modular Python analytics pipeline for pricing, discount elasticity, customer-review behavior, revenue, and sales seasonality.",
    detail:
      "The repository contains reusable cleaning and analysis modules plus automated visual reporting for product performance, review engagement, discount dynamics, and monthly category trends.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Reusable product, review, monthly, and master analysis pipelines",
      "Currency, rating, discount, and review-count normalization",
      "Automated high-resolution visual reports and documented EDA findings",
    ],
    repository:
      "https://github.com/SMIT-LIMBASIYA/Amazon-Sales-Analytics-insights",
    demo: null,
    source: "Public repository verified",
  },
  {
    id: "uber-database",
    title: "Uber Ride-Sharing Database",
    category: "Backend",
    image: "/project-covers/uber-database.png",
    description:
      "A BCNF-compliant PostgreSQL schema modeling an Uber-like ride-sharing platform and its operational relationships.",
    detail:
      "The SQL project models users, drivers, rides, vehicles, ratings, payments, promotions, acceptances, and cancellations, accompanied by normalization documentation and a relational diagram.",
    technologies: ["PostgreSQL", "SQL", "BCNF", "Data modeling"],
    highlights: [
      "Normalized schema for core ride-sharing entities and relationships",
      "DDL and generated-data scripts for realistic SQL exploration",
      "Relational diagram and BCNF design documentation",
    ],
    repository: "https://github.com/SMIT-LIMBASIYA/uber-ride-sharing-database",
    demo: null,
    source: "Public repository verified",
  },
]

export const skillGroups = [
  {
    number: "01",
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Webhooks",
    ],
  },
  {
    number: "03",
    title: "Data & Distributed Systems",
    items: ["PostgreSQL", "MongoDB", "Redis", "Redis Pub/Sub", "Apache Kafka"],
  },
  {
    number: "04",
    title: "Generative AI",
    items: [
      "LLM integration",
      "Prompt engineering",
      "Gemini API",
      "LangChain",
      "LangGraph",
      "RAG",
      "Embeddings",
      "Vector databases",
      "RAG evaluation",
    ],
  },
  {
    number: "05",
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "XGBoost",
      "Feature engineering",
      "Model evaluation",
      "Time-series forecasting",
    ],
  },
  {
    number: "06",
    title: "Deep Learning",
    items: [
      "Neural networks",
      "RNN",
      "LSTM",
      "GRU",
      "Transformers",
      "Reinforcement learning",
    ],
  },
  {
    number: "07",
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Jest",
      "Stryker",
      "AWS EC2",
      "VS Code",
    ],
  },
  {
    number: "08",
    title: "AI-Assisted Development",
    items: ["Codex", "Claude", "Cursor", "GitHub Copilot", "Antigravity"],
  },
]

export const experience = [
  {
    period: "December 2024",
    role: "Group Leader",
    place: "Rural Development Internship · Bolbala Charitable Trust, Rajkot",
    copy: "Led a student team and coordinated ground-level activities during the rural development internship.",
  },
  {
    period: "2024 — Present",
    role: "Vice Captain & Mentor",
    place: "DAU College Cricket Team",
    copy: "Supports team leadership, match preparation, and coordination alongside academic and development work.",
  },
  {
    period: "May — July 2026",
    role: "AI/ML Intern",
    place: "InternPe · Remote",
    copy: "Learn Machine Learning from basic to advance level and make hand-on projects",
  }
]

export const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech in Information and Communication Technology",
    place: "Dhirubhai Ambani University · Gandhinagar, Gujarat",
    detail: "CGPA: 7.13 / 10",
  },
  {
    period: "2022 — 2023",
    title: "Higher Secondary Education · Class XII",
    place: "Aashadeep IIT · GHSEB · Surat",
    detail: "Percentage: 83.53%",
  },
  {
    period: "2020 — 2021",
    title: "Secondary Education · Class X",
    place: "Sadhna Niketan Vidhyalay · GSEB · Surat",
    detail: "Percentage: 88.33%",
  },
]

export const achievements = [
  "Solved 625+ Data Structures and Algorithms problems on LeetCode.",
  "Secured 98.98 percentile in JEE Main.",
]

export const spokenLanguages = [
  "English · Fluent",
  "Hindi · Fluent",
  "Gujarati · Native",
  "Spanish · Basic",
]

export const hobbies = ["Sports", "Cricket", "Running", "Travel", "Movies", "Music", "Problem Solving"]
