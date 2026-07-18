
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../section/Section";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
    return (
        <Section
            title="TESTIMONIALS"
            index="[7/9]"
        >
            <div>
                <div></div>

                <div>
                    <div className="flex items-center justify-center flex-col m-10 gap-4">
                        <h3 className={`${spaceGrotesk.className} text-[22px] leading-[26px] font-normal`}>“We just ditched RAG completely and went<br /> memory only through Supermemory.”</h3>
                        <p className="text-text-gray text-[17px]">Reduced avg response time from 40s → 12s. Using about 40–50% fewer tokens. Just<br /> memory & near realtime web-search even for volatile information.</p>
                        <p className="border-b border-dashed border-blue-200 w-150"></p>
                        <div className="flex gap-10">
                            <Image src="/logo-chatarmin.svg" alt="armin" height={60} width={60}></Image>
                            <p>Armin Daryabegi, Founder, Chatarmin</p>
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(90deg,#1ba8f5_0%,#1b5ff2_35%,#1745d8_60%,#3b00ff_100%)] h-[400px] w-[1235px] text-white flex justify-around gap-35">
                        <div className="mt-10">
                            <p className={`${spaceGrotesk.className} text-[24px] leading-[26px] font-normal`}>Memory vs RAG</p>
                            <p className="text-white/50">Latency (seconds)</p>
                            <div className="flex gap-5 mt-4">
                                <div className="flex flex-col text-white/50 gap-6">
                                    <p>40</p>
                                    <p>30</p>
                                    <p>20</p>
                                    <p>10</p>
                                    <p>0</p>
                                </div>
                                <div className="relative w-[600px] h-[272px]">
                                    {/* Grid lines */}
                                    <div className="absolute inset-0 flex flex-col py-3 gap-12">
                                        <div className="h-px w-[600px] bg-white/20"></div>
                                        <div className="h-px w-[600px] bg-white/20"></div>
                                        <div className="h-px w-[600px] bg-white/20"></div>
                                        <div className="h-px w-[600px] bg-white/20"></div>
                                        <div className="h-px w-[600px] bg-white/20"></div>
                                    </div>

                                    {/* Bars */}
                                    <div className="absolute bottom-4 left-10 right-20 flex justify-around items-end gap-17">
                                        {/* Memory */}
                                        <div className="flex flex-col items-center">
                                            <span className="mb-3 text-white font-bold">12s</span>

                                            <div className="w-28 h-16 bg-white rounded-t-2xl"></div>

                                            <span className="mt-6 text-white/80">Memory</span>
                                        </div>

                                        {/* RAG */}
                                        <div className="flex flex-col items-center">
                                            <span className="mb-4 text-white font-bold">40s</span>

                                            <div className="w-28 h-49 bg-[#004FD1] rounded-t-2xl"></div>

                                            <span className="mt-6 text-white/80">RAG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`${spaceGrotesk.className} font-normal mt-20`}>
                                <p className="text-[88px] leading-[79px] text-end">40%</p>
                                <p className="text-[30px] leading-[32px]">Fewer tokens</p>
                            </div>
                            <p className="text-[15px] leading-[21px] text-[#ffffffc7]">Compared to RAG baseline</p>
                            <div>
                                <button
                                    className="mt-8 pl-5 flex h-[40px] w-[200px] cursor-pointer items-center justify-center border border-white/70 bg-white/8 text-[13px] leading-[20px] text-white transition-colors hover:bg-white hover:text-primary-blue"
                                >
                                    VIEW ON X
                                    <ArrowRight
                                        
                                        className="pl-2 h-10 border-l border-current ml-13"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col m-10  gap-4">
                        <h3 className={`${spaceGrotesk.className} text-[22px] leading-[26px] font-normal`}>“Tried almost everything — structured memory<br /> files, qmd etc. The only thing<br /> that works reliably is Supermemory.”</h3>
                        <p className="text-text-gray text-[17px]">Not facing any memory issues after setting it up.</p>
                        <p className="border-b border-dashed border-blue-200 w-150"></p>
                        <div className="flex gap-10">
                            <Image src="/logo-razorpay-wordmark.svg" alt="armin" height={90} width={90}></Image>
                            <p>Harshil Mathur, Founder, Razorpay</p>
                        </div>
                    </div>

                    <div className="flex justify-around m-10">
                        <div className={`${spaceGrotesk.className} text-[24px] leading-[29px] font-normal`}>“Supermemory let us scale usage without<br /> losing the thread of every conversation.”</div>
                        <div className="flex gap-3">
                            <div className="text-[14px] text-text-gray">Max Peters, Founder</div>
                            <Image src="/logo-adapta.svg" alt="adapta" height={40} width={80}></Image>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    )
}
