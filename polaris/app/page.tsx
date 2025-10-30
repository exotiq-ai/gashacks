import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import SavingsCalculator from '@/components/home/SavingsCalculator';
import Testimonials from '@/components/home/Testimonials';
import TrustSignals from '@/components/home/TrustSignals';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <SavingsCalculator />
      <Testimonials />
      <TrustSignals />
      <FinalCTA />
      <Footer />
    </main>
  );
}
