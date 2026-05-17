'use client';

import { useState } from 'react';

export function Booking() {
  const [formData, setFormData] = useState({
    countryCode: '+234',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [autoReply, setAutoReply] = useState<string | null>(null);
  const [waUrl, setWaUrl] = useState('https://wa.link/d4oxqj');

  // Comprehensive country codes list
  const countryCodes = [
    { code: '+1', country: 'United States & Canada' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+91', country: 'India' },
    { code: '+55', country: 'Brazil' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+31', country: 'Netherlands' },
    { code: '+47', country: 'Norway' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+43', country: 'Austria' },
    { code: '+45', country: 'Denmark' },
    { code: '+358', country: 'Finland' },
    { code: '+353', country: 'Ireland' },
    { code: '+372', country: 'Estonia' },
    { code: '+371', country: 'Latvia' },
    { code: '+370', country: 'Lithuania' },
    { code: '+48', country: 'Poland' },
    { code: '+420', country: 'Czechia' },
    { code: '+421', country: 'Slovakia' },
    { code: '+36', country: 'Hungary' },
    { code: '+40', country: 'Romania' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+385', country: 'Croatia' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+30', country: 'Greece' },
    { code: '+357', country: 'Cyprus' },
    { code: '+90', country: 'Turkey' },
    { code: '+20', country: 'Egypt' },
    { code: '+212', country: 'Morocco' },
    { code: '+216', country: 'Tunisia' },
    { code: '+213', country: 'Algeria' },
    { code: '+27', country: 'South Africa' },
    { code: '+234', country: 'Nigeria' },
    { code: '+254', country: 'Kenya' },
    { code: '+233', country: 'Ghana' },
    { code: '+256', country: 'Uganda' },
    { code: '+255', country: 'Tanzania' },
    { code: '+230', country: 'Mauritius' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+974', country: 'Qatar' },
    { code: '+965', country: 'Kuwait' },
    { code: '+973', country: 'Bahrain' },
    { code: '+968', country: 'Oman' },
    { code: '+92', country: 'Pakistan' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+60', country: 'Malaysia' },
    { code: '+65', country: 'Singapore' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+66', country: 'Thailand' },
    { code: '+84', country: 'Vietnam' },
    { code: '+82', country: 'South Korea' },
    { code: '+64', country: 'New Zealand' },
    { code: '+507', country: 'Panama' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+1-876', country: 'Jamaica' },
    { code: '+1-809', country: 'Dominican Republic' },
    { code: '+52', country: 'Mexico' },
    { code: '+56', country: 'Chile' },
    { code: '+51', country: 'Peru' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+54', country: 'Argentina' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateAutoReply = (name: string, serviceQuery: string) => {
    const serviceKeywords = [
      {keys: ["mvp", "minimum viable product"], price: "$2,258", detail: "MVP in 4 weeks. Core features + hosting setup."},
      {keys: ["penetration", "pentest", "security audit"], price: "$323 - $968", detail: "Cybersecurity: Audit from $323, Pentest $968."},
      {keys: ["saas", "saas platform", "subscription"], price: "$4,193", detail: "Full SaaS with multi-tenancy & billing."},
      {keys: ["frontend", "landing page", "corporate website", "dashboard"], price: "$323 - $1,613", detail: "Frontend: Landing page $323, Dashboard $1,613."},
      {keys: ["backend", "api", "database", "auth"], price: "$516 - $968", detail: "APIs from $968, DB design $516."},
      {keys: ["ecommerce", "shopify", "woocommerce"], price: "$2,580", detail: "Full E‑commerce store in 4 weeks."},
      {keys: ["ai", "chatbot", "chatgpt", "automation"], price: "$968 - $1,935", detail: "AI: Chatbot $968, Lead Scoring $1,935."},
      {keys: ["devops", "docker", "kubernetes", "cicd", "hosting"], price: "$323", detail: "Cloud Hosting setup and infra."},
      {keys: ["maintenance", "retainer", "hourly"], price: "$548", detail: "Monthly retainer (20 hours)."},
    ];

    let estimatedPrice = "custom quote (negotiable)";
    let matchedDetail = "We'll provide exact estimate after brief chat.";
    let lowerQuery = serviceQuery.toLowerCase();
    for(let entry of serviceKeywords) {
        for(let kw of entry.keys) {
            if(lowerQuery.includes(kw)) {
                estimatedPrice = entry.price;
                matchedDetail = entry.detail;
                break;
            }
        }
        if(estimatedPrice !== "custom quote (negotiable)") break;
    }

    return `✅ AUTO-REPLY from EL CODERS (EL VERSE ECOSYSTEM)\n\nHi ${name}, thanks for your interest in our tech services!\n📌 Your request: "${serviceQuery}"\n💰 Estimated price range: ${estimatedPrice}\n🛠️ Details: ${matchedDetail}\n\n🎯 Why choose EL CODERS:\n• 4-week MVP delivery or it's free • 100% code ownership • Flat project pricing • Free 2-week support\n• Part of EL VERSE (ELITES, ELSPACE, EL ACCESS, NEXEL)\n\n🔁 Next step: Click the WhatsApp button below to continue negotiation with our dev team. We'll answer timeline, discounts, and custom requirements.\n(You can also pay deposit via Korapay before or after negotiation.)\n💳 Korapay link: https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv\n\n— EL CODERS team | We Build. You Scale.`;
  };

  const getWhatsAppUrl = (userName: string, userService: string, userEmail: string) => {
    const WHATSAPP_BUSINESS_NUMBER = "2349012345678"; // Using a placeholder for now, ideally this would be from env
    let message = `Hello ELCODERS team! I just submitted an in-app request.%0A`;
    message += `Name: ${userName}%0A`;
    message += `Service(s) interested in: ${userService}%0A`;
    if(userEmail) message += `Email: ${userEmail}%0A`;
    message += `%0A(After auto-reply, I'd like to negotiate pricing for the above services. Please share final estimate & timeline.)`;
    return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${message}`;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    setAutoReply(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book appointment');
      }

      setStatus('success');
      const reply = generateAutoReply(formData.name, formData.service);
      setAutoReply(reply);
      setWaUrl(getWhatsAppUrl(formData.name, formData.service, formData.email));

      setFormData({
        countryCode: '+234',
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const services = [
    'Web App Development',
    'Mobile App Development',
    'AI/ML Solutions',
    'Cybersecurity Services',
    'Full Stack Development',
    'Azure Cloud Services',
    'Blockchain Development',
    'UI/UX Design',
    'Consultation',
  ];

  // Generate available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00',
  ];

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Book Your Consultation
          </h2>
          <p className="text-lg text-slate-400">
            Schedule a 30-minute call with our team to discuss your project
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12">
          {status === 'success' && autoReply && (
            <div className="mb-8 p-6 bg-green-900/20 border border-green-500/50 rounded-lg animate-in fade-in zoom-in duration-500">
              <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                <span>📩 IN-APP AUTO-REPLY (ELCODERS)</span>
              </h3>
              <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg mb-6 border border-slate-700">
                {autoReply}
              </pre>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-[#25D366] text-white rounded-lg font-bold text-center hover:bg-[#20bd5c] transition transform hover:scale-105"
                >
                  💬 Continue to WhatsApp for negotiation →
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition"
                >
                  ✖️ Dismiss
                </button>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-center">
                ✗ {errorMsg}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>

              <div>
                <label htmlFor="countryCode" className="block text-white font-semibold mb-2">
                  Country Code
                </label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                >
                  {countryCodes.map(item => (
                    <option key={item.code} value={item.code}>
                      {item.code} {item.country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-semibold">
                    {formData.countryCode}
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="800 000 0000"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-white font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-white font-semibold mb-2">
                  Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, requirements, goals, budget, and timeline..."
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {status === 'loading' ? 'Booking...' : 'Book Your Appointment'}
            </button>

            <p className="text-center text-slate-400 text-sm mt-4">
              We&apos;ll send you a confirmation email with all appointment details
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
