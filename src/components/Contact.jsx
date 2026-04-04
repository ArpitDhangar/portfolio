import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'arpitdhangar34@gmail.com',
    href: 'mailto:arpitdhangar34@gmail.com',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/ArpitDhangar',
    href: 'https://github.com/ArpitDhangar',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arpitdhangar',
    href: 'https://www.linkedin.com/in/arpitdhangar/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Let's Work Together
          </h2>
          <div className="w-12 h-1 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-xl mb-6">Reach Out</h3>
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <Icon className="text-violet-400" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">Send a Message</h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! (configure a backend or service like EmailJS)');
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-0.5"
              >
                <FiSend size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
