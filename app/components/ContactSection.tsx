import { fraunces } from "../fonts";
import type { LinkItem } from "../data/portfolio";

type ContactSectionProps = {
  links: LinkItem[];
};

export default function ContactSection({ links }: ContactSectionProps) {
  return (
    <section id="contact" className="mt-20 md:mt-28">
      <div className="glass rounded-[32px] p-8 md:p-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-4">
          <h2 className={`${fraunces.className} text-3xl md:text-4xl`}>Some Links</h2>
        </div>
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex items-center gap-2 text-sm font-semibold hover:text-[color:var(--accent)] transition"
            >
              <span className="text-xl">{link.label}</span>
              <span className="break-all">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
