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
 * 4. Nonprofit project — replace placeholder detail
 *    → search for: currentlyWorkingOn
 *    → find the "Nonprofit project" entry
 *    → replace "Building a student-led initiative" with one specific
 *      sentence on what the nonprofit does and your role
 *
 * 5. After May 2, 2026: BWSI Biotechnology completion
 *    → re-add to `latest` array as a "completion" type
 *    → move from `currentlyWorkingOn` to `achievements`
 * ────────────────────────────────────────────────────────────────────
 */

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

export interface CurrentProject {
  title: string;
  detail: string;
  status: "active" | "completing soon" | "upcoming";
}

export interface Achievement {
  title: string;
  issuer?: string;
  date: string;
}

export const achievements: Achievement[] = [
  {
    title:
      "Harvard YPHS — Interdisciplinary Discussion on Disease and Health Award",
    date: "April 2026",
  },
  {
    title: "Good Clinical Practice (GCP) Certification",
    issuer: "NIDA Clinical Trials Network",
    date: "April 2026",
  },
  {
    title:
      "MITx 6.00.1x — Introduction to CS and Programming Using Python",
    date: "September 2024",
  },
  {
    title: "Dartmouth Math SMCML Tournament Winner",
    date: "April 2024",
  },
  {
    title: "BYJU'S Future School Code of Honor Certificate",
    date: "August 2022",
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
    date: "Apr 2026",
    title: "Harvard YPHS — Disease and Health Award",
    type: "achievement",
  },
  {
    date: "Apr 2026",
    title: "GCP Certification (NIDA CTN)",
    type: "certification",
  },
  {
    date: "May 2026",
    title: "BWSI Biotechnology — completing soon",
    type: "completion",
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

export const currentlyWorkingOn: CurrentProject[] = [
  {
    title: "BWSI Biotechnology",
    detail: "Beaver Works Summer Institute course — completing May 2026",
    status: "completing soon",
  },
  {
    title: "BWSI AI",
    detail: "Beaver Works Summer Institute AI course",
    status: "active",
  },
  {
    title: "Yale collaboration",
    detail: "Early-stage research collaboration",
    status: "active",
  },
  {
    title: "Nonprofit project",
    detail: "Building a student-led initiative",
    status: "active",
  },
  {
    title: "Roblox game",
    detail: "Personal game development project",
    status: "active",
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
