import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building, Sparkles } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';
import { staggerContainer, fadeUp } from '../utils/animations';

const PLANS = [
  {
    name: 'Starter',
    icon: Zap,
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for side projects and personal use.',
    features: [
      '3 projects',
      '100 GB bandwidth/mo',
      '10 team members',
      'Automatic deploys',
      'Preview URLs',
      'Community support',
    ],
    cta: 'Start free',
    popular: false,
    color: 'text-white/50',
    accent: 'border-white/8',
    glowColor: 'rgba(255,255,255,0.04)',
  },
  {
    name: 'Pro',
    icon: Sparkles,
    price: { monthly: 29, annual: 19 },
    description: 'For teams shipping production apps at speed.',
    features: [
      'Unlimited projects',
      '1 TB bandwidth/mo',
      'Unlimited team members',
      'Advanced analytics',
      'Custom domains',
      'Priority support',
      'SLA guarantee',
    ],
    cta: 'Get started',
    popular: true,
    color: 'text-violet-400',
    accent: 'border-violet-500/30',
    glowColor: 'rgba(124,107,255,0.12)',
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: { monthly: 99, annual: 79 },
    description: 'Dedicated infrastructure for large organisations.',
    features: [
      'Everything in Pro',
      'Unlimited bandwidth',
      'SSO / SAML',
      'Audit logs',
      'Dedicated support',
      'Custom contracts',
      'On-prem option',
    ],
    cta: 'Contact sales',
    popular: false,
    color: 'text-white/50',
    accent: 'border-white/8',
    glowColor: 'rgba(255,255,255,0.04)',
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-16 md:py-32 px-4" aria-label="Pricing">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-6">
              Pricing
            </span>
          </ScrollReveal>
          <TextReveal
            text="Simple, transparent pricing"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            delay={0.1}
          />
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/45 max-w-xl mx-auto mb-10">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </ScrollReveal>

          {/* Billing toggle */}
          <ScrollReveal delay={0.25}>
            <div className="inline-flex items-center gap-4 rounded-full glass border border-white/10 p-1.5">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!annual ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${annual ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                Annual
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                  -35%
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.price.annual : plan.price.monthly;
            const isFree = price === 0;

            return (
              <motion.div key={plan.name} variants={fadeUp} className="flex">
                <SpotlightCard
                  className={`relative flex flex-col w-full rounded-3xl border ${plan.accent} p-7 transition-all duration-500 ${plan.popular ? 'bg-linear-to-b from-violet-950/40 to-transparent' : 'glass'}`}
                  spotlightColor={plan.glowColor}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-linear-to-r from-violet-600 to-purple-600 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-purple-900/50">
                      <Sparkles size={11} />
                      Most Popular
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center gap-2 mb-3 ${plan.color}`}>
                      <Icon size={16} />
                      <span className="text-sm font-semibold">{plan.name}</span>
                    </div>
                    <div className="flex items-end gap-1.5 mb-3">
                      <span className="text-4xl font-bold text-white tracking-tight">
                        {isFree ? 'Free' : `$${price}`}
                      </span>
                      {!isFree && (
                        <span className="text-white/35 text-sm mb-1.5">/mo</span>
                      )}
                    </div>
                    <p className="text-sm text-white/45 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/65">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-violet-500/25 text-violet-400' : 'bg-white/8 text-white/50'}`}>
                          <Check size={10} strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <MagneticButton
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </MagneticButton>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <ScrollReveal delay={0.1} className="text-center mt-10">
          <p className="text-sm text-white/30">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}