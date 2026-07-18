import { spaceGrotesk } from "@/app/fonts";

export default function ProductSidebar() {
    return (
        <div className={`${spaceGrotesk.className} text-[16px] leading-[21px] text-text-gray-light mt-20 mb-10`}>

            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">01</span>
                <span>Memory $ Continual Learning</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">02</span>
                <span>SuperRAG (ReTrival)</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">03</span>
                <span>Filesystems</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">04</span>
                <span>Profiles</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">05</span>
                <span>Connections</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-4 pb-4">
                <span className="text-[11px]">06</span>
                <span>Extractors</span>
            </div>
            <div className="border-t border-gray-300 w-[330px] border-b border-gray-300 w-[330px] hover:text-black cursor-pointer flex gap-13 pt-3 pb-3">
                <span className="text-[11px]">07</span>
                <span>Qualitative Analysis</span>
            </div>
        </div>
    )
}