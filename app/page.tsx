import { ExpandableNavBar } from "@/components/ExpandableNavBar";

const NAV_LINKS = [
  {
    title: "Products",
    sublinks: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    sublinks: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ExpandableNavBar links={NAV_LINKS}/>
    </main>
  );
}
