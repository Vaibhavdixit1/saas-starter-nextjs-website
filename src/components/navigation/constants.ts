export const NAV_LINKS = [
  {
    title: "Product",
    sublinks: [
      {
        title: "Features",
        href: "/features",
      },
    ],
  },
  {
    title: "Resources",
    sublinks: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Contact Us",
        href: "/contact",
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
    ],
  },
];

export type LinkType = {
  title: string;
  sublinks: { title: string; href: string }[];
};
