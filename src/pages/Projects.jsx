import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBook,
  FaVideo,
  FaTable,
  FaTwitter,
  FaImage,
  FaGithub,
} from 'react-icons/fa';

const analyses = [
  {
    title: 'E-Commerce Backend API',
    description:
      'API REST profesional desarrollada con FastAPI y SQLAlchemy 2.0, orientada a la gestión de usuarios, productos y pedidos. Implementa arquitectura modular por capas (routers, schemas, models, core), relaciones 1-N y N-N, versionado de API (/api/v1), dependency injection y documentación automática con Swagger/OpenAPI. Diseñada siguiendo buenas prácticas de backend moderno, con separación clara de responsabilidades y estructura preparada para escalar a PostgreSQL, autenticación JWT y despliegue en producción.',
    date: 'Febrero 2026',
    tags: [
      'Python',
      'FastAPI',
      'SQLAlchemy 2.0',
      'REST API',
      'SQLite',
      'Backend Architecture',
      'Dependency Injection',
      'OpenAPI'
    ],
    type: 'backend',
    content: '',
    github: 'https://github.com/victorrecio4/backend-porfolio-api',
  },
  {
    title: 'Handball Shot Video Generator',
    description:
      'Sistema backend para la generación automatizada de vídeos personalizados de lanzamientos de balonmano a partir de datos estadísticos. Procesa archivos CSV con información de partidos, consulta y valida datos en PostgreSQL, recorta clips de vídeo mediante FFmpeg, genera overlays dinámicos con métricas contextualizadas (jugador, zona, resultado, minuto) y concatena automáticamente los clips en un vídeo final optimizado por jugador. Incluye arquitectura modular en Python, manejo eficiente de archivos multimedia y automatización completa del pipeline de procesamiento.',
    date: 'Julio 2025 – Enero 2026',
    tags: [
      'Python',
      'FFmpeg',
      'Pandas',
      'PostgreSQL',
      'Video Processing',
      'Data Automation',
      'Backend Architecture',
      'ETL',
    ],
    type: 'video',
    content: 'https://www.youtube.com/embed/Rw6xepCguRo?si=OR9ELWULuwanSCGm',
    github: 'https://github.com/victorrecio4/handball-shot-video-generator',
  },
  {
    title: 'Dashboard de Estadísticas V2',
    description:
      'Mejora en la visualización de estadísticas de partidos, con nuevas funcionalidades y mejoras de rendimiento.',
    date: 'Julio 2025 - En desarrollo',
    tags: [
      'Python',
      'Flask',
      'HTML/CSS',
      'JavaScript',
      'PostgreSQL',
      'TailwindCSS',
    ],
    type: 'video',
    content: 'https://www.youtube.com/embed/RlzBP4W50QE?si=g6YqlOBUBztwLISg',
  },
  {
    title: 'Dashboard de Estadísticas V1',
    description:
      'Visualización de estadísticas de partidos y lanzamientos de jugadores con almacenamiento en base de datos.',
    date: 'Septiembre 2024 - Junio 2025',
    tags: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'PostgreSQL'],
    type: 'video',
    content: 'https://www.youtube.com/embed/Jawoh3f6WrE',
  },
  {
    title: 'TFG GRADO SUPERIOR DAW',
    description:
      'Aplicación móvil para registrar la ubicación de obras y facilitar su localización.',
    date: 'Septiembre 2023 - Enero 2024',
    tags: ['React', 'Python', 'Selenium', 'Flask'],
    type: 'foto',
    content:
      'https://lh3.googleusercontent.com/d/1Q0ndkvqPUeNnvTgDioYZ2pGKDDJs47J3',
  },
];

const HandballAnalysis = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [contentType, setContentType] = useState(null);

  const openModal = (content, type) => {
    setSelectedContent(content);
    setContentType(type);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedContent(null);
      setContentType(null);
    }
  };

  return (
    <section className="py-20 px-4">
      {/* Modal */}
      {selectedContent && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedContent}
              title="Contenido"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Últimos desarrollos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {analyses.map((analysis, index) => (
            <motion.div
              key={analysis.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-2">{analysis.title}</h3>
              <p className="text-white/80 mb-4">{analysis.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {analysis.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-sm text-white/60 mb-6">
                Realizado: {analysis.date}
              </div>

              {/* BOTONES */}
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(analysis.content, analysis.type)}
                  className="btn btn-primary px-6 flex items-center gap-2"
                >
                  {analysis.type === 'video' && <FaVideo />}
                  {analysis.type === 'foto' && <FaImage />}
                  {analysis.type === 'pdf' && <FaBook />}
                  {analysis.type === 'sheet' && <FaTable />}
                  Ver contenido
                </motion.button>

                {analysis.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={analysis.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary px-6 flex items-center gap-2"
                  >
                    <FaGithub />
                    Ver código
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandballAnalysis;
