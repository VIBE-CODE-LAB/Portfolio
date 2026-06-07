import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass noise relative overflow-hidden rounded-3xl p-10 md:p-16"
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--magenta)" }}
          />

          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              · 03 · Let's build
            </div>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Have an idea<br />worth <span className="text-gradient">shipping?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm open to collaborations on AI, automation, analytics tooling and 3D web experiences.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { icon: Mail, label: "Email", value: "tripathiavii33@gmail.com", href: "mailto:tripathiavii33@gmail.com" },
                { icon: Github, label: "GitHub", value: "VIBE-CODE-LAB", href: "https://github.com/VIBE-CODE-LAB" },
                { icon: Linkedin, label: "LinkedIn", value: "Abhi Tripathi", href: "https://www.linkedin.com/in/abhi-tripathi-4691a3285/" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© 2026 Avii Tripathi</span>
          <span>Built with TanStack · R3F · Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
