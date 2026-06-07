import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useState, lazy, Suspense, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ClientOnly } from "./ClientOnly";

const MiniShape = lazy(() => import("./Scene3D").then((module) => ({ default: module.MiniShape })));

const accentMap = {
  cyan: "#5ee9ff",
  magenta: "#ff5ec4",
  violet: "#a78bfa",
  lime: "#a3e635",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });
  const [open, setOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const color = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setOpen((o) => !o)}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-shadow hover:border-white/20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), ${color}22, transparent 40%)`,
          }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex-1">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ color }}
            >
              {project.category}
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <div className="relative h-24 w-24 shrink-0" style={{ transform: "translateZ(40px)" }}>
            <ClientOnly fallback={<div className="h-full w-full rounded-full bg-gradient-to-tr from-white/5 to-white/10 animate-pulse" />}>
              {isInView ? (
                <Suspense fallback={<div className="h-full w-full rounded-full bg-gradient-to-tr from-white/5 to-white/10 animate-pulse" />}>
                  <MiniShape shape={project.shape} color={color} />
                </Suspense>
              ) : (
                <div className="h-full w-full rounded-full bg-gradient-to-tr from-white/5 to-white/10" />
              )}
            </ClientOnly>
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
        >
          <div className="pt-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="mt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Context
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.context}
              </p>
            </div>
            <div className="mt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Usage
              </div>
              <ul className="mt-2 space-y-1.5">
                {project.usage.map((u) => (
                  <li key={u} className="flex gap-2 text-sm text-foreground/85">
                    <span style={{ color }}>→</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="relative mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>{open ? "Click to collapse" : "Click to expand"}</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
