import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpeg';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and well-documented code is my priority.',
  },
  {
    icon: FiLayers,
    title: 'Full Stack',
    desc: 'Comfortable across the entire stack — from databases to pixel-perfect UIs.',
  },
  {
    icon: FiZap,
    title: 'Performance',
    desc: 'Focused on delivering fast, optimized experiences for end users.',
  },
];

function Card({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
        <Icon className="text-violet-400" size={20} />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Who I Am
          </h2>
          <div className="w-12 h-1 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              A passionate Full Stack Developer based in India
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                {/* TODO: Add your bio here */}
                I'm a Full Stack Developer with a passion for building beautiful, functional web
                applications. I love turning complex problems into simple, elegant solutions.
              </p>
              <p>
                {/* TODO: Add more about yourself */}
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or learning something new every day.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                ['Experience', '2+ Years'],
                ['Projects', '20+'],
                ['Technologies', '15+'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-2xl font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-gray-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 sm:w-72 rounded-3xl overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                <img
                  src={profileImg}
                  alt="Arpit Dhangar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-violet-500" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-cyan-500" />
              <div className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-purple-400/50" />
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <Card key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
