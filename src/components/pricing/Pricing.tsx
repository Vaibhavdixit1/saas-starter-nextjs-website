import React, { useState } from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../shared/Button";
import { CheckListItem, CheckListItemType } from "./CheckListItem";
import { Toggle, ToggleOptionsType } from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";

export const Pricing = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("annual");
  return (
    <section className="mx-auto max-w-7xl px-2 md:px-4">
      <SectionHeading>Pricing</SectionHeading>
      <Toggle selected={selected} setSelected={setSelected} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
        <PriceColumn
          title="Individuals"
          price="0"
          statement="For individuals looking to up their productivity gains. Free forever."
          items={[
            {
              children: "1 Team Member",
              checked: true,
            },
            {
              children: "3 Boards",
              checked: true,
            },
            {
              children: "5 Workflows",
              checked: true,
            },
            {
              children: "Upgraded Support",
              checked: false,
            },
            {
              children: "Custom Branding",
              checked: false,
            },
            {
              children: "Self Host",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Teams"
          price={selected === "monthly" ? "12" : "8"}
          statement="For teams looking to scale their team efficiently. Stay on track."
          highlight
          items={[
            {
              children: "∞ Team Members",
              checked: true,
            },
            {
              children: "∞ Boards",
              checked: true,
            },
            {
              children: "∞ Workflows",
              checked: true,
            },

            {
              children: "Upgraded Support",
              checked: true,
            },
            {
              children: "Custom Branding",
              checked: false,
            },
            {
              children: "Self Host",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Enterprise"
          price={selected === "monthly" ? "24" : "16"}
          statement="For enterprises looking to see new heights. Manage without the stress"
          items={[
            {
              children: "∞ Team Members",
              checked: true,
            },
            {
              children: "∞ Boards",
              checked: true,
            },
            {
              children: "∞ Workflows",
              checked: true,
            },

            {
              children: "Enterprise Support",
              checked: true,
            },
            {
              children: "Custom Branding",
              checked: true,
            },
            {
              children: "Self Host",
              checked: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

type Props = {
  highlight?: boolean;
  title: string;
  price: string;
  statement: string;
  items: CheckListItemType[];
};

const PriceColumn = ({ highlight, title, price, statement, items }: Props) => {
  return (
    <div
      className={`relative w-full rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        highlight 
          ? "border-2 border-zinc-900 bg-white shadow-xl scale-[1.02] z-10" 
          : "border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg"
      }`}
    >
      {highlight && (
        <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Most Popular
        </span>
      )}

      <p className="mb-2 text-xl font-bold text-zinc-900">{title}</p>
      <div className="mb-6 flex items-baseline gap-1">
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{
              y: 24,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -24,
              opacity: 0,
            }}
            key={price}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="text-5xl font-black tracking-tight text-zinc-900"
          >
            ${price}
          </motion.span>
        </AnimatePresence>
        <div className="font-medium text-zinc-500">
          <span className="text-sm">/mo</span>
        </div>
      </div>

      <p className="mb-8 text-sm text-zinc-600 leading-relaxed">{statement}</p>

      <div className="mb-8 space-y-3">
        {items.map((i) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>

      <Button 
        className="w-full py-6 text-base font-bold" 
        intent={highlight ? "primary" : "secondary"}
      >
        Get Started
      </Button>
    </div>
  );
};
