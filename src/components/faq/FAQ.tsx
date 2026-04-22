import React, { useState } from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How does the free tier work?",
    answer: "The free tier is ideal for solo builders and includes enough projects and core features to launch and validate quickly.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes. You can upgrade or downgrade anytime from billing settings, and your subscription updates immediately.",
  },
  {
    question: "Do you offer custom enterprise pricing?",
    answer: "Yes. If your team needs advanced security, custom limits, or procurement support, contact sales for a tailored plan.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes, annual billing includes a discount compared with monthly pricing.",
  },
  {
    question: "Can I self-host the platform?",
    answer: "Self-hosting is available on enterprise plans. Reach out to our team to discuss setup and requirements.",
  },
];

export const FAQ = () => {
  return (
    <section className="mx-auto max-w-4xl px-2 md:px-4">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div className="mx-auto mt-6 max-w-3xl lg:mt-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-lg border border-zinc-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left font-medium text-zinc-900"
      >
        <span className="text-lg">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="text-xl text-zinc-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
         <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-4 pt-0 text-zinc-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
