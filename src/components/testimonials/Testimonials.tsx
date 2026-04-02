import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder at StartupX",
    content: "This tool completely revolutionized the way our team works. We shipped our product twice as fast.",
    initials: "AR"
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director",
    content: "The analytics provided are top-notch. I can easily see how our campaigns are performing in real-time.",
    initials: "SL"
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    content: "I was skeptical at first, but the integration was seamless. It's now a core part of our tech stack.",
    initials: "DC"
  },
  {
    name: "Emily Watson",
    role: "Freelance Designer",
    content: "Beautiful, clean, and intuitive. It's exactly what I needed to manage my client projects efficiently.",
    initials: "EW"
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    content: "We've tried dozens of alternatives, but none match the simplicity and power of this platform.",
    initials: "MJ"
  },
  {
    name: "Sarah Patel",
    role: "Customer Success",
    content: "Our support tickets have decreased by 40% since we started using this. Our customers love the self-serve options.",
    initials: "SP"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  return (
    <section className="relative mx-auto mt-12 max-w-7xl overflow-hidden px-2 md:px-4">
      <SectionHeading>Loved by developers worldwide</SectionHeading>
      <SectionSubheading>Don't just take our word for it. Here's what our users have to say.</SectionSubheading>
      
      <div className="relative mt-8 flex w-full overflow-hidden">
        {/* Left and Right Fade overlays */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-zinc-50 to-transparent md:w-32"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-zinc-50 to-transparent md:w-32"></div>

        <div className="animate-marquee flex w-max gap-6 px-4 hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex w-[300px] shrink-0 flex-col gap-6 justify-between rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:w-[400px]"
            >
              <p className="text-zinc-600 font-medium leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 12px)); } /* -12px accounts for half of the gap space to keep loop seamless */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 768px) {
           .animate-marquee {
             animation: marquee 25s linear infinite;
           }
        }
      `}</style>
    </section>
  );
};
