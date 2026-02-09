import Image from "next/image";
import { fraunces } from "../fonts";

export default function HeroSection() {
  return (
    <section id="about" className="grid gap-20 sm:gap-20 lg:gap-50 lg:grid-cols-[1.2fr_0.8fr] items-center">
      <div className="relative aspect-square w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px] mx-auto lg:order-2 lg:mx-0">
        <div className="h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden">
          <Image
            src="/leenb.png"
            alt="Leen Said portrait"
            width={600}
            height={600}
            className="h-full w-full object-cover"
            priority
            sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 300px, (min-width: 640px) 260px, 220px"
          />
        </div>
      </div>
      <div className="space-y-4 sm:space-y-5 lg:order-1 text-center lg:text-left">
        <p className={`${fraunces.className} text-base sm:text-lg md:text-2xl leading-relaxed`}>
          I&apos;m Leen, I write code sometimes (software engineer), and I put this together to put my thoughts in a
          nice space 👾
        </p>
      </div>
    </section>
  );
}
