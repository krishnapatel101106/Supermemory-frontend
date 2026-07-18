"use client";

import { useEffect, useState } from "react";
import { catalog } from "./ProductData";
import ProductText from "./ProductText";
import Image from "next/image";

export default function ProductStage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % catalog.length);
    }, 3000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[700px]">

      <div className="relative mt-5 h-[500px] w-[700px] overflow-hidden border border-gray-300">
  {/* Background 1 */}
  <Image
    src="/catalog/background.PNG"
    alt="Background"
    fill
    className="absolute inset-0 -z-10 object-cover"
  />

  {/* Background 2 */}
  <Image
    src="/catalog/plinth-grid.png"
    alt="Grid"
    fill
    className="absolute inset-0 -z-0 object-contain"
  />

  {/* Product */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <Image
      src={catalog[activeIndex].image}
      alt={catalog[activeIndex].title}
      width={350}
      height={340}
      className="object-contain"
      priority
    />
  </div>
</div>

      {/* Text */}
      <ProductText item={catalog[activeIndex]} />

    </div>
  );
}