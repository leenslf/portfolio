export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-xs sm:text-sm md:text-sm uppercase tracking-[0.18em] md:tracking-[0.2em] text-[color:var(--muted)]">
            <a className="hover:text-[color:var(--accent)] transition" href="#about">
              About
            </a>
            <a className="hover:text-[color:var(--accent)] transition" href="#projects">
              Projects
            </a>
            <a className="hover:text-[color:var(--accent)] transition" href="#experience">
              Experience
            </a>
            <a className="hover:text-[color:var(--accent)] transition" href="#contact">
              Links
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
