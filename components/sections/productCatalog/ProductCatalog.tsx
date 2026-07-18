import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Section from "../../section/Section";
import ProductSidebar from "./ProductSidebar";
import ProductCard from "./ProductCard";
import ProductStage from "./ProductStage";
import ProductText from "./ProductText";

export default function ProductCatalog() {
  return (
    <Section
      title="PRODUCT CATALOG"
      index="[1/9]"
    >
      <div className="flex mb-20 justify-around mt-5">

        <div className={`${spaceGrotesk.className} text-[44px] leading-[48px] font-medium text-[#0B1015] mt-10 flex flex-col`}>

          <span>All the legos</span><span> to build the</span><span> perfect context</span>
          <span className="text-primary-blue">for your agent.</span>

          <div className="text-sm text-gray-400 flex flex-col mt-6 font-light">
            <span>Focused primitives for ignesting, understanding,</span>
            <span>routing, and retriving context.</span>
          </div>

          <ProductSidebar></ProductSidebar>

        </div>



        <div className="border-l border-gray-200">
          <ProductStage></ProductStage>
        </div>

      </div>
    </Section>
  );
}
