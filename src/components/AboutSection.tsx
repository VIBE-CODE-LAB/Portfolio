import { motion } from "framer-motion";

const skills = [
  "Generative AI", "Prompt Engineering", "React", "TypeScript", "TanStack Start",
  "Python", "Streamlit", "Kotlin / Compose", "Three.js", "Supabase",
  "Business Analytics", "Data Analytics", "Automation", "Flask", "Gemini SDK",
  "ai SDK", "Tailwind v4", "Framer Motion",
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            · 02 · About
          </div>
          <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Analyst by training, <span className="text-gradient">builder by instinct.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              I'm <span className="text-foreground font-semibold">Avii Tripathi</span> — a BBA graduate
              specializing in Business Analytics and Data Analytics. My background isn't traditional
              software engineering, but I treat product-building as the natural extension of analytical thinking.
            </p>
            <p>
              I focus on AI-powered products and automation tools — from <span className="text-primary">catalog-grade generative imagery</span> to
              <span className="text-accent"> layered options trading engines</span>, immersive 3D experiences,
              and offline-first mobile players. Hands-on, end-to-end.
            </p>
          </div>

          <div className="mt-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Stack & Skills
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  className="glass rounded-full px-4 py-2 text-sm text-foreground/90 transition-colors hover:bg-white/10"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
