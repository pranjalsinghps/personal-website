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
    role: "Quality Assurance Engineer (Product & Operations)",
    period: "Aug 2024 — Present",
    location: "Bengaluru, KA",
    url: "https://www.commenda.io/",
    description: "Reliability, product testing, and operational efficiency.",
    bullets: [
      "Tested new product features and user flows in close collaboration with engineers, ensuring stability before launch.",
      "Collaborated with designers and product team to enhance product logic and improve overall user experience.",
      "Performed end-to-end product testing using AI-assisted tools (Cursor, Claude Code) and built GitHub CI/CD pipelines for automated regression testing on every pull request.",
      "Reduced customer First Response Time from 5 hours to under 5 minutes by implementing an automated response system.",
      "Developed an SLA monitoring dashboard to track ticket resolution timelines and support team performance.",
      "Partnered with operations to establish and optimize customer support workflows.",
      "Leveraged AI-powered tools for automation UI testing and visual UX validation, including Stably.ai for UI test automation, Polarity for functional code testing and code reviews, and Narrative AI for intelligent test generation.",
    ],
  },
  {
    company: "Cedcoss Technologies",
    role: "Business Analyst",
    period: "Jan 2023 — Aug 2024",
    location: "Lucknow, UP",
    url: "https://cedcoss.com/",
    description: "User analytics, cross-functional collaboration, and client management.",
    bullets: [
      "Analysed user behaviour and client interactions using Hotjar and Microsoft Clarity to improve product performance and customer satisfaction.",
      "Collaborated with developers, marketing, and operations teams to improve features and align solutions with client requirements.",
      "Managed US-based client interactions and stakeholder coordination via meetings and chat.",
      "Maintained product documentation, user guides, and CRM systems (Zoho, Freshsales, Freshdesk) for data-driven decision-making.",
    ],
  },
  {
    company: "Monotype",
    role: "Quality Assurance — Trainee",
    period: "Jun 2022 — Dec 2022",
    location: "Noida, UP",
    url: "https://www.monotype.com/",
    description: "End-to-end testing and agile team coordination.",
    bullets: [
      "Led complete end-to-end user flow testing for production-ready quality assurance, including detailed manual testing and code inspections.",
      "Oversaw agile/scrum teams and used Loom to capture findings and test cases for clear cross-team communication.",
    ],
  },
];
