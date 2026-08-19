'use client';

import { useState } from 'react';

export function Features() {
  const [searchQuery, setSearchQuery] = useState('');

  const painPoints = [
    "Tired of freelancers who disappear mid-project?",
    "Hourly billing burning your budget?",
    "Your current dev team doesn't understand your vision?",
    "MVP taking 6+ months instead of 6 weeks?"
  ];

  const serviceCategories = [
    {
      categoryLabel: 'Frontend',
      title: '🌐 Frontend Development',
      services: [
        { name: 'Landing Page', description: 'Single-page responsive websites optimized for conversions', price: '$323', shortestTime: '1-2 days' },
        { name: 'Corporate Website', description: '5-10 page business websites with CMS integration', price: '$774', shortestTime: '5-7 days' },
        { name: 'Dashboard / Admin Panel', description: 'Custom admin interfaces with charts, tables, and user management', price: '$1,613', shortestTime: '10-12 days' },
        { name: 'Progressive Web App (PWA)', description: 'Installable, offline-capable web apps', price: 'Contact', shortestTime: '10-14 days' },
        { name: 'Figma to Code Conversion', description: 'Pixel-perfect conversion from design to code', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Responsive HTML/CSS Templates', description: 'Mobile-first, cross-browser compatible templates', price: 'Contact', shortestTime: '1-2 days' }
      ]
    },
    {
      categoryLabel: 'Backend',
      title: '⚙️ Backend Development',
      services: [
        { name: 'REST API', description: 'Scalable APIs with documentation and versioning', price: '$968', shortestTime: '5-7 days' },
        { name: 'Database Design', description: 'PostgreSQL, MySQL, MongoDB schema design and optimization', price: '$516', shortestTime: '2-3 days' },
        { name: 'Authentication System', description: 'JWT, OAuth, role-based access control', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Payment Integration', description: 'Stripe, Paystack, Flutterwave, Korapay integration', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Admin CMS', description: 'Content management systems for non-technical users', price: 'Contact', shortestTime: '7-10 days' },
        { name: 'GraphQL API', description: 'Flexible, type-safe API with Apollo/Hasura', price: 'Contact', shortestTime: '5-7 days' }
      ]
    },
    {
      categoryLabel: 'Full Stack',
      title: '📱 Full Stack Applications',
      services: [
        { name: 'MVP (Minimum Viable Product)', description: 'Build a working product in 4 weeks', price: '$2,258', shortestTime: '4 weeks' },
        { name: 'SaaS Platform', description: 'Multi-tenant, subscription-based applications', price: '$4,193', shortestTime: '6-8 weeks' },
        { name: 'E-commerce Store', description: 'Product catalog, cart, checkout, payment integration', price: '$2,580', shortestTime: '4 weeks' },
        { name: 'Social Media / Community App', description: 'Profiles, posts, messaging, notifications', price: 'Contact', shortestTime: '8-10 weeks' },
        { name: 'Marketplace Platform', description: 'Multi-vendor marketplace with escrow', price: 'Contact', shortestTime: '8-12 weeks' },
        { name: 'Booking / Reservation System', description: 'Schedule management, availability, payments', price: 'Contact', shortestTime: '3-4 weeks' },
        { name: 'Learning Management System (LMS)', description: 'Course creation, student management, progress tracking', price: 'Contact', shortestTime: '6-8 weeks' },
        { name: 'Real Estate Listing Platform', description: 'Property listings, search, agent management', price: 'Contact', shortestTime: '4-6 weeks' },
        { name: 'Job Board Platform', description: 'Job postings, applications, employer management', price: 'Contact', shortestTime: '4-6 weeks' },
        { name: 'Custom Enterprise Software', description: 'Tailored solutions for business needs', price: 'Contact', shortestTime: '8-12 weeks' }
      ]
    },
    {
      categoryLabel: 'Mobile',
      title: '📲 Mobile Development',
      services: [
        { name: 'React Native App', description: 'Cross-platform iOS + Android apps', price: 'Contact', shortestTime: '4-6 weeks' },
        { name: 'Flutter App', description: 'High-performance cross-platform apps', price: 'Contact', shortestTime: '4-6 weeks' },
        { name: 'iOS Native (Swift)', description: 'Native iOS applications', price: 'Contact', shortestTime: '6-8 weeks' },
        { name: 'Android Native (Kotlin)', description: 'Native Android applications', price: 'Contact', shortestTime: '6-8 weeks' },
        { name: 'Mobile App Maintenance', description: 'Bug fixes, updates, performance optimization', price: '$500/month', shortestTime: 'Ongoing' }
      ]
    },
    {
      categoryLabel: 'Security',
      title: '🛡️ Cybersecurity',
      services: [
        { name: 'Website Security Audit', description: 'Vulnerability scanning, SSL checks, security reporting', price: '$323', shortestTime: '1-2 days' },
        { name: 'Penetration Testing', description: 'Simulated attacks, vulnerability identification, remediation', price: '$968', shortestTime: '5-7 days' },
        { name: 'SSL/HTTPS Setup', description: 'Certificate installation, configuration, renewal', price: 'Contact', shortestTime: '1-2 hours' },
        { name: 'DDoS Protection Setup', description: 'Cloudflare/WAF configuration, traffic filtering', price: 'Contact', shortestTime: '1 day' },
        { name: 'GDPR / Compliance Check', description: 'Privacy policy, cookie consent, data handling review', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Bug Bounty Program Setup', description: 'Manage external security researchers', price: 'Contact', shortestTime: '7-10 days' },
        { name: 'Source Code Security Review', description: 'Code audit for vulnerabilities', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Cloud Security Assessment', description: 'AWS/GCP/Azure security configuration review', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Security Headers & Hardening', description: 'Implement security headers, server hardening', price: 'Contact', shortestTime: '1-2 days' }
      ]
    },
    {
      categoryLabel: 'AI',
      title: '🤖 AI & Automation',
      services: [
        { name: 'ChatGPT Chatbot Integration', description: 'Custom AI chatbots with custom personas', price: '$968', shortestTime: '3-5 days' },
        { name: 'AI Content Generation Tool', description: 'Automated content creation for blogs and social media', price: 'Contact', shortestTime: '7-10 days' },
        { name: 'Web Scraper / Data Extractor', description: 'Custom scraping solutions for any website', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Lead Scoring System (AI)', description: 'Predictive lead scoring with CRM integration', price: '$1,935', shortestTime: '7-14 days' },
        { name: 'Recommendation Engine', description: '"You might also like" recommendation systems', price: 'Contact', shortestTime: '10-14 days' },
        { name: 'Image Recognition API', description: 'Custom computer vision solutions', price: 'Contact', shortestTime: '10-14 days' },
        { name: 'Sentiment Analysis Tool', description: 'Social media and review sentiment analysis', price: 'Contact', shortestTime: '7-10 days' },
        { name: 'Document Processing Automation', description: 'Automated data extraction from PDFs and documents', price: 'Contact', shortestTime: '7-10 days' }
      ]
    },
    {
      categoryLabel: 'Cloud / DevOps',
      title: '🔧 DevOps & Infrastructure',
      services: [
        { name: 'Cloud Hosting Setup', description: 'AWS/GCP/DigitalOcean/Azure configuration', price: '$323', shortestTime: '1-2 days' },
        { name: 'CI/CD Pipeline', description: 'Automated testing, builds, and deployments', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Server Monitoring & Alerts', description: 'Uptime monitoring, performance tracking, alerts', price: '$300/month', shortestTime: 'Ongoing' },
        { name: 'Database Backup & Recovery', description: 'Automated backups, point-in-time recovery', price: '$400/month', shortestTime: '1 day' },
        { name: 'Docker Containerization', description: 'Application containerization, Dockerfiles, Docker Compose', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Kubernetes Setup', description: 'Orchestration, scaling, and management', price: 'Contact', shortestTime: '5-7 days' },
        { name: 'Load Balancer Configuration', description: 'Traffic distribution, SSL termination, health checks', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Infrastructure as Code (IaC)', description: 'Terraform/CDK for reproducible infrastructure', price: 'Contact', shortestTime: '3-5 days' }
      ]
    },
    {
      categoryLabel: 'E-commerce',
      title: '🛒 E-commerce & CMS',
      services: [
        { name: 'WooCommerce Store', description: 'Custom WordPress e-commerce solutions', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Shopify Customization', description: 'Theme development, app integration, store optimization', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Custom WordPress Theme', description: 'Custom themes, plugins, and functionality', price: 'Contact', shortestTime: '5-7 days' },
        { name: 'Headless CMS (Sanity, Contentful)', description: 'API-first CMS for modern applications', price: 'Contact', shortestTime: '5-7 days' },
        { name: 'Subscription Box Platform', description: 'Subscription management, recurring payments, inventory', price: 'Contact', shortestTime: '6-8 weeks' },
        { name: 'Custom E-commerce Solution', description: 'Tailored e-commerce platforms from scratch', price: 'Contact', shortestTime: '6-8 weeks' }
      ]
    },
    {
      categoryLabel: 'Support',
      title: '🛠️ Maintenance & Support',
      services: [
        { name: 'Hourly Development', description: 'Bug fixes, small features, quick changes', price: '$50/hour', shortestTime: '2-4 hours' },
        { name: 'Monthly Retainer (10 hours)', description: 'Priority support, weekly updates, maintenance', price: '$450/month', shortestTime: 'Ongoing' },
        { name: 'Monthly Retainer (20 hours)', description: 'Dedicated dev, bi-weekly strategy calls', price: '$850/month', shortestTime: 'Ongoing' },
        { name: 'Monthly Retainer (40 hours)', description: 'Full-time developer support', price: '$1,600/month', shortestTime: 'Ongoing' },
        { name: 'Emergency Bug Fix', description: '24-hour response, critical bug resolution', price: '$300', shortestTime: '4-8 hours' },
        { name: 'Website Migration', description: 'Server, CMS, or platform migration', price: '$500', shortestTime: '2-5 days' }
      ]
    },
    {
      categoryLabel: 'Custom',
      title: '🧩 Custom & Miscellaneous',
      services: [
        { name: 'API Integration', description: 'Third-party API integration (e.g., payment, CRM, email)', price: 'Contact', shortestTime: '2-5 days' },
        { name: 'Webhook Setup', description: 'Event-driven automation with webhooks', price: 'Contact', shortestTime: '1-2 days' },
        { name: 'Email Marketing Integration', description: 'Mailchimp, SendGrid, or custom email solutions', price: 'Contact', shortestTime: '1-2 days' },
        { name: 'Analytics Dashboard', description: 'Google Analytics integration + custom dashboards', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'File Upload & Management System', description: 'Secure file upload, storage, and management', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Real-time Chat Feature', description: 'WebSocket-based chat for web and mobile', price: 'Contact', shortestTime: '5-7 days' },
        { name: 'Video Call Integration', description: 'Zoom, WebRTC, or custom video solutions', price: 'Contact', shortestTime: '5-7 days' },
        { name: 'Export Reports', description: 'PDF, CSV, Excel generation', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Multi-language Support (i18n)', description: 'Translation, localization, multilingual interfaces', price: 'Contact', shortestTime: '3-5 days' },
        { name: 'Dark/Light Mode Toggle', description: 'Theme switching for better UX', price: 'Contact', shortestTime: '1-2 days' },
        { name: 'Blockchain & Web3', description: 'Smart contracts, NFT integration, crypto solutions', price: 'Contact', shortestTime: '1-2 weeks' },
        { name: 'Social Login Integration', description: 'Google, Facebook, Apple, GitHub OAuth', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'SMS/Voice Integration', description: 'Twilio integration for notifications and calls', price: 'Contact', shortestTime: '2-3 days' },
        { name: 'Google Maps Integration', description: 'Location-based features, maps, geolocation', price: 'Contact', shortestTime: '2-3 days' }
      ]
    }
  ];

  const quickReferences = [
    { category: 'Frontend', service: 'Landing Page, HTML Template', shortestTime: '1-2 days' },
    { category: 'Backend', service: 'Database Design', shortestTime: '2-3 days' },
    { category: 'Full Stack', service: 'MVP', shortestTime: '4 weeks' },
    { category: 'Mobile', service: 'React Native / Flutter App', shortestTime: '4-6 weeks' },
    { category: 'Cybersecurity', service: 'SSL/HTTPS Setup', shortestTime: '1-2 hours' },
    { category: 'AI & Automation', service: 'ChatGPT Integration', shortestTime: '3-5 days' },
    { category: 'DevOps', service: 'Database Backup', shortestTime: '1 day' },
    { category: 'E-commerce', service: 'WooCommerce Store', shortestTime: '3-5 days' },
    { category: 'Support', service: 'Emergency Bug Fix', shortestTime: '4-8 hours' }
  ];

  const guaranteedDeliveries = [
    { service: 'Bug Fix', time: '1 day', conditions: 'For existing codebase', icon: '🐛' },
    { service: 'Landing Page', time: '2 days', conditions: 'With design provided', icon: '📄' },
    { service: 'MVP', time: '4 weeks', conditions: 'Standard ELCODERS guarantee', icon: '🚀' },
    { service: 'SaaS Platform', time: '6-8 weeks', conditions: 'Standard ELCODERS timeline', icon: '💻' }
  ];

  // Dynamic live search/filter logic
  const filteredCategories = serviceCategories.map(cat => {
    const filteredServices = cat.services.filter(svc =>
      svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, services: filteredServices };
  }).filter(cat => cat.services.length > 0);

  const totalServicesInCatalog = serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0);

  return (
    <section id="services" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6C2BD9]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pain Points Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-rose-500/20">
              The Startup Problem
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4">
              Building is Hard. We Make it Easy.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#1A1A2E] border border-[#2D2D4A] p-6 rounded-2xl flex items-start gap-4 hover:border-rose-500/50 transition duration-300 card-hover-lift"
              >
                <span className="text-rose-500 text-lg font-black bg-rose-500/10 p-2 rounded-lg flex-shrink-0">✕</span>
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#FFB800] uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 text-balance">
            Complete Service Catalog & Shortest Build Times
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Elite engineering at record velocity. Full Ownership. High-velocity development tailored for scaling startups.
          </p>

          {/* Service Categories Summary */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-[#1A1A2E] border border-[#2D2D4A] p-4 rounded-2xl shadow-lg">
            <span className="text-xs font-bold text-[#6C2BD9] uppercase tracking-wider">📊 Service Categories:</span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300 font-medium">
              {serviceCategories.map((cat, idx) => (
                <span key={idx} className="whitespace-nowrap bg-[#0F172A] px-2.5 py-1 rounded-md border border-[#2D2D4A]">
                  {cat.categoryLabel} <span className="text-[#A855F7]">({cat.services.length})</span>
                </span>
              ))}
              <span className="text-[#FFB800] font-bold bg-[#FFB800]/10 px-2.5 py-1 rounded-md border border-[#FFB800]/20 whitespace-nowrap">
                Total: {totalServicesInCatalog} Services
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Live Search Bar */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#94A3B8]">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search services (e.g. Stripe, AI, Landing Page, Mobile)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-4 bg-[#1A1A2E] border-2 border-[#2D2D4A] rounded-2xl text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#6C2BD9] focus:ring-2 focus:ring-[#6C2BD9]/30 transition-all duration-300 text-sm shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#94A3B8] hover:text-white transition"
              >
                ✖️
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center text-xs text-[#94A3B8] mt-2">
              Found <span className="text-[#A855F7] font-bold">{filteredCategories.reduce((sum, cat) => sum + cat.services.length, 0)}</span> matching services
            </p>
          )}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-[#1A1A2E] border border-[#2D2D4A] rounded-3xl max-w-xl mx-auto mb-16 p-8">
            <div className="text-4xl mb-3 animate-bounce">🧐</div>
            <h4 className="text-lg font-bold text-white mb-1">No services matched your search</h4>
            <p className="text-sm text-[#94A3B8] mb-6">Try searching for other keywords, or chat with us on WhatsApp for custom build requirements!</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 bg-[#6C2BD9] text-white font-bold rounded-xl text-sm hover:bg-[#5B21B6] transition shadow-md"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Service Grid Cards */}
        {filteredCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-[#1A1A2E] border border-[#2D2D4A] hover:border-[#6C2BD9] rounded-3xl p-8 transition-all duration-300 card-hover-lift flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-[#2D2D4A] pb-4">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      {cat.title}
                    </h4>
                    <span className="text-[11px] bg-[#6C2BD9]/20 text-[#A855F7] border border-[#6C2BD9]/40 px-2.5 py-0.5 rounded-full font-bold">
                      {cat.categoryLabel}
                    </span>
                  </div>
                  <ul className="space-y-6">
                    {cat.services.map((svc, sIndex) => (
                      <li key={sIndex} className="flex flex-col gap-1.5 py-3 border-b border-[#2D2D4A]/50 last:border-none group">
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-white text-sm font-bold group-hover:text-[#A855F7] transition leading-snug">
                            {svc.name}
                          </span>
                          <span className="text-[11px] bg-[#0F172A] text-[#FFB800] border border-[#FFB800]/30 px-2 py-0.5 rounded-full font-bold whitespace-nowrap flex items-center gap-1">
                            ⏱️ {svc.shortestTime}
                          </span>
                        </div>
                        <p className="text-[#94A3B8] text-xs leading-relaxed">
                          {svc.description}
                        </p>
                        <div className="flex justify-between items-center mt-2 pt-1">
                          <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                            <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Starting:</span>
                            <span className={svc.price === 'Contact' ? 'text-[#94A3B8] italic' : 'text-[#A855F7] font-bold'}>
                              {svc.price}
                            </span>
                          </div>
                          <a
                            href="https://wa.link/d4oxqj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#6C2BD9] hover:text-[#A855F7] font-bold flex items-center gap-1 transition"
                          >
                            <span>Learn More</span>
                            <span>→</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Reference Section */}
        <div className="mt-24 border-t border-[#2D2D4A] pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">📊 Quick Reference</h3>
            <p className="text-sm text-[#94A3B8]">Shortest Build Times by Service Category</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReferences.map((ref, idx) => (
              <div key={idx} className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-2xl p-6 flex items-center justify-between card-hover-lift">
                <div>
                  <span className="text-xs text-[#6C2BD9] uppercase tracking-wider font-bold block mb-1">{ref.category}</span>
                  <span className="text-white font-medium text-sm">{ref.service}</span>
                </div>
                <div className="bg-[#6C2BD9]/20 text-[#A855F7] border border-[#6C2BD9]/40 px-3 py-1 rounded-lg text-xs font-extrabold whitespace-nowrap">
                  {ref.shortestTime}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Speed Delivery Banner */}
        <div className="mt-24 bg-gradient-to-br from-[#1A1A2E] via-[#0F172A] to-[#1A1A2E] border-2 border-[#6C2BD9]/50 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#FFB800]/20">
              Guaranteed Velocity
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4">🚀 Guaranteed Speed Delivery</h3>
            <p className="text-[#94A3B8] text-sm mt-2">Engineered velocity with explicit commitment deadlines</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guaranteedDeliveries.map((del, idx) => (
              <div key={idx} className="bg-[#1A1A2E] border border-[#2D2D4A] p-6 rounded-2xl text-center flex flex-col justify-between card-hover-lift">
                <div>
                  <div className="text-3xl mb-3">{del.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{del.service}</h4>
                  <p className="text-2xl font-black text-[#A855F7] mb-3">{del.time}</p>
                </div>
                <p className="text-xs text-[#94A3B8] italic mt-auto">{del.conditions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Risk-Free Call to Action */}
        <div className="mt-24 border border-[#2D2D4A] bg-[#1A1A2E] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">💰 Start Risk-Free with EL CODERS</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              We stand behind our code. If we don&apos;t ship code on the very first day, you don&apos;t pay. Get a completely risk-free onboarding experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#FFB800] text-lg">📞</span> Free Consultation Call
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#FFB800] text-lg">🏷️</span> 40% Off First 7 Days
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#FFB800] text-lg">🛡️</span> Day 1 Fully Risk-Free
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#FFB800] text-lg">⚡</span> Instant Project Kickoff
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white rounded-xl font-bold text-lg text-center hover:shadow-lg hover:shadow-[#6C2BD9]/30 hover:scale-105 transition duration-200 min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>💳 Pay via Korapay</span>
            </a>
            <a
              href="https://wa.link/d4oxqj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0F172A] text-white border-2 border-[#2D2D4A] hover:border-[#6C2BD9] rounded-xl font-bold text-lg text-center hover:scale-105 transition duration-200 min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
