import { fraunces } from "../fonts";
import type { LinkItem } from "../data/portfolio";

type ContactSectionProps = {
  links: LinkItem[];
};

export default function ContactSection({ links }: ContactSectionProps) {
  return (
    <section id="contact" className="mt-20 md:mt-28">
      <h2 className={`${fraunces.className} text-2xl sm:text-3xl md:text-4xl mb-5`}>Some Links</h2>
      <div className="glass rounded-[28px] p-4 sm:p-5 md:p-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex items-center gap-3 text-sm sm:text-base font-semibold hover:text-[color:var(--accent)] transition min-h-11 py-1.5"
            >
              <span className="text-xl sm:text-2xl">{link.label}</span>
              <span className="break-all">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
