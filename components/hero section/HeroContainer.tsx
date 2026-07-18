import ProductCatalog from "@/components/sections/productCatalog/ProductCatalog";
import WhatWeDo from "@/components/sections/WhatWeDo";
import HowItWorks from "@/components/sections/HowItWorks";
import Benchmarks from "@/components/sections/Benchmarks";
import UseCases from "@/components/sections/UseCases";
import Enterprise from "@/components/sections/Enterprise";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";

export default function HeroContainer(){
    return (
        <div className="mx-auto max-w-[1300px] px-8">
              <ProductCatalog />
            
                  <WhatWeDo />
            
                  <HowItWorks />
            
                  <Benchmarks />
            
                  <UseCases />

                  <Enterprise/>

                  <Testimonials/>
            
                  <Pricing />

                  <Faq/>
        </div>
    )
}