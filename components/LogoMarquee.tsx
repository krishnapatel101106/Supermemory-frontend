import Image from "next/image";

const logos = [
  {src:"/logos/caret-so-wordmark.svg",
    name:"Caret",
    showName:false,
  },
  {src:"/logos/chatnow-app-wordmark.svg",
    name:"ChatNow",
    showName:false,
  },
  {src:"/logos/cluely-wordmark.svg",
    name:"Cluely",
    showName:false,
  },
  {src:"/logos/endearing-ai-wordmark.svg",
    name:"Endearing",
    showName:false,
  },
  {src:"/logos/jinso.png",
    name:"JINSO",
    showName:true,
  },
  {src:"/logos/miria.png",
    name:"Miria",
    showName:true,
  },
  {src:"/logos/moonage-ai-wordmark.svg",
    name:"Moonage",
    showName:false,
  },
  {src:"/logos/mosaic-so.svg",
    name:"mosaic",
    showName:true,
  },
  {src:"/logos/ppl-xyz.png",
    name:"ppl.xyz",
    showName:true,
  },
  {src:"/logos/tryvela-ai.png",
    name:"Vela",
    showName:true,
  },
];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-[marquee_70s_linear_infinite] items-center gap-10">
  {[...logos, ...logos].map((logo, index) => (
    <div
      key={index}
      className="flex items-center gap-2 flex-shrink-0"
    >
      <Image
        src={logo.src}
        alt={logo.name ?? "Company Logo"}
        width={28}
        height={28}
        className="h-5 w-auto"
      />

      {logo.showName && (
        <span className="font-bold whitespace-nowrap">
          {logo.name}
        </span>
      )}
    </div>
  ))}
</div> 
    </div>
  );
}