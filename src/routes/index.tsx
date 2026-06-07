import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avii Tripathi — AI Builder & Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Avii Tripathi — BBA in Business & Data Analytics, building AI-powered products: generative imagery, trading engines, automation tools, 3D experiences and mobile apps.",
      },
      { property: "og:title", content: "Avii Tripathi — AI Builder & Analyst" },
      {
        property: "og:description",
        content: "AI-powered products and automation tools — shipped end-to-end.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
