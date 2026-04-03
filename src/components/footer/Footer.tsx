import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => {
  return (
    <div className="bg-white border-t border-zinc-100">
      <footer className="relative mx-auto max-w-7xl overflow-hidden py-16 px-4 md:px-8">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
          <div className="col-span-12 md:col-span-4 space-y-6">
            <LogoColumn />
            <div className="max-w-xs">
              <p className="text-sm text-zinc-500 font-medium mb-4">Stay updated with the latest AI insights and product updates.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-bold text-white hover:bg-zinc-800 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <GenericColumn title="Product" links={NAV_LINKS[0].sublinks} />
            <GenericColumn
              title="Company"
              links={[...NAV_LINKS[1].sublinks, ...NAV_LINKS[2].sublinks]}
            />
            <GenericColumn
              title="Legal"
              links={[
                { title: "Terms", href: "/#" },
                { title: "Privacy", href: "/#" },
                { title: "Cookies", href: "/#" },
              ]}
            />
            <GenericColumn
              title="Socials"
              links={[
                { title: "X", href: "/#", Icon: SiX },
                { title: "Instagram", href: "/#", Icon: SiInstagram },
                { title: "Youtube", href: "/#", Icon: SiYoutube },
              ]}
            />
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-medium">
          <p>© 2024-2026 AI SaaS Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/#" className="hover:text-zinc-600 transition-colors">Status</Link>
            <Link href="/#" className="hover:text-zinc-600 transition-colors">Security</Link>
            <Link href="/#" className="hover:text-zinc-600 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LogoColumn = () => {
  return (
    <div className="flex flex-col gap-2">
      <LogoSmall />
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType }[];
}) => {
  return (
    <div className="space-y-4">
      <span className="block text-sm font-bold text-zinc-900 uppercase tracking-wider">{title}</span>
      <div className="flex flex-col gap-2.5">
        {links.map((l) => (
          <Link
            key={l.title}
            href={l.href}
            className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-indigo-600"
          >
            {l.Icon && <l.Icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors" />}
            {l.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
