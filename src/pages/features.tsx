import Head from "next/head";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { font } from "@/fonts";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function Features() {
    return (
        <main className={`${font.className} overflow-hidden`}>
            <Head>
                <title>Features | AI SaaS Starter</title>
                <meta name="description" content="Discover powerful features that help your team work smarter, not harder." />
            </Head>
            <ExpandableNavBar links={NAV_LINKS}>
                <section className="relative flex flex-col items-center justify-center px-12 pb-24 pt-12 md:pb-32 md:pt-24">
                    <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
                        Features & Capabilities
                    </h1>
                    <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed text-zinc-600">
                        Everything you need to manage your workflows, scale your operations, and build better products.
                    </p>
                </section>
            </ExpandableNavBar>

            <div className="space-y-36 bg-zinc-50 pb-24 pt-24 md:pt-32">
                <FeatureToggles />
                <BenefitsGrid />
            </div>

            <FinalCTA />
            <Footer />
        </main>
    );
}
