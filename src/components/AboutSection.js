import templateConfig from "../template-config";


export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">About Us</h2>
  <p className="text-gray-700 text-xl font-light opacity-90">{templateConfig.business.description}</p>
      </div>
    </section>
  );
}
