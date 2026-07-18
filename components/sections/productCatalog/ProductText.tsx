import { dmMono, dmSans, spaceGrotesk } from "@/app/fonts";

interface ProductItem {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface ProductTextProps {
  item: ProductItem;
}

export default function ProductText({ item }: ProductTextProps) {
  return (
    <div className="p-8">
      <p className={`${dmMono.className} text-xs text-primary-blue`}>
        {item.eyebrow}
      </p>

      <h2 className={`${spaceGrotesk.className} mt-3 text-3xl`}>
        {item.title}
      </h2>

      <p className={`${dmSans.className} mt-4 text-gray-500 leading-7`}>
        {item.description}
      </p>
    </div>
  );
}