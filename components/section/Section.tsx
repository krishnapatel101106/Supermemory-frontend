import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  index: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  index,
  children,
}: SectionProps) {
  return (
    <section className="border border-gray-300/80">
      <SectionHeader title={title} index={index} />

      <div>{children}</div>
    </section>
  );
}

{/* 
    <div className="px-8 py-10">
        {children}
      </div>
    */}