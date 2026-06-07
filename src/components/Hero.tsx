import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Suspense } from "react";
import { HeroScene } from "./Scene3D";
import { ClientOnly } from "./ClientOnly";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grid-bg noise">
      {/* 3D Scene Container with responsive opacity to prevent interfering with text, especially on mobile */}
      <div className="absolute inset-0 opacity-40 md:opacity-85 transition-opacity duration-1000">
        <ClientOnly fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />}>
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />}>
            <HeroScene />
          </Suspense>
        </ClientOnly>
      </div>

      {/* Ambient overlay to ensure text contrast: vertical on mobile, horizontal on desktop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background md:bg-gradient-to-r md:from-background/90 md:via-background/60 md:to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio · v2026
          </div>

          <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block text-foreground">Avii</span>
            <span className="block text-gradient">Tripathi</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl font-medium">
            BBA graduate in <span className="text-white font-semibold underline decoration-primary decoration-2 underline-offset-4">Business & Data Analytics</span>, shipping
            AI-powered products and automation tools — from generative imagery to algorithmic
            trading engines.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-foreground">8</div>
              <div className="mt-1">AI Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">6+</div>
              <div className="mt-1">Stacks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">∞</div>
              <div className="mt-1">Iterations</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
