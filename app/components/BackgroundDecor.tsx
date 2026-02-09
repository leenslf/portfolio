export default function BackgroundDecor() {
  return (
    <>
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full orb opacity-70" />
      <div className="absolute top-40 -right-10 w-80 h-80 rounded-full orb-cool opacity-60" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full orb opacity-40" />
      <div className="absolute inset-0 sparkle pointer-events-none" />
    </>
  );
}
