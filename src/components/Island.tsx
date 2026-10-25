// A tiny pixel-art island with a palm tree, drawn as SVG rectangles on a 1-unit grid.
// Rendered at w-24 (96px), so each unit is 4px, matching the ocean's pixel size.

export default function Island({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 16"
      shapeRendering="crispEdges"
      className={`h-auto w-24 ${className}`}
    >
      {/* sand */}
      <g fill="#e8c98a">
        <rect x="8" y="9" width="8" height="1" />
        <rect x="5" y="10" width="14" height="1" />
        <rect x="3" y="11" width="18" height="1" />
        <rect x="2" y="12" width="20" height="1" />
      </g>
      <rect x="4" y="13" width="16" height="1" fill="#c9a366" />

      {/* trunk */}
      <g fill="#7a4a21">
        <rect x="12" y="6" width="1" height="3" />
        <rect x="13" y="4" width="1" height="2" />
      </g>

      {/* leaves */}
      <g fill="#3f8f4f">
        <rect x="12" y="2" width="3" height="1" />
        <rect x="11" y="3" width="5" height="1" />
        <rect x="10" y="4" width="2" height="1" />
        <rect x="15" y="4" width="2" height="1" />
        <rect x="9" y="5" width="1" height="1" />
        <rect x="17" y="5" width="1" height="1" />
      </g>
    </svg>
  );
}
