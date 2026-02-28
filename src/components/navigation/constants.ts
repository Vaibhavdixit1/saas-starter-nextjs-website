export const NAV_LINKS = [
  {
    title: "Product",
    sublinks: [
      {
        title: "Features",
        href: "/features",
      },
      {
        title: "Integrations",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    sublinks: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
  {
    title: "Pricing",
    sublinks: [
      {
        title: "Plans",
        href: "/pricing",
      },
      {
        title: "Enterprise",
        href: "/pricing",
      },
    ],
  },
];

export type LinkType = {
  title: string;
  sublinks: { title: string; href: string }[];
};
