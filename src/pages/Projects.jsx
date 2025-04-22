import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sistema de Análisis de Balonmano',
    description: 'Aplicación web para el análisis táctico y estadístico de partidos de balonmano.',
    technologies: ['React', 'Python', 'MongoDB'],
    image: '/project1.jpg',
  },
  {
    title: 'Plataforma de Gestión Deportiva',
    description: 'Sistema integral para la gestión de equipos y torneos de balonmano.',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    image: '/project2.jpg',
  },
  {
    title: 'Dashboard de Estadísticas',
    description: 'Visualización interactiva de estadísticas y métricas de rendimiento.',
    technologies: ['D3.js', 'React', 'Python'],
    image: '/project3.jpg',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Proyectos Destacados</h1>
        <p className="text-xl text-gray-300">
          Algunos de mis trabajos más relevantes en desarrollo tecnológico
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button className="btn btn-primary w-full">Ver Detalles</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 