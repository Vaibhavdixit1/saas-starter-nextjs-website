import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

const testimonialsRow1 = [
  {
    name: "Sarah Jenkins",
    role: "CEO at Pixel Perfect",
    content: "This is the boilerplate I've been waiting for. It saved us months of engineering time and let us focus on our core product.",
    initials: "SJ"
  },
  {
    name: "Samantha Lee",
    role: "VP of Engineering",
    content: "The clean architecture and pre-built components are a game changer. We reached production in record time.",
    initials: "SL"
  },
  {
    name: "Michael Ross",
    role: "Senior Architect",
    content: "Deeply impressed by the codebase quality. It's rare to find a starter that actually follows best practices.",
    initials: "MR"
  },
  {
    name: "Emily Watson",
    role: "Lead Product Designer",
    content: "The design system is incredible. It's modern, accessible, and incredibly easy to customize for our brand.",
    initials: "EW"
  },
  {
    name: "Marcus Johnson",
    role: "Technical Co-founder",
    content: "We've tried dozens of starters, but this is the first one that felt truly enterprise-ready from day one.",
    initials: "MJ"
  },
  {
    name: "Sarah Patel",
    role: "Head of Growth",
    content: "Our team's velocity has doubled since we switched. The developer experience is simply unmatched.",
    initials: "SP"
  }
];

const testimonialsRow2 = [
    {
      name: "Jessica Wu",
      role: "CTO at CloudBase",
      content: "Scaling from 10k to 1M users was seamless. The underlying infra is rock solid and incredibly performant.",
      initials: "JW"
    },
    {
      name: "Taylor Reed",
      role: "Platform Engineer",
      content: "The CI/CD integration and deployment workflows are flawless. It just works, every single time.",
      initials: "TR"
    },
    {
      name: "Morgan Vance",
      role: "Director of Product",
      content: "It's the perfect balance of flexibility and built-in power. Our engineers love working with it.",
      initials: "MV"
    },
    {
      name: "Casey Bloom",
      role: "Full Stack Developer",
      content: "I've never seen a starter with this much attention to detail. Every edge case is already handled.",
      initials: "CB"
    },
    {
      name: "Riley Cooper",
      role: "SaaS Consultant",
      content: "I recommend this to all my clients. It's the fastest way to get a high-quality product to market.",
      initials: "RC"
    },
    {
      name: "Jamie Lane",
      role: "Startup Founder",
      content: "The best investment we made early on. It gave us the professional edge we needed to close our seed round.",
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
