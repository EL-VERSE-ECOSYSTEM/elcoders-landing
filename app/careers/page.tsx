'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Product Manager",
      type: "Remote · Product Management",
      location: "Lagos, Nigeria",
      posted: "5 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Security Operations Center (SOC) Analyst",
      type: "Remote · Information Security · Full time",
      location: "Nigeria",
      posted: "6 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Cybersecurity GRC Analyst",
      type: "Remote · Information Security · Full time",
      location: "Nigeria",
      posted: "6 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Machine Learning Engineer",
      type: "Remote · Innovation · Full time",
      location: "Nigeria",
      posted: "9 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Senior Full-Stack Engineer",
      type: "Remote · Innovation · Full time",
      location: "Nigeria",
      posted: "11 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Performance Marketing Specialist",
      type: "Hybrid · Full time",
      location: "Lagos, Nigeria",
      posted: "28 days ago",
      apply_link: "https://apply.workable.com/koracareers/"
    },
    {
      title: "Kora Talent Network",
      type: "Remote",
      location: "Nigeria",
      posted: "4 months ago",
      apply_link: "https://apply.workable.com/koracareers/",
      description: "Join our talent community for future opportunities."
    }
  ];

  const perks = [
    "Paid Time Off (20 days/year)",
    "Health Insurance (including dependents)",
    "Stock Options",
    "Hybrid Work Style",
    "Annual Performance Bonus",
    "Paid Parental Leave",
    "Sponsored Training",
    "Birthday Time Off",
    "Salary Advance",
    "Low-Interest Loans"
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Join the EL CODERS & Korapay Talent Network
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We&apos;re building the future of payments and tech talent. Explore open roles across engineering, security, product, and marketing.
            </p>
            <p className="text-sm text-cyan-500 mt-4 font-semibold uppercase tracking-widest">
              Part of EL VERSE ECOSYSTEM
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Open Roles</h2>
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20">
                  {jobs.length} Positions
                </span>
              </div>

              {jobs.map((job, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition group">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                        <span>{job.type}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{job.location}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="text-slate-500">{job.posted}</span>
                      </div>
                      {job.description && (
                        <p className="mt-3 text-sm text-slate-500 italic">{job.description}</p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <a
                        href={job.apply_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-6 py-2 bg-slate-800 hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition text-center"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 text-center mt-8">
                <p className="text-slate-300 mb-4">Don&apos;t see a perfect fit?</p>
                <a
                  href="https://apply.workable.com/koracareers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-bold hover:underline"
                >
                  View all roles on Korapay portal →
                </a>
              </div>
            </div>

            {/* Perks & Side Info */}
            <div className="space-y-8">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Join a high-velocity environment where excellence is the standard and innovation is the daily routine.
                </p>

                <ul className="space-y-4">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-cyan-500 mt-0.5">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">K</div>
                    <div>
                      <p className="font-bold">Korapay</p>
                      <p className="text-xs text-slate-500">Official Career Partner</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Note: All engineering and security roles are managed through our partnership with the Korapay Talent Network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
