import Head from "next/head";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { font } from "@/fonts";
import { Stats } from "@/components/stats/Stats";
import { Logos } from "@/components/logos/Logos";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import { Supports } from "@/components/supports/Supports";

export default function About() {
    return (
        <main className={`${font.className} overflow-hidden`}>
            <Head>
                <title>About Us | AI SaaS Starter</title>
                <meta name="description" content="Learn more about our mission, our team, and our story." />
            </Head>
            <ExpandableNavBar links={NAV_LINKS}>
                <section className="relative flex flex-col items-center justify-center px-12 pb-24 pt-12 md:pb-32 md:pt-24">
                    <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
                        About Us
                    </h1>
                    <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed text-zinc-600">
                        We're on a mission to build the best tools for modern teams. Meet the people behind the product.
                    </p>
                </section>
            </ExpandableNavBar>

            <Logos />

            <div className="space-y-36 bg-zinc-50 pb-24 pt-24 md:pt-32">
                <Stats />
                <Supports />
            </div>

            <FinalCTA />
            <Footer />
        </main>
    );
}
