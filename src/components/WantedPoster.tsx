import Panel from "@/components/Panel";
import { profile } from "@/data/portfolio";

export default function WantedPoster() {
  return (
    <Panel className="text-center">
      <p className="font-serif text-5xl font-black uppercase tracking-[0.2em] sm:text-6xl">
        Wanted
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest">
        For: {profile.seeking}
      </p>

      <div className="mx-auto my-6 flex h-52 w-52 items-center justify-center border-4 border-wood bg-ink/10 text-sm sm:h-60 sm:w-60">
        [ photo ]
      </div>

      <h1 className="font-serif text-3xl font-bold uppercase sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg">{profile.tagline}</p>

      <p className="mt-5 font-serif text-xl font-bold uppercase tracking-widest">
        Bounty: {profile.bounty}
      </p>

      <nav aria-label="Profile links" className="mt-6">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-semibold underline decoration-2 underline-offset-4 hover:text-wood"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Panel>
  );
}
