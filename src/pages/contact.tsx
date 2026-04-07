import Head from "next/head";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { font } from "@/fonts";
import { Footer } from "@/components/footer/Footer";

export default function Contact() {
    return (
        <main className={`${font.className} overflow-hidden`}>
            <Head>
                <title>Contact Us — Orbit</title>
                <meta name="description" content="Get in touch with our team to learn more about how Orbit can transform your engineering workflow." />
            </Head>
            <ExpandableNavBar links={NAV_LINKS}>
                <section className="relative flex flex-col items-center justify-center px-12 pb-24 pt-12 md:pb-32 md:pt-24">
                    <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
                        Get in touch with us
                    </h1>
                    <p className="mx-auto my-4 max-w-2xl text-center text-base leading-relaxed md:my-6 md:text-xl md:leading-relaxed text-zinc-600">
                        Whether you have questions about our product, pricing, or enterprise solutions, we&apos;re here to help you ship faster.
                    </p>
                </section>
            </ExpandableNavBar>

            <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-32 pt-12 md:grid-cols-2 md:px-8">
                <div>
                    <h2 className="mb-6 text-3xl font-bold">How can we help?</h2>
                    <p className="mb-8 text-zinc-600">
                      Our experts are ready to show you how Orbit can help your team automate workflows and ship better software.
                    </p>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600 font-bold">1</div>
                            <div>
                                <p className="font-semibold">Support & Guidance</p>
                                <p className="text-sm text-zinc-500">Get technical support from our engineering team.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600 font-bold">2</div>
                            <div>
                                <p className="font-semibold">Sales Inquiries</p>
                                <p className="text-sm text-zinc-500">Learn about our enterprise plans and volume discounts.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600 font-bold">3</div>
                            <div>
                                <p className="font-semibold">Partnerships</p>
                                <p className="text-sm text-zinc-500">Explore collaboration opportunities and API integrations.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/50">
                    <form className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full rounded-lg border border-zinc-200 p-2.5 transition-colors focus:border-violet-500 focus:outline-none" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full rounded-lg border border-zinc-200 p-2.5 transition-colors focus:border-violet-500 focus:outline-none" placeholder="Smith" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input type="email" className="w-full rounded-lg border border-zinc-200 p-2.5 transition-colors focus:border-violet-500 focus:outline-none" placeholder="jane.smith@company.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea rows={4} className="w-full rounded-lg border border-zinc-200 p-2.5 transition-colors focus:border-violet-500 focus:outline-none" placeholder="Tell us more about your team..."></textarea>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition-all hover:bg-violet-700">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
