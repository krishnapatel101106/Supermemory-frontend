import { dmSans, spaceGrotesk, dmMono } from "@/app/fonts";
import { ArrowRight, ArrowUpRight, Copy } from "lucide-react";
import Image from "next/image";
import LogoMarquee from "../LogoMarquee";


export default function HeroContent() {
    return (
        <div>
            <div className="flex flex-row items-center justify-center m-10">

                <div className={`${dmSans.className} border border-blue-200 w-17 h-9 flex flex-row pl-2 bg-blue-100/80`}>
                    <div className="border border-blue-400 h-[12px] w-[12px] flex items-center justify-center mt-3">
                        <div className="h-[7px] w-[7px] bg-blue-400 rounded-[1px]"></div>
                    </div>
                    <p className="text-primary-blue m-2 text-sm font-semibold">New</p>
                </div>
                <div className="border border-blue-200 w-[220px] h-9 text-[12px] pt-2 pl-2 flex">Dynamic dreaming is now default <ArrowRight size={15} className="pl-1 pt-1" /></div>
            </div>

            <div className={`${spaceGrotesk.className} text-[72px] leading-[75px] font-medium text-[#0B1015] flex justify-center flex-row mt-5`}>
                The context cloud for <img src="./brain-head.png" height={60} width={60}></img> agents <p className="bg-blue-600 rounded-full h-3 w-3 mt-12"></p>
            </div>

            <div className="text-[15px] leading-[24px] font-normal text-[rgba(11,16,21,0.6)] flex flex-col justify-center items-center mt-5 text-sm">
                <p>Supermemory gives your agents state-of-the-art memort, RaG, user profiles,</p>
                <p>connectors, and extractors, all built in. Extremely low latency. Works with any model.</p>
            </div>

            <div className="mt-10 flex justify-center items-center gap-4">
                <div className="flex flex-row">
                    <button className="bg-primary-blue p-2 w-40 text-white cursor-pointer">Start Building</button><div className="bg-primary-blue p-2 w-10 border-l-1 border-white"><ArrowRight className="w-4 h-4 text-white mt-1 ml-1" /></div>
                </div>
                <button className="border-gray-300/80 border w-45 h-10 cursor-pointer">Talk to sales</button>
            </div>

            <div className="mt-4 flex justify-center">
                <div
                    className={`${dmMono.className} flex h-10 w-99 items-center border border-dashed border-gray-400/60 pl-3 text-[13px] font-bold leading-[19px] text-gray-500`}
                >
                    <span className="mr-2 text-[#0562ef8c]">$</span>
                    <span>npx supermemory setup</span>
                    <Copy size={13} className="ml-44 text-gray-400/70" />
                </div>
            </div>

            <div className="mt-5 flex flex-col flex-center justify-center items-center">
                <div className="text-text-gray text-sm flex cursor-pointer">
                    Get a personal supermemory <ArrowUpRight size={13} className="mt-1 ml-1" />
                </div>
                <p className="border-1 border-dashed border-gray-300/80 border-b w-55"></p>

                <div className="text-text-gray mt-10 text-[14px] leading-[20px]">
                    Used by the best teams
                </div>
            </div>

            <div className="relative mt-5 mx-auto w-[800px] overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

                <LogoMarquee />
            </div>
        </div>
    )
}

