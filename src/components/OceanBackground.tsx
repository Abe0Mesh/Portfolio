"use client";

import { useEffect, useState } from "react";

// Original pixel-art wave arch tiles on a 256x256 (4px pixel) grid.
// Each wave is a 20x8 pixel arch with a bright foam cap so the gentle
// 3.2s swell + 4px pixel bob is clearly visible without horizontal strobing.

const WAVE_DARK = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' shape-rendering='crispEdges'%3E%3Cg fill='%230c2b45'%3E%3Crect x='24' y='32' width='12' height='4'/%3E%3Crect x='20' y='36' width='4' height='4'/%3E%3Crect x='36' y='36' width='4' height='4'/%3E%3Crect x='140' y='20' width='12' height='4'/%3E%3Crect x='136' y='24' width='4' height='4'/%3E%3Crect x='152' y='24' width='4' height='4'/%3E%3Crect x='84' y='96' width='12' height='4'/%3E%3Crect x='80' y='100' width='4' height='4'/%3E%3Crect x='96' y='100' width='4' height='4'/%3E%3Crect x='204' y='112' width='12' height='4'/%3E%3Crect x='200' y='116' width='4' height='4'/%3E%3Crect x='216' y='116' width='4' height='4'/%3E%3Crect x='36' y='176' width='12' height='4'/%3E%3Crect x='32' y='180' width='4' height='4'/%3E%3Crect x='48' y='180' width='4' height='4'/%3E%3Crect x='156' y='204' width='12' height='4'/%3E%3Crect x='152' y='208' width='4' height='4'/%3E%3Crect x='168' y='208' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E`;

const WAVE_LIGHT_A = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' shape-rendering='crispEdges'%3E%3Cg fill='%233d92bf'%3E%3Crect x='64' y='44' width='12' height='4'/%3E%3Crect x='60' y='48' width='4' height='4'/%3E%3Crect x='76' y='48' width='4' height='4'/%3E%3Crect x='188' y='56' width='12' height='4'/%3E%3Crect x='184' y='60' width='4' height='4'/%3E%3Crect x='200' y='60' width='4' height='4'/%3E%3Crect x='28' y='124' width='12' height='4'/%3E%3Crect x='24' y='128' width='4' height='4'/%3E%3Crect x='40' y='128' width='4' height='4'/%3E%3Crect x='136' y='144' width='12' height='4'/%3E%3Crect x='132' y='148' width='4' height='4'/%3E%3Crect x='148' y='148' width='4' height='4'/%3E%3Crect x='92' y='220' width='12' height='4'/%3E%3Crect x='88' y='224' width='4' height='4'/%3E%3Crect x='104' y='224' width='4' height='4'/%3E%3Crect x='216' y='232' width='12' height='4'/%3E%3Crect x='212' y='236' width='4' height='4'/%3E%3Crect x='228' y='236' width='4' height='4'/%3E%3C/g%3E%3Cg fill='%23daf6ff'%3E%3Crect x='68' y='44' width='4' height='4'/%3E%3Crect x='192' y='56' width='4' height='4'/%3E%3Crect x='32' y='124' width='4' height='4'/%3E%3Crect x='140' y='144' width='4' height='4'/%3E%3Crect x='96' y='220' width='4' height='4'/%3E%3Crect x='220' y='232' width='4' height='4'/%3E%3Crect x='108' y='24' width='4' height='4'/%3E%3Crect x='228' y='88' width='4' height='4'/%3E%3Crect x='56' y='160' width='4' height='4'/%3E%3Crect x='180' y='184' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E`;

const WAVE_LIGHT_B = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' shape-rendering='crispEdges'%3E%3Cg fill='%233d92bf'%3E%3Crect x='104' y='64' width='12' height='4'/%3E%3Crect x='100' y='68' width='4' height='4'/%3E%3Crect x='116' y='68' width='4' height='4'/%3E%3Crect x='220' y='28' width='12' height='4'/%3E%3Crect x='216' y='32' width='4' height='4'/%3E%3Crect x='232' y='32' width='4' height='4'/%3E%3Crect x='60' y='140' width='12' height='4'/%3E%3Crect x='56' y='144' width='4' height='4'/%3E%3Crect x='72' y='144' width='4' height='4'/%3E%3Crect x='172' y='160' width='12' height='4'/%3E%3Crect x='168' y='164' width='4' height='4'/%3E%3Crect x='184' y='164' width='4' height='4'/%3E%3Crect x='20' y='212' width='12' height='4'/%3E%3Crect x='16' y='216' width='4' height='4'/%3E%3Crect x='32' y='216' width='4' height='4'/%3E%3Crect x='128' y='236' width='12' height='4'/%3E%3Crect x='124' y='240' width='4' height='4'/%3E%3Crect x='140' y='240' width='4' height='4'/%3E%3C/g%3E%3Cg fill='%23daf6ff'%3E%3Crect x='108' y='64' width='4' height='4'/%3E%3Crect x='224' y='28' width='4' height='4'/%3E%3Crect x='64' y='140' width='4' height='4'/%3E%3Crect x='176' y='160' width='4' height='4'/%3E%3Crect x='24' y='212' width='4' height='4'/%3E%3Crect x='132' y='236' width='4' height='4'/%3E%3Crect x='44' y='72' width='4' height='4'/%3E%3Crect x='164' y='104' width='4' height='4'/%3E%3Crect x='108' y='188' width='4' height='4'/%3E%3Crect x='236' y='204' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E`;

export default function OceanBackground() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "playing";
  }, [paused]);

  function toggle() {
    setPaused((prev) => !prev);
  }

  return (
    <>
      {/* Static dark pixel wave arches */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${WAVE_DARK}")`,
          backgroundSize: "256px 256px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Gentle swell Layer A */}
      <div
        aria-hidden="true"
        className="ocean-swell-a pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${WAVE_LIGHT_A}")`,
          backgroundSize: "256px 256px",
          backgroundRepeat: "repeat",
          animationPlayState: paused ? "paused" : "running",
        }}
      />

      {/* Gentle swell Layer B (out of phase with Layer A) */}
      <div
        aria-hidden="true"
        className="ocean-swell-b pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${WAVE_LIGHT_B}")`,
          backgroundSize: "256px 256px",
          backgroundRepeat: "repeat",
          animationPlayState: paused ? "paused" : "running",
        }}
      />

      {/* Tactile Pause/Play control */}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={paused}
        className="fixed bottom-4 right-4 z-50 flex cursor-pointer items-center gap-2 rounded-none border-4 border-wood bg-parchment px-3.5 py-1.5 text-sm font-bold text-ink shadow-[4px_4px_0_0_rgba(0,0,0,0.45)] transition-transform hover:bg-sand active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <span
          aria-hidden="true"
          className={`inline-block h-3 w-3 border-2 border-ink ${
            paused ? "bg-wood/40" : "bg-[#2a9d8f]"
          }`}
        />
        {paused ? "Waves: Paused (Play)" : "Waves: Playing (Pause)"}
      </button>
    </>
  );
}
