'use client';

export function Features() {
  const features = [
    {
      icon: '⏱️',
      title: 'Zero-Day Onboarding',
      description: 'We join your repo and Slack today. First commit tomorrow by 11 AM.',
    },
    {
      icon: '🔓',
      title: 'No 6-Month Lock-In',
      description: 'Pause or cancel daily. We earn our seat every single day.',
    },
    {
      icon: '🎬',
      title: 'Daily Standup Loom',
      description: 'Wake up to a 45-sec video update. Never chase status updates again.',
    },
  ];

  const serviceCategories = [
    {
      title: '🌐 Frontend Development',
      services: ['Landing Page – $500', 'Dashboard / Admin Panel – $2,500', 'PWA – $3,000', 'Figma to Code – $800']
    },
    {
      title: '⚙️ Backend Development',
      services: ['REST API (Node/Python) – $1,500', 'Database Design – $800', 'Auth System (JWT) – $1,000', 'Payment Integration – $1,200']
    },
    {
      title: '📱 Full Stack Applications',
      services: ['MVP Development – $3,500', 'SaaS Platform – $6,500', 'E-commerce Store – $4,000', 'LMS Platform – $7,000']
    },
    {
      title: '🛡️ Cybersecurity',
      services: ['Security Audit – $500', 'Penetration Testing – $1,500', 'Bug Bounty Setup – $2,000', 'Cloud Security – $1,000']
    },
    {
      title: '🤖 AI & Automation',
      services: ['AI Chatbot (ChatGPT) – $1,500', 'AI Content Tools – $2,500', 'Web Scrapers – $800', 'Sentiment Analysis – $2,500']
    },
    {
      title: '🔧 DevOps & Infra',
      services: ['Cloud Hosting (AWS/GCP) – $500', 'CI/CD Pipelines – $1,000', 'Kubernetes Setup – $2,000', 'Docker – $600']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Our Edge
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            The ELCODERS Difference
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition transform hover:scale-105 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Catalog
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Complete Service Catalog
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From Frontend to Cybersecurity, we provide flat-rate, high-velocity development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition">
              <h4 className="text-xl font-bold text-white mb-4 border-bottom border-slate-800 pb-2">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.services.map((svc, sIndex) => (
                  <li key={sIndex} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="text-cyan-500">▹</span> {svc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
