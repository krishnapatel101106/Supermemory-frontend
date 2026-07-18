"use client";
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import { useState } from "react";
import { Minus, Plus, ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "../section/Section";

const faqs = [
    {
        question: "How does the credit balance work?",
        answer: (
            <>
                Every plan comes with a monthly dollar balance. Each API call, storing memories, searching, indexing,<br /> draws from that balance at the rates listed above.
                <br /><br />
                When the balance runs out, you can top up or auto top-up to keep going. No surprise bills at the end of
                <br />
                the month.
            </>
        ),
    },
    {
        question: "Does it support MCPWhat's an SM token?",
        answer: (
            <>
                SM tokens are the unique tokens Supermemory actually ingests and embeds; repeats and unchanged
                <br />
                content don't get billed again. Effectively a 100% discount on what a normal prompt cache would re-
                <br />
                charge you for.
                <br /><br />
                Plain text is $0.005 per 1K SM tokens; rich content (PDFs, audio, video) is $0.010 per 1K because it needs
                <br />
                heavier extraction.
                <br /><br />
                <div className="flex m-2 gap-7">
                    <div className="flex flex-col ">
                        <span className="text-text-gray text-[10px]">PLAIN TEXT</span>
                        <span className={`${spaceGrotesk.className} text-[18px]`}>$0.005 / 1K</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text-gray text-[10px]">RICH CONTENT</span>
                        <span className={`${spaceGrotesk.className} text-[18px]`}>$0.010 / 1K</span>
                    </div>
                </div>
            </>
        ),
    },
    {
        question: "What happens if I re-store the same content?",
        answer: (
            <>
                Nothing, you're not billed again. Supermemory deduplicates at the token level, so re-uploading a doc,
                <br />
                syncing a connector, or pushing the same conversation history won't redraw from your balance.
                <br /><br />
                Only net-new content counts as SM tokens. This is why production agents that loop over the same
                <br />
                context end up an order of magnitude cheaper here than with a typical vector DB.
            </>
        ),
    },
    {
        question: "Do unused credits roll over?",
        answer: (
            <>
                Subscription credits reset monthly. Top-up credits you purchase in advance never expire, they sit in
                <br />
                your balance until you use them.
            </>
        ),
    },
    {
        question: "What happens if I exceed my balance?",
        answer: (
            <>
                On Free, you'll be paused; pay-as-you-go isn't available on Free, so you'll need to upgrade to Pro or
                <br />
                Scale to keep going.
                <br /><br />
                On Pro and Scale, auto top-up kicks in to keep your app running. You can set hard spend caps on Scale
                <br />
                to prevent runaway usage.
            </>
        ),
    },
    {
        question: "Can I self-host?",
        answer: (
            <>
                Self-hosted deployments are available on Scale and Enterprise. Enterprise additionally supports fully
                <br />
                air-gapped deployments (LLM inference may be the only outbound dependency, unless GPUs are
                <br />
                available).
            </>
        ),
    },
    {
        question: "Do you offer startup or academic research credits?",
        answer: (
            <>
                Yes. Qualifying early-stage startups and academic research teams get up to $2,000 in credits,
                <br />
                dedicated support, and 3 months to build. Apply via the Startup Program link above.
            </>
        ),
    },
];

type AccordionProps = {
    number: number;
    question: string;
    answer: React.ReactNode;
    open: boolean;
    onToggle: () => void;
};

function Accordion({ question, answer, open, onToggle, number }: AccordionProps) {

    return (
        <div
            className={`border-b border-gray-300/80 transition-all duration-300 ${open
                ? "bg-blue-100 border-blue-300 text-primary-blue"
                : "bg-white hover:bg-gray-50 text-black"
                }`}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between px-6 py-5 cursor-pointer"
            >
                <div className="flex items-center gap-5">
                    <span
                        className={`${dmMono.className} text-[13px] ${open ? "text-primary-blue" : "text-[#888E94]"
                            }`}
                    >
                        {String(number).padStart(2, "0")}
                    </span>

                    <span
                        className={`${spaceGrotesk.className} text-[18px] ${open ? "text-primary-blue" : "text-[#0B1015]"
                            }`}
                    >
                        {question}
                    </span>
                </div>

                {open ? <Minus className="text-primary-blue" size={20} /> : <Plus className="text-black" size={20} />}
            </button>

            {open && (
                <div className="px-6 pb-5 ml-8">
                    <p className={`${dmSans.className} text-[16px] text-gray-800`}>
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section
            title="FAQ"
            index="[9/9]"
        >
            <div>
                <div className="flex justify-around">
                    <div className={`${spaceGrotesk.className} text-[44px] m-5`}>
                        <span className="flex">The fine print, <p className="text-primary-blue">in plain English.</p></span>
                    </div>
                    <div className={`${spaceGrotesk.className} text-[13px] m-5 mt-10 flex gap-2`}>
                        <button className="border bg-primary-blue h-8 w-11 text-white cursor-pointer">ALL</button>
                        <button className="border border-gray-300 h-8 w-16 cursor-pointer">BILING</button>
                        <button className="border border-gray-300 h-8 w-16 cursor-pointer">DEPLOY</button>
                        <button className="border border-gray-300 h-8 w-20 cursor-pointer">PROGRAMS</button>
                    </div>
                </div>

                <div>
                    <div className="w-[1234px] mx-auto mt-10">
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                number={index + 1}
                                question={faq.question}
                                answer={faq.answer}
                                open={openIndex === index}
                                onToggle={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="border border-gray-300/80 h-15 text-[13px] leading-[20px] flex justify-around pt-5 gap-170">
                    <div>
                        <div className="text-text-gray-light">Still something on your mind?</div>
                    </div>
                    <div className="gap-5 flex">
                        <div>Read the docs</div>
                        <div className="flex text-primary-blue gap-1"><div>Talk to sales</div><ArrowRight size={13} className="mt-1" /></div>
                    </div>
                </div>

                <div>
                    <div className={`${spaceGrotesk.className} text-[60px] leading-[66px] mt-20 m-5 ml-13 mb-20`}>
                        <div className="flex gap-5 mb-2">
                            <p>Your</p><span className="text-primary-blue border border-primary-blue h-20 w-80 flex"><p className="border border-primary-blue bg-primary-blue h-3 w-3 mt-10 m-2"></p>Agent</span>
                        </div>
                        <div className="flex gap-34 mb-2">
                            <span className="flex"><p>needs it's</p><p className="text-primary-blue">Supermemory</p></span>
                            <span className="text-[15px] leading-[23px] bg-primary-blue text-white h-14 w-75 flex gap-2 justify-center items-center cursor-pointer">Start Building<ArrowRight size={16} className=" mt-1" /></span>
                        </div>
                        <div className="flex gap-5">
                            <div className="relative h-[140px] w-[800px] overflow-hidden">
                                <Image
                                    src="/blue-noise.png"
                                    alt="blue bg"
                                    width={800}
                                    height={140}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="relative z-10 flex h-full flex-col justify-center p-5 text-white ml-3">
                                    <p className="text-[12px] leading-[14px]">TOTAL MEMORIES SAVED</p>
                                    <h1 className="text-[80px] leading-[80px]">1,505,650,042</h1>
                                </div>
                            </div>
                            <div className="border border-primary-blue text-primary-blue">
                                <div>

                                </div>
                                <div className="w-[300px]">
                                    <span className="flex m-3 gap-55">
                                        <Image src="/github.svg" alt="github logo" height={25} width={25}></Image>
                                        <ArrowUpRight size={17} />
                                    </span>
                                    <span className="flex gap-2 m-3 mt-12">
                                        <h3 className="text-[36px] leading-[36px]">28.4K</h3>
                                        <p className="text-[18px] leading-[18px] mt-4">stars</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

