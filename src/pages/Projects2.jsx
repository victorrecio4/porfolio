import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaVideo } from 'react-icons/fa';

const projects = [
  {
    title: 'Dashboard de Estadísticas V1',
    description:
      'Visualización de estadisticas de partidos y lanzamientos de jugadores. Con almacenamiento de datos en base de datos',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'PostgreSQL'],
    image: '/project3.jpg',
  },
  {
    title: 'Dashboard de Estadísticas V2',
    description:
      'Mejora en la visualización de estadísticas de partidos, con nuevas funcionalidades y mejoras de rendimiento. Mejora en extracción de clips, mejoras visuales y rendimiento.',
    technologies: [
      'Python',
      'Flask',
      'HTML/CSS',
      'JavaScript',
      'PostgreSQL',
      'TailwindCSS',
    ],
    type: 'video',
    content: 'https://www.youtube.com/embed/Jawoh3f6WrE',
  },
  {
    title: 'TFG GRADO SUPERIOR DAW',
    description:
      'Aplicación móvil para coger ubicación de las diferentes obras para mejor localización',
    technologies: ['React', 'Python', 'Selenium', 'Flask'],
    image: '/project1.jpg',
  },
];

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (url) => setSelectedVideo(url);
  const closeVideo = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedVideo(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      {/* Modal de Video */}
      {selectedVideo && (
        <div
          onClick={closeVideo}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl h-[70vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Video del proyecto"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      )}

      {/* Encabezado */}
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

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="card bg-primary/10 p-4 rounded-lg shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4 relative">
              {project.type === 'video' ? (
                <>
                  {/* <img
                    src="/video-placeholder.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  /> */}
                  <button
                    onClick={() => openVideo(project.content)}
                    className="absolute inset-0 flex items-center justify-center text-white bg-black/50 hover:bg-black/70 rounded-lg transition"
                  >
                    <FaVideo className="text-4xl" />
                  </button>
                </>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
