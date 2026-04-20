import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <section className="mx-auto max-w-5xl px-4">
      <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-0">
        <Stat num={12} suffix="K+" subheading="Developers building weekly" />
        <Stat num={99} suffix=".9%" subheading="Uptime on all deployments" />
        <Stat num={450} suffix="+" subheading="Open source contributors" />
      </div>
    </section>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-2 text-center text-5xl font-medium">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="text-center text-xl font-medium">{subheading}</p>
    </div>
  );
};
