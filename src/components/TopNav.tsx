// One Piece-inspired 3/4 Top-Down Harbor Pier & Moored Pirate Sloop.
// Extends out from the right coast (`right-0`) into the ocean with 3/4 perspective
// vertical deck planks, submerged wooden pilings, and a continuous seafoam/turquoise
// waterline shared between the docked pirate ship and the pier posts.

const NAV_ITEMS = [
  { label: "Top", href: "#top" },
  { label: "Projects", href: "#projects-heading" },
  { label: "Experience", href: "#experience-heading" },
  { label: "Skills", href: "#skills-heading" },
  { label: "Contact", href: "#contact-heading" },
];

function DockedPirateShip3D() {
  return (
    <svg
      viewBox="0 0 64 49"
      width="64"
      height="49"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="-mr-[2px] hidden shrink-0 sm:block"
    >
      {/* Mast top & Red Pirate Pennant */}
      <rect x="26" y="2" width="3" height="32" fill="#3b230d" />
      <rect x="16" y="2" width="10" height="4" fill="#c1121f" />
      <rect x="13" y="3" width="3" height="2" fill="#c1121f" />

      {/* 3/4 Top-Down Billowing Mainsail */}
      <rect x="12" y="7" width="28" height="2" fill="#462c12" />
      <rect x="14" y="9" width="26" height="15" fill="#f4ead2" />
      <rect x="12" y="11" width="28" height="11" fill="#fffdf7" />
      {/* Straw Hat emblem on sail */}
      <rect x="22" y="13" width="9" height="3" fill="#e9c46a" />
      <rect x="22" y="16" width="9" height="1" fill="#c1121f" />
      <rect x="20" y="17" width="13" height="2" fill="#e9c46a" />

      {/* 3/4 Perspective Ship Deck (visible top interior of hull) */}
      <rect x="10" y="27" width="34" height="5" fill="#a6703b" />
      <rect x="12" y="28" width="30" height="3" fill="#8c5a2b" />

      {/* Merry-style white figurehead on right bow facing the pier */}
      <rect x="44" y="23" width="7" height="6" fill="#fffdf7" />
      <rect x="42" y="25" width="3" height="4" fill="#d4b06a" />
      <rect x="49" y="25" width="1" height="1" fill="#2b1d0e" />

      {/* 3/4 Front-Facing Ship Hull & Gold Gunwale */}
      <rect x="8" y="31" width="38" height="2" fill="#e9c46a" />
      <rect x="8" y="33" width="38" height="6" fill="#6e431c" />
      <rect x="10" y="39" width="34" height="4" fill="#462c12" />

      {/* Hemp mooring rope tied from bow down to the pier's left bollard */}
      <rect x="48" y="29" width="4" height="2" fill="#d4a359" />
      <rect x="52" y="30" width="4" height="2" fill="#d4a359" />
      <rect x="56" y="29" width="4" height="2" fill="#d4a359" />

      {/* Leftmost Pier Mooring Bollard (3/4 top cap + vertical timber post) */}
      <rect x="57" y="20" width="7" height="3" fill="#b57c43" />
      <rect x="58" y="23" width="5" height="20" fill="#462c12" />
      <rect x="57" y="28" width="7" height="3" fill="#d4a359" />

      {/* Submerged hull & piling waterline: White Seafoam (y=43..46) + Shallow Turquoise Water (y=46..49) */}
      <rect x="6" y="43" width="58" height="3" fill="#e6f6fb" />
      <rect x="4" y="46" width="60" height="3" fill="#2b7da3" />
    </svg>
  );
}

export default function TopNav() {
  return (
    <nav
      aria-label="Harbor dock section navigation"
      className="fixed right-0 top-3 z-50 flex items-end select-none"
    >
      {/* Moored One Piece Pirate Sloop sitting in the water at the head of the pier */}
      <DockedPirateShip3D />

      {/* 3/4 Perspective Wooden Pier jutting out from the right edge of the screen */}
      <div className="flex flex-col">
        {/* Back edge of pier: 3/4 top-down post caps & hemp rope rail */}
        <div
          aria-hidden="true"
          className="flex items-end justify-between pr-4 pl-1"
        >
          {[0, 1, 2, 3].map((post, i) => (
            <div key={post} className="flex flex-1 items-center">
              {/* 3/4 perspective wooden piling top (lighter top face + dark front face) */}
              <div className="flex flex-col">
                <span className="h-1.5 w-3.5 border border-b-0 border-ink bg-[#b57c43]" />
                <span className="h-1.5 w-3.5 border-x border-ink bg-[#6e4720]" />
              </div>
              {i < 3 && (
                <span className="h-1 flex-1 border-y border-ink/60 bg-[#d4a359]" />
              )}
            </div>
          ))}
        </div>

        {/* 3/4 Top-Down Wooden Plank Deck (vertical floorboards + thick front timber beam) */}
        <div
          className="border-t-2 border-b-[6px] border-l-2 border-ink border-b-[#3b230d] px-2.5 py-1.5 pr-4 sm:px-3.5 sm:py-2 sm:pr-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #8c5a2b 0px, #8c5a2b 14px, #5b3a1a 14px, #5b3a1a 16px)",
          }}
        >
          <ul className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block border-2 border-ink bg-parchment px-2 py-0.5 font-serif text-[11px] font-black uppercase tracking-wider text-ink shadow-[0_2px_0_0_#2b1d0e] transition-transform hover:bg-sand active:translate-y-[1px] active:shadow-none sm:px-2.5 sm:text-xs"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-ink bg-[#e9c46a] px-2 py-0.5 font-serif text-[11px] font-black uppercase tracking-wider text-ink shadow-[0_2px_0_0_#2b1d0e] transition-transform hover:bg-[#f4d58d] active:translate-y-[1px] active:shadow-none sm:px-2.5 sm:text-xs"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Submerged Pier Pilings & Continuous Waterline (matches ship waterline!) */}
        <div aria-hidden="true" className="flex flex-col">
          {/* Vertical wooden pilings under the pier deck */}
          <div className="flex justify-between pr-6 pl-2">
            {[0, 1, 2, 3, 4].map((piling) => (
              <div
                key={piling}
                className="h-2.5 w-3.5 border-x-2 border-ink bg-[#462c12]"
              />
            ))}
          </div>
          {/* Continuous white seafoam + shallow turquoise water ring where the pier meets the ocean */}
          <div className="h-[3px] w-full bg-foam" />
          <div className="h-[3px] w-full bg-[#2b7da3]" />
        </div>
      </div>
    </nav>
  );
}
