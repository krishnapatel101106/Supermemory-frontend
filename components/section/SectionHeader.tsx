import { dmMono } from "@/app/fonts";
import {ChevronRight} from "lucide-react";

interface SectionHeaderProps {
  title: string;
  index: string;
}

export default function SectionHeader({
  title,
  index,
}: SectionHeaderProps) {
  return (
    <div
      className={`${dmMono.className} sticky top-20 z-40 flex h-10 items-center justify-between border-b border-gray-300/80 bg-white px-8 text-[12px] leading-[17px] text-gray-500 uppercase`}
    > 
    <div className="flex">
        <ChevronRight size={18} className="text-primary-blue"/>
      <span className="uppercase">
        {title}
      </span>
    </div>

      <span>
        {index}
      </span>
    </div>
  );
}