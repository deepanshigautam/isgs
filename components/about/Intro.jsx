export default function Intro() {
  return (
   <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold text-isgs-white mb-6 tracking-tight">
            About <span className="relative inline-block">
              <span className="relative z-10">ISGS</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
            </span>
          </h1>
          <p className="text-xl text-isgs-silver max-w-3xl mx-auto font-light">
            We're on a mission to transform education through innovative technology solutions
          </p>
        </div>
  );
}