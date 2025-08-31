import { templateConfig } from "../template-config";
export default function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-20 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 w-full overflow-hidden">
      <div className="max-w-screen-sm md:max-w-2xl mx-auto px-2 sm:px-4 text-center w-full">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-800 mb-4 md:mb-6 drop-shadow-lg break-words">About Us</h2>
        <p className="text-sm sm:text-base md:text-xl font-light opacity-90 break-words">{templateConfig.business.description}</p>
      </div>
    </section>
  );
}
