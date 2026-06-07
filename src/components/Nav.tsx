import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2 text-sm">
        <div className="px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
          AT
        </div>
        <div className="h-4 w-px bg-white/10" />
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="rounded-full px-4 py-1.5 text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
