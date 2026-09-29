import { motion } from 'framer-motion';
import { CountUp } from '../components/ui/CountUp';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';
import { staggerContainer, fadeUp } from '../utils/animations';

const STATS = [
  {
    prefix: '',
    value: 50000,
    suffix: '+',
    label: 'Developers',
    description: 'worldwide shipping with Nexus',
    color: 'from-violet-400 to-purple-400',
  },
  {
    prefix: '',
    value: 99.99,
    suffix: '%',
    label: 'Uptime SLA',
    description: 'guaranteed across all regions',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    prefix: '',
    value: 300,
    suffix: '+',
    label: 'Edge Locations',
    description: 'globally distributed network',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    prefix: '<',
    value: 30,
    suffix: 's',
    label: 'Deploy Time',
    description: 'average time from push to live',
    color: 'from-amber-400 to-orange-400',
  },
];

export function Statistics() {
  return (
    <section
      id="stats"
      className="relative py-16 md:py-32 px-4 overflow-hidden"
      aria-label="Statistics"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,107,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-6">
              By the numbers
            </span>
          </ScrollReveal>
          <TextReveal
            text="Built for scale from day one"
            as="h2"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            delay={0.1}
          />
        </div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="relative rounded-2xl glass border border-white/5 p-8 text-center group hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Glow accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 100%, rgba(124,107,255,0.08), transparent 70%)`,
                }}
              />

              <div
                className={`text-4xl md:text-5xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                <CountUp
                  prefix={stat.prefix}
                  end={typeof stat.value === 'number' && !Number.isInteger(stat.value) ? stat.value : Math.floor(stat.value)}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>

              <p className="text-base font-semibold text-white/80 mb-1">{stat.label}</p>
              <p className="text-sm text-white/35 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}