// A tiny pixel-art palm tree, drawn as SVG rectangles on a 1-unit grid.
// Rendered at w-12 (48px), so each unit is 4px, matching the ocean's pixel size.

export default function Palm({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 10"
      shapeRendering="crispEdges"
      className={`h-auto w-12 ${className}`}
    >
      {/* trunk */}
      <rect x="5" y="3" width="2" height="7" fill="#7a4a21" />

      {/* leaves */}
      <g fill="#3f8f4f">
        <rect x="5" y="0" width="3" height="1" />
        <rect x="4" y="1" width="5" height="1" />
        <rect x="2" y="2" width="3" height="1" />
        <rect x="7" y="2" width="3" height="1" />
        <rect x="1" y="3" width="1" height="1" />
        <rect x="10" y="3" width="1" height="1" />
      </g>
    </svg>
  );
}
