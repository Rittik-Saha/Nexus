import { memo } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ProgressBar } from './components/ui/ProgressBar';
import { SpotlightCursor } from './components/effects/SpotlightCursor';
import { Hero } from './sections/Hero';
import { TrustedBy } from './sections/TrustedBy'; 
import { Features } from './sections/Features';
import { BentoGrid } from './sections/BentoGrid';
import { Statistics } from './sections/Statistics';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Tesimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
// import { Footer } from './sections/Footer'; // ৩. Footer.tsx ফাইলটি তৈরি করে এটি আনকমেন্ট করবেন

/**
 * Root application component.
 * Composes all page sections and global effects.
 */
const App = memo(function App() {
  return (
    <>
      {/* Global effects */}
      <ProgressBar />
      <SpotlightCursor />

      {/* Noise texture overlay — premium feel */}
      <div className="noise-overlay hidden md:block" aria-hidden="true" />

      {/* Layout */}
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <BentoGrid />
        <Statistics />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
});

export default App;