import Island from "@/components/Island";
import LandPanel from "@/components/LandPanel";
import Panel from "@/components/Panel";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  // "land": the whole card is a piece of land with a palm tree (the prototype).
  // "parchment": the original rectangle with a small island sitting on top.
  variant: "land" | "parchment";
};

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <h3 className="font-serif text-2xl font-bold">{project.name}</h3>
      <p className="mt-2">{project.summary}</p>

      {project.role && (
        <p className="mt-3">
          <span className="font-semibold">My part: </span>
          {project.role}
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-sm border-2 border-wood px-2 py-0.5 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>

      {project.links && project.links.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((link) => (
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
      )}
    </>
  );
}

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  if (variant === "land") {
    return (
      <article className="pt-8">
        <LandPanel>
          <ProjectBody project={project} />
        </LandPanel>
      </article>
    );
  }

  return (
    <article className="relative flex flex-col pt-10">
      {/* The island sits on top of the card's top edge, like it's floating on the water */}
      <Island className="absolute left-6 top-0 z-10" />

      <Panel className="flex-1">
        <ProjectBody project={project} />
      </Panel>
    </article>
  );
}
