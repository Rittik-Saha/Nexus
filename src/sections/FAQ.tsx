import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';

const FAQS = [
  {
    question: 'How long does it take to deploy with Nexus?',
    answer:
      'Most deployments complete in under 30 seconds. Our optimized build pipeline and global edge network ensure your code reaches production — and your users — faster than any other platform.',
  },
  {
    question: 'Can I migrate from Vercel, Netlify, or AWS?',
    answer:
      'Absolutely. We provide a one-click migration tool that detects your existing configuration and automatically adapts it to Nexus. Most teams complete migration in under an hour with zero downtime.',
  },
  {
    question: 'What frameworks and languages are supported?',
    answer:
      'Nexus supports all major frameworks: Next.js, Nuxt, SvelteKit, Astro, Remix, Vite, and any static site generator. We also support serverless functions in Node.js, Python, Go, and Rust.',
  },
  {
    question: 'Is my data safe? What about compliance?',
    answer:
      'Security is our foundation. We are SOC2 Type II certified, GDPR compliant, HIPAA ready, and ISO 27001 certified. All data is encrypted at rest and in transit. We never access your code without explicit permission.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter plans get community support via our Discord. Pro plans include priority email support with a 4-hour response SLA. Enterprise plans get a dedicated account manager and 24/7 on-call support.',
  },
  {
    question: 'Do you offer custom pricing for large teams?',
    answer:
      "Yes. Our Enterprise plan is fully customisable. We work with your procurement team on pricing, contracts, and SLAs that fit your organisation's needs. Contact our sales team to get started.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      className="border-b border-white/6 last:border-0"
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-white/75 group-hover:text-white transition-colors duration-200">
          {question}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? 'border-violet-500/40 bg-violet-500/10 text-violet-400' : 'border-white/10 bg-white/3 text-white/40 group-hover:border-white/20 group-hover:text-white/60'}`}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/45 leading-relaxed pb-6 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 md:py-32 px-4" aria-label="FAQ">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-violet-400/80 uppercase mb-6">
              FAQ
            </span>
          </ScrollReveal>
          <TextReveal
            text="Frequently asked questions"
            as="h2"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            delay={0.1}
          />
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/45">
              Still have questions? Reach out to our team — we respond in under 4 hours.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ items */}
        <div className="rounded-2xl glass border border-white/6 px-6">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}