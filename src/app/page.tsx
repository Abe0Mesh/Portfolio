import IslandPanel, { type IslandThemeProp } from "@/components/IslandPanel";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import WantedPoster from "@/components/WantedPoster";
import {
  experience,
  moreProjects,
  projects,
} from "@/data/portfolio";

function getExperienceProp(title: string, org: string): IslandThemeProp {
  if (org.toLowerCase().includes("hawaii")) return "hawaii";
  if (title.toLowerCase().includes("teaching")) return "ta";
  return "gonzaga";
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 pb-28 pt-28 sm:px-6">
      <WantedPoster />

      {/* 1. Featured Projects — staggered 2-column island archipelago on desktop */}
      <section aria-labelledby="projects-heading" className="flex flex-col gap-6">
        <SectionHeading id="projects-heading">Featured Projects</SectionHeading>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={
                i === 1
                  ? "lg:mt-10"
                  : i === 2
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1rem)]"
                    : ""
              }
            >
              <ProjectCard
                project={project}
                variant="island"
                shape={i}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 2. Work Experience — 2-column staggered island pair on desktop */}
      <section aria-labelledby="experience-heading" className="flex flex-col gap-6">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {experience.map((entry, i) => (
            <div key={`${entry.org}-${entry.title}`} className={i === 1 ? "lg:mt-10" : ""}>
              <IslandPanel
                shape={i + 1}
                prop={getExperienceProp(entry.title, entry.org)}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold">{entry.title}</h3>
                  <span className="text-sm font-semibold text-wood">
                    {entry.dates}
                  </span>
                </div>
                <p className="text-sm font-semibold text-wood/90">{entry.org}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </IslandPanel>
            </div>
          ))}
        </div>
      </section>

      {/* 3. More Projects — staggered 2-column island archipelago */}
      <section aria-labelledby="more-heading" className="flex flex-col gap-6">
        <SectionHeading id="more-heading">More Projects</SectionHeading>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {moreProjects.map((project, i) => (
            <div
              key={project.name}
              className={
                i === 1
                  ? "lg:mt-10"
                  : i === 2
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1rem)]"
                    : ""
              }
            >
              <ProjectCard
                project={project}
                variant="island"
                shape={i + 2}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
