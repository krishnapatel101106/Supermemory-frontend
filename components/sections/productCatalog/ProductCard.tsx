"use client";

import Image from "next/image";

interface ProductItem {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface ProductCardProps {
  item: ProductItem;
  index: number;
  activeIndex: number;
}

export default function ProductCard({
  item,
  index,
  activeIndex,
}: ProductCardProps) {
  const offset = index - activeIndex;

  return (
    <div
      className={`
        absolute top-8
        h-[370px] w-[620px]
        top-8 left-80
        border border-gray-300
        bg-[#0E5CFF]
        duration-700 
      `}
      style={{
        transform: `
          translateX(-50%)
          translateY(${offset * 12}px)
          scale(${1 - Math.abs(offset) * 0.04})
        `,
        opacity:
          Math.abs(offset) > 2
            ? 0
            : 1 - Math.abs(offset) * 0.25,
        zIndex: 100 - Math.abs(offset),
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-contain p-8"
      />
    </div>
  );
}