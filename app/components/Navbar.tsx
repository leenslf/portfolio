export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-center">
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
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
    </nav>
  );
}
