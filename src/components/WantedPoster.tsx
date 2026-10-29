import LinkButton from "@/components/LinkButton";
import Panel from "@/components/Panel";
import { profile } from "@/data/portfolio";

// Authentic One Piece Beli symbol (serif "B" with vertical double-serifed stroke)
function BeliSymbol() {
  return (
    <svg
      viewBox="0 0 24 30"
      width="20"
      height="25"
      aria-label="Beli"
      className="inline-block shrink-0 translate-y-[-2px]"
    >
      <path
        fill="currentColor"
        d="M9 1h3v3h3.5C19.2 4 21.5 6 21.5 9c0 2.2-1.3 3.9-3.3 4.6 2.5.7 4.1 2.6 4.1 5.2 0 3.5-2.7 5.7-6.8 5.7H12v4.5H9V24.5H5v-2.8h2V6.8H5V4h4V1zm3 5.8v5.5h3c2 0 3.3-1.1 3.3-2.8 0-1.7-1.2-2.7-3.3-2.7h-3zm0 8.2v6.7h3.4c2.3 0 3.6-1.2 3.6-3.3 0-2.2-1.4-3.4-3.8-3.4H12z"
      />
    </svg>
  );
}

export default function WantedPoster() {
  return (
    <div id="top" className="mx-auto w-full max-w-xl scroll-mt-20">
      <Panel className="text-center">
        <p className="font-serif text-5xl font-black uppercase tracking-[0.22em] sm:text-6xl">
          Wanted
        </p>

        <div className="mx-auto my-5 h-56 w-56 overflow-hidden border-4 border-wood bg-sand/40 shadow-[inset_0_0_0_2px_rgba(43,29,14,0.2)] sm:h-64 sm:w-64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/abe-wanted.jpg"
            alt="Portrait of Abraham Meshesha"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="font-serif text-base font-extrabold uppercase tracking-[0.28em] text-wood sm:text-lg">
          {profile.posterStatus}
        </p>

        <h1 className="mt-1 font-serif text-3xl font-black uppercase tracking-wider sm:text-4xl">
          {profile.name}
        </h1>

        <p className="mt-2 font-serif text-xl font-bold tracking-[0.16em] text-ink sm:text-2xl">
          <BeliSymbol />{" "}
          <span>{profile.bounty}</span>{" "}
          <span aria-hidden="true" className="text-wood">
            —
          </span>
        </p>

        <div className="mt-4 border-t-2 border-wood/25 pt-3">
          <p className="font-semibold text-ink">{profile.tagline}</p>
          <p className="mt-0.5 text-sm text-wood">{profile.subtagline}</p>
        </div>

        <nav aria-label="Profile links" className="mt-5">
          <ul className="flex flex-wrap justify-center gap-3">
            {profile.links.map((link) => (
              <li key={link.label}>
                <LinkButton label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
        </nav>
      </Panel>
    </div>
  );
}
