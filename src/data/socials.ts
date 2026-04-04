export interface Social {
  name: string;
  url: string;
  type: "link" | "email";
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pranjal-singh-3008a6239",
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
