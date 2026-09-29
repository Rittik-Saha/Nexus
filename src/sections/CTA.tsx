import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';

export function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-32 px-4" aria-label="Call to Action">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 gradient-border rounded-3xl" />

            {/* Background */}
            <div
              className="relative rounded-3xl p-16 md:p-24 text-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,107,255,0.12) 0%, rgba(10,10,20,0.95) 40%, rgba(99,102,241,0.08) 100%)',
                backdropFilter: 'blur(40px)',
              }}
            >
              {/* Aurora orbs */}
              <div
                className="absolute top-[-30%] left-[-10%] w-100px h-100px rounded-full opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(124,107,255,0.8) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'aurora-1 12s ease-in-out infinite',
                }}
              />
              <div
                className="absolute bottom-[-20%] right-[-5%] w-87.5 h-87.5 rounded-full opacity-15 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'aurora-2 16s ease-in-out infinite',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 mb-8"
                >
                  <Sparkles size={12} className="text-violet-400" />
                  <span className="text-xs font-semibold text-violet-300/90 tracking-wide">
                    Start shipping in minutes
                  </span>
                </motion.div>

                <TextReveal
                  text="Your next deployment is seconds away."
                  as="h2"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
                  delay={0.1}
                />

                <ScrollReveal delay={0.25}>
                  <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
                    Join 50,000+ developers who chose Nexus to ship faster, scale globally,
                    and sleep better at night.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.35}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton variant="primary" className="text-base px-9 py-4 rounded-full shadow-xl shadow-purple-900/40">
                      Get started — it's free
                      <ArrowRight size={16} />
                    </MagneticButton>
                    <MagneticButton variant="ghost" className="text-base text-white/60">
                      Talk to sales
                    </MagneticButton>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.45}>
                  <p className="mt-6 text-xs text-white/25 tracking-wide">
                    No credit card required · 14-day free trial · Cancel anytime
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}