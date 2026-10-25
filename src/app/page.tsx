import Panel from "@/components/Panel";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import WantedPoster from "@/components/WantedPoster";
import { education, experience, moreProjects, profile, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 pb-24 pt-16">
      <WantedPoster />

      <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} variant="land" />
          ))}
        </div>
      </section>

      <section aria-labelledby="more-heading" className="flex flex-col gap-4">
        <SectionHeading id="more-heading">More projects</SectionHeading>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {moreProjects.map((project) => (
            <ProjectCard key={project.name} project={project} variant="parchment" />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-heading" className="flex flex-col gap-4">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <div className="flex flex-col gap-6">
          {[education, ...experience].map((entry) => (
            <Panel key={`${entry.org}-${entry.title}`}>
              <h3 className="font-serif text-xl font-bold">{entry.title}</h3>
              <p className="text-sm">
                {entry.org} · {entry.dates}
              </p>
              <ul className="mt-3 list-disc pl-5">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
        <SectionHeading id="contact-heading">Contact</SectionHeading>
        <Panel>
          <p>Looking for {profile.seeking.toLowerCase()}. Say hello:</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
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
        </Panel>
      </section>
    </main>
  );
}
