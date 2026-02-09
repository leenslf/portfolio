export default function BackgroundDecor() {
  return (
    <>
      <div className="absolute -top-20 -left-20 w-52 h-52 sm:w-72 sm:h-72 rounded-full orb opacity-70" />
      <div className="absolute top-24 -right-16 w-56 h-56 sm:top-40 sm:-right-10 sm:w-80 sm:h-80 rounded-full orb-cool opacity-60" />
      <div className="absolute bottom-0 left-10 sm:left-1/3 w-64 h-64 sm:w-96 sm:h-96 rounded-full orb opacity-40" />
      <div className="absolute inset-0 sparkle pointer-events-none" />
    </>
  );
}
