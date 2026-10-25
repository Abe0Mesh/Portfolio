// A small wooden sign used as the title of each section.

type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
};

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="inline-block rounded-sm border-4 border-wood bg-wood px-4 py-1 font-serif text-xl font-bold uppercase tracking-widest text-parchment shadow-[4px_4px_0_0_rgba(0,0,0,0.35)]"
    >
      {children}
    </h2>
  );
}
