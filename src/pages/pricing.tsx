import Head from "next/head";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { font } from "@/fonts";
import { Pricing as PricingComponent } from "@/components/pricing/Pricing";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import { EmailCapture } from "@/components/email-capture/EmailCapture";

export default function Pricing() {
  return (
    <main className={`${font.className} overflow-hidden`}>
      <Head>
        <title>Pricing | AI SaaS Starter</title>
        <meta name="description" content="Simple, transparent pricing for teams of all sizes." />
      </Head>
      <ExpandableNavBar links={NAV_LINKS}>
        <section className="relative flex flex-col items-center justify-center px-12 pb-24 pt-12 md:pb-32 md:pt-24">
          <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
            Plans & Pricing
          </h1>
          <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed text-zinc-600">
            Find the right plan for your team. Start for free, upgrade when you need to.
          </p>
        </section>
      </ExpandableNavBar>
      
      <div className="space-y-36 bg-zinc-50 pb-24 pt-24 md:pt-32">
        <PricingComponent />
      </div>
      
      <EmailCapture />
      <FinalCTA />
      <Footer />
    </main>
  );
}
