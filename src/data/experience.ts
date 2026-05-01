export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  description: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Commenda",
    role: "Product QA & Customer Success Specialist",
    period: "Aug 2024 - Present",
    location: "Bengaluru, KA",
    url: "https://www.commenda.io/",
    description: "Product quality + customer success, end to end.",
    bullets: [
      "Owned product quality at an early-stage startup: defined what “good” looks like, built lightweight QA processes, and partnered with engineering, design, and product to ship confident releases.",
      "Built GitHub Actions CI/CD pipelines to run automated regression tests on every pull request; used Cursor + Claude Code to generate edge-case scenarios and speed up test scripting.",
      "Improved customer experience by reducing first response time from 5 hours to under 5 minutes via an automated triage + response workflow.",
      "Created an SLA dashboard to track ticket health, response/resolution performance, and operational bottlenecks.",
      "Set up and iterated on support workflows from scratch with the ops team, keeping the feedback loop tight between customers and product.",
      "Used Stably.ai for UI automation, Polarity for code testing/review, and Narrative AI to generate high-signal test cases.",
    ],
  },
  {
    company: "Cedcoss Technologies",
    role: "Business Analyst",
    period: "Jan 2023 - Aug 2024",
    location: "Lucknow, UP",
    url: "https://cedcoss.com/",
    description: "Understanding users, working across teams, and managing client relationships.",
    bullets: [
      "Used Hotjar and Microsoft Clarity to understand how users were actually using the product and where things were falling off.",
      "Worked across dev, marketing, and ops to improve features and make sure what we shipped matched what clients needed.",
      "Handled direct communication with US-based clients through meetings and chat, answering questions and keeping things on track.",
      "Kept product docs, user guides, and CRM tools (Zoho, Freshsales, Freshdesk) up to date so the team had good data to work with.",
    ],
  },
  {
    company: "Monotype",
    role: "Quality Assurance, Trainee",
    period: "Jun 2022 - Dec 2022",
    location: "Noida, UP",
    url: "https://www.monotype.com/",
    description: "My first QA role. Learned testing fundamentals and agile workflows.",
    bullets: [
      "Ran full user flow testing before releases, including manual testing and code inspections to catch issues early.",
      "Worked within agile/scrum teams and used Loom to record findings and share test cases with the rest of the team.",
    ],
  },
];
