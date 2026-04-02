export interface Social {
  name: string;
  url: string;
  type: "link" | "email";
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pranjal-singh",
    type: "link",
  },
  {
    name: "Email",
    url: "mailto:pranjalsingh2410@gmail.com",
    type: "email",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    type: "link",
  },
];
