import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';
import { staggerContainer, fadeUp } from '../utils/animations';

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Flowbase',
    avatar: 'SC',
    avatarGrad: 'from-violet-500 to-purple-600',
    stars: 5,
    quote:
      "Nexus completely transformed how we ship. What used to take our DevOps team hours now happens in under a minute. It's genuinely the best DX I've experienced in 12 years of engineering.",
    highlight: 'best DX I\'ve experienced',
  },
  {
    name: 'Marcus Webb',
    role: 'Founder at Luminary AI',
    avatar: 'MW',
    avatarGrad: 'from-blue-500 to-cyan-600',
    stars: 5,
    quote:
      "We moved from a custom Kubernetes setup to Nexus in a weekend. Our deploy frequency went from weekly to dozens of times per day. The performance gains are unreal.",
    highlight: 'performance gains are unreal',
  },
  {
    name: 'Priya Nair',
    role: 'Engineering Lead at Finova',
    avatar: 'PN',
    avatarGrad: 'from-emerald-500 to-teal-600',
    stars: 5,
    quote:
      "In fintech, security and reliability are non-negotiable. Nexus gave us SOC2 compliance, 99.99% uptime, and faster deploys. It's the only platform I'd recommend to any serious team.",
    highlight: 'only platform I\'d recommend',
  },
  {
    name: 'David Park',
    role: 'Principal Engineer at Scale',
    avatar: 'DP',
    avatarGrad: 'from-rose-500 to-pink-600',
    stars: 5,
    quote:
      "The preview deployment feature alone saved us countless hours in QA cycles. Every PR gets its own live URL — reviewers can test in seconds, not hours.",
    highlight: 'saved us countless hours',
  },
  {
    name: 'Lena Müller',
    role: 'Head of Engineering at Orbit',
    avatar: 'LM',
    avatarGrad: 'from-amber-500 to-orange-600',
    stars: 5,
    quote:
      "Switched from Vercel, Netlify, and a patchwork of other tools to Nexus. One platform, zero config, incredible support. My team is happier than ever.",
    highlight: 'zero config, incredible support',
  },
  {
    name: 'James Wright',
    role: 'Software Architect at Pulse',
    avatar: 'JW',
    avatarGrad: 'from-indigo-500 to-violet-600',
    stars: 5,
    quote:
      "The analytics dashboard surfaced a memory leak we'd been chasing for weeks. Within hours of moving to Nexus, we had insights that saved us thousands in infrastructure costs.",
    highlight: 'saved us thousands',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-32 px-4 overflow-hidden" aria-label="Testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-6">
              Testimonials
            </span>
          </ScrollReveal>
          <TextReveal
            text="Loved by engineering teams"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            delay={0.1}
          />
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/45 max-w-xl mx-auto">
              Don't take our word for it — hear from the engineers who ship with Nexus every day.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonial grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp}>
              <SpotlightCard
                className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-white/10 transition-all duration-500 group cursor-default"
                spotlightColor="rgba(124,107,255,0.06)"
              >
                {/* Quote icon */}
                <Quote size={20} className="text-violet-500/40 mb-4 group-hover:text-violet-400/60 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-white/55 leading-relaxed mb-6 group-hover:text-white/65 transition-colors duration-300">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/5">
                  <div className={`w-9 h-9 rounded-full bg-linear-to-br ${t.avatarGrad} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/85">{t.name}</p>
                    <p className="text-xs text-white/35">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}