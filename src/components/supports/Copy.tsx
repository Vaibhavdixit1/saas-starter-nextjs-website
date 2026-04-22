import React, { Dispatch, SetStateAction } from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-violet-600 md:text-start">
        Show who it's for
      </span>
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
        Support your business, big or small
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
        Different teams need different workflows. Use this section to highlight
        the specific outcomes each customer segment gets from your product and
        make your value clear at a glance.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
