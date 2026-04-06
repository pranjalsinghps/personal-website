export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  liveUrl?: string;
  status?: "Active" | "Paused" | "Archived";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Manojo",
    year: "2022",
    description:
      "A YouTube content aggregation app. Designed the full UI in Figma, planned out the user flows and information structure, and did market research to make sure it was something people would actually use.",
    tags: ["Figma", "UX Research", "Product Design"],
    featured: true,
  },
];
