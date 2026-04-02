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
      "A content aggregation platform for YouTube. Designed the complete UI in Figma, mapped out information architecture and user flows, and conducted market research to deliver a user-friendly, marketable solution.",
    tags: ["Figma", "UX Research", "Product Design"],
    featured: true,
  },
];
