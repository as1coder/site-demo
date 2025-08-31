

import templateConfig from "../template-config";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.346 3.678 1.327c-.98.98-1.196 2.093-1.255 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.275 2.394 1.255 3.374.981.981 2.093 1.196 3.374 1.255C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.394-.274 3.374-1.255.98-.98 1.196-2.093 1.255-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.275-2.394-1.255-3.374-.98-.981-2.093-1.196-3.374-1.255C15.668.013 15.259 0 12 0z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { business } = templateConfig;
  const address = `${business.address.street}, ${business.address.suite}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white py-8 mt-20 w-full overflow-hidden">
      <div className="max-w-screen-sm md:max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
        <div className="w-full">
          <p className="mb-2 text-base md:text-lg font-semibold break-words">&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="text-xs md:text-sm opacity-90 break-words">{address} | {business.email} | {business.phone}</p>
        </div>
        <div className="flex justify-center md:justify-end gap-4 md:gap-6 mt-2 md:mt-0 w-full">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
