import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Dairy Desk',
    description:
      'A personal dairy and journaling app where users can write, manage, and reflect on their daily entries. Clean UI with a focus on simplicity and ease of use.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: null,
    live: 'https://dairy-desk-inky.vercel.app/',
    featured: true,
  },
  {
    title: 'The Newsroom',
    description:
      'A news aggregator web app that fetches and displays the latest headlines across categories. Stay up to date with real-time news from multiple sources.',
    tags: ['React', 'News API', 'Vite', 'CSS'],
    github: null,
    live: 'https://thenewsroom.vercel.app/',
    featured: true,
  },
];

function ProjectCard({ title, description, tags, github, live, featured, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group bg-white/5 border rounded-2xl p-6 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 flex flex-col ${
        featured ? 'border-violet-500/20' : 'border-white/10'
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
          Featured
        </span>
      )}

      <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
        <div className="w-2 h-2 rounded-full bg-violet-400" />
      </div>

      <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <FiGithub size={15} /> Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 text-sm transition-colors"
          >
            <FiExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            What I've Built
          </h2>
          <div className="w-12 h-1 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            A selection of projects I've worked on. More on my GitHub.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ArpitDhangar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 text-sm font-medium transition-all duration-200"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
