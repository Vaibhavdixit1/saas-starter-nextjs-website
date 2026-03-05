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
    title: "Company",
    sublinks: [
      {
        title: "About Us",
        href: "/about",
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
