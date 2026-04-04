export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export const education: Education[] = [
  {
    institution: "PSIT College Of Higher Education",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Aug 2019 — Aug 2022",
    location: "Kanpur, UP",
    description:
      "Developed strong analytical and strategic thinking skills through coursework in IT, system analysis, and business operations/management.",
  },
];
