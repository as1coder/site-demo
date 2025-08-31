import templateConfig from "../template-config";


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 md:py-20 bg-gradient-to-r from-cyan-50 via-blue-100 to-blue-200 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-sm md:max-w-4xl mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center text-blue-800 mb-6 md:mb-12 drop-shadow-lg break-words">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-10">
            {templateConfig.testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-cyan-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-full">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow" />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-700">{t.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{t.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2 break-words">{t.text}</p>
                <div className="flex gap-1 md:gap-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
}
