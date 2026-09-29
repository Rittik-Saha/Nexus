import { Zap, MessageCircle, Code2, Briefcase } from 'lucide-react';

const LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Developers: ['Documentation', 'API Reference', 'CLI', 'GitHub', 'Discord'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/6 px-4 pt-16 pb-8" aria-label="Footer">
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(124,107,255,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-900/40 group-hover:shadow-purple-600/40 transition-shadow duration-300">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-semibold text-white text-[15px]">Nexus</span>
            </a>
            <p className="text-sm text-white/35 leading-relaxed max-w-50 mb-6">
              The modern deployment platform for ambitious teams.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: MessageCircle, label: 'Twitter' },
                { icon: Code2, label: 'GitHub' },
                { icon: Briefcase, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Nexus Technologies, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with ♥ by engineers, for engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}