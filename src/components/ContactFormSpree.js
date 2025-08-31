"use client";
import { useState } from "react";

export default function ContactFormSpree() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
  <section className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto py-8 sm:py-12 px-2 sm:px-4 overflow-hidden">
      <form
        action="https://formspree.io/f/xdklzkok"
        method="POST"
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-2 text-center">Contact Us</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="border border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="border border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone"
          className="border border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="border border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-blue-700 to-cyan-400 text-white py-2 sm:py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base ${status === "sending" ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <div className="mt-4 text-green-600 text-center font-semibold flex items-center justify-center gap-2">
            <span className="text-xl">✅</span> Message sent successfully.
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 text-red-600 text-center font-semibold flex items-center justify-center gap-2">
            <span className="text-xl">⚠️</span> Something went wrong.
          </div>
        )}
      </form>
    </section>
  );
}
