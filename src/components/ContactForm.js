import templateConfig from "../template-config";


export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-100 via-blue-50 to-blue-200">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12 drop-shadow-lg">Contact Us</h2>
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-cyan-200">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <textarea placeholder="Your Message" className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" rows={4} required />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300">Send Message</button>
        </form>
        <div className="mt-8 text-center text-gray-600">
          <p>Email: {templateConfig.business?.email || "example@example.com"}</p>
          <p>Phone: {templateConfig.business?.phone || "(555) 555-5555"}</p>
        </div>
      </div>
    </section>
  );
}
