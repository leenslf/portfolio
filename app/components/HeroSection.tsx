import Image from "next/image";
import { fraunces } from "../fonts";

export default function HeroSection() {
  return (
    <section id="about" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div className="space-y-6">
        <p className={`${fraunces.className} text-lg md:text-2xl leading-relaxed`}>
          I&apos;m Leen, I write code sometimes (software engineer), and I put this together to put my thoughts in a nice space 👾        </p>
      </div>

      <div className="relative aspect-square">
        <div className="h-full w-full rounded-3xl overflow-hidden">
          <Image
            src="/leenb.png"
            alt="Leen Said portrait"
            width={600}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      
      </div>
    </section>
  );
}
