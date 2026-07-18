
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../section/Section";
import { X } from "lucide-react";

export default function WhatWeDo() {
    return (
        <Section
            title="WHAT WE DO"
            index="[2/9]"
        >
            <div>
                <div className={`${spaceGrotesk.className} text-[40px] leading-[42px] font-medium text-[#0B1015] mt-10 flex flex-col justify-center items-center`}>
                    <div>
                        <span className="flex justify-center">
                            <p>Bring your data</p>
                            <span className="flex items-center gap-2">
                                <span className="text-white bg-primary-blue rounded p-1 m-1 ml-2" aria-hidden="true">
                                    <svg
                                        viewBox="0 0 30 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                    >
                                        <path
                                            d="M29.3388 9.46767H18.448V0.00146484H14.9293V10.2725C14.9293 11.3634 15.36 12.411 16.1254 13.183L25.018 22.151L27.506 19.6419L20.938 13.0183H29.3408V9.46975L29.3388 9.46767Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M1.82839 4.36056L8.39633 10.9842H-0.00646973V14.5328H10.8843V23.999H14.403V13.728C14.403 12.637 13.9723 11.5894 13.2069 10.8175L4.31635 1.85147L1.82839 4.36056Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>

                                <p className="text-[#1266EF]">We build</p>
                            </span>
                        </span>

                        <span className="flex"> <p className="text-[#1266EF]">understanding.</p><p>Your agent just knows.</p></span>
                    </div>
                </div>

                <div className={`${dmSans.className} text-gray-500 flex justify-center mt-7`}>Context infrastructure for AI agrents. One API, every capability.</div>

                <div>
                    <div className={`${spaceGrotesk.className} flex mb-15 mt-10 justify-center`}>
                        <span className="bg-primary-blue border border-primary-blue h-[550px] w-[550px] text-white p-15">
                            <p className="text-[13px] mb-3">FOR DEVELOPERS & TEAMS</p>
                            <p className="text-[38px] mb-3">The Supermemort API</p>
                            <p className="text-[15px]">State-of-the-art retrieval and memort.RAG, memory, and </p>
                            <p>extraction. One API, every capability.</p>

                            <div className="border border-dashed border-white/50 flex justify-around mt-5 h-23">
                                <div className="border-r border-dashed border-white/50 h-15 mt-3 pr-3">
                                    <div className="text-[32px]">300ms</div>
                                    <div className="text-[12px] text-[#FFFFFF99]">RECALL LATENCY</div>
                                </div>
                                <div className="border-r border-dashed border-white/50 h-15 mt-3 pr-3 pr-7">
                                    <div className="text-[32px]">300ms</div>
                                    <div className="text-[12px] text-[#FFFFFF99]">RECALL LATENCY</div>
                                </div>
                                <div>
                                    <div className="text-[32px] mt-3">300ms</div>
                                    <div className="text-[12px] text-[#FFFFFF99]">RECALL LATENCY</div>
                                </div>
                            </div>
                            <p className="text-gray-100/80 text-sm mt-5">Self-hostable, SOC 2 Type 2, TypeScript & Python SDKs</p>
                            <button className="bg-white text-blue-500 w-107 h-13 text-sm mt-10 cursor-pointer">Start Building in 5 minutes</button>
                        </span>

                        <div className="border border-blue-100 h-[550px] w-[550px] flex flex-col pt-12 gap-2 pl-15">
                            <span className="text-gray-400 text-[13px]">FOR EVERYONE</span>
                            <span className="text-[35px]">Personal Supermemory</span>
                            <span className="text-gray-400">One memort across everything you use. What you<br /> teach one AI, every AI remembers.</span>
                            <span className="border-t border-gray-300 w-110 flex justify-around gap-45 mb-1 pt-2 mt-3"><p>Supermemory App</p><p className="text-gray-400 text-sm">Control panel</p></span>
                            <span className="border-t border-gray-300 w-110 flex justify-around gap-25 mb-1 pt-2"><p>Claude · Cursor · Codex · OpenCode</p><p className="text-gray-400 text-sm">AI plugins</p></span>
                            <span className="border-t border-gray-300 w-110 flex justify-around gap-45 mb-2 pt-2"><p>Chrome Extension</p><p className="text-gray-400 text-sm">One-click-save</p></span>
                            <span className="flex gap-1 text-[23px]"><p>10,000+</p><p className="text-gray-500 text-sm pt-2"> power users</p></span>
                            <span className="bg-primary-blue text-white text-center pt-3 w-107 h-13 text-sm mt-2 cursor-pointer">Get Personal Supermemory</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col p-5 border border-dashed border-gray-300 h-[300px] w-[550px] mb-10 pl-15 pt-10">
                            <div className="flex gap-2 text-[#888e94]">
                                <p className="border h-[17px] w-[17px]"><X size={15} className="" /></p><span className={`${dmMono.className} text-[13px]`}>LEGACY · A VECTOR DATABASE</span>
                            </div>
                            <span className={`${spaceGrotesk.className} text-[24px] line-through text-[#0b101599]`}>Stores chunks. Returns chunks.<br /> Each session starts from zero.</span>
                            <div className={`${dmSans.className} text-[15px] mt-3 flex flex-col gap-3 text-[#888e94]`}>
                                <div className="flex gap-2">
                                    <X size={15} className="mt-1" /><span>Embeddings, namespaces, spaces</span>
                                </div>
                                <div className="flex gap-2">
                                    <X size={15} className="mt-1" /><span>Append-only; no contradiction logic</span>
                                </div>

                                <div className="flex gap-2">
                                    <X size={15} className="mt-1" /><span>Retrieval, not memory</span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-dashed border-gray-300 h-[300px] w-[550px] mb-10 pl-15 pt-8">
                            <span className={`${dmMono.className} text-primary-blue text-[14px]`}>Supermemory</span>
                            <div>
                                <span className={`${spaceGrotesk.className} text-[21px]`}>Facts that evolve. Knowledge that<br /> merges, contradicts, and gets<br />  forgotten across every session.</span>
                            </div>
                            <div className={`${dmSans.className} text-[14px] text-[#0b1015] flex flex-col gap-3 pt-3`}>
                                <div className="flex gap-2">
                                    <p className="border border-primary-blue h-[7px] w-[7px] bg-primary-blue mt-2"></p><span>User profiles and ontology-aware graph</span>
                                </div>
                                <div className="flex gap-2">
                                    <p className="border border-primary-blue h-[7px] w-[7px] bg-primary-blue mt-2"></p><span>Update,merge,contradict,infer</span>
                                </div>
                                <div className="flex gap-2">
                                    <p className="border border-primary-blue h-[7px] w-[7px] bg-primary-blue mt-2"></p><span>One API: ingest, retrieve, remember</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
