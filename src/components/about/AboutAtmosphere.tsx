export default function AboutAtmosphere() {
  return (
    <div className="absolute top-0 left-0 z-40 pointer-events-none h-screen w-screen overflow-hidden" aria-hidden="true">
      <div
        className="absolute top-0 left-0"
        style={{
          transform: "translateY(-350px) rotate(-45deg)",
          width: 560,
          height: 1380,
          background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(217, 217, 217, 0.08) 0px, rgba(140, 140, 140, 0.02) 50%, rgba(115, 115, 115, 0) 80%)",
        }}
      />
      <div
        className="absolute top-0 left-0"
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          transformOrigin: "left top",
          width: 240,
          height: 1380,
          background: "radial-gradient(50% 50%, rgba(217, 217, 217, 0.06) 0px, rgba(115, 115, 115, 0.02) 80%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 rounded-[20px]"
        style={{
          transform: "rotate(-45deg) translate(-180%, -70%)",
          transformOrigin: "left top",
          width: 240,
          height: 1380,
          background: "radial-gradient(50% 50%, rgba(217, 217, 217, 0.04) 0px, rgba(115, 115, 115, 0.02) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}
