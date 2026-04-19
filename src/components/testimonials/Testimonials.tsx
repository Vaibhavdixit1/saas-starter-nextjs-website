import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

const testimonialsRow1 = [
  {
    name: "Sarah Jenkins",
    role: "Founder at Pixel Perfect",
    content: "Antigravity has completely transformed our workflow. We're launching features in half the time it used to take.",
    initials: "SJ"
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director",
    content: "The analytics provided are top-notch. I can easily see how our campaigns are performing in real-time.",
    initials: "SL"
  },
  {
    name: "Michael Ross",
    role: "Senior Full Stack Dev",
    content: "The most intuitive platform I've ever used. The documentation and community support are top-notch.",
    initials: "MR"
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

const testimonialsRow2 = [
    {
      name: "Jessica Wu",
      role: "CTO at CloudBase",
      content: "We scaled from 1,000 to 1,000,000 users without breaking a sweat, thanks to their robust infrastructure.",
      initials: "JW"
    },
    {
      name: "Taylor Reed",
      role: "UX Researcher",
      content: "The user insights we've gathered are invaluable. It has completely changed our product roadmap.",
      initials: "TR"
    },
    {
      name: "Morgan Vance",
      role: "Agency Owner",
      content: "Managing multiple clients has never been easier. The dashboard is a lifesaver.",
      initials: "MV"
    },
    {
      name: "Casey Bloom",
      role: "Open Source Contributor",
      content: "I love the community and the extensibility. It's a developer's dream come true.",
      initials: "CB"
    },
    {
      name: "Riley Cooper",
      role: "Sales Operations",
      content: "Our conversion rates have spiked since implementing their checkout flow. Highly recommended.",
      initials: "RC"
    },
    {
      name: "Jamie Lane",
      role: "Creative Lead",
      content: "The aesthetic appeal is what sold us, but the performance is what keeps us here.",
      initials: "JL"
    }
];

const duplicatedRow1 = [...testimonialsRow1, ...testimonialsRow1];
const duplicatedRow2 = [...testimonialsRow2, ...testimonialsRow2];

export const Testimonials = () => {
  return (
    <section className="relative mx-auto mt-12 max-w-7xl overflow-hidden px-2 md:px-4">
      <SectionHeading>Loved by developers worldwide</SectionHeading>
      <SectionSubheading>Don't just take our word for it. Here's what our users have to say.</SectionSubheading>
      
      <div className="relative mt-8 flex flex-col gap-6 w-full overflow-hidden">
        {/* Left and Right Fade overlays */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-zinc-50 to-transparent md:w-32"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-zinc-50 to-transparent md:w-32"></div>

        {/* Row 1: Scrolling Left */}
        <div className="animate-marquee flex w-max gap-6 px-4 hover:[animation-play-state:paused]">
          {duplicatedRow1.map((t, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={t} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="animate-marquee-reverse flex w-max gap-6 px-4 hover:[animation-play-state:paused]">
          {duplicatedRow2.map((t, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(calc(-50% - 12px)); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 50s linear infinite;
        }
        @media (max-width: 768px) {
           .animate-marquee, .animate-marquee-reverse {
             animation-duration: 35s;
           }
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsRow1[0] }) => (
    <div
      className="flex w-[300px] shrink-0 flex-col gap-6 justify-between rounded-xl border border-zinc-200/60 bg-white/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:border-zinc-300 md:w-[400px]"
    >
      <p className="text-zinc-600 font-medium leading-relaxed italic">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50 text-sm font-bold text-violet-600 border border-violet-100">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{testimonial.name}</p>
          <p className="text-xs text-zinc-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
);
