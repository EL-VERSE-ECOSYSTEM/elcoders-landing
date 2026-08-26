'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Search,
  ExternalLink,
  Code,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: 'Fintech' | 'AI & Automation' | 'E-Commerce' | 'SaaS & Enterprise' | 'Healthcare & Edu' | 'Web3 & Security';
  description: string;
  highlights: string[];
  techStack: string[];
  badge: string;
}

const PORTFOLIO_PRODUCTS: Product[] = [
  {
    id: 'paypulse',
    title: 'PayPulse Global',
    category: 'Fintech',
    description: 'Multi-currency digital wallet, cross-border remittance engine, and automated Korapay & Stripe gateway integration.',
    highlights: ['Instant FX settlement', 'PCI-DSS compliant architecture', 'KYC/AML verification pipelines'],
    techStack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    badge: 'Production Ready'
  },
  {
    id: 'autodesk-ai',
    title: 'AutoDesk AI Assistant',
    category: 'AI & Automation',
    description: 'Autonomous customer support agent with OpenAI LLM fine-tuning, RAG document search, and ticket dispatch.',
    highlights: ['99.2% query accuracy', 'Multi-lingual support', 'Live agent handoff trigger'],
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'Pinecone', 'React'],
    badge: 'Featured AI'
  },
  {
    id: 'shopverse',
    title: 'ShopVerse Marketplace',
    category: 'E-Commerce',
    description: 'High-throughput multi-vendor e-commerce platform featuring vendor dashboards, live inventory, and escrow payouts.',
    highlights: ['Sub-second page loads', 'Vendor payouts automation', 'Order tracking & webhooks'],
    techStack: ['Next.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Docker'],
    badge: 'Popular'
  },
  {
    id: 'healthsync',
    title: 'HealthSync Telemedicine EHR',
    category: 'Healthcare & Edu',
    description: 'HIPAA-compliant healthcare management portal with live WebRTC video consultations and digital prescription dispatch.',
    highlights: ['End-to-end encrypted records', 'WebRTC HD video calls', 'Automated SMS appointment reminders'],
    techStack: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Twilio'],
    badge: 'Enterprise'
  },
  {
    id: 'cloudscale',
    title: 'CloudScale SaaS Core',
    category: 'SaaS & Enterprise',
    description: 'Multi-tenant B2B SaaS architecture engine with role-based access control, subscription tiers, and billing metrics.',
    highlights: ['Multi-tenant schema isolation', 'Usage-based metering', 'Stripe & PayPal billing'],
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    badge: 'Turnkey Solution'
  },
  {
    id: 'edusphere',
    title: 'EduSphere LMS',
    category: 'Healthcare & Edu',
    description: 'Interactive online learning management system with course builder, quiz grading engine, and certification generator.',
    highlights: ['Interactive video playback', 'Automated PDF certificates', 'Student progress analytics'],
    techStack: ['Vue.js', 'Django', 'Python', 'AWS S3', 'Redis'],
    badge: 'Deliverable'
  },
  {
    id: 'logitrack',
    title: 'LogiTrack Global Supply',
    category: 'SaaS & Enterprise',
    description: 'Real-time supply chain management and vehicle fleet tracking engine using GPS telematics and route optimization.',
    highlights: ['Real-time map telematics', 'Fuel consumption analytics', 'Driver dispatch queue'],
    techStack: ['React Native', 'Node.js', 'Socket.io', 'Google Maps API'],
    badge: 'Logistics Core'
  },
  {
    id: 'proptech',
    title: 'PropTech Direct',
    category: 'SaaS & Enterprise',
    description: 'Smart property management portal with automated rent collection, tenant screening, and virtual 3D tour integration.',
    highlights: ['Automated rent payout split', 'Maintenance ticket workflow', 'Digital lease signatures'],
    techStack: ['Next.js', 'Express', 'PostgreSQL', 'AWS CloudFront'],
    badge: 'PropTech'
  },
  {
    id: 'nexus-dex',
    title: 'Nexus Web3 DEX Hub',
    category: 'Web3 & Security',
    description: 'Decentralized exchange aggregator, liquidity pool staking platform, and non-custodial crypto wallet manager.',
    highlights: ['Solidity audited smart contracts', 'Multi-chain support (EVM & Solana)', 'Real-time price feeds'],
    techStack: ['Solidity', 'Ethers.js', 'Next.js', 'Wagmi', 'Tailwind CSS'],
    badge: 'Web3 Core'
  },
  {
    id: 'cybershield',
    title: 'CyberShield Vulnerability Guard',
    category: 'Web3 & Security',
    description: 'Automated cybersecurity threat intelligence scanner for API endpoints, SSL integrity, and dependency audits.',
    highlights: ['Automated CVE scanning', 'Real-time breach alerts', 'Compliance report generation'],
    techStack: ['Go', 'Python', 'Docker', 'Elasticsearch', 'Grafana'],
    badge: 'Secured'
  },
  {
    id: 'eventflow',
    title: 'EventFlow Live Ticketing',
    category: 'SaaS & Enterprise',
    description: 'Event management platform with dynamic seat selection, QR code ticket validation, and live sales telemetry.',
    highlights: ['Instant QR verification', 'High-concurrency queueing', 'Payout distribution'],
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Redis', 'PostgreSQL'],
    badge: 'High Traffic'
  },
  {
    id: 'workpulse',
    title: 'WorkPulse HRM & Payroll',
    category: 'SaaS & Enterprise',
    description: 'Enterprise workforce management solution for attendance tracking, leave approvals, and multi-currency payroll.',
    highlights: ['Geolocation check-in', 'Tax calculation engine', 'Direct bank payout integration'],
    techStack: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'Docker'],
    badge: 'Enterprise'
  },
  {
    id: 'foodrush',
    title: 'FoodRush Delivery Ecosystem',
    category: 'E-Commerce',
    description: 'On-demand food delivery suite featuring customer mobile app, driver route dispatcher, and restaurant kitchen portal.',
    highlights: ['Live order status updates', 'Optimized driver routing', 'In-app digital wallet'],
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io'],
    badge: 'Complete Suite'
  },
  {
    id: 'medscan-ai',
    title: 'MedScan AI Diagnostic Core',
    category: 'AI & Automation',
    description: 'Medical imaging AI model for detecting anomalies in X-rays and MRI scans with high confidence scoring.',
    highlights: ['DICOM image format support', 'Deep learning classification', 'Radiologist review portal'],
    techStack: ['PyTorch', 'Python', 'FastAPI', 'React', 'Tailwind CSS'],
    badge: 'AI Healthcare'
  },
  {
    id: 'streamhub',
    title: 'StreamHub VOD Platform',
    category: 'SaaS & Enterprise',
    description: 'Video-on-demand and live streaming infrastructure with adaptive HLS transcoding and DRM content protection.',
    highlights: ['Sub-second latency video', 'Adaptive bitrate streaming', 'Subscription & PPV paywall'],
    techStack: ['FFmpeg', 'Node.js', 'Next.js', 'AWS CloudFront', 'PostgreSQL'],
    badge: 'Media Core'
  },
  {
    id: 'ridex',
    title: 'RideX Urban Mobility',
    category: 'SaaS & Enterprise',
    description: 'Ride-hailing platform with rider app, driver app, surge pricing algorithm, and automated route dispatcher.',
    highlights: ['Real-time driver tracking', 'Automated fare estimation', 'In-app SOS security alerts'],
    techStack: ['React Native', 'Go', 'Redis', 'PostgreSQL', 'WebSockets'],
    badge: 'Mobility'
  },
  {
    id: 'creatorstack',
    title: 'CreatorStack Fan Portal',
    category: 'E-Commerce',
    description: 'Monetization platform for digital creators offering subscriptions, exclusive content feeds, and digital product sales.',
    highlights: ['Custom paywalled feeds', 'Direct fan tip processing', 'Instant creator payouts'],
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Supabase'],
    badge: 'Creator Economy'
  },
  {
    id: 'smartfarm',
    title: 'SmartFarm IoT Portal',
    category: 'SaaS & Enterprise',
    description: 'Precision agriculture IoT monitoring dashboard reading soil moisture, ambient temperature, and automated irrigation.',
    highlights: ['Sensor telemetry streaming', 'Automated valve controls', 'Weather forecast integration'],
    techStack: ['MQTT', 'Node.js', 'React', 'InfluxDB', 'Grafana'],
    badge: 'IoT Solutions'
  },
  {
    id: 'insuredirect',
    title: 'InsureDirect Engine',
    category: 'Fintech',
    description: 'Automated insurance underwriting and claim processing portal with AI-powered fraud risk scoring.',
    highlights: ['Instant policy generation', 'Automated claim triage', 'Risk analytics engine'],
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    badge: 'InsurTech'
  },
  {
    id: 'governance',
    title: 'GovShield Compliance Suite',
    category: 'Web3 & Security',
    description: 'Enterprise workflow governance, compliance audit logging, and cryptographic document verification engine.',
    highlights: ['Immutable audit logs', 'Role-based approval trees', 'Automated PDF digital signing'],
    techStack: ['Next.js', 'Go', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    badge: 'Compliance'
  }
];

const CATEGORIES = [
  'All',
  'Fintech',
  'AI & Automation',
  'E-Commerce',
  'SaaS & Enterprise',
  'Healthcare & Edu',
  'Web3 & Security'
] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PORTFOLIO_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hello EL CODERS, I am interested in requesting full access/codebase deliverable for: ${productTitle}. Please provide more details.`);
    return `https://wa.link/d4oxqj?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>EL CODERS Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#A855F7] bg-clip-text text-transparent mb-4">
            Product & Software Portfolio
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Explore 20 production-grade digital products engineered by <span className="text-white font-semibold">EL CODERS</span>.
            All software architectures, source codes, and turnkey deployments are <span className="text-[#FFB800] font-semibold">deliverable on request</span>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1A1A2E] p-4 rounded-2xl border border-[#2D2D4A]">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search products, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0F172A] border border-[#2D2D4A] rounded-xl text-sm text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#6C2BD9] transition"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#1A1A2E]/90 border border-[#2D2D4A] rounded-2xl p-6 flex flex-col justify-between hover:border-[#6C2BD9]/60 hover:shadow-xl hover:shadow-[#6C2BD9]/10 transition-all duration-300 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#2D2D4A] text-[#94A3B8]">
                    {product.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7]">
                    {product.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-xl font-bold text-white group-hover:text-[#A855F7] transition-colors mb-2">
                  {product.title}
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5 bg-[#0F172A]/60 p-3 rounded-xl border border-[#2D2D4A]/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB800] block mb-1">
                    Key Features
                  </span>
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0F172A] border border-[#2D2D4A] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deliverable Action Button */}
                <a
                  href={getWhatsAppLink(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] hover:from-[#7C3AED] hover:to-[#6C2BD9] text-white rounded-xl text-xs font-bold shadow-md shadow-[#6C2BD9]/20 hover:shadow-lg hover:shadow-[#6C2BD9]/40 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Deliverable on Request (WhatsApp)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#1A1A2E] rounded-2xl border border-[#2D2D4A]">
            <p className="text-base text-[#94A3B8] mb-2">No products found matching your filter criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-[#A855F7] underline font-semibold hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1A1A2E] via-[#2D2D4A]/40 to-[#1A1A2E] border border-[#6C2BD9]/40 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#6C2BD9]/20 rounded-full blur-2xl"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need a Custom Architecture or Ready Product?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto mb-6">
            We deliver source code, deployment pipelines, and customized MVPs tailored specifically to your business requirements within 3–7 days.
          </p>
          <a
            href="https://wa.link/d4oxqj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#6C2BD9]/40 hover:scale-105 transition duration-300"
          >
            <span>Talk with EL CODERS Engineers</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
