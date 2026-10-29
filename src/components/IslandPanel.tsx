import type { CSSProperties } from "react";
import { Bush, Rock } from "@/components/Decor";
import {
  BooksAndLantern,
  BottleAndChat,
  ChalkboardAndApple,
  IronAnchor,
  MedChest,
  RuneScroll,
  SensorPlant,
  SlimeAndSword,
  TavernAndHourglass,
  TerminalAndHibiscus,
} from "@/components/IslandProps";
import Palm from "@/components/Palm";

// An island with an uneven coastline. The coastline is built from overlapping rectangles
// ("lumps"), and because each lump has stepped pixel corners, the union of them looks like
// organic pixel-art land. The text stays in a plain parchment rectangle in the middle.
//
// Layers, bottom to top:
//   1. sea foam (expands/contracts gently with .shore-foam)
//   2. wet sand transition rim (#d4b06a)
//   3. dry sand beach (bg-sand)
//   4. pixel-art trees, rocks, and themed project/experience props
//   5. crisp high-contrast parchment text card

export type IslandThemeProp =
  | "yenesow"
  | "jans"
  | "plant"
  | "abepl"
  | "cheaper"
  | "tobour"
  | "gonzaga"
  | "ta"
  | "hawaii"
  | "contact";

type Lump = CSSProperties;
type DecorItem = { kind: "palm" | "bush" | "rock"; style: CSSProperties };
type Shape = { lumps: Lump[]; decor: DecorItem[]; propStyle: CSSProperties };

// The sand rectangle behind the text card, inset 16px from every edge of the island.
const BASE: Lump = { left: 16, right: 16, top: 16, bottom: 16 };

const SHAPES: Shape[] = [
  {
    lumps: [
      BASE,
      { left: 0, top: "26%", width: 36, height: "40%" },
      { right: 0, top: "10%", width: 36, height: "32%" },
      { left: "16%", top: 0, width: "28%", height: 32 },
      { right: "10%", bottom: 0, width: "36%", height: 36 },
      { left: "8%", bottom: 0, width: "16%", height: 24 },
    ],
    decor: [
      { kind: "palm", style: { top: -12, left: "20%" } },
      { kind: "bush", style: { bottom: 6, left: "10%" } },
      { kind: "rock", style: { top: "42%", left: 4 } },
      { kind: "rock", style: { top: "18%", right: 6 } },
    ],
    propStyle: { bottom: -6, right: "14%" },
  },
  {
    lumps: [
      BASE,
      { left: 0, top: "8%", width: 36, height: "28%" },
      { left: 0, bottom: "10%", width: 36, height: "28%" },
      { right: 0, top: "34%", width: 36, height: "38%" },
      { left: "38%", top: 0, width: "24%", height: 32 },
      { right: "12%", bottom: 0, width: "34%", height: 36 },
    ],
    decor: [
      { kind: "palm", style: { top: -12, right: "24%" } },
      { kind: "bush", style: { bottom: "16%", left: 4 } },
      { kind: "rock", style: { top: "48%", right: 6 } },
      { kind: "rock", style: { top: 6, left: "42%" } },
    ],
    propStyle: { bottom: -6, right: "16%" },
  },
  {
    lumps: [
      BASE,
      { left: "6%", top: 0, width: "20%", height: 32 },
      { right: "8%", top: 0, width: "30%", height: 28 },
      { right: 0, bottom: "12%", width: 36, height: "36%" },
      { left: 0, top: "32%", width: 36, height: "32%" },
      { left: "14%", bottom: 0, width: "36%", height: 36 },
    ],
    decor: [
      { kind: "palm", style: { top: -12, left: "8%" } },
      { kind: "bush", style: { top: 4, right: "16%" } },
      { kind: "rock", style: { top: "44%", left: 6 } },
      { kind: "rock", style: { bottom: "20%", right: 6 } },
    ],
    propStyle: { bottom: -6, left: "18%" },
  },
];

function renderThemeProp(prop: IslandThemeProp | undefined, style: CSSProperties) {
  if (!prop) return null;
  const cls = "absolute z-10";
  switch (prop) {
    case "yenesow":
      return <BottleAndChat className={cls} style={style} />;
    case "jans":
      return <TavernAndHourglass className={cls} style={style} />;
    case "plant":
      return <SensorPlant className={cls} style={style} />;
    case "abepl":
      return <RuneScroll className={cls} style={style} />;
    case "cheaper":
      return <MedChest className={cls} style={style} />;
    case "tobour":
      return <SlimeAndSword className={cls} style={style} />;
    case "gonzaga":
      return <BooksAndLantern className={cls} style={style} />;
    case "ta":
      return <ChalkboardAndApple className={cls} style={style} />;
    case "hawaii":
      return <TerminalAndHibiscus className={cls} style={style} />;
    case "contact":
      return <IronAnchor className={cls} style={style} />;
  }
}

type IslandPanelProps = {
  children: React.ReactNode;
  // Which coastline to use. Different cards get different shapes.
  shape?: number;
  prop?: IslandThemeProp;
  className?: string;
};

export default function IslandPanel({
  children,
  shape = 0,
  prop,
  className = "",
}: IslandPanelProps) {
  const { lumps, decor, propStyle } = SHAPES[shape % SHAPES.length];

  return (
    <div className={`relative isolate p-8 ${className}`}>
      {/* Layer 0: Crisp shallow-water turquoise rim (static, no double-vision ghosting) */}
      {lumps.map((lump, i) => (
        <div
          key={`ripple-${i}`}
          aria-hidden="true"
          className="notch-3 absolute -z-40 -m-3 box-content bg-[#2b7da3] p-3"
          style={lump}
        />
      ))}

      {/* Layer 1: Crisp white seafoam rim */}
      {lumps.map((lump, i) => (
        <div
          key={`foam-${i}`}
          aria-hidden="true"
          className="notch-3 absolute -z-30 -m-2 box-content bg-foam p-2"
          style={lump}
        />
      ))}

      {/* Layer 2: Wet sand transition rim */}
      {lumps.map((lump, i) => (
        <div
          key={`wetsand-${i}`}
          aria-hidden="true"
          className="notch-2 absolute -z-20 -m-1 box-content bg-[#d4b06a] p-1"
          style={lump}
        />
      ))}

      {/* Layer 3: Dry warm beach sand */}
      {lumps.map((lump, i) => (
        <div
          key={`sand-${i}`}
          aria-hidden="true"
          className="notch-1 absolute -z-10 bg-sand"
          style={lump}
        />
      ))}

      {/* Layer 4: Trees, bushes, rocks, and custom island prop */}
      {decor.map((item, i) => {
        const cls = "absolute z-10";
        if (item.kind === "palm") {
          return <Palm key={i} className={cls} style={item.style} />;
        }
        if (item.kind === "bush") {
          return <Bush key={i} className={cls} style={item.style} />;
        }
        return <Rock key={i} className={cls} style={item.style} />;
      })}

      {renderThemeProp(prop, propStyle)}

      {/* Layer 5: Readable high-contrast parchment interior */}
      <div className="notch-1 relative border-2 border-wood/30 bg-parchment p-6 text-ink sm:p-8">
        {children}
      </div>
    </div>
  );
}
