import Palm from "@/components/Palm";

// A rectangular "piece of land": foam rim, sand beach, then a parchment area for text.
// Each layer has stepped pixel corners (see .notch-* in globals.css), so it reads as
// an island but the content inside stays a plain, high-contrast rectangle.

type LandPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LandPanel({ children, className = "" }: LandPanelProps) {
  return (
    <div
      className={`relative drop-shadow-[6px_6px_0_rgba(0,0,0,0.35)] ${className}`}
    >
      <Palm className="absolute -top-8 right-8 z-10" />
      <div className="notch-3 bg-foam p-1">
        <div className="notch-2 bg-sand p-3">
          <div className="notch-1 bg-parchment p-6 text-ink sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
