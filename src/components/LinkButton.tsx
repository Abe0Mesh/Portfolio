type LinkButtonProps = {
  label: string;
  href: string;
};

function PixelLinkIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  // Resume -> Mini pixel parchment scroll / document with wax ribbon
  if (key.includes("resume") || key.includes("cv")) {
    return (
      <svg
        viewBox="0 0 14 14"
        width="14"
        height="14"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="shrink-0"
      >
        <g fill="#2b1d0e">
          <rect x="2" y="1" width="10" height="12" />
        </g>
        <g fill="#f4ead2">
          <rect x="3" y="2" width="8" height="10" />
        </g>
        <g fill="#5b3a1a">
          <rect x="4" y="4" width="6" height="1" />
          <rect x="4" y="6" width="6" height="1" />
          <rect x="4" y="8" width="4" height="1" />
        </g>
        <g fill="#c1121f">
          <rect x="8" y="9" width="2" height="2" />
        </g>
      </svg>
    );
  }

  // App Store -> Mini pixel smartphone
  if (key.includes("app store")) {
    return (
      <svg
        viewBox="0 0 14 14"
        width="14"
        height="14"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="shrink-0"
      >
        <g fill="#2b1d0e">
          <rect x="3" y="0" width="8" height="14" />
        </g>
        <g fill="#cdeefa">
          <rect x="4" y="2" width="6" height="9" />
        </g>
        <g fill="#f4ead2">
          <rect x="6" y="12" width="2" height="1" />
        </g>
      </svg>
    );
  }

  // Live Site -> Mini pixel globe / compass
  if (key.includes("live") || key.includes("site") || key.includes("demo")) {
    return (
      <svg
        viewBox="0 0 14 14"
        width="14"
        height="14"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="shrink-0"
      >
        <g fill="#2b1d0e">
          <rect x="4" y="1" width="6" height="12" />
          <rect x="2" y="3" width="10" height="8" />
          <rect x="1" y="4" width="12" height="6" />
        </g>
        <g fill="#569ec4">
          <rect x="4" y="2" width="6" height="10" />
          <rect x="2" y="4" width="10" height="6" />
        </g>
        <g fill="#3fa34d">
          <rect x="4" y="3" width="3" height="3" />
          <rect x="8" y="4" width="2" height="4" />
          <rect x="5" y="8" width="3" height="3" />
        </g>
      </svg>
    );
  }

  // LinkedIn -> Mini pixel briefcase / badge
  if (key.includes("linkedin")) {
    return (
      <svg
        viewBox="0 0 14 14"
        width="14"
        height="14"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="shrink-0"
      >
        <g fill="#1b4d7e">
          <rect x="1" y="1" width="12" height="12" />
        </g>
        <g fill="#ffffff">
          <rect x="3" y="3" width="2" height="2" />
          <rect x="3" y="6" width="2" height="5" />
          <rect x="6" y="6" width="2" height="5" />
          <rect x="8" y="6" width="2" height="2" />
          <rect x="9" y="7" width="2" height="4" />
        </g>
      </svg>
    );
  }

  // Email -> Mini pixel envelope with wax seal
  if (key.includes("email") || key.includes("mail")) {
    return (
      <svg
        viewBox="0 0 14 14"
        width="14"
        height="14"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="shrink-0"
      >
        <g fill="#2b1d0e">
          <rect x="1" y="2" width="12" height="10" />
        </g>
        <g fill="#f4ead2">
          <rect x="2" y="3" width="10" height="8" />
        </g>
        <g fill="#5b3a1a">
          <rect x="2" y="4" width="2" height="1" />
          <rect x="4" y="5" width="2" height="1" />
          <rect x="6" y="6" width="2" height="1" />
          <rect x="8" y="5" width="2" height="1" />
          <rect x="10" y="4" width="2" height="1" />
        </g>
        <g fill="#d64545">
          <rect x="6" y="6" width="2" height="2" />
        </g>
      </svg>
    );
  }

  // Default / GitHub -> Mini pixel octocat / code mark
  return (
    <svg
      viewBox="0 0 14 14"
      width="14"
      height="14"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="shrink-0"
    >
      <g fill="#2b1d0e">
        {/* Cat ears & head */}
        <rect x="3" y="2" width="2" height="2" />
        <rect x="9" y="2" width="2" height="2" />
        <rect x="2" y="4" width="10" height="6" />
        <rect x="3" y="10" width="8" height="1" />
        <rect x="5" y="11" width="4" height="2" />
        <rect x="2" y="10" width="2" height="2" />
      </g>
      <g fill="#f4ead2">
        <rect x="4" y="6" width="2" height="2" />
        <rect x="8" y="6" width="2" height="2" />
      </g>
    </svg>
  );
}

export default function LinkButton({ label, href }: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-none border-2 border-wood bg-sand px-3 py-1 text-sm font-bold text-ink shadow-[3px_3px_0_0_#5b3a1a] transition-transform hover:bg-[#dfba73] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    >
      <PixelLinkIcon label={label} />
      <span>{label}</span>
    </a>
  );
}
