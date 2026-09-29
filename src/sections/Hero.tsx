import { motion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { AuroraBackground } from '../components/AuroraBackground';
import { AnimatedGrid } from '../components/effects/AnimatedGrid';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useMousePosition } from '../hooks/useMousePosition';

const FLOAT_CARDS = [
  {
    id: 'card-1',
    icon: <Zap size={18} className="text-violet-400" />,
    title: 'Instant Deploy',
    subtitle: 'Push to production in seconds',
    style: 'top-[15%] right-[8%] md:right-[12%]',
    animDelay: 0,
    animDuration: 6,
  },
  {
    id: 'card-2',
    icon: <Shield size={18} className="text-emerald-400" />,
    title: 'Zero Downtime',
    subtitle: '99.99% uptime guaranteed',
    style: 'bottom-[28%] right-[5%] md:right-[8%]',
    animDelay: -2,
    animDuration: 7.5,
  },
  {
    id: 'card-3',
    icon: <Sparkles size={18} className="text-amber-400" />,
    title: 'AI-Powered',
    subtitle: 'Smart optimization built-in',
    style: 'bottom-[35%] left-[5%] md:left-[8%]',
    animDelay: -4,
    animDuration: 8,
  },
];

export function Hero() {
  const { normalised } = useMousePosition();

  const smoothX = useSpring(normalised.x, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(normalised.y, { stiffness: 60, damping: 20 });

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      aria-label="Hero"
    >
      <AuroraBackground />
      <AnimatedGrid />

      {/* Floating parallax cards */}
      {FLOAT_CARDS.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute hidden lg:flex items-center gap-3 glass rounded-2xl px-4 py-3 shadow-xl shadow-black/30 z-20 ${card.style}`}
          style={{
            x: useTransform(smoothX, [-0.5, 0.5], [-8, 8]),
            y: useTransform(smoothY, [-0.5, 0.5], [-6, 6]),
          }}
          animate={{
            y: [0, card.animDuration === 6 ? -16 : card.animDuration === 7.5 ? -12 : -20, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: card.animDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: card.animDelay,
          }}
        >
          <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
            {card.icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-white/90">{card.title}</p>
            <p className="text-[11px] text-white/45">{card.subtitle}</p>
          </div>
        </motion.div>
      ))}

      {/* Main hero content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto"
        style={{ x: parallaxX, y: parallaxY }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/8 px-4 py-1.5 mb-8"
        >
          <Sparkles size={13} className="text-violet-400" />
          <span className="text-xs font-medium text-violet-300/90 tracking-wide">
            Introducing Nexus 2.0 — The future of deployment
          </span>
          <ArrowRight size={12} className="text-violet-400/70" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Build faster.</span>
          <br />
          <span className="text-gradient-animated">Ship smarter.</span>
          <br />
          <span className="text-white/80">Scale infinitely.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          The modern deployment platform built for teams who care about speed,
          reliability, and developer experience. Zero config. Infinite scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" className="text-base px-8 py-4 rounded-full">
            Start for free
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton variant="outline" className="text-base px-8 py-4 rounded-full">
            View demo
          </MagneticButton>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 mb-20 md:mb-0 text-xs text-white/30 font-medium tracking-wide"
        >
          TRUSTED BY 50,000+ DEVELOPERS WORLDWIDE · NO CREDIT CARD REQUIRED
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-white/30 tracking-widest font-medium">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}