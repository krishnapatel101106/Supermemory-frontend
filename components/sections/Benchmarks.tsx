
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../section/Section";

export default function Benchmarks() {
    return (
        <Section 
        title="BENCHMARKS"
        index="[4/9]"
        >
            <div className="flex justify-around mt-10 mb-10">
                <div className={`${spaceGrotesk.className} flex flex-col ml-4`}>
                    <span className="text-[44px] leading-[48px] font-medium">
                        We don't think
                        <br />
                        benchmarks tell
                        <p className="block text-primary-blue mb-5">the full story.</p>
                    </span>
                    <p className="text-text-gray-light text-[16px]">But we lead every major one anyway. SOTA on<br />LongMemEval, LoCoMo, and ConvoMem.</p>

                    <p className={`${dmMono.className} mt-30 text-[15px] leading-[17px] text-[#0B101599]`}>We also built{" "}
                        <span className="text-primary-blue">MemoryBench</span>, an open eval
                        <br />
                        platform for memory systems.
                    </p>
                </div>


                <div
                    className={`${dmMono.className} relative border border-dashed border-primary-blue h-[400px] w-[320px] ml-10 flex flex-col justify-around items-center`}
                >
                    {/* Top Left */}
                    <span className="absolute -top-2 -left-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Top Right */}
                    <span className="absolute -top-2 -right-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Bottom Left */}
                    <span className="absolute -bottom-2 -left-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Bottom Right */}
                    <span className="absolute -bottom-2 -right-2 h-3 w-3 bg-primary-blue"></span>

                    <div>
                        <span className="text-[22px]">RECALL QUALITY,<p>LIKE THE HUMAN BRAIN.</p></span>
                        <Image src="/Brain Dither.png" alt="brain" height={250} width={250}></Image>
                    </div>
                </div>

                <div
                    className={`${dmMono.className} relative border border-dashed border-primary-blue h-[400px] w-[320px] pl-5 pt-8`}
                >
                    {/* Top Left */}
                    <span className="absolute -top-2 -left-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Top Right */}
                    <span className="absolute -top-2 -right-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Bottom Left */}
                    <span className="absolute -bottom-2 -left-2 h-3 w-3 bg-primary-blue"></span>

                    {/* Bottom Right */}
                    <span className="absolute -bottom-2 -right-2 h-3 w-3 bg-primary-blue"></span>

                    <div>
                        <span className="text-[22px] m-5">RECALL TIME</span>
                        <div>
                            <span className="text-[12px] flex flex-col mb-8">Memories returned in milliseconds,<p>10× faster than Zep, 25× faster than Mem0.</p></span>
                        </div>
                        <Image src="/Graph.svg" alt="brain" height={250} width={250}></Image>
                    </div>
                </div>





            </div>
        </Section>
    )
}