import type { CSSProperties } from "react";

type SpriteProps = {
  className?: string;
  style?: CSSProperties;
};

// Yenesow: Message in a bottle on the shore + floating pixel heart/chat bubble
export function BottleAndChat({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 64 56"
      width="64"
      height="56"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Chat bubble with heart */}
      <g fill="#2b1d0e">
        <rect x="4" y="4" width="28" height="20" />
        <rect x="0" y="8" width="36" height="12" />
        <rect x="8" y="24" width="8" height="4" />
        <rect x="4" y="28" width="4" height="4" />
      </g>
      <g fill="#ffffff">
        <rect x="4" y="8" width="28" height="12" />
        <rect x="8" y="4" width="20" height="20" />
        <rect x="8" y="24" width="4" height="4" />
      </g>
      {/* Pixel heart inside bubble */}
      <g fill="#d64545">
        <rect x="10" y="8" width="6" height="4" />
        <rect x="20" y="8" width="6" height="4" />
        <rect x="8" y="12" width="20" height="4" />
        <rect x="12" y="16" width="12" height="4" />
        <rect x="16" y="20" width="4" height="2" />
      </g>

      {/* Corked glass bottle with scroll in the sand */}
      <g fill="#7a4e25">
        <rect x="44" y="20" width="8" height="4" />
      </g>
      <g fill="#7ec8e3">
        <rect x="42" y="24" width="12" height="4" />
        <rect x="38" y="28" width="20" height="20" />
        <rect x="42" y="48" width="12" height="4" />
      </g>
      {/* Scroll inside bottle */}
      <g fill="#f4ead2">
        <rect x="44" y="32" width="8" height="12" />
      </g>
      <g fill="#d64545">
        <rect x="44" y="36" width="8" height="4" />
      </g>
      {/* Glass shine */}
      <g fill="#e6f6fb">
        <rect x="40" y="30" width="4" height="12" />
      </g>
    </svg>
  );
}

// Jan's Line: Wooden tavern barrel, frosty mug, and hourglass
export function TavernAndHourglass({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 64 52"
      width="64"
      height="52"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Wooden barrel */}
      <g fill="#5b3a1a">
        <rect x="8" y="12" width="24" height="4" />
        <rect x="4" y="16" width="32" height="28" />
        <rect x="8" y="44" width="24" height="4" />
      </g>
      <g fill="#8c5a2b">
        <rect x="8" y="16" width="24" height="28" />
      </g>
      {/* Iron barrel bands */}
      <g fill="#3d4852">
        <rect x="4" y="20" width="32" height="4" />
        <rect x="4" y="36" width="32" height="4" />
      </g>

      {/* Hourglass on the sand */}
      <g fill="#5b3a1a">
        <rect x="40" y="16" width="20" height="4" />
        <rect x="40" y="44" width="20" height="4" />
      </g>
      <g fill="#cdeefa">
        <rect x="44" y="20" width="12" height="8" />
        <rect x="48" y="28" width="4" height="8" />
        <rect x="44" y="36" width="12" height="8" />
      </g>
      <g fill="#e0a84b">
        <rect x="46" y="24" width="8" height="4" />
        <rect x="48" y="32" width="4" height="4" />
        <rect x="44" y="40" width="12" height="4" />
      </g>
    </svg>
  );
}

// Plant Health Monitor: Potted sprout + electronic sensor probe with LED
export function SensorPlant({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 64 56"
      width="64"
      height="56"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Leaves */}
      <g fill="#1f5c2e">
        <rect x="16" y="12" width="8" height="16" />
        <rect x="8" y="8" width="12" height="8" />
        <rect x="20" y="4" width="12" height="8" />
      </g>
      <g fill="#3fa34d">
        <rect x="4" y="4" width="12" height="8" />
        <rect x="24" y="8" width="12" height="8" />
        <rect x="16" y="12" width="4" height="12" />
      </g>
      {/* Terracotta pot */}
      <g fill="#b85d38">
        <rect x="8" y="28" width="24" height="4" />
        <rect x="12" y="32" width="16" height="16" />
      </g>
      <g fill="#8c3f23">
        <rect x="8" y="32" width="24" height="4" />
      </g>

      {/* Digital sensor probe stuck in sand */}
      <g fill="#3d4852">
        <rect x="40" y="16" width="20" height="20" />
        <rect x="48" y="36" width="4" height="12" />
      </g>
      <g fill="#123a5a">
        <rect x="44" y="20" width="12" height="12" />
      </g>
      {/* Green sensor waveform & blinking LED */}
      <g fill="#52d679">
        <rect x="44" y="28" width="4" height="4" />
        <rect x="48" y="24" width="4" height="4" />
        <rect x="52" y="20" width="4" height="8" />
        <rect x="48" y="8" width="4" height="4" />
      </g>
      <g fill="#7a8b99">
        <rect x="48" y="12" width="4" height="4" />
      </g>
    </svg>
  );
}

// Tobour: Pixel RPG sword planted in the sand + cute blue slime
export function SlimeAndSword({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 68 56"
      width="68"
      height="56"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* RPG Sword planted in sand */}
      <g fill="#5b3a1a">
        <rect x="12" y="0" width="8" height="4" />
        <rect x="14" y="4" width="4" height="8" />
      </g>
      {/* Gold crossguard */}
      <g fill="#e0a84b">
        <rect x="6" y="12" width="20" height="4" />
      </g>
      {/* Steel blade */}
      <g fill="#cfd8dc">
        <rect x="12" y="16" width="8" height="28" />
      </g>
      <g fill="#ffffff">
        <rect x="12" y="16" width="4" height="24" />
      </g>
      <g fill="#78909c">
        <rect x="16" y="16" width="4" height="28" />
      </g>

      {/* Blue RPG Slime */}
      <g fill="#1b4d7e">
        <rect x="40" y="20" width="8" height="4" />
        <rect x="36" y="24" width="16" height="4" />
        <rect x="32" y="28" width="24" height="4" />
        <rect x="28" y="32" width="32" height="12" />
        <rect x="32" y="44" width="24" height="4" />
      </g>
      <g fill="#4da6ff">
        <rect x="40" y="24" width="8" height="4" />
        <rect x="36" y="28" width="16" height="4" />
        <rect x="32" y="32" width="24" height="12" />
      </g>
      {/* Slime shine & eyes */}
      <g fill="#cdeefa">
        <rect x="36" y="28" width="4" height="4" />
        <rect x="34" y="32" width="4" height="4" />
      </g>
      <g fill="#0d1b2a">
        <rect x="36" y="36" width="4" height="6" />
        <rect x="48" y="36" width="4" height="6" />
      </g>
      <g fill="#ffffff">
        <rect x="36" y="36" width="2" height="2" />
        <rect x="48" y="36" width="2" height="2" />
      </g>
    </svg>
  );
}

// AbePL: Ancient syntax scroll & glowing AST crystal
export function RuneScroll({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 64 52"
      width="64"
      height="52"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Unrolled parchment scroll */}
      <g fill="#5b3a1a">
        <rect x="4" y="8" width="32" height="4" />
        <rect x="4" y="40" width="32" height="4" />
      </g>
      <g fill="#e0a84b">
        <rect x="0" y="8" width="4" height="4" />
        <rect x="36" y="8" width="4" height="4" />
        <rect x="0" y="40" width="4" height="4" />
        <rect x="36" y="40" width="4" height="4" />
      </g>
      <g fill="#f4ead2">
        <rect x="8" y="12" width="24" height="28" />
      </g>
      {/* Mini AST tree diagram on the scroll */}
      <g fill="#2b1d0e">
        <rect x="18" y="16" width="4" height="4" />
        <rect x="14" y="20" width="4" height="4" />
        <rect x="22" y="20" width="4" height="4" />
        <rect x="10" y="24" width="4" height="4" />
        <rect x="26" y="24" width="4" height="4" />
        <rect x="12" y="32" width="16" height="4" />
      </g>

      {/* Glowing purple/cyan syntax crystal */}
      <g fill="#3a86ff">
        <rect x="48" y="12" width="8" height="32" />
        <rect x="44" y="20" width="16" height="16" />
      </g>
      <g fill="#cdeefa">
        <rect x="48" y="16" width="4" height="20" />
      </g>
    </svg>
  );
}

// CheaperToHurt: Medical supply chest + chart
export function MedChest({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 56 48"
      width="56"
      height="48"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      <g fill="#2b1d0e">
        <rect x="8" y="12" width="40" height="32" />
      </g>
      <g fill="#f4ead2">
        <rect x="12" y="16" width="32" height="24" />
      </g>
      {/* Red medical cross */}
      <g fill="#d64545">
        <rect x="24" y="20" width="8" height="16" />
        <rect x="20" y="24" width="16" height="8" />
      </g>
      {/* Handle */}
      <g fill="#5b3a1a">
        <rect x="20" y="8" width="16" height="4" />
      </g>
    </svg>
  );
}

// UH Hilo AI Research Assistant: Retro computer terminal + Hawaiian hibiscus flower
export function TerminalAndHibiscus({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 68 52"
      width="68"
      height="52"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Retro CRT Computer Monitor */}
      <g fill="#3d4852">
        <rect x="4" y="8" width="36" height="28" />
        <rect x="14" y="36" width="16" height="4" />
        <rect x="8" y="40" width="28" height="4" />
      </g>
      <g fill="#0d2638">
        <rect x="8" y="12" width="28" height="20" />
      </g>
      {/* Code lines on screen */}
      <g fill="#52d679">
        <rect x="12" y="16" width="12" height="4" />
        <rect x="16" y="22" width="16" height="4" />
        <rect x="12" y="28" width="8" height="2" />
      </g>

      {/* Red Hawaiian Hibiscus flower on the beach */}
      <g fill="#1f5c2e">
        <rect x="44" y="36" width="16" height="8" />
      </g>
      <g fill="#e63946">
        <rect x="48" y="20" width="12" height="16" />
        <rect x="44" y="24" width="20" height="8" />
      </g>
      <g fill="#ffb703">
        <rect x="52" y="26" width="6" height="4" />
        <rect x="58" y="22" width="4" height="4" />
      </g>
    </svg>
  );
}

// Gonzaga CS & Teaching Assistant: Stack of CS books + warm island lantern
export function BooksAndLantern({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 64 52"
      width="64"
      height="52"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Stack of 3 pixel books */}
      <g fill="#1b4d7e">
        <rect x="4" y="36" width="28" height="8" />
      </g>
      <g fill="#f4ead2">
        <rect x="8" y="38" width="20" height="4" />
      </g>
      <g fill="#b83b3b">
        <rect x="6" y="28" width="26" height="8" />
      </g>
      <g fill="#f4ead2">
        <rect x="10" y="30" width="18" height="4" />
      </g>
      <g fill="#2b6e44">
        <rect x="8" y="20" width="24" height="8" />
      </g>
      <g fill="#f4ead2">
        <rect x="12" y="22" width="16" height="4" />
      </g>

      {/* Warm glowing island lantern */}
      <g fill="#3d4852">
        <rect x="44" y="12" width="12" height="4" />
        <rect x="40" y="16" width="20" height="4" />
        <rect x="40" y="36" width="20" height="8" />
      </g>
      <g fill="#ffb703">
        <rect x="44" y="20" width="12" height="16" />
      </g>
      <g fill="#fff3b0">
        <rect x="48" y="24" width="4" height="8" />
      </g>
    </svg>
  );
}

// Teaching Assistant: Pixel chalkboard with Python prompt ">_" + red apple
export function ChalkboardAndApple({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 68 52"
      width="68"
      height="52"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {/* Wooden frame */}
      <g fill="#7a4e25">
        <rect x="4" y="8" width="44" height="32" />
        <rect x="8" y="40" width="4" height="8" />
        <rect x="40" y="40" width="4" height="8" />
      </g>
      {/* Green chalkboard surface */}
      <g fill="#1e4d3b">
        <rect x="8" y="12" width="36" height="24" />
      </g>
      {/* Chalk ">_" and diagram */}
      <g fill="#f4ead2">
        <rect x="12" y="16" width="4" height="4" />
        <rect x="16" y="20" width="4" height="4" />
        <rect x="12" y="24" width="4" height="4" />
        <rect x="24" y="24" width="8" height="4" />
        <rect x="12" y="30" width="24" height="2" />
      </g>

      {/* Red apple on sand */}
      <g fill="#3fa34d">
        <rect x="56" y="24" width="6" height="4" />
      </g>
      <g fill="#d64545">
        <rect x="50" y="28" width="14" height="14" />
        <rect x="52" y="26" width="10" height="18" />
      </g>
      <g fill="#ffffff">
        <rect x="52" y="30" width="4" height="4" />
      </g>
    </svg>
  );
}

// Contact / Log Pose: Iron ship anchor on the beach
export function IronAnchor({ className = "", style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      width="56"
      height="56"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      <g fill="#2c353d">
        <rect x="24" y="8" width="8" height="8" />
        <rect x="26" y="16" width="4" height="28" />
        <rect x="16" y="20" width="24" height="4" />
        <rect x="12" y="36" width="8" height="8" />
        <rect x="36" y="36" width="8" height="8" />
        <rect x="16" y="44" width="24" height="4" />
      </g>
      <g fill="#5c6b73">
        <rect x="26" y="16" width="2" height="24" />
        <rect x="16" y="20" width="12" height="2" />
      </g>
    </svg>
  );
}
