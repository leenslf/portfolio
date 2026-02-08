import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Leen Said
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Computer Engineering student · Robotics & Computer Vision
          </p>
        </header>

        <p className="text-lg leading-8">
          I work on robotics, simulation, and perception systems — from
          SLAM and visual odometry to physics-based simulation and
          ROS-based tooling.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="space-y-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Duckiebot re-engineering (ROS, VIO, SLAM)</li>
            <li>Physics-based DEM simulation with Project Chrono</li>
            <li>Qt/QML robot ground control station</li>
          </ul>
        </section>

        <footer className="pt-10">
          <a
            href="mailto:youremail@example.com"
            className="text-lg font-medium underline underline-offset-4"
          >
            Contact me
          </a>
        </footer>
      </section>
    </main>
  );
}

