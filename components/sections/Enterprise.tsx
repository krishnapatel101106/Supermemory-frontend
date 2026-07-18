
import Image from "next/image";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../section/Section";
import {ArrowRight,Shield} from 'lucide-react';

export default function Enterprise() {
    return (
        <Section
            title="ENTERPRISE"
            index="[6/9]"
        >
            <div>

                <div className="flex flex-col justify-center items-center">
                    <span className={`${spaceGrotesk.className} text-[56px] leading-[57px] font-medium flex gap-3 m-5`}>Supermemory <p className="text-primary-blue">runs everywhere.</p></span>
                    <p className="text-center text-text-gray mb-7 text-[17px]">Supermemory runs on-prem, on your cloud, or fully air-gapped — with<br /> the same API, the same SLAs, and a paper trail your security team will<br /> actually read.</p>
                </div>

                <div className="flex">
                    <div className="relative overflow-hidden border border-gray-200 h-[300] w-[400] flex flex-col">
                        <Image src="/on-prem-grain.png" alt="gradient left" fill sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover"></Image>
                        <div className="relative z-10 p-8">
                            <div className={`${dmMono.className} text-[12px] text-normal border border-gray-200 h-8 w-80 text-primary-blue pl-2 pt-1`}>01 / ON PREMISES</div>
                            <Image src="/on-prem.png" alt="head" height={100} width={100}></Image>
                            <p className={`${spaceGrotesk.className} text-[22px]`}>In your data center.</p>
                            <p className="text-text-gray text-[14px]">Self-host on bare metal or your own Kubernetes.<br /> Zero data leaves your perimeter.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden border border-gray-200 h-[300] w-[400] flex flex-col">
                        <Image src="/your-cloud-grain.png" alt="gradient left" fill sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover"></Image>
                        <div className="relative z-10 p-8">
                            <div className={`${dmMono.className} text-[12px] text-normal border border-gray-200 h-8 w-80 text-primary-blue pl-2 pt-1`}>02 / YOUR CLOUD</div>
                            <Image src="/your-cloud.png" alt="head" height={100} width={100}></Image>
                            <p className={`${spaceGrotesk.className} text-[22px]`}>In your VPC.</p>
                            <p className="text-text-gray text-[14px]">Deploy to AWS, GCP, or Azure inside your account.<br /> BYOC from day one.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden border border-gray-200 h-[300] w-[400] flex flex-col">
                        <Image src="/local-grain.png" alt="gradient left" fill sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover"></Image>
                        <div className="relative z-10 p-8">
                            <div className={`${dmMono.className} text-[12px] text-normal border border-gray-200 h-8 w-80 text-primary-blue pl-2 pt-1`}>03 / LOCAL</div>
                            <Image src="/local.png" alt="head" height={100} width={100}></Image>
                            <p className={`${spaceGrotesk.className} text-[22px]`}>On your laptop.</p>
                            <p className="text-text-gray text-[14px]">Run the full stack on a workstation for offline dev,<br /> demos, or sensitive work.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="flex gap-5">
                        <Image src="/soc2.PNG" alt="SOC 2 Certified" height={150} width={160} className="m-3"></Image>
                        <div className="self-center">
                            <p className={`${spaceGrotesk.className} text-[38px] leading-[40px]`}>SOC 2 Certified</p>
                            <p>Independent audit confirming that we<br /> safeguard your data with the highest<br /> security standards.</p>
                        </div>
                    </div>
                    <div className="flex border-l border-blue-100 h-30 w-135 gap-10 mt-5 ">
                        <Image src="/gdpr.PNG" alt="SOC 2 Certified" height={90} width={120}></Image>
                        <div className="self-center">
                            <p className={`${spaceGrotesk.className} text-[38px] leading-[40px]`}>GDPR Compliant</p>
                            <p>Compliant with EU data protection, ensuring<br /> your personal information is handled with<br /> care and transparency.</p>
                        </div>
                    </div>
                </div>

                <div className="border border-blue-100 h-15 flex justify-center items-center text-primary-blue flex gap-2 cursor-pointer">
                    <Shield size={15}/><p>View our security page</p><ArrowRight size={15}/>
                </div>
            </div>
        </Section>
    )
}
