import { fraunces } from "../fonts";
import type { Experience } from "../data/portfolio";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mt-20 md:mt-28">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className={`${fraunces.className} text-3xl md:text-4xl mt-2`}>Experience</h2>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        {experiences.map((item) => (
          <div
            key={item.role}
            className="glass rounded-3xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-2">
              <div className={`${fraunces.className} text-2xl`}>{item.role}</div>
              <div className="text-[color:var(--muted)]">{item.org}</div>
              <p className="text-sm text-[color:var(--muted)] max-w-xl">{item.description}</p>
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">{item.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
