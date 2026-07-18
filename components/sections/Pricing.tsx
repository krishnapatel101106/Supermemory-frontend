import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import PricingCompo from "../PricingCompo";
import { CircleCheck, ShieldCheck, Zap, MessageSquare, StickyNote, ArrowRight } from "lucide-react";
import Section from "../section/Section";

export default function Pricing(){
    return (
        <Section
            title="PRICING"
            index="[8/9]"
            >
                <div>


                    <PricingCompo></PricingCompo>
                <div className="flex justify-around">
                    <div className="flex justify-center items-center gap-2">
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                        <p className="border border-primary-blue bg-primary-blue w-3 h-[5px]"></p>
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                    </div>
                    <p className="border border-gray-300/80 h-8"></p>
                    <div className="flex justify-center items-center gap-2">
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                        <p className="border border-primary-blue bg-primary-blue w-3 h-[5px]"></p>
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                    </div>
                </div>

                <div className="border border-gray-300/80 flex">
                    <div className="mt-10 ml-8">
                        <p className={`${dmMono.className} text-[11px] leading-[17px]`}>ENTERPRISE</p>
                        <p className="text-[15px] leading-[22px]">For organizations with committed <br />spend,custom deployments, and security requirements.</p>
                        <div className="flex"><h2 className={`${spaceGrotesk.className} text-[44px]`}>Custom</h2><p>pricing</p></div>
                        <button className="text-primary-blue">Talk to us</button>
                    </div>
                
                <div className="border-l border-gray-300/80 h-80 w-75 m-5 pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><ShieldCheck className="text-text-gray" /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Security & compliance</p>
                        <div className="text-[13px] text-text-gray-light flex flex-col gap-3 mt-3">
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Air-gapped self-hosting,<br/> you own the data.</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Or a dedicated managed instance</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>SOC 2 · HIPAA · GDPR</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Custom contracts & DPA</p>
                            </div><div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Enterprise MCP</p>
                            </div>
                        </div>
                    </div><div className="border-l border-gray-300/80 h-80 w-75 m-5 pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><Zap className="text-text-gray" /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Scale & performance</p>
                        <div className="text-[13px] text-text-gray-light flex flex-col gap-3 mt-3">
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>~Unlimited usage</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Committed-spend pricing</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Custom rate limits & throughput</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Dedicated infrastructure</p>
                            </div>
                        </div>
                    </div><div className="border-l border-gray-300/80 h-80 w-75 m-5 pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><MessageSquare className="text-text-gray" size={17} /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Enterprise-grade support</p>
                        <div className="text-[13px] text-text-gray-light flex flex-col gap-3 mt-3">
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Dedicated account manager</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Forward Deployed engineer</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>1:1 onboarding & integration</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Uptime SLA</p>
                            </div><div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Priority Slack channel</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="text-[14px] text-primary-blue flex justify-center items-center m-5 gap-2 cursor-pointer hover:text-blue-500">
                    <StickyNote size={17} /><p>See full rate card and FAQ</p><ArrowRight size={15} />
                </div> 
                </div>
            </Section>
    )
}
