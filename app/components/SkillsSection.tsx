import { fraunces } from "../fonts";

type SkillsSectionProps = {
  skills: string[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mt-20 md:mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-base sm:text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Toolkit</div>
          <h2 className={`${fraunces.className} text-3xl md:text-4xl mt-2`}>Ingredients</h2>
        </div>
        <div className="text-base text-[color:var(--muted)]">Tools I reach for every day</div>
      </div>
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-base"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
