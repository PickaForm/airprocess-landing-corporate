
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
        <AnimatedSection id="ai-features" delay={100}>
          <AIFeatures />
        </AnimatedSection>
        <AnimatedSection id="integration" delay={200}>
          <Integration />
        </AnimatedSection>
        <AnimatedSection id="security" delay={300}>
          <Security />
        </AnimatedSection>
        <AnimatedSection id="pricing" delay={400}>
          <PricingPlans />
        </AnimatedSection>
        <AnimatedSection id="makers" delay={500}>
          <MakersSection />
        </AnimatedSection>
        <AnimatedSection id="testimonials" delay={600}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection id="trusted-by" delay={700}>
          <TrustedBy />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
