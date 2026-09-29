import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const LOGOS = [
  { name: 'Vercel', symbol: '▲' },
  { name: 'Linear', symbol: '◆' },
  { name: 'Stripe', symbol: 'S' },
  { name: 'Notion', symbol: 'N' },
  { name: 'Figma', symbol: 'F' },
  { name: 'GitHub', symbol: '◉' },
  { name: 'Slack', symbol: '#' },
  { name: 'Supabase', symbol: '⚡' },
  { name: 'PlanetScale', symbol: 'P' },
  { name: 'Resend', symbol: 'R' },
];

function LogoItem({ name, symbol }: { name: string; symbol: string }) {
  return (
    <div className="flex items-center gap-3 px-8 shrink-0 group">
      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-base font-bold text-white/40 group-hover:text-white/70 group-hover:border-white/15 transition-all duration-300">
        {symbol}
      </div>
      <span className="text-sm font-medium text-white/35 group-hover:text-white/65 transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="trusted" className="relative py-12 md:py-24 overflow-hidden" aria-label="Trusted By">
      <ScrollReveal className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase mb-4">
          Trusted by world-class teams
        </p>
      </ScrollReveal>

      {/* Marquee container */}
      <div className="relative">
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #05050a, transparent)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #05050a, transparent)',
          }}
        />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex overflow-hidden"
          style={{ maskImage: undefined }}
        >
          <motion.div
            className="flex items-center py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: 'max-content' }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Render twice for seamless loop */}
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} symbol={logo.symbol} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Separator */}
      <div className="mt-16 max-w-xs mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}