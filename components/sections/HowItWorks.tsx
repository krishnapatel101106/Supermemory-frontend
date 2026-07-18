
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../section/Section";

export default function HowItWorks() {
    return (
        <Section
            title="HOW IT WORKS"
            index="[3/9]"
        >
            <div>
                <div className="flex justify-around mt-10 gap-90 mb-10">
                    <div className="text-5xl font-bold flex">How it<p className="ml-2 text-primary-blue">works.</p></div>
                    <div className={`${dmSans.className} text-[#0b10159e]`}>Four primitives, one graph. Install, ingest, <p>understand, retrieve. Then a fifth step that</p><p>makes the previous four worth the effort</p></div>
                </div>

                <div className="flex justify-center">
                    <div className="border border-gray-300/80  h-[600px] w-[550px]">
                        <Image src="/plug-in.PNG" alt="photo" width={600} height={300}></Image>
                        <div className="m-7">
                            <p className={`${dmMono.className} text-[12px] text-primary-blue`}>01 / PLUG IN</p>
                            <p className={`${spaceGrotesk.className} text-[27px]`}>Plug into your stack in minutes.</p>
                            <p className="text-text-gray-extralight ">SDKs for every major language and model harness. Runs in every<br />runtime, from edge functions to long-lived servers.</p>
                        </div>
                    </div>
                    <div className="border border-gray-300/80  h-[600px] w-[550px]">
                        <Image src="/ingest.png" alt="photo" width={600} height={300}></Image>
                        <div className="m-4">
                            <p className={`${dmMono.className} text-[12px] text-primary-blue`}>02 / INGEST</p>
                            <p className={`${spaceGrotesk.className} text-[27px]`}>Bring in any type of <br /> data, from anywhere.</p>
                            <p className="text-text-gray-extralight ">Supermemory automatically extracts the content for you, in a way<br /> that's optimized for retrieval and memory generation.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="border border-gray-300/80  h-[600px] w-[550px]">
                        <Image src="/understand.PNG" alt="photo" width={600} height={300}></Image>
                        <div className="m-4 mt-10">
                            <p className={`${dmMono.className} text-[12px] text-primary-blue`}>03 / UNDERSTAND</p>
                            <p className={`${spaceGrotesk.className} text-[27px]`}>Entity model learns from raw context.</p>
                            <p className="text-text-gray-extralight ">Our model resolves people, places, and concepts as they evolve<br /> over time.</p>
                        </div>
                    </div>
                    <div className="border border-gray-300/80 h-[600px] w-[550px]">
                        <Image src="/retrieve.png" alt="photo" width={600} height={300}></Image>
                        <div className="m-3 mt-7">
                            <p className={`${dmMono.className} text-[12px] text-primary-blue`}>04 / RETRIEVE</p>
                            <p className={`${spaceGrotesk.className} text-[26px]`}>Memories form inside our custom graph.</p>
                            <p className="text-text-gray-extralight">Memory, RAG, and profiles live in the same queryable graph, not<br /> isolated vector blobs. One unified structure your agent traverses, not<br /> three systems you stitch together.</p>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto mb-30 h-[350px] w-full max-w-[1100px] overflow-hidden border border-blue-400">

                    <Image src="/payoff-backdrop.png"
                        alt="Background"
                        fill
                        sizes="(max-width: 1100px) 100vw, 1100px"
                        className="object-cover"
                        priority
                    />
                    <div className="relative z-10 flex h-full items-center justify-between px-12">
                        <div className="flex flex-col gap-3">
                            <span className={`${dmMono.className} text-[14px] text-white`}>
                                05 / Real-Time Traversal
                            </span>

                            <h2 className={`${spaceGrotesk.className} text-[44px] leading-[48px] font-medium text-white`}>
                                Sub-300ms graph traversal,
                                <br />
                                every request.
                            </h2>

                            <p className={`${dmSans.className} text-[16px] leading-[24px] text-[#FAF7F2B3]`}>
                                Steps 01–04 are the build. This is the payoff: your agent reaches
                                into the graph at request time, not at training time.
                            </p>
                        </div>

                        <Image
                            src="/payoff-phone-mockup.png"
                            alt="Phone mockup"
                            width={410}
                            height={320}
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </Section>
    )
}
