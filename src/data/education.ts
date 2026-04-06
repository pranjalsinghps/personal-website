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
    period: "Aug 2019 - Aug 2022",
    location: "Kanpur, UP",
    description:
      "Studied IT, system analysis, and business management. Graduated with an A+ grade.",
  },
];
