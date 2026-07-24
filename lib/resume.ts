/**
 * ────────────────────────────────────────────────────────────────────
 * 📌 ADAM — TO DO LIST
 * ────────────────────────────────────────────────────────────────────
 * These items are currently hidden from the live site or contain
 * placeholder text. Fill them in here, then run:
 *   git add . && git commit -m "fill in <thing>" && git push
 *
 * 1. Sheriff lab "what I learned" reflection
 *    → search for: sheriffLabDetail
 *    → find the section with heading "What I took away"
 *    → replace the [PLACEHOLDER] body with 2–3 honest sentences
 *    → set `hidden: false` on that section to re-enable
 *
 * 2. MLSC "what I took away" reflection
 *    → search for: mlscDetail
 *    → same as above
 *
 * 3. Yale collaboration — replace placeholder detail
 *    → search for: currentlyWorkingOn
 *    → find the "Yale collaboration" entry
 *    → replace "Early-stage research collaboration" with one specific
 *      sentence on what the actual Yale connection is
 *
 * 4. Sunshine Club details — currently shown as "Ongoing"
 *    → search for: communityService
 *    → find the "Sunshine Club" entry
 *    → replace `"Ongoing"` with the actual start year (e.g., "2024 – Present")
 *
 * 5. Verify mosque hours total
 *    → search for: communityService
 *    → find the "Sunday School Volunteer" entry
 *    → confirm `hours: 30` is still accurate, update if hours have grown
 * ────────────────────────────────────────────────────────────────────
 */

export interface OrbitalSkill {
  id: number;
  title: string;
  icon: string;
  related: number[];
}

export const orbitalSkills: OrbitalSkill[] = [
  { id: 1, title: "Python", icon: "Code", related: [6] },
  { id: 2, title: "PCR & Electrophoresis", icon: "Dna", related: [3, 4] },
  { id: 3, title: "Cell Culture", icon: "FlaskConical", related: [2, 4] },
  { id: 4, title: "Microscopy", icon: "Microscope", related: [2, 3] },
  { id: 5, title: "Field Research", icon: "Trees", related: [6, 7] },
  { id: 6, title: "Data Analysis", icon: "BarChart3", related: [1, 5] },
  { id: 7, title: "Lab Documentation", icon: "FileText", related: [5] },
  { id: 8, title: "GCP Certified", icon: "BadgeCheck", related: [] },
];

export const heroTypewriterPhrases: string[] = [
  "one base pair at a time",
  "one experiment at a time",
  "one question at a time",
  "from the field to the lab",
];

export interface Contact {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Education {
  school: string;
  location: string;
  start: string;
  end: string;
  credential?: string;
  description?: string;
}

export interface WorkExperience {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

export interface Award {
  title: string;
  date: string;
}

export type CurrentProjectCategory =
  | "research"
  | "program"
  | "community"
  | "personal";

export interface CurrentProject {
  title: string;
  detail: string;
  status: "active" | "completing soon" | "upcoming";
  category: CurrentProjectCategory;
}

export type AchievementCategory = "award" | "certification" | "course";

export interface Achievement {
  title: string;
  issuer?: string;
  date: string;
  href?: string;
  ctaLabel?: string;
  category: AchievementCategory;
}

export const achievements: Achievement[] = [
  {
    title: "BU CityLab SummerLab — Gene Editing in Human Disease",
    issuer: "Boston University CityLab",
    date: "July 2026",
    href: "/achievements/bu-summerlab-gene-editing",
    ctaLabel: "Read about the program →",
    category: "certification",
  },
  {
    title: "BWSI Biotechnology — Beaver Works Summer Institute",
    date: "May 2026",
    category: "course",
  },
  {
    title:
      "Harvard YPHS — Interdisciplinary Discussion on Disease and Health Award",
    date: "April 2026",
    href: "/achievements/harvard-yphs",
    category: "award",
  },
  {
    title: "Good Clinical Practice (GCP) Certification",
    issuer: "NIDA Clinical Trials Network",
    date: "April 2026",
    category: "certification",
  },
  {
    title:
      "MITx 6.00.1x — Introduction to CS and Programming Using Python",
    date: "September 2024",
    category: "course",
  },
  {
    title: "Dartmouth Math SMCML Tournament Winner",
    date: "April 2024",
    category: "award",
  },
  {
    title: "BYJU'S Future School Code of Honor Certificate",
    date: "August 2022",
    category: "course",
  },
];

export interface LeadershipRole {
  title: string;
  organization?: string;
  date: string;
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: "Captain, Dartmouth High School Chess Team",
    date: "August 2025 – Present",
  },
  {
    title: "Peer Tutor — Algebra 2",
    organization: "Dartmouth High School Math Department",
    date: "Spring 2026 – Present",
  },
  {
    title: "Captain, Dartmouth Middle School Robotics",
    date: "October 2023 – June 2024",
  },
  {
    title: "President, National Junior Honor Society",
    date: "May 2023",
  },
  {
    title: "Second Degree Black Belt, Taekwondo",
    date: "June 2021",
  },
];

export const activities: string[] = [
  "Math Team",
  "Debate Team",
  "Investment Club",
  "DHS Tennis",
  "New Bedford Hurricanes Swim Team",
  "Chess Team",
  "DMS Robotics",
];

export interface LatestItem {
  date: string;
  title: string;
  type: "achievement" | "certification" | "completion" | "milestone";
}

export const latest: LatestItem[] = [
  {
    date: "Jul 2026",
    title: "BU CityLab SummerLab — Gene Editing in Human Disease",
    type: "certification",
  },
  {
    date: "May 2026",
    title: "BWSI Biotechnology — completed",
    type: "completion",
  },
  {
    date: "Apr 2026",
    title: "Harvard YPHS — Disease and Health Award",
    type: "achievement",
  },
  {
    date: "Apr 2026",
    title: "GCP Certification (NIDA CTN)",
    type: "certification",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  expirationDate?: string;
  description: string;
  selfMotivated?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "Gene Editing in Human Disease",
    issuer: "Boston University CityLab",
    issuedDate: "July 2026",
    description:
      "Certificate of completion for a two-week, hands-on molecular biology intensive at BU CityLab centered on CRISPR gene editing and modeling gene-editing approaches to human disease.",
  },
  {
    name: "Good Clinical Practice (GCP)",
    issuer: "NIDA Clinical Trials Network",
    issuedDate: "April 2026",
    expirationDate: "April 2029",
    description:
      "Independently completed the six-hour course covering IRBs, informed consent, participant safety, research protocol, documentation, and research misconduct. Pursued out of personal interest in clinical research methodology.",
    selfMotivated: true,
  },
];

export interface InternshipSection {
  heading: string;
  body?: string;
  bullets?: string[];
  hidden?: boolean;
}

export interface InternshipDetail {
  slug: string;
  title: string;
  subtitle: string;
  dateRange: string;
  location: string;
  advisor?: string;
  overview: string;
  sections: InternshipSection[];
  techniques: string[];
}

export const sheriffLabDetail: InternshipDetail = {
  slug: "sheriff-lab",
  title: "UMass field research",
  subtitle: "Sheriff Lab · Summer 2025",
  dateRange: "June 2025 – August 2025",
  location: "UMass Dartmouth · South Dartmouth, MA",
  advisor: "Professor Michael Sheriff",
  overview:
    "A field study examining whether traffic noise from highways affects how wild mice respond to predator cues — measured through behavioral observation and stress hormone analysis.",
  sections: [
    {
      heading: "Experimental design",
      body:
        "The study used a 2×2 factorial design across four pre-established field grids in nearby forests: near-highway with predator sound, near-highway without, far-from-highway with, and far-from-highway without. This setup allowed the team to separate the effects of traffic noise alone, predator cues alone, and the combination of both.",
    },
    {
      heading: "What I did each day",
      bullets: [
        "Arrived at the field grids at 6 AM to begin trap checks",
        "Worked with non-lethal Sherman-style traps baited with peanut butter and lined with cotton, designed to collect fecal samples for downstream stress hormone analysis without harming the mice",
        "When a mouse was captured: recorded weight, body size, sex, age class, and whether the mouse had been previously tagged; new individuals were ear-tagged for future identification",
        "Placed each captured mouse in an observation box for 10 minutes while video-recording behavior, then released the mouse at the capture site",
        "Recorded all field data on paper data sheets; behavioral video was transferred to a computer for later review",
      ],
    },
    {
      heading: "Predator sound playback",
      body:
        "Speakers mounted in trees across the experimental grids broadcast predator vocalizations on the predator-treatment sites. The playback schedule and species selection were managed by the lab.",
    },
    {
      heading: "The question we were asking",
      body:
        "Does chronic exposure to traffic noise change how wild mice respond to natural predator cues? If traffic noise masks or numbs the antipredator response, that has real implications for wildlife living near roads — populations may be more vulnerable to predation, or may waste energy on stress responses that no longer track real threats.",
    },
    {
      heading: "What I took away",
      body:
        "[PLACEHOLDER — Adam, write 2–3 honest sentences here about what you learned. Examples to think about: how rigorous a field study really is when you have to be on-site at 6 AM every morning; what it taught you about study design and controls; what surprised you about the day-to-day reality of research vs. how research is portrayed; anything you now think about differently because of this summer.]",
      hidden: true,
    },
  ],
  techniques: [
    "Mark-recapture trapping with non-lethal Sherman-style traps",
    "Live animal handling and ear-tagging",
    "Morphometric measurement (weight, body size, sex, age class)",
    "Non-invasive fecal sample collection for stress hormone analysis",
    "Behavioral observation and video recording",
    "Field data collection and documentation",
  ],
};

export const harvardYPHSDetail = {
  slug: "harvard-yphs",
  title: "Harvard YPHS — Disease and Health Award",
  subtitle: "Youth Public Health Symposium · April 2026",
  dateRange: "April 2026",
  location: "Harvard University · In person",
  award: "Selected for the Interdisciplinary Discussion on Disease and Health Award",
  overview:
    "A two-day national symposium at Harvard for high school students accepted through a competitive application process. Attendees presented on a public health issue affecting their generation; presentations were reviewed by Harvard professors and PhD students.",
  projectTitle: "Generative AI and the Teen Mental Health Gap",
  sections: [
    {
      heading: "The program",
      body:
        "The Harvard Youth Public Health Symposium (YPHS) brings selected high school students from across the country to Harvard for two days of public health programming. Students apply, present an optional research talk on a public health issue affecting young people, and engage in faculty-led discussions on contemporary health challenges.",
    },
    {
      heading: "The project",
      body:
        "I delivered a full-room talk with a slide deck proposing a two-step public health analysis of how generative AI use is affecting teen mental health. The motivation: ChatGPT became publicly available in November 2022, reached 100 million users in two months, and by 2024 about 70% of U.S. teens had used generative AI for schoolwork — yet there is almost no peer-reviewed work on how this rapid adoption is affecting adolescent stress, sleep, and academic anxiety. Public health typically arrives after the damage is done. The point of the project was to show up while the data is still being written, so that schools and parents can act on evidence rather than panic.",
    },
    {
      heading: "Data sources",
      body:
        "The project used publicly available federal and academic survey data, including Monitoring the Future (University of Michigan) for long-term trends in academic stress, sleep, and technology use; the CDC's Youth Risk Behavior Survey (YRBS) for biennial mental health and sleep indicators; and Common Sense Media's 'Teens and AI' reports plus Pew Research's teen technology surveys for direct measures of AI usage frequency. Key variables: AI use frequency on the exposure side; academic anxiety and sleep duration on the outcome side; grade level, sex, and total social media use as controls.",
    },
    {
      heading: "Methodology",
      body:
        "I proposed a two-step analysis where each step checks the other. Step one is a trend-break analysis: plot teen academic-anxiety and sleep-duration trends from 2015 through 2024 and look for a slope or level change starting in late 2022, when ChatGPT became available — controlling for post-pandemic recovery as a confounder. Step two is a within-cohort comparison: among teens surveyed after ChatGPT existed, compare heavy AI users to non-users on the same outcomes, adjusting for grade, sex, and total social media use. If both steps point the same direction, the evidence converges. If they disagree, that's an even more interesting finding — it would suggest the effect is concentrated in a subgroup rather than population-wide.",
    },
    {
      heading: "The award",
      body:
        "Selected for the Interdisciplinary Discussion on Disease and Health Award at the close of the symposium.",
    },
  ],
} as const;

export const buSummerLabDetail = {
  slug: "bu-summerlab-gene-editing",
  title: "Gene Editing in Human Disease",
  subtitle: "Certificate of Completion · BU CityLab SummerLab · July 2026",
  dateRange: "July 6–17, 2026",
  location: "Boston University, Charles River Campus · In person",
  // NOTE: no `award` field by design. A certificate of completion is not an award
  // and must not render in the amber recognition slot. Do not add one.
  overview:
    "A two-week, hands-on molecular biology intensive at Boston University's CityLab, centered on CRISPR gene editing — the technique recognized by the 2020 Nobel Prize in Chemistry. Students work through the laboratory workflow used in modern research labs to model how gene editing can be used to treat human disease, alongside the ethical questions the technology raises. The program is run by BU's Wheelock College of Education & Human Development together with the Chobanian & Avedisian School of Medicine, and is supported by an NIH Science Education Partnership Award.",

  // VERIFY (Adam): this list is the program's published 2026 curriculum.
  // Confirm each technique was in YOUR session; cut anything you didn't perform.
  techniques: [
    "CRISPR gene editing",
    "Bacterial transformation",
    "Plasmid minipreps",
    "Cell culture",
    "DNA quantitation",
    "Gel electrophoresis & visualization",
    "Nanoencapsulation",
  ],

  sections: [
    {
      heading: "The program",
      body:
        "SummerLab is a CityLab program that gives high school students access to biotechnology facilities and curriculum most schools can't offer. The Gene Editing in Human Disease session runs two weeks, Monday through Friday, on BU's Charles River Campus. Over the two weeks I worked through a guided research arc: from how a single mutation causes disease, to using CRISPR to model correcting it in a living system.",
    },
    {
      heading: "The central lab — modeling a cure for sickle cell",
      // VERIFY (Adam): this is the program's documented core lab. Confirm it matches
      // what your group actually did, and adjust if your session differed.
      body:
        "The program is built around a real disease model. Working in a small group, I edited a target gene in a non-pathogenic strain of E. coli — used as a stand-in for human cells — to simulate the process scientists use to correct the mutation responsible for sickle cell anemia. Instead of reading about gene editing, I ran the bench workflow end to end and interpreted the results.",
    },
    {
      heading: "Beyond the bench",
      body:
        "The science came with its ethics. Alongside the lab work, the program examined the social and ethical dimensions of gene editing — who it should treat, where the limits should be, and how a tool this powerful should be governed.",
    },
    {
      heading: "What I took from it",
      // TODO (Adam): replace with 2–3 sentences in your own voice — the moment or idea
      // from the two weeks that stuck, or how it connects to your Sheriff lab / MLSC work.
      // Write this yourself. Do not ship the placeholder. Do not fill this in for him.
      body:
        "[Adam to write — personal reflection goes here.]",
    },
  ],
} as const;

export const mlscDetail: InternshipDetail = {
  slug: "mlsc",
  title: "MLSC apprenticeship",
  subtitle: "Massachusetts Life Sciences Center · Summer 2024",
  dateRange: "June 2024 – August 2024",
  location: "UMass Dartmouth · South Dartmouth, MA",
  overview:
    "A competitive summer apprenticeship awarded by the Massachusetts Life Sciences Center, structured as a hands-on training program in foundational biotechnology lab skills.",
  sections: [
    {
      heading: "About the program",
      body:
        "The MLSC High School Apprenticeship Challenge places selected high school students in Massachusetts life sciences labs to give them direct exposure to research environments. My placement at UMass Dartmouth was structured around technique training rather than a single project — the goal was to build a working foundation in the methods that underlie modern biotech research.",
    },
    {
      heading: "Techniques I trained on",
      body:
        "Across the apprenticeship I trained in core wet lab skills used across molecular biology, cell biology, and biotechnology research:",
      bullets: [
        "Pipetting and accurate solution preparation",
        "PCR (polymerase chain reaction) and gel electrophoresis for DNA amplification and visualization",
        "Mammalian cell culture — handling, maintenance, and aseptic technique",
        "Light microscopy",
        "Standard scientific documentation and lab notebook practice",
      ],
    },
    {
      heading: "Why it mattered",
      body:
        "Walking into a research lab as an 8th-going-into-9th grader, almost everything was new. By the end of the summer, the techniques themselves had become the easy part — the harder, more interesting work was learning how researchers actually think: how they design experiments, troubleshoot when things fail, and decide what's worth measuring. This summer is what made the next one (the Sheriff Lab field research) possible.",
    },
    {
      heading: "What I took away",
      body:
        "[PLACEHOLDER — Adam, write 2–3 honest sentences here. Examples: what was hardest at first, what felt natural, how this changed how you think about labs and biology, what you wanted to learn next after this summer ended.]",
      hidden: true,
    },
  ],
  techniques: [
    "Pipetting",
    "Solution preparation",
    "PCR",
    "Gel electrophoresis",
    "Mammalian cell culture",
    "Microscopy",
    "Lab documentation",
  ],
};

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  status: "live" | "in development";
  dateRange: string;
  href: string;
  external: boolean;
  ctaLabel: string;
}

export const projects: Project[] = [
  {
    title: "Cell Metabolic Atlas",
    subtitle: "3D interactive biology visualizer",
    description:
      "Designed a real-time 3D eukaryotic cell explorer — 9 organelles, 6 metabolic pathways with animated particle tracing, and an ELI5 mode.",
    status: "live",
    dateRange: "2026",
    href: "https://cell-metabolic.vercel.app",
    external: true,
    ctaLabel: "Visit the site",
  },
  {
    title: "amacneurology.com",
    subtitle: "Neurology practice website",
    description:
      "Designed and shipped a fast custom site for a neurology practice, replacing an aging WordPress build. Moderated review system, QR intake, GoDaddy → Vercel migration.",
    status: "live",
    dateRange: "2026",
    href: "https://amacneurology.com",
    external: true,
    ctaLabel: "Visit the site",
  },
  {
    title: "Project Breathing Hope",
    subtitle: "Lung cancer nonprofit redesign",
    description:
      "Redesigned a 12-page nonprofit site; migrated all content verbatim and tracked every issue I found (typos, dated stats, medical claims) in a flags log for the org to decide on.",
    status: "live",
    dateRange: "2026",
    href: "https://project-breathing-hope.vercel.app/",
    external: true,
    ctaLabel: "Visit the site",
  },
];

export interface CommunityServiceItem {
  title: string;
  organization: string;
  dateRange: string;
  hours?: number;
  summary: string;
  href?: string;
}

export const communityService: CommunityServiceItem[] = [
  {
    title: "Sunday School Volunteer",
    organization: "Islamic Society of Southeastern Massachusetts",
    dateRange: "June 2021 – Present",
    hours: 30,
    summary:
      "Teaching children ages 8–14 to pray, recite Qur'an, and assist around the mosque.",
    href: "/community/mosque",
  },
  {
    title: "Community Service through NJHS",
    organization: "National Junior Honor Society — Dartmouth Middle School",
    dateRange: "August 2023 – May 2024",
    hours: 150,
    summary:
      "Personal community service hours completed through National Junior Honor Society projects and events.",
  },
  {
    title: "Sunshine Club",
    organization: "Dartmouth High School",
    dateRange: "Ongoing",
    summary:
      "Bringing small moments of joy to community members through birthday cards and acts of kindness.",
  },
];

export const totalCommunityServiceHours = communityService.reduce(
  (total, item) => total + (item.hours ?? 0),
  0
);

export const mosqueDetail = {
  slug: "mosque",
  title: "Sunday School Volunteer",
  subtitle: "Islamic Society of Southeastern Massachusetts · 2021 – Present",
  dateRange: "June 2021 – Present",
  location: "New Bedford, Massachusetts",
  award: "5+ years of weekly community service",
  overview:
    "Every Sunday for three hours I help teach children ages 8 to 14 at our local mosque — listening to Qur'an recitation, helping with prayer and pronunciation, and assisting teachers with whatever the day needs.",
  sections: [
    {
      heading: "What I do",
      body:
        "Each session has 3 to 5 students. I work with them on prayer, Qur'an recitation, and Arabic pronunciation, and I help teachers with anything else that comes up — keeping younger students focused, handling logistics, and stepping in where I'm needed. The work is small in any given week and large over five years.",
    },
    {
      heading: "Why it matters to me",
      body:
        "Being a Muslim is a minority experience in this part of Massachusetts, and the mosque is where the community actually comes together. Helping run Sunday school gives me a real role in that — sharing what I've been taught with kids who are growing up the same way I did. Honestly, doing this every week is part of what makes me hopeful for the future of Muslims in this area.",
    },
    {
      heading: "Time commitment",
      body:
        "Every Sunday, three hours per session, since June 2021.",
    },
  ],
} as const;

export const currentlyWorkingOn: CurrentProject[] = [
  {
    title: "BWSI AI",
    detail: "Beaver Works Summer Institute AI course",
    status: "active",
    category: "program",
  },
  {
    title: "Yale collaboration",
    detail: "Early-stage research collaboration",
    status: "active",
    category: "research",
  },
  {
    title: "Roblox game",
    detail: "Personal game development project",
    status: "active",
    category: "personal",
  },
];

export interface Volunteer {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  hours: number;
  description: string;
}

export interface Resume {
  contact: Contact;
  summary: string;
  education: Education[];
  work: WorkExperience[];
  awards: Award[];
  skills: string[];
  volunteer: Volunteer[];
  activities: string[];
}

export const resume: Resume = {
  contact: {
    name: "Adam Amac",
    address: "12 Highland St, South Dartmouth, MA 02748",
    phone: "404-314-1966",
    email: "adam786237@gmail.com",
  },
  summary:
    "Motivated high school student with experience in scientific field research, biotechnology internships, and STEM leadership. Interested in biology, medicine, research, and robotics, with strong skills in data analysis, collaboration, problem-solving, and leadership.",
  education: [
    {
      school: "Dartmouth High School",
      location: "Dartmouth, MA",
      start: "August 2024",
      end: "Present",
    },
    {
      school: "BYJU'S Future School",
      location: "South Dartmouth",
      start: "May 2021",
      end: "June 2023",
      credential: "Professional/Applied Tech Level Certificate",
      description:
        "144 coding classes covering logic, sequence, and structure of code; app development, UI/UX design, AI, and professional coding.",
    },
  ],
  work: [
    {
      role: "Field Research with Dartmouth UMASS",
      organization: "UMASS",
      location: "South Dartmouth, MA",
      start: "June 2025",
      end: "August 2025",
      description:
        "Conducted field research with Professor Michael Sheriff during Summer 2025.",
    },
    {
      role: "MLSC High School Apprenticeship Challenge",
      organization: "UMASS",
      location: "South Dartmouth, MA",
      start: "June 2024",
      end: "August 2024",
      description:
        "Biotechnology research internship through the MLSC High School Apprenticeship Challenge; learned core lab techniques, principles of biotechnology research, laboratory procedures, data collection, and scientific documentation.",
    },
  ],
  awards: [
    {
      title:
        "Harvard YPHS 2026 — Interdisciplinary Discussion on Disease and Health Award",
      date: "April 2026",
    },
    {
      title: "Art Featured in Westport Artgroup Show",
      date: "March 2026",
    },
    {
      title: "Captain of Dartmouth Chess Team",
      date: "August 2025",
    },
    {
      title:
        "Completed MITx: Introduction to Computer Science and Programming Using Python",
      date: "September 2024",
    },
    {
      title: "Dartmouth Math SMCML Team Winners",
      date: "April 2024",
    },
    {
      title: "Captain of DMS Robotics",
      date: "October 2023",
    },
    {
      title: "President of the National Jr. Honor Society",
      date: "May 2023",
    },
    {
      title: "BYJU'S Future School Code of Honor Certificate",
      date: "August 2022",
    },
    {
      title: "Second Degree Black Belt in Taekwondo",
      date: "June 2021",
    },
  ],
  skills: [
    "Scientific Research",
    "Leadership",
    "Data Analysis",
    "Lab Documentation",
    "Public Speaking",
    "Critical Thinking & Problem Solving",
    "GCP-certified (NIDA CTN)",
  ],
  volunteer: [
    {
      role: "Mosque Volunteer",
      organization: "ISS Mass",
      location: "New Bedford, MA",
      start: "June 2021",
      end: "Present",
      hours: 30,
      description:
        "Teaches younger students Quran reading, Arabic pronunciation, memorization, and comprehension.",
    },
  ],
  activities: [
    "Taekwondo",
    "New Bedford Hurricanes Swim Team",
    "DMS Robotics",
    "Investment Club",
    "DHS Tennis",
    "Chess Team",
    "Math Team",
    "Debate Team",
  ],
};
