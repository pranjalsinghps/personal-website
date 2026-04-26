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
    role: "QA & AI Engineer (Product & Operations)",
    period: "Aug 2024 - Present",
    location: "Bengaluru, KA",
    url: "https://www.commenda.io/",
    description: "Testing, support ops, and making sure things actually work.",
    bullets: [
      "Handled all QA at an early-stage startup where nothing was defined yet. Figured out what to test, how to test it, and worked with engineering, design, and product to make sure releases were solid.",
      "Used prompt engineering with Cursor and Claude Code to write test scripts, generate edge-case scenarios, and build CI/CD pipelines on GitHub Actions that ran regression tests automatically on every pull request.",
      "Brought customer first response time down from 5 hours to under 5 minutes by setting up an automated response system.",
      "Built an SLA dashboard to keep track of how fast tickets were getting resolved and how the support team was performing.",
      "Worked with the ops team to set up and improve customer support workflows from scratch.",
      "Used AI tools like Stably.ai for UI test automation, Polarity for code testing and reviews, and Narrative AI for generating test cases.",
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
