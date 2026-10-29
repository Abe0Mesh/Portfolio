// Small pixel-art decorations for the island panels. Every piece is drawn on a 1-unit
// grid and rendered at 4px per unit, matching the ocean. All of them are decorative.

type DecorProps = { className?: string; style?: React.CSSProperties };

export function Bush({ className = "", style }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 4"
      shapeRendering="crispEdges"
      className={`h-auto w-8 ${className}`}
      style={style}
    >
      <g fill="#3f8f4f">
        <rect x="2" y="0" width="4" height="1" />
        <rect x="1" y="1" width="6" height="1" />
        <rect x="0" y="2" width="8" height="2" />
      </g>
      <rect x="3" y="1" width="1" height="1" fill="#5fb36b" />
    </svg>
  );
}

export function Rock({ className = "", style }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 6 4"
      shapeRendering="crispEdges"
      className={`h-auto w-6 ${className}`}
      style={style}
    >
      <g fill="#8a8f98">
        <rect x="1" y="0" width="4" height="1" />
        <rect x="0" y="1" width="6" height="3" />
      </g>
      <rect x="0" y="3" width="6" height="1" fill="#6b7078" />
      <rect x="1" y="1" width="1" height="1" fill="#b4b9c0" />
    </svg>
  );
}
