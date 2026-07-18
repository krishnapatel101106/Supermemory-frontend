
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Section from "../section/Section";

export default function UseCases() {
    return (
        <Section
            title="USE CASES"
            index="[5/9]"
        >
            <div>
                <div className="flex justify-around gap-10">
                    <div className={`${spaceGrotesk.className} text-[46px] leading-[49px] font-normal m-10 flex flex-col`}>
                        <span>Best for{" "} <span className="text-primary-blue">latency, quality and cost.</span></span>
                        <span>Or configurable for each use case.</span>
                    </div>
                    <div className={`${spaceGrotesk.className} text-[13px] leading-[14px] font-normal mt-24 flex gap-3 mr-10`}>
                        <button className="border border-gray-300 w-35 h-9">ALL USE CASES</button>
                        <button className="border border-gray-300 w-9 h-9 pl-2"><ArrowLeft size={17} className="self-center cursor-pointer" /></button>
                        <button className="border border-gray-300 w-9 h-9 pl-2"><ArrowRight size={17} className="self-center cursor-pointer" /></button>
                    </div>
                </div>
                <div className="flex justify-around">

                    <div className="p-7 text-white border border-gray-300/80 h-[400px] w-[360px] bg-[linear-gradient(135deg,_#42C0D8_0%,_#2FA1E0_22.6%,_#2390E4_45.4%,_#004CF3_72.6%,_#0832FE_100%)]">
                        <span className={`${dmMono.className} text-[11px] pb-5 font-normal flex gap-2`}><p className="border border-white h-[7px] w-[6px] mt-1 bg-white"></p>AI ASSISTANTS</span>
                        <p className={`${spaceGrotesk.className} text-[28px] leading-[31px] font-medium text-white pb-5`}>AI assistants that remember your users.</p>
                        <p className="text-[15px] text-white/70">Persistent context and reasoning memory.<br /> Chats, docs, and user data unified so<br /> assistants adapt over time.</p>
                        <div className="mt-25">
                            <p className={`${dmMono.className} text-[12px] leading-[12px] font-bold text-white/80`}>IN PRODUCTION AT</p>
                            <div className="flex justify-around mt-3">
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={10} width={20}></Image>
                                    <p>ppl.xyz</p>
                                </div>
                                <div>
                                    <Image src="/endearing.svg" alt="ppl xyz" height={100} width={100} className="brightness-0 invert"></Image>
                                </div>
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={5} width={23}></Image>
                                    <p>chatnow</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-7 border border-gray-300/80 h-[400px] w-[360px]">
                        <span className={`${dmMono.className} text-primary-blue leading-[14px] text-[12px] pb-5 font-normal flex gap-2`}><p className="border border-primary-blue h-[7px] w-[6px] mt-1 bg-primary-blue"></p>KNOWLEDGE BASES</span>
                        <p className={`${spaceGrotesk.className} text-[28px] leading-[31px] font-medium pb-5`}>Self-improving, for<br /> your users.</p>
                        <p className="text-[15px]">Ingest, sync, and retrieve from any source, so your agents always have the latest context, not stale snapshots.</p>
                        <div className="mt-25">
                            <p className={`${dmMono.className} text-[12px] leading-[12px] font-bold`}>IN PRODUCTION AT</p>
                            <div className="flex justify-around mt-3">
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={10} width={20}></Image>
                                    <p>ppl.xyz</p>
                                </div>
                                <div>
                                    <Image src="/endearing.svg" alt="ppl xyz" height={100} width={100} className="brightness-0 invert"></Image>
                                </div>
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={5} width={23}></Image>
                                    <p>chatnow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-7 border border-gray-300/80 h-[400px] w-[360px]">
                        <span className={`${dmMono.className} text-primary-blue leading-[14px] text-[12px] pb-5 font-normal flex gap-2`}><p className="border border-primary-blue h-[7px] w-[6px] mt-1 bg-primary-blue"></p>AI ASSISTANTS</span>
                        <p className={`${spaceGrotesk.className} text-[28px] leading-[31px] font-medium pb-5`}>Realtime knowledge for agents.</p>
                        <p className="text-[15px]">Keep your agents grounded in up-to-date facts from every source (docs, APIs, internal tools), synced and retrievable in milliseconds.</p>
                        <div className="mt-25">
                            <p className={`${dmMono.className} text-[12px] leading-[12px] font-bold`}>IN PRODUCTION AT</p>
                            <div className="flex justify-around mt-3">
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={10} width={20}></Image>
                                    <p>ppl.xyz</p>
                                </div>
                                <div>
                                    <Image src="/endearing.svg" alt="ppl xyz" height={100} width={100} className="brightness-0 invert"></Image>
                                </div>
                                <div className="flex gap-2">
                                    <Image src="/ppl-xyz.png" alt="ppl xyz" height={5} width={23}></Image>
                                    <p>chatnow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
