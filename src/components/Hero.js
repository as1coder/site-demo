
import templateConfig from "../template-config";


export default function Hero() {
  const { hero } = templateConfig;
  return (
    <section className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 py-12 md:py-20 text-center text-white overflow-hidden">
      <div className="max-w-screen-sm md:max-w-3xl mx-auto px-4">
        <div className="mb-4">
          <span className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full shadow mb-4 text-xs md:text-sm">{hero.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight break-words">
          {hero.title.part1} <span className="text-yellow-300">{hero.highlight1}</span> {hero.title.part2} <span className="text-yellow-300">{hero.highlight2}</span> {hero.title.part3}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8 font-light opacity-90">
          {hero.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 w-full">
          <a href="#contact" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-cyan-200 hover:text-blue-900 transition-all duration-300 w-full md:w-auto">{hero.ctaButtons.primary}</a>
          <a href="#" className="inline-block bg-blue-700 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-300 w-full md:w-auto">{hero.ctaButtons.secondary}</a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {hero.features.map((feature, idx) => (
            <span key={idx} className="bg-white/20 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow">{feature}</span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          <div className="text-center min-w-[90px]">
            <span className="text-xl md:text-3xl font-bold text-yellow-300">{hero.stats.experience} yrs</span>
            <div className="text-white/80 text-xs md:text-sm">Experience</div>
          </div>
          <div className="text-center min-w-[90px]">
            <span className="text-xl md:text-3xl font-bold text-yellow-300">{hero.stats.procedures}</span>
            <div className="text-white/80 text-xs md:text-sm">Procedures</div>
          </div>
          <div className="text-center min-w-[90px]">
            <span className="text-xl md:text-3xl font-bold text-yellow-300">{hero.stats.patients}</span>
            <div className="text-white/80 text-xs md:text-sm">Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
