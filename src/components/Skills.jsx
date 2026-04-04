import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiTailwindcss, SiTypescript, SiJavascript,
  SiPython, SiGit, SiDocker,
} from 'react-icons/si';

// TODO: Update skills with your actual tech stack
const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    label: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
];

function SkillBadge({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/8 transition-all duration-200 cursor-default"
    >
      <Icon size={22} style={{ color }} />
      <span className="text-gray-300 text-sm font-medium">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <SkillBadge key={skill.name} {...skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
