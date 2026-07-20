'use client';

export function Features() {
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
        { name: 'Landing Page', shortestTime: '1-2 days' },
        { name: 'Corporate Website (5-10 pages)', shortestTime: '5-7 days' },
        { name: 'Dashboard / Admin Panel', shortestTime: '10-12 days' },
        { name: 'Progressive Web App (PWA)', shortestTime: '10-14 days' },
        { name: 'Figma to Code Conversion', shortestTime: '2-3 days' },
        { name: 'Responsive HTML/CSS Template', shortestTime: '1-2 days' }
      ]
    },
    {
      title: '⚙️ Backend Development',
      services: [
        { name: 'REST API (Node.js/Python/Django)', shortestTime: '5-7 days' },
        { name: 'Database Design (PostgreSQL/MySQL/MongoDB)', shortestTime: '2-3 days' },
        { name: 'Authentication System (JWT + OAuth)', shortestTime: '3-5 days' },
        { name: 'Payment Integration (Stripe/Paystack/Flutterwave/Korapay)', shortestTime: '3-5 days' },
        { name: 'Admin CMS', shortestTime: '7-10 days' },
        { name: 'GraphQL API', shortestTime: '5-7 days' }
      ]
    },
    {
      title: '📱 Full Stack Applications',
      services: [
        { name: 'MVP (Minimum Viable Product)', shortestTime: '4 weeks' },
        { name: 'SaaS Platform (multi-tenant + subscriptions)', shortestTime: '6-8 weeks' },
        { name: 'E-commerce Store', shortestTime: '4 weeks' },
        { name: 'Social Media / Community App', shortestTime: '8-10 weeks' },
        { name: 'Marketplace Platform', shortestTime: '8-12 weeks' },
        { name: 'Booking / Reservation System', shortestTime: '3-4 weeks' },
        { name: 'Learning Management System (LMS)', shortestTime: '6-8 weeks' },
        { name: 'Real Estate Listing Platform', shortestTime: '4-6 weeks' },
        { name: 'Job Board Platform', shortestTime: '4-6 weeks' }
      ]
    },
    {
      title: '📲 Mobile Development',
      services: [
        { name: 'React Native App (iOS + Android)', shortestTime: '4-6 weeks' },
        { name: 'Flutter App', shortestTime: '4-6 weeks' },
        { name: 'iOS Native (Swift)', shortestTime: '6-8 weeks' },
        { name: 'Android Native (Kotlin)', shortestTime: '6-8 weeks' },
        { name: 'Mobile App Maintenance', shortestTime: 'Ongoing' }
      ]
    },
    {
      title: '🛡️ Cybersecurity',
      services: [
        { name: 'Website Security Audit', shortestTime: '1-2 days' },
        { name: 'Penetration Testing', shortestTime: '5-7 days' },
        { name: 'SSL/HTTPS Setup', shortestTime: '1-2 hours' },
        { name: 'DDoS Protection Setup', shortestTime: '1 day' },
        { name: 'GDPR / Compliance Check', shortestTime: '2-3 days' },
        { name: 'Bug Bounty Program Setup', shortestTime: '7-10 days' },
        { name: 'Source Code Security Review', shortestTime: '3-5 days' },
        { name: 'Cloud Security Assessment (AWS/GCP)', shortestTime: '3-5 days' },
        { name: 'Security Headers & Hardening', shortestTime: '1-2 days' }
      ]
    },
    {
      title: '🤖 AI & Automation',
      services: [
        { name: 'ChatGPT Chatbot Integration', shortestTime: '3-5 days' },
        { name: 'AI Content Generation Tool', shortestTime: '7-10 days' },
        { name: 'Web Scraper / Data Extractor', shortestTime: '3-5 days' },
        { name: 'Lead Scoring System (AI)', shortestTime: '7-14 days' },
        { name: 'Recommendation Engine', shortestTime: '10-14 days' },
        { name: 'Image Recognition API', shortestTime: '10-14 days' },
        { name: 'Sentiment Analysis Tool', shortestTime: '7-10 days' }
      ]
    },
    {
      title: '🔧 DevOps & Infrastructure',
      services: [
        { name: 'Cloud Hosting Setup (AWS/GCP/DigitalOcean)', shortestTime: '1-2 days' },
        { name: 'CI/CD Pipeline (GitHub Actions/GitLab)', shortestTime: '3-5 days' },
        { name: 'Server Monitoring & Alerts', shortestTime: '1-2 days' },
        { name: 'Database Backup & Recovery', shortestTime: '1 day' },
        { name: 'Docker Containerization', shortestTime: '2-3 days' },
        { name: 'Kubernetes Setup', shortestTime: '5-7 days' },
        { name: 'Load Balancer Configuration', shortestTime: '2-3 days' }
      ]
    },
    {
      title: '🛒 E-commerce & CMS',
      services: [
        { name: 'WooCommerce Store', shortestTime: '3-5 days' },
        { name: 'Shopify Customization', shortestTime: '3-5 days' },
        { name: 'Custom WordPress Theme', shortestTime: '5-7 days' },
        { name: 'Headless CMS (Sanity/Contentful)', shortestTime: '5-7 days' },
        { name: 'Subscription Box Platform', shortestTime: '6-8 weeks' }
      ]
    },
    {
      title: '🛠️ Maintenance & Support',
      services: [
        { name: 'Hourly Development', shortestTime: '2-4 hours (response)' },
        { name: 'Monthly Retainer (10 hours)', shortestTime: 'Ongoing' },
        { name: 'Monthly Retainer (20 hours)', shortestTime: 'Ongoing' },
        { name: 'Monthly Retainer (40 hours)', shortestTime: 'Ongoing' },
        { name: 'Emergency Bug Fix (24-hour response)', shortestTime: '4-8 hours' },
        { name: 'Website Migration', shortestTime: '2-5 days' }
      ]
    },
    {
      title: '🧩 Custom & Miscellaneous',
      services: [
        { name: 'API Integration (third-party)', shortestTime: '2-5 days' },
        { name: 'Webhook Setup', shortestTime: '1-2 days' },
        { name: 'Email Marketing Integration (Mailchimp/SendGrid)', shortestTime: '1-2 days' },
        { name: 'Analytics Dashboard (Google Analytics + custom)', shortestTime: '3-5 days' },
        { name: 'File Upload & Management System', shortestTime: '2-3 days' },
        { name: 'Real-time Chat Feature', shortestTime: '5-7 days' },
        { name: 'Video Call Integration (Zoom/WebRTC)', shortestTime: '5-7 days' },
        { name: 'Export Reports (PDF/CSV/Excel)', shortestTime: '2-3 days' },
        { name: 'Multi-language Support (i18n)', shortestTime: '3-5 days' },
        { name: 'Dark/Light Mode Toggle', shortestTime: '1-2 days' }
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
          <p className="text-slate-400 max-w-2xl mx-auto">
            Elite engineering at record velocity. Full Ownership. High-velocity development tailored for scaling startups.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/40 transition group flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4 group-hover:border-cyan-500/30 transition">
                  {cat.title}
                </h4>
                <ul className="space-y-4">
                  {cat.services.map((svc, sIndex) => (
                    <li key={sIndex} className="flex justify-between items-start gap-4 py-2 border-b border-slate-800/30 last:border-none group/item">
                      <span className="text-slate-300 text-sm font-medium group-hover/item:text-cyan-400 transition leading-snug">
                        {svc.name}
                      </span>
                      <span className="text-[11px] bg-cyan-950/80 text-cyan-400 border border-cyan-800/30 px-2 py-0.5 rounded-full font-bold whitespace-nowrap flex items-center gap-1 mt-0.5">
                        ⏱️ {svc.shortestTime}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

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
