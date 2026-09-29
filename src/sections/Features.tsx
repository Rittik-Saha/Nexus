import { motion } from 'framer-motion';
import { Zap, Globe, Lock, BarChart3, Code2, Boxes } from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';
import { staggerContainer, fadeUp } from '../utils/animations';

const FEATURES = [
  {
    icon: Zap,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/15',
    title: 'Lightning Deploy',
    description:
      'Deploy globally in under 30 seconds. Automatic rollbacks, zero-downtime updates, and instant previews for every git push.',
  },
  {
    icon: Globe,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/15',
    title: 'Global Edge Network',
    description:
      'Serve your users from 300+ edge locations worldwide. Sub-millisecond latency everywhere with smart routing.',
  },
  {
    icon: Lock,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/15',
    title: 'Security First',
    description:
      'Enterprise-grade security out of the box. SOC2 compliant, end-to-end encryption, and automatic SSL certificates.',
  },
  {
    icon: BarChart3,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/15',
    title: 'Real-time Analytics',
    description:
      'Full observability into your deployments. Performance metrics, error tracking, and user insights in one dashboard.',
  },
  {
    icon: Code2,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/15',
    title: 'Developer Experience',
    description:
      'Built for developers who demand speed. CLI tools, GitHub integration, and IDE plugins for a seamless workflow.',
  },
  {
    icon: Boxes,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/15',
    title: 'Micro-frontends',
    description:
      'Compose and deploy independent frontend modules at scale. Share UI, split teams, and ship independently.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-32 px-4" aria-label="Features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-6">
              Features
            </span>
          </ScrollReveal>
          <TextReveal
            text="Everything your team needs"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            delay={0.1}
          />
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
              A complete platform for modern teams. From deployment to observability,
              we cover every part of your workflow.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeUp}>
                <SpotlightCard
                  className="glass rounded-2xl h-full border border-white/5 hover:border-white/10 group-hover:bg-white/2 transition-all duration-500 group cursor-default"
                  spotlightColor="rgba(124, 107, 255, 0.08)"
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,107,255,0.08), transparent, rgba(167,139,250,0.06))',
                    }}
                  />

                  <div className="p-6 flex flex-col h-full">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.bgColor} border ${feature.borderColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} className={feature.color} />
                    </div>

                    <h3 className="text-[17px] font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}