import { ArrowRight,ChevronDown } from "lucide-react";
import { dmSans, spaceGrotesk } from "@/app/fonts";
import Image from "next/image";

export default function Header(){
    return (
        <header className={`${dmSans.className} sticky top-0 z-50 bg-white border-b border-blue-200 h-20`}>
            <div className="mx-auto flex h-18 max-w-7xl justify-between items-center px-8">
                <div className="m-3">
                    <Image src="/logo.PNG" alt="logo" height={220} width={220} className="h-12 w-auto"></Image>
                </div>
                <nav className="flex items-center gap-7 text-gray-950 text-[15px] leading-[21px]">
                    <button className="cursor-pointer">Research</button>
                    <button className="cursor-pointer">Customers</button>
                    <button className="cursor-pointer">Pricing</button>
                    <button className="cursor-pointer">Docs</button>
                    <button className="cursor-pointer">Blog</button>
                    <button className="flex cursor-pointer">Products <ChevronDown size={15} className="mt-1 ml-1"/></button>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="border-blue-200 border w-28 h-10 flex pt-2 pl-7 cursor-pointer">Login <ChevronDown size={15} className="mt-1 ml-1"/></button>
                    <div className="flex flex-row">
                    <button className="bg-primary-blue p-2 w-30 text-white text-sm font-light cursor-pointer">Start Building</button><div className="bg-primary-blue p-2 w-10 border-l border-white"><ArrowRight className="w-4 h-4 text-white m-1"/></div>
                </div>
                </div>
            </div>
        </header>
    )
}