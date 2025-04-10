
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageCarousel from '@/components/ImageCarousel';
import Challenges from '@/components/Challenges';
import AIFeatures from '@/components/AIFeatures';
import Integration from '@/components/Integration';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import PricingPlans from '@/components/PricingPlans';
import MakersSection from '@/components/MakersSection';
import TrustedBy from '@/components/TrustedBy';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <AnimatedSection id="challenges">
          <Challenges />
        </AnimatedSection>
        <AnimatedSection id="ai-features">
          <AIFeatures />
        </AnimatedSection>
        <AnimatedSection id="integration">
          <Integration />
        </AnimatedSection>
        <AnimatedSection id="security">
          <Security />
        </AnimatedSection>
        <AnimatedSection id="pricing">
          <PricingPlans />
        </AnimatedSection>
        <AnimatedSection id="makers">
          <MakersSection />
        </AnimatedSection>
        <AnimatedSection id="testimonials">
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection id="trusted-by">
          <TrustedBy />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
