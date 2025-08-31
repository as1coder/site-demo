import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full max-w-lg mx-auto py-12 px-4">
      <form
        action="https://formspree.io/f/xdklzkok"
        method="POST"
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        onSubmit={() => setSubmitted(true)}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Contact Us</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone"
          className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <div className="mt-4 text-green-600 text-center font-semibold">
            Thank you! Your message has been sent.
          </div>
        )}
      </form>
    </section>
  );
}
