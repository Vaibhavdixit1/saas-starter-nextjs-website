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
          title="Starter"
          price="0"
          statement="Everything you need to learn the ropes and start building your first app."
          items={[
            {
              children: "5 Projects",
              checked: true,
            },
            {
              children: "Basic Analytics",
              checked: true,
            },
            {
              children: "Community Support",
              checked: true,
            },
            {
              children: "Custom Domains",
              checked: false,
            },
            {
              children: "Priority Support",
              checked: false,
            },
            {
              children: "Team Collaboration",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Professional"
          price={selected === "monthly" ? "29" : "19"}
          statement="The perfect choice for growing startups and professional developers."
          highlight
          items={[
            {
              children: "Unlimited Projects",
              checked: true,
            },
            {
              children: "Advanced Analytics",
              checked: true,
            },
            {
              children: "Priority Email Support",
              checked: true,
            },
            {
              children: "Custom Domains",
              checked: true,
            },
            {
              children: "Team Collaboration",
              checked: true,
            },
            {
              children: "API Access",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Expert"
          price={selected === "monthly" ? "99" : "79"}
          statement="Advanced tools and priority support for high-scale enterprise operations."
          items={[
            {
              children: "Everything in Professional",
              checked: true,
            },
            {
              children: "Dedicated Account Manager",
              checked: true,
            },
            {
              children: "24/7 Phone Support",
              checked: true,
            },
            {
              children: "API Access & Webhooks",
              checked: true,
            },
            {
              children: "SLA Guarantees",
              checked: true,
            },
            {
              children: "Custom Contracts",
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
