import templateConfig from "../template-config";


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12 drop-shadow-lg">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {templateConfig.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <p className="text-gray-700 italic text-lg mb-4">&quot;{testimonial.text}&quot;</p>
              <span className="font-semibold text-cyan-700">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
