import Link from "next/link";
import { dmSans, dmMono, spaceGrotesk } from "@/app/fonts";
import Image from "next/image";

const linkClass = `${dmSans.className} text-[14px] leading-[18px] font-normal text-white relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`;

const productLinks = [
    { name: "Connectors", href: "/connectors" },
    { name: "MCP", href: "/mcp" },
    { name: "Plugins", href: "/plugins" },
    { name: "RAG", href: "/rag" },
    { name:"Memory Graph", href:"/memorygraph"},
    { name: "Pricing", href: "/pricing" },
    { name: "API", href: "/api" },
];
const resourceLinks = [
  { name: "Documentation", href: "/docs" },
  { name: "Blog", href: "/blog" },
  { name: "Benchmarks", href: "/benchmarks" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
    return (
        <div className="bg-primary-blue h-[615px] w-full">
            <div className="flex justify-around text-white pt-10">
                <div className="flex flex-col">
                    <span className="text-[29px]">Context infrastructure <br /> for AI agents.</span>
                    <span className="text-[15px] text-[#ffffffb3]">One API. Every capability. Made by humans who care <br /> about the craft.</span>
                </div>

                <div>
                    <p className={`${dmMono.className} text-[11px] leading-[14px] font-medium text-[#FFFFFF8C]`}>PRODUCTS</p>
                    <div className="flex flex-col gap-2 mt-3">
                    {productLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={linkClass}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                </div>

                <div>
                    <p className={`${dmMono.className} text-[11px] leading-[14px] font-medium text-[#FFFFFF8C]`}>RESOURCES</p>
                    <div className="flex flex-col gap-2 mt-3">
                        {resourceLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={linkClass}
                        >
                            {link.name}
                        </Link>
                    ))}
                    </div>
                </div>

                <div>
                    <p className={`${dmMono.className} text-[11px] leading-[14px] font-medium text-[#FFFFFF8C]`}>COMPANY</p>
                    <div className="flex flex-col gap-2 mt-3">
                        {companyLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={linkClass}
                        >
                            {link.name}
                        </Link>
                    ))}
                    </div>
                </div>

                <div>
                    <p className={`${dmMono.className} text-[11px] leading-[14px] font-medium text-[#FFFFFF8C]`}>CONNECT</p>
                    <div className="flex gap-3 mt-3">
                        <img width="20" height="10" src="https://img.icons8.com/windows/32/FFFFFF/twitterx.png" alt="twitterx"/>
                        <img width="20" height="10" src="https://img.icons8.com/windows/32/FFFFFF/github.png" alt="github"/>
                        <img width="20" height="10" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/linkedin.png" alt="linkedin"/>
                        <img width="20" height="10" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/reddit.png" alt="reddit"/>
                        <img width="20" height="410" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/discord.png" alt="discord"/>
                    </div>
                </div>
            </div>
            <div className="text-end text-[#ffffff8c] mr-15 text-sm">
                © 2026 · SUPERMEMORY INC. · ALL RIGHTS RESERVED
            </div>
            <div className={`${dmMono.className} text-white/20 text-[290px] leading-none`}>
                Supermemory.
            </div>
        </div>
    )
}