'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  Sparkles,
  Search,
  ExternalLink,
  Layers,
  Zap,
  Globe,
  Server,
  Smartphone,
  Workflow,
  Lock,
  Boxes,
  CheckCircle2,
  Brain,
  Binary
} from 'lucide-react';

interface TechItem {
  name: string;
  category:
    | 'Languages'
    | 'Frontend'
    | 'Backend & APIs'
    | 'Databases & Storage'
    | 'Cloud & DevOps'
    | 'AI & Data Science'
    | 'Mobile & Desktop'
    | 'Cybersecurity & Web3';
  description: string;
  experienceLevel: 'Core Expertise' | 'Production Ready' | 'Advanced Practice';
  icon: string;
}

const ALL_TECHNOLOGIES: TechItem[] = [
  // --- LANGUAGES ---
  { name: 'TypeScript', category: 'Languages', description: 'Strict static typing for robust, scale-ready frontend and backend applications.', experienceLevel: 'Core Expertise', icon: '🔷' },
  { name: 'JavaScript (ES6+)', category: 'Languages', description: 'Modern ECMAScript asynchronous event-driven web programming.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Python', category: 'Languages', description: 'AI/ML algorithms, data science, automation, and FastAPI/Django backends.', experienceLevel: 'Core Expertise', icon: '🐍' },
  { name: 'Go (Golang)', category: 'Languages', description: 'Concurrent microservices, high-throughput network services, and CLI tools.', experienceLevel: 'Core Expertise', icon: '🐹' },
  { name: 'Rust', category: 'Languages', description: 'Memory-safe systems programming, WebAssembly engines, and high-performance services.', experienceLevel: 'Production Ready', icon: '🦀' },
  { name: 'Solidity', category: 'Languages', description: 'EVM smart contract development for Ethereum, Polygon, and BSC decentralized apps.', experienceLevel: 'Production Ready', icon: '💎' },
  { name: 'PHP', category: 'Languages', description: 'PHP 8+ modern web architecture, WordPress custom engines, and Laravel frameworks.', experienceLevel: 'Core Expertise', icon: '🐘' },
  { name: 'C# / .NET Core', category: 'Languages', description: 'Enterprise cross-platform web services, Windows services, and Unity backends.', experienceLevel: 'Production Ready', icon: '🎯' },
  { name: 'Java / Kotlin', category: 'Languages', description: 'Android mobile app development, Spring Boot enterprise microservices.', experienceLevel: 'Production Ready', icon: '☕' },
  { name: 'Swift', category: 'Languages', description: 'Native iOS, iPadOS, and macOS high-performance application development.', experienceLevel: 'Production Ready', icon: '🍎' },
  { name: 'SQL', category: 'Languages', description: 'Relational query optimization, data modeling, views, and stored procedures.', experienceLevel: 'Core Expertise', icon: '📊' },
  { name: 'C / C++', category: 'Languages', description: 'Low-level memory management, embedded systems, and engine optimization.', experienceLevel: 'Advanced Practice', icon: '⚙️' },
  { name: 'Ruby', category: 'Languages', description: 'Productive web application development with Ruby on Rails framework.', experienceLevel: 'Production Ready', icon: '💎' },
  { name: 'Dart', category: 'Languages', description: 'Client-optimized programming language for multi-platform Flutter apps.', experienceLevel: 'Core Expertise', icon: '🎯' },

  // --- FRONTEND ---
  { name: 'Next.js 15', category: 'Frontend', description: 'React App Router, Server Components, SSR, ISR, and Turbopack bundler.', experienceLevel: 'Core Expertise', icon: '▲' },
  { name: 'React 19', category: 'Frontend', description: 'Declarative component-driven user interfaces with concurrent rendering.', experienceLevel: 'Core Expertise', icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first CSS framework for rapid responsive component design.', experienceLevel: 'Core Expertise', icon: '🎨' },
  { name: 'Vue.js / Nuxt 3', category: 'Frontend', description: 'Progressive JavaScript framework for scalable web dashboards and SPAs.', experienceLevel: 'Core Expertise', icon: '💚' },
  { name: 'Svelte / SvelteKit', category: 'Frontend', description: 'Compile-time UI framework without virtual DOM overhead.', experienceLevel: 'Production Ready', icon: '🔥' },
  { name: 'Angular', category: 'Frontend', description: 'Opinionated enterprise web framework with RxJS state management.', experienceLevel: 'Production Ready', icon: '🅰️' },
  { name: 'Redux Toolkit / Zustand', category: 'Frontend', description: 'Predictable centralized global state management for complex React UIs.', experienceLevel: 'Core Expertise', icon: '📦' },
  { name: 'TanStack Query (React Query)', category: 'Frontend', description: 'Powerful asynchronous server-state fetching, caching, and mutation.', experienceLevel: 'Core Expertise', icon: '🔄' },
  { name: 'HTML5 & CSS3 / SCSS', category: 'Frontend', description: 'Semantic markup, modern CSS grid, flexbox layouts, and keyframe animations.', experienceLevel: 'Core Expertise', icon: '🌐' },
  { name: 'Shadcn UI & Radix UI', category: 'Frontend', description: 'Accessible headless component primitives styled with Tailwind CSS.', experienceLevel: 'Core Expertise', icon: '🧩' },
  { name: 'Framer Motion', category: 'Frontend', description: 'Production-grade declarative animation library for React applications.', experienceLevel: 'Core Expertise', icon: '✨' },
  { name: 'Three.js / WebGL', category: 'Frontend', description: '3D graphics rendering in the browser for immersive web experiences.', experienceLevel: 'Advanced Practice', icon: '🎲' },

  // --- BACKEND & APIS ---
  { name: 'Node.js', category: 'Backend & APIs', description: 'Asynchronous event-driven V8 engine JavaScript runtime for web servers.', experienceLevel: 'Core Expertise', icon: '🟢' },
  { name: 'Express.js', category: 'Backend & APIs', description: 'Fast, unopinionated, minimalist web routing framework for Node.js.', experienceLevel: 'Core Expertise', icon: '🚀' },
  { name: 'NestJS', category: 'Backend & APIs', description: 'Progressive TypeScript Node.js framework for scalable server-side apps.', experienceLevel: 'Core Expertise', icon: '🦁' },
  { name: 'FastAPI', category: 'Backend & APIs', description: 'Modern, high-performance Python ASGI backend framework with OpenAPI docs.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Django / Django REST', category: 'Backend & APIs', description: 'High-level Python web framework encouraging rapid secure development.', experienceLevel: 'Core Expertise', icon: '🎸' },
  { name: 'Laravel', category: 'Backend & APIs', description: 'Elegant PHP framework for web artisans with ORM, queues, and auth.', experienceLevel: 'Core Expertise', icon: '🔴' },
  { name: 'Spring Boot', category: 'Backend & APIs', description: 'Enterprise Java framework for production-grade microservices.', experienceLevel: 'Production Ready', icon: '🌱' },
  { name: 'GraphQL / Apollo', category: 'Backend & APIs', description: 'Flexible query language for APIs and server side graph execution.', experienceLevel: 'Core Expertise', icon: '📐' },
  { name: 'gRPC & Protocol Buffers', category: 'Backend & APIs', description: 'High-speed binary remote procedure call communication protocol.', experienceLevel: 'Production Ready', icon: '📡' },
  { name: 'RESTful API Architecture', category: 'Backend & APIs', description: 'Standardized HTTP endpoint design, rate limiting, and OpenAPI specifications.', experienceLevel: 'Core Expertise', icon: '🔌' },
  { name: 'WebSockets & Socket.io', category: 'Backend & APIs', description: 'Full-duplex real-time bidirectional communication channels.', experienceLevel: 'Core Expertise', icon: '💬' },

  // --- DATABASES & STORAGE ---
  { name: 'PostgreSQL', category: 'Databases & Storage', description: 'ACID-compliant relational database with JSONB and pgvector support.', experienceLevel: 'Core Expertise', icon: '🐘' },
  { name: 'MongoDB', category: 'Databases & Storage', description: 'Flexible document-oriented NoSQL database for unstructured data.', experienceLevel: 'Core Expertise', icon: '🍃' },
  { name: 'Redis', category: 'Databases & Storage', description: 'Ultra-fast in-memory data store for caching, pub/sub, and session locks.', experienceLevel: 'Core Expertise', icon: '🔴' },
  { name: 'MySQL / MariaDB', category: 'Databases & Storage', description: 'Battle-tested relational database management for web applications.', experienceLevel: 'Core Expertise', icon: '🐬' },
  { name: 'Supabase', category: 'Databases & Storage', description: 'Open-source Firebase alternative powered by PostgreSQL with real-time sync.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Firebase / Firestore', category: 'Databases & Storage', description: 'Google cloud NoSQL database, authentication, and real-time triggers.', experienceLevel: 'Core Expertise', icon: '🔥' },
  { name: 'Prisma ORM', category: 'Databases & Storage', description: 'Next-generation type-safe Node.js and TypeScript ORM.', experienceLevel: 'Core Expertise', icon: '◮' },
  { name: 'DynamoDB', category: 'Databases & Storage', description: 'AWS fully managed key-value and document NoSQL database.', experienceLevel: 'Production Ready', icon: '⚡' },
  { name: 'Pinecone / Milvus', category: 'Databases & Storage', description: 'High-dimensional vector databases for AI similarity search and RAG.', experienceLevel: 'Core Expertise', icon: '🌲' },
  { name: 'SQLite', category: 'Databases & Storage', description: 'Lightweight self-contained zero-configuration embedded database.', experienceLevel: 'Core Expertise', icon: '💾' },
  { name: 'Elasticsearch / OpenSearch', category: 'Databases & Storage', description: 'Distributed search engine for full-text search and log analytics.', experienceLevel: 'Production Ready', icon: '🔍' },

  // --- CLOUD & DEVOPS ---
  { name: 'Docker & Docker Compose', category: 'Cloud & DevOps', description: 'Application containerization, multi-stage builds, and environment isolation.', experienceLevel: 'Core Expertise', icon: '🐳' },
  { name: 'Kubernetes (K8s)', category: 'Cloud & DevOps', description: 'Automated container deployment, scaling, healing, and service orchestration.', experienceLevel: 'Core Expertise', icon: '☸️' },
  { name: 'Amazon Web Services (AWS)', category: 'Cloud & DevOps', description: 'EC2, S3, Lambda, CloudFront, ECS, RDS, IAM, and Route 53.', experienceLevel: 'Core Expertise', icon: '☁️' },
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud & DevOps', description: 'Google Cloud Run, GKE, Compute Engine, BigQuery, and Firebase.', experienceLevel: 'Production Ready', icon: '🌐' },
  { name: 'Vercel / Netlify', category: 'Cloud & DevOps', description: 'Edge network hosting, serverless edge functions, and continuous previews.', experienceLevel: 'Core Expertise', icon: '▲' },
  { name: 'Terraform', category: 'Cloud & DevOps', description: 'Infrastructure as Code (IaC) for multi-cloud declarative provisioning.', experienceLevel: 'Core Expertise', icon: '🏗️' },
  { name: 'GitHub Actions / CI-CD', category: 'Cloud & DevOps', description: 'Automated build, test, lint, and deployment pipelines.', experienceLevel: 'Core Expertise', icon: '⚙️' },
  { name: 'Nginx / Caddy', category: 'Cloud & DevOps', description: 'High-performance web server, reverse proxy, load balancer, and SSL proxy.', experienceLevel: 'Core Expertise', icon: '🟢' },
  { name: 'Prometheus & Grafana', category: 'Cloud & DevOps', description: 'Real-time metrics monitoring, alerting dashboards, and system observability.', experienceLevel: 'Production Ready', icon: '📈' },

  // --- AI & DATA SCIENCE ---
  { name: 'OpenAI API / GPT-4o', category: 'AI & Data Science', description: 'LLM fine-tuning, function calling, vision models, and prompt engineering.', experienceLevel: 'Core Expertise', icon: '🤖' },
  { name: 'LangChain / LlamaIndex', category: 'AI & Data Science', description: 'Chaining LLM workflows, document ingestion pipelines, and AI agents.', experienceLevel: 'Core Expertise', icon: '🔗' },
  { name: 'PyTorch', category: 'AI & Data Science', description: 'Open-source deep learning framework for computer vision and NLP models.', experienceLevel: 'Production Ready', icon: '🔥' },
  { name: 'TensorFlow / Keras', category: 'AI & Data Science', description: 'End-to-end open source platform for machine learning and neural networks.', experienceLevel: 'Production Ready', icon: '🧠' },
  { name: 'Hugging Face Transformers', category: 'AI & Data Science', description: 'Pre-trained NLP models, speech recognition, and diffusion pipelines.', experienceLevel: 'Core Expertise', icon: '🤗' },
  { name: 'Pandas & NumPy', category: 'AI & Data Science', description: 'High-performance numerical data structures, dataframes, and matrix math.', experienceLevel: 'Core Expertise', icon: '🐼' },
  { name: 'Scikit-Learn', category: 'AI & Data Science', description: 'Machine learning algorithms for classification, regression, and clustering.', experienceLevel: 'Production Ready', icon: '📊' },

  // --- MOBILE & DESKTOP ---
  { name: 'React Native & Expo', category: 'Mobile & Desktop', description: 'Cross-platform native iOS & Android apps from a single JavaScript codebase.', experienceLevel: 'Core Expertise', icon: '📱' },
  { name: 'Flutter & Dart', category: 'Mobile & Desktop', description: 'Google multi-platform UI toolkit compiled natively for mobile, web, and desktop.', experienceLevel: 'Core Expertise', icon: '💙' },
  { name: 'Electron.js', category: 'Mobile & Desktop', description: 'Build cross-platform desktop applications with JavaScript, HTML, and CSS.', experienceLevel: 'Production Ready', icon: '💻' },
  { name: 'Tauri / Rust Desktop', category: 'Mobile & Desktop', description: 'Lightweight, ultra-fast desktop apps using Webview frontend and Rust backend.', experienceLevel: 'Production Ready', icon: '⚡' },
  { name: 'PWA (Progressive Web Apps)', category: 'Mobile & Desktop', description: 'Installable web applications with offline service workers and push notifications.', experienceLevel: 'Core Expertise', icon: '🌐' },

  // --- CYBERSECURITY & WEB3 ---
  { name: 'OAuth 2.0 & OpenID Connect', category: 'Cybersecurity & Web3', description: 'Secure identity federation, social logins, access tokens, and JWTs.', experienceLevel: 'Core Expertise', icon: '🔑' },
  { name: 'WAF & DDoS Mitigation', category: 'Cybersecurity & Web3', description: 'Cloudflare WAF rules, rate limiting, and zero-trust perimeter defense.', experienceLevel: 'Core Expertise', icon: '🛡️' },
  { name: 'Ethers.js / Web3.js', category: 'Cybersecurity & Web3', description: 'Client-side Ethereum blockchain provider & smart contract interaction.', experienceLevel: 'Production Ready', icon: '🔗' },
  { name: 'Wagmi & Viem', category: 'Cybersecurity & Web3', description: 'TypeScript interfaces for Ethereum, wallet connection, and contract calls.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Hardhat & Foundry', category: 'Cybersecurity & Web3', description: 'Smart contract development environments, unit testing, and gas benchmarks.', experienceLevel: 'Production Ready', icon: '🔨' }
];

const CATEGORIES = [
  'All',
  'Languages',
  'Frontend',
  'Backend & APIs',
  'Databases & Storage',
  'Cloud & DevOps',
  'AI & Data Science',
  'Mobile & Desktop',
  'Cybersecurity & Web3'
] as const;

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTech = ALL_TECHNOLOGIES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>EL CODERS Complete Engineering Matrix</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#A855F7] bg-clip-text text-transparent mb-4">
            Technologies, Frameworks & Stacks
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Explore our complete tech ecosystem spanning languages, frameworks, cloud DevOps, AI engines, mobile tools, and cybersecurity standards.
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-[#1A1A2E] p-4 rounded-2xl border border-[#2D2D4A]">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search stack (e.g., Python, React, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-[#2D2D4A] rounded-xl text-sm text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#6C2BD9] transition"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#6C2BD9] text-white shadow-md shadow-[#6C2BD9]/40'
                      : 'bg-[#0F172A] text-[#94A3B8] hover:text-white border border-[#2D2D4A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Total Count Header */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
            Showing <span className="text-[#FFB800]">{filteredTech.length}</span> technologies in stack
          </span>
        </div>

        {/* Tech Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E]/90 border border-[#2D2D4A] rounded-2xl p-5 hover:border-[#6C2BD9]/60 hover:shadow-lg hover:shadow-[#6C2BD9]/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-[#0F172A] border border-[#2D2D4A]">
                      {tech.icon}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#A855F7] transition-colors">
                        {tech.name}
                      </h3>
                      <span className="text-[10px] text-[#94A3B8] font-semibold">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#2D2D4A]/50 text-[11px]">
                <span className="text-[#94A3B8]">Proficiency</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {tech.experienceLevel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="text-center py-16 bg-[#1A1A2E] rounded-2xl border border-[#2D2D4A]">
            <p className="text-base text-[#94A3B8] mb-2">No technology found matching your search query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-[#A855F7] underline font-semibold hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Tech Stack Guarantee Banner */}
        <div className="mt-16 bg-[#1A1A2E] border border-[#2D2D4A] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 flex items-center justify-center text-[#A855F7] mx-auto md:mx-0">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Daily Velocity</h3>
              <p className="text-xs text-[#94A3B8]">
                We ship production-ready code with continuous deployment and strict zero-downtime releases.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 flex items-center justify-center text-[#A855F7] mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Enterprise Security</h3>
              <p className="text-xs text-[#94A3B8]">
                OWASP guidelines, encrypted data at rest and in transit, and security vulnerability scans.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 flex items-center justify-center text-[#A855F7] mx-auto md:mx-0">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Custom Stacks</h3>
              <p className="text-xs text-[#94A3B8]">
                Have specific stack requirements? We build custom tailored architectures to match your infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2D2D4A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#94A3B8]">
              Ready to kickstart your technical stack with EL CODERS?
            </span>
            <a
              href="https://wa.link/d4oxqj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white rounded-xl text-xs font-bold shadow-md shadow-[#6C2BD9]/30 hover:scale-105 transition"
            >
              Request Tech Architecture Consult
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
