// The parchment box every piece of content sits in, so text stays readable over the water.

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`rounded-sm border-4 border-wood bg-parchment p-6 text-ink shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
