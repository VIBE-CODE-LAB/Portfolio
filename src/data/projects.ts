export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  stack: string[];
  context: string;
  usage: string[];
  accent: "cyan" | "magenta" | "violet" | "lime";
  shape: "torus" | "icosa" | "octa" | "knot" | "dodeca" | "box";
};

export const projects: Project[] = [
  {
    id: "photoshoot-studio",
    title: "Simple PhotoShoot Studio",
    tagline: "AI catalog-grade product photography with models",
    category: "Generative AI · React",
    stack: ["React", "Vite", "Gemini", "TypeScript"],
    accent: "magenta",
    shape: "torus",
    context:
      "A React + Vite app that fuses a model photo with product references (bra/panty) to synthesize premium e-commerce imagery. It orchestrates a structured prompt pipeline — pose, brand styling, callouts — and submits it to Gemini with strict color, modesty and brand-lock constraints.",
    usage: [
      "Upload model + product images, pick pose, brand and aspect ratio",
      "Toggle callout mode to annotate armhole, band, strap zones automatically",
      "Sync style presets from Google Sheets for repeatable shoots",
      "Free tier: 3 generations, gated via local storage",
    ],
  },
  {
    id: "vortex-plus",
    title: "Vortex Plus HQ",
    tagline: "Cinematic portfolio + landing experience",
    category: "Frontend · Go API",
    stack: ["React", "Vite", "Tailwind v4", "Framer Motion", "Go", "PostgreSQL"],
    accent: "cyan",
    shape: "icosa",
    context:
      "The Imagine.bo cinematic single-page experience: hero, projects grid, skills, glassy contact, footer. Backed by a Go + Gin + GORM API serving /api/projects and /api/contact from PostgreSQL.",
    usage: [
      "ProjectsGrid fetches GET /api/projects on mount",
      "Contact form POSTs to /api/contact via axios",
      "Framer Motion drives scroll-tied transitions",
      "Vitest covers component logic",
    ],
  },
  {
    id: "omniverse",
    title: "Omniverse 3D Visions",
    tagline: "WebGL playground of dimensional worlds",
    category: "Three.js · WebGL",
    stack: ["Three.js", "WebGL", "GLSL", "GSAP"],
    accent: "violet",
    shape: "knot",
    context:
      "A browser-native 3D showcase exploring spatial storytelling — floating geometry, soft volumetric lighting and scroll-driven camera choreography. The site treats the viewport as a stage where every scroll position reveals a new dimensional vignette.",
    usage: [
      "Scroll to fly the camera through stacked 3D scenes",
      "Hover orbs to trigger shader-driven distortion",
      "Optimised render loop pauses when tab is hidden",
      "Mobile-aware DPR clamping for stable FPS",
    ],
  },
  {
    id: "myntra-listing-ai",
    title: "Myntra Listing AI",
    tagline: "Automated Flipkart / Myntra catalog generator",
    category: "Automation · Python",
    stack: ["Python", "Streamlit", "Pandas", "YAML", "SQLite"],
    accent: "lime",
    shape: "octa",
    context:
      "An end-to-end engine that builds upload-ready Flipkart/Myntra Excel listings. Dynamic template loader maps columns by header name, a rule engine validates input, and SKU/variant generators produce thousands of rows in seconds — driven from a Streamlit dashboard.",
    usage: [
      "Pick article, pack mode, brand, AI model in Streamlit",
      "Engine auto-detects the latest template in data/input/",
      "Generates SKUs (incl. PRINTED + AI model formats)",
      "Writes validated Excel to data/output/ for upload",
    ],
  },
  {
    id: "seo-geo-ai",
    title: "SEO & GEO Optimization AI",
    tagline: "AI operating layer for SEO + GEO teams",
    category: "AI Workspace · TanStack",
    stack: ["TanStack Start", "React 19", "Supabase", "ai SDK", "Tailwind"],
    accent: "cyan",
    shape: "dodeca",
    context:
      "A workspace for auditing, building and tracking SEO/GEO workflows. Streams structured AI output via the ai SDK (Google + OpenAI-compatible providers), persists to Supabase, and ships PDF reports via jsPDF. SSR wrapped in TanStack Start.",
    usage: [
      "Run AI-assisted audits across pages and keywords",
      "Stream model responses with streamdown into the UI",
      "Persist projects and findings to Supabase with RLS",
      "Export findings to branded PDF reports",
    ],
  },
  {
    id: "music-player",
    title: "Music Player",
    tagline: "Offline-first Android music + YouTube downloader",
    category: "Mobile · Kotlin",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Media3", "Retrofit", "yt-dlp"],
    accent: "magenta",
    shape: "torus",
    context:
      "A Compose-based Android player that searches a remote JSON catalog or accepts a YouTube URL, extracts metadata via YouTube Data API v3, downloads audio with youtubedl-android + FFmpeg, and mirrors files to the public Music folder. Playback runs on Media3 + ExoPlayer with full MediaSession controls.",
    usage: [
      "Search catalog or paste a YouTube link to download",
      "Build playlists stored in Room (many-to-many)",
      "Full-screen + mini player with system media controls",
      "Switch UI themes via app preferences",
    ],
  },
  {
    id: "dinosaur-museum",
    title: "Dinosaur Museum",
    tagline: "Immersive 3D museum of prehistoric life",
    category: "Three.js · WebGL",
    stack: ["Three.js", "GLTF", "GSAP", "WebGL"],
    accent: "lime",
    shape: "box",
    context:
      "A virtual museum that places the visitor inside a 3D hall of dinosaur specimens. Models load progressively, ambient audio sets the mood, and informational cards orbit each skeleton — turning a static gallery into a walkable experience.",
    usage: [
      "Orbit the camera around fully rigged dinosaur models",
      "Tap a specimen to surface era, diet and habitat cards",
      "Progressive GLTF loading keeps first paint fast",
      "Designed for both desktop pointer and touch",
    ],
  },
  {
    id: "algo-ai-trading",
    title: "ALGO AI Trading System",
    tagline: "Layered options trading engine with live feeds",
    category: "Trading AI · Python",
    stack: ["Python", "Flask", "SocketIO", "Kite Connect", "React", "Vite"],
    accent: "violet",
    shape: "icosa",
    context:
      "A layered options trading platform: Zerodha/Fyers market feeds → indicators + regime preprocessing → strategy engines (trend, breakout, momentum, range decay, option writing, vol expansion) → risk + SEBI IP compliance → execution + trade logging → learning feedback. Served by Flask + gunicorn, dashboards in React/Vite over websocket.",
    usage: [
      "Backend runs as gunicorn worker with threaded engines",
      "Websocket pushes live greeks, signals and risk state",
      "REST blueprints for strategy, risk, orders and learning",
      "Telegram alerts on signal + risk events",
    ],
  },
];
