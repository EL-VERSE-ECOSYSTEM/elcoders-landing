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
  CheckCircle2
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & APIs' | 'Databases & Storage' | 'Cloud & DevOps' | 'AI & Data Science' | 'Mobile & Cross-Platform' | 'Cybersecurity & Web3';
  description: string;
  experienceLevel: 'Core Expertise' | 'Production Ready' | 'Advanced Practice';
  icon: string; // Emoji or visual symbol representation
}

const TECH_ITEMS: TechItem[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages', description: 'Strict typing for scalable React, Node, and Next.js applications.', experienceLevel: 'Core Expertise', icon: '🔷' },
  { name: 'JavaScript (ES6+)', category: 'Languages', description: 'Modern asynchronous JavaScript across browser and server runtimes.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Python', category: 'Languages', description: 'High-performance AI/ML models, FastAPI backends, and automation scripts.', experienceLevel: 'Core Expertise', icon: '🐍' },
  { name: 'Go (Golang)', category: 'Languages', description: 'Concurrent microservices, CLI tools, and low-latency networking.', experienceLevel: 'Production Ready', icon: '🐹' },
  { name: 'Rust', category: 'Languages', description: 'Memory-safe systems programming, WebAssembly, and high-speed engines.', experienceLevel: 'Production Ready', icon: '🦀' },
  { name: 'Solidity', category: 'Languages', description: 'EVM smart contract engineering, DeFi tokens, and governance contracts.', experienceLevel: 'Production Ready', icon: '💎' },
  { name: 'PHP', category: 'Languages', description: 'Modern PHP 8+ with Laravel for e-commerce and web platforms.', experienceLevel: 'Production Ready', icon: '🐘' },
  { name: 'SQL', category: 'Languages', description: 'Relational query optimization, complex joins, and window functions.', experienceLevel: 'Core Expertise', icon: '📊' },

  // Frontend
  { name: 'Next.js 15', category: 'Frontend', description: 'React App Router, Server Components, SSR, ISR, and Turbopack.', experienceLevel: 'Core Expertise', icon: '▲' },
  { name: 'React 19', category: 'Frontend', description: 'Declarative UI components, custom hooks, and concurrent rendering.', experienceLevel: 'Core Expertise', icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first styling, responsive UI/UX design, and design tokens.', experienceLevel: 'Core Expertise', icon: '🎨' },
  { name: 'Vue.js / Nuxt', category: 'Frontend', description: 'Progressive JavaScript framework for interactive web dashboards.', experienceLevel: 'Production Ready', icon: '💚' },
  { name: 'Svelte / SvelteKit', category: 'Frontend', description: 'Zero-virtual-DOM compiled UI components with minimal bundle sizes.', experienceLevel: 'Production Ready', icon: '🔥' },
  { name: 'Redux Toolkit / Zustand', category: 'Frontend', description: 'Global state management and client cache synchronization.', experienceLevel: 'Core Expertise', icon: '📦' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', description: 'Asynchronous event-driven event loop runtime for web APIs.', experienceLevel: 'Core Expertise', icon: '🟢' },
  { name: 'Express.js', category: 'Backend & APIs', description: 'Lightweight RESTful API routing, middleware, and authentication.', experienceLevel: 'Core Expertise', icon: '🚀' },
  { name: 'NestJS', category: 'Backend & APIs', description: 'Enterprise TypeScript Node.js framework with dependency injection.', experienceLevel: 'Production Ready', icon: '🦁' },
  { name: 'FastAPI', category: 'Backend & APIs', description: 'High-performance Python ASGI backend framework with auto OpenAPI docs.', experienceLevel: 'Core Expertise', icon: '⚡' },
  { name: 'Django', category: 'Backend & APIs', description: 'Batteries-included Python web framework with ORM and admin UI.', experienceLevel: 'Production Ready', icon: '🎸' },
  { name: 'GraphQL', category: 'Backend & APIs', description: 'Flexible client-driven query language and schema definitions.', experienceLevel: 'Production Ready', icon: '📐' },
  { name: 'gRPC / Protocol Buffers', category: 'Backend & APIs', description: 'High-speed binary RPC communication for microservices.', experienceLevel: 'Advanced Practice', icon: '📡' },

  // Databases & Storage
  { name: 'PostgreSQL', category: 'Databases & Storage', description: 'ACID-compliant relational database with JSONB and pgvector.', experienceLevel: 'Core Expertise', icon: '🐘' },
  { name: 'MongoDB', category: 'Databases & Storage', description: 'Flexible document-oriented NoSQL database for unstructured data.', experienceLevel: 'Core Expertise', icon: '🍃' },
  { name: 'Redis', category: 'Databases & Storage', description: 'In-memory data store for caching, pub/sub messaging, and sessions.', experienceLevel: 'Core Expertise', icon: '🔴' },
  { name: 'MySQL / MariaDB', category: 'Databases & Storage', description: 'Relational database management for web applications.', experienceLevel: 'Production Ready', icon: '🐬' },
  { name: 'Prisma ORM', category: 'Databases & Storage', description: 'Next-generation auto-generated type-safe database client.', experienceLevel: 'Core Expertise', icon: '◮' },
  { name: 'Pinecone / Milvus', category: 'Databases & Storage', description: 'Vector databases for AI embedding similarity search and RAG.', experienceLevel: 'Production Ready', icon: '🌲' },

  // Cloud & DevOps
  { name: 'Docker', category: 'Cloud & DevOps', description: 'Containerization, reproducible runtimes, and Docker Compose.', experienceLevel: 'Core Expertise', icon: '🐳' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', description: 'Container orchestration, auto-scaling, and rolling updates.', experienceLevel: 'Production Ready', icon: '☸️' },
  { name: 'AWS Cloud', category: 'Cloud & DevOps', description: 'EC2, S3, Lambda, ECS, RDS, CloudFront, and Route 53.', experienceLevel: 'Core Expertise', icon: '☁️' },
  { name: 'Vercel / Netlify', category: 'Cloud & DevOps', description: 'Edge network deployment, serverless functions, and CI/CD pipelines.', experienceLevel: 'Core Expertise', icon: '▲' },
  { name: 'Terraform', category: 'Cloud & DevOps', description: 'Infrastructure as Code (IaC) for multi-cloud provisioning.', experienceLevel: 'Production Ready', icon: '🏗️' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps', description: 'Automated CI/CD pipelines, linting, testing, and deployments.', experienceLevel: 'Core Expertise', icon: '⚙️' },

  // AI & Data Science
  { name: 'OpenAI API / GPT-4o', category: 'AI & Data Science', description: 'LLM integration, system prompting, structured JSON outputs, and agents.', experienceLevel: 'Core Expertise', icon: '🤖' },
  { name: 'LangChain / LlamaIndex', category: 'AI & Data Science', description: 'Chaining LLM workflows, document ingestion, and autonomous agents.', experienceLevel: 'Core Expertise', icon: '🔗' },
  { name: 'PyTorch / TensorFlow', category: 'AI & Data Science', description: 'Deep learning neural networks and custom model training.', experienceLevel: 'Advanced Practice', icon: '🔥' },
  { name: 'Pandas & NumPy', category: 'AI & Data Science', description: 'Data processing, matrix manipulation, and analytical pipelines.', experienceLevel: 'Production Ready', icon: '🐼' },

  // Mobile & Cross-Platform
  { name: 'React Native', category: 'Mobile & Cross-Platform', description: 'Cross-platform native iOS & Android mobile applications.', experienceLevel: 'Core Expertise', icon: '📱' },
  { name: 'Flutter / Dart', category: 'Mobile & Cross-Platform', description: 'High-performance compiled mobile and desktop user interfaces.', experienceLevel: 'Production Ready', icon: '💙' },
  { name: 'PWA (Progressive Web Apps)', category: 'Mobile & Cross-Platform', description: 'Offline-capable installable web applications with push notifications.', experienceLevel: 'Core Expertise', icon: '🌐' },

  // Cybersecurity & Web3
  { name: 'OAuth2 / JWT', category: 'Cybersecurity & Web3', description: 'Secure identity protocols, social logins, and token validation.', experienceLevel: 'Core Expertise', icon: '🔑' },
  { name: 'Web3.js / Ethers.js', category: 'Cybersecurity & Web3', description: 'Ethereum blockchain interaction, RPC provider management.', experienceLevel: 'Production Ready', icon: '🔗' },
  { name: 'WAF & SSL Security', category: 'Cybersecurity & Web3', description: 'DDoS protection, rate limiting, and automated SSL termination.', experienceLevel: 'Core Expertise', icon: '🛡️' }
];

const TECH_CATEGORIES = [
  'All',
  'Languages',
  'Frontend',
  'Backend & APIs',
  'Databases & Storage',
  'Cloud & DevOps',
  'AI & Data Science',
  'Mobile & Cross-Platform',
  'Cybersecurity & Web3'
] as const;

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTech = TECH_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>EL CODERS Tech Stack</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#A855F7] bg-clip-text text-transparent mb-4">
            Technologies & Frameworks
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Discover the programming languages, cloud systems, AI engines, and modern frameworks powering our engineering ecosystem.
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
                placeholder="Search programming languages, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-[#2D2D4A] rounded-xl text-sm text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#6C2BD9] transition"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {TECH_CATEGORIES.map((cat) => (
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
            <p className="text-base text-[#94A3B8] mb-2">No technology found matching your search.</p>
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
