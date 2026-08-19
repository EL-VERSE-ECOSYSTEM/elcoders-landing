import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Trust } from '@/components/trust';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';
import { Timeline } from '@/components/timeline';
import { Booking } from '@/components/booking';
import { FAQ } from '@/components/faq';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'EL CODERS — We Build. You Scale. | EL VERSE ECOSYSTEM',
  description: 'Premium web development, mobile apps, cybersecurity, and AI solutions for startups.',
  openGraph: {
    title: 'EL CODERS — High-Velocity Software Engineering',
    description: 'Build your MVP in 4 weeks with 100% code ownership and flat project pricing.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen selection:bg-[#6C2BD9] selection:text-white">
      <Navbar />
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <Trust />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <Features />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <Pricing />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <Timeline />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <Booking />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <FAQ />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6C2BD9]/50 to-transparent"></div>
      <CTA />
      <Footer />
    </main>
  );
}
