import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import { CircleCheck,ArrowRight } from "lucide-react";

export default function PricingCompo(){
    return (
        <div>
            <div className="flex flex-col justify-center items-center m-10 gap-3">
                    <h3 className={`${spaceGrotesk.className} text-[40px]`}>Simple pricing, by usage.</h3>
                    <p className="text-center text-text-gray">Pay only for what you use. Every plan comes with monthly credits, with no<br /> surprise bills and no upgrade walls.</p>
            </div>
            
            <div className="flex">
                    <div className="border border-gray-300/80 h-180 w-77 p-5">
                        <h4 className={`${spaceGrotesk.className} text-[24px] leading-[24px] font-medium`}>Free</h4>
                        <p className="text-text-gray text-[14px]">For builders tinkering,<br /> prototypes and side projects.</p>
                        <p className="border-dashed border-blue-100 w-80"></p>
                        <div className="flex">
                            <h1 className={`${spaceGrotesk.className} text-[48px]`}>$0</h1><p className="text-[#888e94] text-[15px] mt-8 ml-1">/mo</p>
                        </div>
                        <p className={`${dmMono.className} text-[11px] leading-[15px] font-normal`}>~$5/mo of usage built in</p>
                        <button className={`${spaceGrotesk.className} border border-gray-300/80 h-12 w-60 text-primary-blue text-[500] m-5 cursor-pointer flex pt-3 pl-18`}>Start free <ArrowRight size={15} className="m-1"/></button>
                        <div className="flex flex-col gap-5 m-2 text-text-gray text-[14px]">
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Hermes Plugin</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Supermemory MCP</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Community support</span>
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-300/80 h-180 w-77 p-5">
                        <h4 className={`${spaceGrotesk.className} text-[24px] leading-[24px] font-medium`}>Pro</h4>
                        <p className="text-text-gray text-[14px]">For small teams and<br /> plugin power-users.</p>
                        <p className="border-dashed border-blue-100 w-80"></p>
                        <div className="flex">
                            <h1 className={`${spaceGrotesk.className} text-[48px]`}>$19</h1><p className="text-[#888e94] text-[15px] mt-8 ml-1">/mo</p>
                        </div>
                        <p className={`${dmMono.className} text-[11px] leading-[15px] font-normal`}>~$20/mo of usage built in</p>
                        <button className={`${spaceGrotesk.className} border border-gray-300/80 h-12 w-60 text-primary-blue text-[500] m-5 cursor-pointer flex pt-3 pl-20`}>Get Pro <ArrowRight size={15} className="m-1"/></button>
                        <div className="flex flex-col gap-5 m-2 text-text-gray text-[14px]">
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited storage</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited users</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Auto top-up available</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Google Drive, Notion &<br/> OneDrive connectors</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>2 teammates included</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue mb-5" size={14} />
                                <span>OpenClaw, Claude Code and<br/> other plugins</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Email support</span>
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-300/80 h-180 w-78 p-5 bg-blue-100/80">
                        <div className="flex gap-2">
                            <h4 className={`${spaceGrotesk.className} text-[24px] leading-[24px] font-medium`}>Max</h4>
                            <p className="text-white bg-primary-blue h-4 rounded w-20 text-center text-[10px]">MOST PICKED</p>
                        </div>
                        <p className="text-text-gray text-[14px]">More headroom for<br/> developers who need it.</p>
                      
                        <div>
                            <div className="flex">
                            <h1 className={`${spaceGrotesk.className} text-[48px]`}>$100</h1><p className="text-[#888e94] text-[15px] mt-8 ml-1">/mo</p>
                        </div>
                        <p className={`${dmMono.className} text-[11px] leading-[15px] font-normal text-primary-blue border border-white bg-white w-60 h-5`}>~$130/mo of usage built in (6x Pro)</p>
                        <button className={`${spaceGrotesk.className} border border-gray-300/80 h-12 w-60 text-white bg-primary-blue text-[500] m-5 cursor-pointer flex pt-3 pl-18`}>Get Max <ArrowRight size={15} className="m-1 text-white"/></button>
                        </div>
                        
                        <div className="flex flex-col gap-5 m-2 text-text-gray text-[14px]">
                            <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited storage</span>
                            </p>
                             <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited users</span>
                            </p>
                             <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Gmail & Granola connectors<br/> (+ Pro)</span>
                            </p>
                             <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Auto top-up available</span>
                            </p>
                             <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue mb-5" size={14} />
                                <span>OpenClaw, Claude Code and<br/> other plugins</span>
                            </p>
                             <p className="flex items-center gap-2 border-b border-blue-200/50 w-55 pb-1">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Priority support</span>
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-300/80 h-180 w-77 p-5">
                        <h4 className={`${spaceGrotesk.className} text-[24px] leading-[24px] font-medium`}>Scale</h4>
                        <p className="text-text-gray text-[14px]">For teams running<br/> production workloads.</p>
                        <p className="border-dashed border-blue-100 w-80"></p>
                        <div className="flex">
                            <h1 className={`${spaceGrotesk.className} text-[48px]`}>$399</h1><p className="text-[#888e94] text-[15px] mt-8 ml-1">/mo</p>
                        </div>
                        <p className={`${dmMono.className} text-[11px] leading-[15px] font-normal`}>~$300/mo of usage built in</p>
                        <button className={`${spaceGrotesk.className} border border-gray-300/80 h-12 w-60 text-primary-blue text-[500] m-5 cursor-pointer flex pt-3 pl-18`}>Get Scale <ArrowRight size={15} className="m-1"/></button>
                        <div className="flex flex-col gap-5 m-2 text-text-gray text-[14px]">
                             <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited storage</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Unlimited users</span>
                            </p>
                             <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Up to 10 teammates</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>All connectors (Gmail, GitHub, S3,<br/> Web Crawler + Pro)</span>
                            </p>
                             <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Auto top-up + spend caps</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Priority support</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>SOC 2 · HIPAA BAA</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <CircleCheck className="text-primary-blue" size={14} />
                                <span>Self-hosted option</span>
                            </p>
                        </div>
                    </div>
            </div>

        </div>
    )
}