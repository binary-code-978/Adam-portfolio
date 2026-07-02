export interface TourStep {
  id: string;
  targetSelector: string; // CSS selector for the card(s) to highlight
  title: string;
  body: string;
}

export const tourSteps: TourStep[] = [
  {
    id: "hero",
    targetSelector: '[data-tour-target="hero"]',
    title: "Welcome to the grid",
    body: "Each box is a piece of me — internships, projects, achievements, and the work in progress. Some are clickable for deeper reads.",
  },
  {
    id: "internships",
    targetSelector: '[data-tour-target="internships"]',
    title: "My research and internships",
    body: "Summer 2024 apprenticeship and Summer 2025 field research. Click either card to read the full write-up.",
  },
  {
    id: "achievements",
    targetSelector: '[data-tour-target="achievements"]',
    title: "Honors, certs, and courses",
    body: "Filter by awards, certifications, or courses using the pills. The Harvard YPHS card links to the full project.",
  },
  {
    id: "projects",
    targetSelector: '[data-tour-target="projects"]',
    title: "Sites I've shipped",
    body: "Three live projects — a 3D cell biology visualizer, a neurology practice site, and a nonprofit redesign. Each opens the real site.",
  },
  {
    id: "community",
    targetSelector: '[data-tour-target="community"]',
    title: "180 hours of service",
    body: "Teaching at the mosque, NJHS work, and the Sunshine Club. The mosque row opens the full story.",
  },
  {
    id: "current-work",
    targetSelector: '[data-tour-target="current-work"]',
    title: "What I'm doing right now",
    body: "Live projects and programs in progress. Filter by category — research, programs, community, or personal — using the pills.",
  },
];
