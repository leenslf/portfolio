import { fraunces } from "../fonts";
import type { Project } from "../data/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mt-20 md:mt-28">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className={`${fraunces.className} text-3xl md:text-4xl mt-2`}>Projects</h2>
        </div>
        
      </div>
      <div className="grid gap-6 mt-10 md:grid-cols-3">
        {projects.map((project) => {
          const content = (
            <>
              <h3 className={`${fraunces.className} text-2xl`}>{project.title}</h3>
              <p className="text-sm text-[color:var(--muted)]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[color:var(--surface-2)] text-xs font-semibold text-[color:var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          );

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 space-y-4 transition-transform hover:-translate-y-1"
            >
              {content}
            </a>
          ) : (
            <article key={project.title} className="glass rounded-3xl p-6 space-y-4">
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
