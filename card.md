If you want **2 background images layered on top of each other**, use absolute positioning.

### Structure

```tsx id="rz2p5v"
<div className="relative h-[420px] overflow-hidden border border-gray-300">

  {/* Background 1 */}
  <Image
    src="/catalog/background.PNG"
    alt="Background"
    fill
    className="object-cover"
    priority
  />

  {/* Background 2 */}
  <Image
    src="/catalog/plinth-grid.png"
    alt="Grid"
    fill
    className="object-cover opacity-80"
  />

  {/* Main Image */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <Image
      src={catalog[activeIndex].image}
      alt={catalog[activeIndex].title}
      width={500}
      height={350}
      className="object-contain"
    />
  </div>

</div>
```

---

### Layer order

```text id="mznbko"
z-0  background.PNG
z-0  plinth-grid.png
z-10 product image
```

---

### More control

If the grid should not cover the entire section:

```tsx id="6r0owf"
<Image
  src="/catalog/plinth-grid.png"
  alt="Grid"
  width={500}
  height={500}
  className="
    absolute
    bottom-0
    right-0
    opacity-80
  "
/>
```

---

### Typical Supermemory-style setup

```tsx id="wdr6e3"
<div className="relative h-[420px] overflow-hidden">

  {/* Blue gradient background */}
  <Image
    src="/catalog/background.PNG"
    alt=""
    fill
    className="object-cover"
  />

  {/* Grid texture */}
  <Image
    src="/catalog/plinth-grid.png"
    alt=""
    fill
    className="object-cover opacity-60"
  />

  {/* Product illustration */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <Image
      src={catalog[activeIndex].image}
      alt=""
      width={550}
      height={400}
      className="object-contain"
    />
  </div>

</div>
```

This will give you:

```text id="y69xgj"
┌──────────────────────────┐
│  background.PNG          │
│  +                       │
│  plinth-grid.png         │
│                          │
│      Product Image       │
│                          │
└──────────────────────────┘
```

which is how most SaaS landing pages layer their hero/product showcase backgrounds.



export default function Pricing() {
    return (
        <Section
            title="PRICING"
            index="[8/9]"
        >
            <div>
                <PricingCompo></PricingCompo>
                <div className="flex justify-around">
                    <div className="flex justify-center items-center gap-2">
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                        <p className="border border-primary-blue bg-primary-blue w-3 h-[5px]"></p>
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                    </div>
                    <p className="border border-gray-300/80 h-8"></p>
                    <div className="flex justify-center items-center gap-2">
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                        <p className="border border-primary-blue bg-primary-blue w-3 h-[5px]"></p>
                        <p className="border border-gray-300 w-65 h-[5px]"></p>
                    </div>
                </div>
                <div className="border border-gray-300/80 flex">
                    <div className="mt-10 ml-8">
                        <p className={`${dmMono.className} text-[11px] leading-[17px]`}>ENTERPRISE</p>
                        <p className="text-[15px] leading-[22px]">For organizations with committed <br />spend,custom deployments, and security requirements.</p>
                        <div className="flex"><h2 className={`${spaceGrotesk.className} text-[44px]`}>Custom</h2><p>pricing</p></div>
                        <button className="text-primary-blue">Talk to us</button>
                    </div>
                    <div className="border-l border-gray-300/80 h-80 w-75 m-5 pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><ShieldCheck className="text-text-gray" /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Security & compliance</p>
                        <div className="text-[13px] text-text-gray-light flex flex-col gap-3 mt-3">
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Air-gapped self-hosting,<br/> you own the data.</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Or a dedicated managed instance</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>SOC 2 · HIPAA · GDPR</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Custom contracts & DPA</p>
                            </div><div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Enterprise MCP</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-l border-gray-300/80 h-80 w-75 m-5  pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><Zap className="text-text-gray" /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Scale & performance</p>
                        <div className="text-[13px] text-text-gray-light flex flex-col gap-3 mt-3">
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>~Unlimited usage</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Committed-spend pricing</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Custom rate limits & throughput</p>
                            </div>
                            <div className="flex gap-1">
                                <CircleCheck className="text-primary-blue mt-1" size={14} /><p>Dedicated infrastructure</p>   
                        </div>
                    </div>
                    <div className="border-l border-gray-300/80 h-80 w-75 m-5  pl-5">
                        <p className="border border-gray-300 h-9 w-9 flex justify-center items-center rounded m-5"><MessageSquare className="text-text-gray" size={20} /></p>
                        <p className={`${spaceGrotesk.className} text-[16px]`}>Enterprise-grade support</p>
                        <div className="text-[13px] text-text-gray-light">
                            <p><CircleCheck className="text-primary-blue" size={14} />Dedicated account manage</p>
                            <p><CircleCheck className="text-primary-blue" size={14} />Forward Deployed engineer</p>
                            <p><CircleCheck className="text-primary-blue" size={14} />1:1 onboarding & integration</p>
                            <p><CircleCheck className="text-primary-blue" size={14} />Uptime SLA</p>
                            <p><CircleCheck className="text-primary-blue" size={14} />Priority Slack channel</p>
                        </div>
                    </div>
                </div>
                <div className="text-[14px] text-primary-blue flex justify-center items-center m-5 gap-2 cursor-pointer hover:text-blue-500">
                    <StickyNote size={17} /><p>See full rate card and FAQ</p><ArrowRight size={15} />
                </div> 
            </div>
        </Section>
    )
}
