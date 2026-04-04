import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/ArpitDhangar', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arpitdhangar/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:arpitdhangar34@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <a href="#home" className="text-lg font-bold">
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Arpit
            </span>
            <span className="text-white">.</span>
          </a>
          <p className="text-gray-600 text-xs mt-1">Full Stack Developer</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Arpit Dhangar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
