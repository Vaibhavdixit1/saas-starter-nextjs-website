export const NAV_LINKS = [
  {
    title: "Platform",
    sublinks: [
      {
        title: "The OS",
        href: "/features",
      },
      {
        title: "Integrations",
        href: "/integrations",
      },
    ],
  },
  {
    title: "Company",
    sublinks: [
      {
        title: "Philosophy",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Pricing",
    sublinks: [
      {
        title: "Our Plans",
        href: "/pricing",
      },
    ],
  },
];

export type LinkType = {
  title: string;
  sublinks: { title: string; href: string }[];
};
