import { siteConfig } from "../template-config";


export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 overflow-hidden">
      <div className="max-w-screen-sm md:max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-8 md:mb-12 drop-shadow-lg">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, idx) => (
            <div key={idx} className={`bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl border ${service.popular ? 'border-yellow-400' : 'border-cyan-200'} hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-full`}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-700 mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-2">{service.description}</p>
              <ul className="mb-2 text-xs sm:text-sm text-gray-500 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 md:gap-4 text-xs text-gray-700">
                <span className="bg-blue-100 px-2 py-1 rounded">Duration: {service.duration}</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Grafts: {service.grafts}</span>
              </div>
              {service.popular && <span className="inline-block mt-4 px-3 py-1 bg-yellow-400 text-blue-900 font-bold rounded-full text-xs">Most Popular</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import templateConfig from "../template-config";
const { services } = templateConfig;
