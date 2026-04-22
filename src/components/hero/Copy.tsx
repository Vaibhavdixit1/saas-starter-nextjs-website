import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";

export const Copy = () => {
  return (
    <>
      <div className="mb-8">
        <Link
          href="https://www.producthunt.com/"
          target="_blank"
          rel="nofollow"
          className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md px-1 py-1 pr-4 text-xs font-medium transition-all hover:border-zinc-300 hover:shadow-sm"
        >
          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight text-white">
            New
          </span>
          <span className="text-zinc-600">
            Trusted by 10,000+ developers and founders
          </span>
          <FiArrowUpRight className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <h1 className="max-w-4xl text-center text-5xl font-black leading-[1.1] tracking-tight md:text-8xl">
        Launch your next <span className="text-violet-600 italic">SaaS</span> in days, not months
      </h1>
      <p className="mx-auto my-6 max-w-2xl text-center text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
        A modern Next.js starter built to help you ship faster with polished UI,
        scalable foundations, and production-ready defaults.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="h-14 px-8 text-lg font-bold">
          Start for free
        </Button>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest italic">
          Start building right away
        </p>
      </div>
    </>
  );
};
