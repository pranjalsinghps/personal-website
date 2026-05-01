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
      "Owned the entire customer support function as the first dedicated hire at an early-stage startup. Designed support workflows, escalation processes, and resolution protocols that scaled the company from launch to $2M ARR.",
      "Reduced customer first response time from 5 hours to under 5 minutes by building an automated triage and response system using Zendesk and Pylon, directly improving CSAT and retention.",
      "Built an SLA performance dashboard to track response times, resolution rates, and satisfaction metrics (CSAT, FCR, AHT), enabling data-driven improvements to the support experience.",
      "Collaborated daily with engineering, product, and design teams to escalate customer-reported issues, translate feedback into product improvements, and ensure seamless releases.",
      "Performed end-to-end product QA using Playwright, Postman, and BrowserStack. Used Cursor and Claude Code (prompt engineering) to build test scripts, regression suites, and CI/CD pipelines on GitHub Actions—catching bugs before they reached customers.",
      "Investigated customer-reported bugs from initial report through root cause analysis to resolution—coordinating fixes with engineering, keeping customers informed, and closing the loop.",
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
