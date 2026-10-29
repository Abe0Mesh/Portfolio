import Island from "@/components/Island";
import IslandPanel, { type IslandThemeProp } from "@/components/IslandPanel";
import LandPanel from "@/components/LandPanel";
import LinkButton from "@/components/LinkButton";
import Panel from "@/components/Panel";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  variant: "island" | "land" | "parchment";
  shape?: number;
  prop?: IslandThemeProp;
};

function getProjectProp(name: string): IslandThemeProp | undefined {
  const key = name.toLowerCase();
  if (key.includes("yenesow")) return "yenesow";
  if (key.includes("jan")) return "jans";
  if (key.includes("plant")) return "plant";
  if (key.includes("abepl")) return "abepl";
  if (key.includes("cheaper")) return "cheaper";
  if (key.includes("tobour")) return "tobour";
  return undefined;
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <h3 className="font-serif text-2xl font-bold">{project.name}</h3>
      <p className="mt-2 leading-relaxed">{project.summary}</p>

      {project.role && (
        <p className="mt-3 leading-relaxed">
          <span className="font-semibold">My part: </span>
          {project.role}
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-sm border-2 border-wood bg-sand/35 px-2 py-0.5 text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>

      {project.links && project.links.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <li key={link.label}>
              <LinkButton label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function ProjectCard({
  project,
  variant,
  shape,
  prop,
}: ProjectCardProps) {
  const resolvedProp = prop ?? getProjectProp(project.name);

  if (variant === "island") {
    return (
      <article className="pt-2">
        <IslandPanel shape={shape} prop={resolvedProp}>
          <ProjectBody project={project} />
        </IslandPanel>
      </article>
    );
  }

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
      <Island className="absolute left-6 top-0 z-10" />

      <Panel className="flex-1">
        <ProjectBody project={project} />
      </Panel>
    </article>
  );
}
