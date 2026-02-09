import { fraunces } from "../fonts";

type SkillsSectionProps = {
  skills: string[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mt-20 md:mt-28">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Toolkit</div>
          <h2 className={`${fraunces.className} text-3xl md:text-4xl mt-2`}>Ingredients</h2>
        </div>
        <div className="text-sm text-[color:var(--muted)]">Tools I reach for every day</div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
