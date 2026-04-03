import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

export type ToggleOptionsType = "monthly" | "annual";

export const Toggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto mt-3 flex w-fit items-center rounded-full bg-zinc-100 p-1">
        <button
          className={`relative z-10 flex items-center gap-2 px-6 py-2 text-sm font-medium transition-colors ${selected === "monthly" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"}`}
          onClick={() => {
            setSelected("monthly");
          }}
        >
          <span className="relative z-10">Monthly</span>
        </button>
        <button
          className={`relative z-10 flex items-center gap-2 px-6 py-2 text-sm font-medium transition-colors ${selected === "annual" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"}`}
          onClick={() => {
            setSelected("annual");
          }}
        >
          <span className="relative z-10">Annually</span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex p-1 ${
            selected === "annual" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="h-full w-1/2 rounded-full border border-zinc-200 bg-white shadow-sm"
          />
        </div>
      </div>
      <div className="mt-2">
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
          Save 20%
        </span>
      </div>
    </div>
  );
};
