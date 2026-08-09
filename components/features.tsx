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

  // Total services across all categories in the master list
  const totalServicesInCatalog = serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Pain Points Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Building is Hard. We Make it Easy.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                <p className="text-slate-300 text-sm leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Catalog
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Complete Service Catalog & Shortest Build Times
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Elite engineering at record velocity. Full Ownership. High-velocity development tailored for scaling startups.
          </p>

          {/* Service Categories Summary */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">📊 Service Categories Summary:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300 font-medium">
              {serviceCategories.map((cat, idx) => (
                <span key={idx} className="whitespace-nowrap">
                  {cat.title.split(' ').slice(1).join(' ')} ({cat.services.length})
                </span>
              ))}
              <span className="text-cyan-400 font-bold whitespace-nowrap">
                Total: {totalServicesInCatalog} Services
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Live Search Bar */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search services (e.g. Stripe, AI, Landing Page)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-inner text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-white transition"
              >
                ✖️
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center text-xs text-slate-400 mt-2">
              Found <span className="text-cyan-400 font-bold">{filteredCategories.reduce((sum, cat) => sum + cat.services.length, 0)}</span> matching services
            </p>
          )}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-900/20 border border-slate-800/50 rounded-3xl max-w-xl mx-auto mb-16">
            <div className="text-4xl mb-3 animate-bounce">🧐</div>
            <h4 className="text-lg font-bold text-white mb-1">No services matched your search</h4>
            <p className="text-sm text-slate-400 mb-6">Try searching for other keywords, or chat with us for custom requirements!</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900/50 hover:border-cyan-700 font-bold rounded-xl text-sm transition"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Service Grid */}
        {filteredCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((cat, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4 group-hover:border-cyan-500/30 transition">
                    <h4 className="text-xl font-bold text-white">
                      {cat.title}
                    </h4>
                    <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-semibold">
                      {cat.services.length} {cat.services.length === 1 ? 'service' : 'services'}
                    </span>
                  </div>
                  <ul className="space-y-6">
                    {cat.services.map((svc, sIndex) => (
                      <li key={sIndex} className="flex flex-col gap-1.5 py-3 border-b border-slate-800/30 last:border-none group/item">
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-slate-200 text-sm font-bold group-hover/item:text-cyan-400 transition leading-snug">
                            {svc.name}
                          </span>
                          <span className="text-[11px] bg-cyan-950/80 text-cyan-400 border border-cyan-800/30 px-2 py-0.5 rounded-full font-bold whitespace-nowrap flex items-center gap-1">
                            ⏱️ {svc.shortestTime}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {svc.description}
                        </p>
                        <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Starting Price:</span>
                          <span className={svc.price === 'Contact' ? 'text-slate-400 italic' : 'text-cyan-400 font-bold'}>
                            {svc.price}
                          </span>
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
        <div className="mt-24 border-t border-slate-800/80 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Quick Reference</h3>
            <p className="text-sm text-slate-400">Shortest Build Times by Category</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReferences.map((ref, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-cyan-400 uppercase tracking-wider font-semibold block mb-1">{ref.category}</span>
                  <span className="text-slate-200 font-medium text-sm">{ref.service}</span>
                </div>
                <div className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-lg text-xs font-black whitespace-nowrap">
                  {ref.shortestTime}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fastest Possible Delivery Guarantee */}
        <div className="mt-24 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-cyan-800/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
              Guaranteed Speed
            </span>
            <h3 className="text-3xl font-bold text-white mt-4">🚀 Fastest Possible Delivery</h3>
            <p className="text-slate-400 text-sm mt-2">Guaranteed shipping velocity conditions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guaranteedDeliveries.map((del, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3">{del.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{del.service}</h4>
                  <p className="text-2xl font-black text-cyan-400 mb-3">{del.time}</p>
                </div>
                <p className="text-xs text-slate-500 italic mt-auto">{del.conditions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Risk-Free Payment Details */}
        <div className="mt-24 border border-slate-800 bg-slate-900/30 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">💰 Start Risk-Free with ELCODERS</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We stand behind our code. If we don&apos;t ship code on the very first day, you don&apos;t pay. Get a completely risk-free onboarding experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-cyan-400 text-lg">📞</span> Free 30-minute Consultation Call
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-cyan-400 text-lg">🏷️</span> 40% Off your first 7 days
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-cyan-400 text-lg">🛡️</span> First day fully risk-free
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-cyan-400 text-lg">⚡</span> Instant checkout & start
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg text-center hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition transform duration-200"
            >
              💳 Pay via Korapay
            </a>
            <a
              href="https://wa.link/d4oxqj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg text-center hover:bg-slate-700 hover:scale-105 transition transform duration-200"
            >
              💬 Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
