import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBook, FaVideo, FaTable, FaTwitter, FaImage } from 'react-icons/fa';

const experiences = [
  {
    title: 'Desarrollador Backend',
    description: 'Desarrollo de nuevos desarrollos y solucion de diferentes problemas en la parte backend de la aplicación, con PHP. Y mejoras y tratamiento con la base de datos MySQL.',
    period: 'Febrero 2025 - Agosto 2025',
    empresa: ' MADISON Experience Marketing, Valladolid',
    color: 'accent',
  },
  {
    title: 'Desarrollador Backend',
    description: 'Desarrollo de cero de aplicaciones moviles en la parte backend, con Python y Flask. Implementación de automatizacion de procesos para poder obtener datos de un crm para almacenarlos en una base de datos y poder visualizarlos en una aplicación movil.',
    period: 'Marzo 2023- Febrero 2024',
    empresa: '1A Digital, Valladolid',
    color: 'accent2',
  },
  {
    title: 'Técnico informatico',
    description: 'Analista de video para la Selección Cadete Masculina de Castilla y León en el CESA 2025, proporcionando análisis tácticos y estadísticos detallados sobre el rival.',
    period: '2023 - Presente',
    empresa: 'BBS Technology, Italia ',
    color: 'accent3',
  },
];

const analyses = [
  {
    title: 'Dashboard de Estadísticas V2',
    description:
      'Mejora en la visualización de estadísticas de partidos, con nuevas funcionalidades y mejoras de rendimiento. Mejora en extracción de clips, mejoras visuales y rendimiento.',
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
    content: 'https://www.youtube.com/watch?v=RlzBP4W50QE',
  },
  {
    title: 'Dashboard de Estadísticas V1',
    description:
      'Visualización de estadisticas de partidos y lanzamientos de jugadores. Con almacenamiento de datos en base de datos',
    date: 'Septiembre 2024 - Junio 2025',
    tags: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'PostgreSQL'],
    type: 'video',
    content: 'https://www.youtube.com/embed/Jawoh3f6WrE',
  },
  {
    title: 'TFG GRADO SUPERIOR DAW',
    description:
      'Aplicación móvil para coger ubicación de las diferentes obras para mejor localización',
    date: 'Septiembre 2023 - Enero 2024',
    tags: ['React', 'Python', 'Selenium', 'Flask'],
    type: 'foto',
    content : 'https://lh3.googleusercontent.com/d/1Q0ndkvqPUeNnvTgDioYZ2pGKDDJs47J3', // URL de la imagen
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
    <div className="min-h-screen pt-20">
      {/* Content Modal */}
      {selectedContent && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl h-[70vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              {contentType === 'video' ? (
                <iframe
                  src={selectedContent}
                  title="Video Analysis"
                  className="w-full h-full focus:outline-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : contentType === 'pdf' ? (
                <iframe
                  src={`${selectedContent}#view=FitH`}
                  title="PDF Analysis"
                  className="w-full h-full focus:outline-none"
                ></iframe>
              ) : contentType === 'sheet' ? (
                <iframe
                  src={selectedContent.replace('/edit?usp=sharing', '/preview')}
                  title="Sheet Analysis"
                  className="w-full h-full focus:outline-none"
                ></iframe>
                ) : contentType === 'foto' ? (
                  <iframe
                    src={selectedContent}
                    title="Image Preview"
                    className="w-full h-full focus:outline-none"
                  ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white p-4">
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="flex items-center justify-center w-full h-full">
                      <iframe
                        src={`https://platform.twitter.com/embed/Tweet.html?id=${selectedContent.split('/').pop()}&conversation=all`}
                        title="Twitter Thread"
                        className="focus:outline-none"
                        style={{ 
                          border: 'none', 
                          width: '100%',
                          height: '100%',
                          minWidth: '300px',
                          minHeight: '500px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Experiencia como Desarrollador </h1>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/3">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-full overflow-hidden border-4 border-accent/20"
                >
                  <img
                    src="https://lh3.googleusercontent.com/d/1zeRK4Pf0s9IbAfla5y0JcVlZLTDIjUax"
                    alt="Foto de perfil"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Sobre Mí
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Soy desarrollador backend con un año y medio de experiencia, apasionado por crear aplicaciones y
                servicios que sean eficientes, escalables y fáciles de mantener. Me gusta combinar buenas prácticas
                de programación con tecnologías modernas para transformar ideas complejas en soluciones funcionales.
                Siempre estoy aprendiendo y explorando nuevas herramientas para mejorar mi trabajo y aportar valor a los proyectos en los que participo.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full">
                  PYTHON/FLASK
                </span>
                <span className="bg-accent2/20 text-accent2 px-4 py-2 rounded-full">
                  GIT/BITBUCKET
                </span>
                <span className="bg-accent3/20 text-accent3 px-4 py-2 rounded-full">
                  MYSQL/POSTGRESQL 
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Experiencia Laboral
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`card border-${exp.color}/30`}
              >
                <h3 className={`text-2xl font-bold mb-2 text-${exp.color}`}>
                  {exp.title}
                </h3>
                <p className="text-white/100 mb-4">{exp.description}</p>
                <p className="text-white/80 mb-4">{exp.empresa}</p>
                <span className="text-sm text-white/60">{exp.period}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Ultimos desarrollos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(analysis.content, analysis.type)}
                    className="btn btn-primary px-8 text-center focus:outline-none focus:ring-0 flex items-center gap-2"
                  >
                    {analysis.type === 'video' ? (
                      <>
                        <FaVideo className="text-lg" />
                        Ver Video
                      </>
                    ) : analysis.type === 'pdf' ? (
                      <>
                        <FaBook className="text-lg" />
                        Ver PDF
                      </>
                    ) : analysis.type === 'sheet' ? (
                      <>
                        <FaTable className="text-lg" />
                        Ver Hoja
                      </>
                    ) : analysis.type === 'foto' ? (
                      <>
                        <FaImage className="text-lg" />
                        Ver Imagen
                      </>
                    ) : (
                      <>
                        <FaTwitter className="text-lg" />
                        Ver Tweet
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Formacion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">
                Curso nanotraining en Big Data y Machine Learning
              </h3>
              <p className="text-white/80">
                Formación especializada en el análisis de datos, incluyendo técnicas de machine learning y big data.<br />
                <b>Escuela de Empresa</b><br />
                <b>Fecha:</b> Febrero 2025 - Agosto 2025
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent2">
                Master en Big Data Deportivo
              </h3>
              <p className="text-white/80">
                Formación especializada en el análisis de datos, incluyendo técnicas de machine learning y big data.<br />
                <b>Sport Data Campus</b><br />
                <b>Fecha:</b> Octubre 2024 - Agosto 2025
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent3">
                Grado Superior Desarrollo de Aplicaciones Web
              </h3>
              <p className="text-white/80">
                Formación en todo lo que tiene que ver con la creacion, mantenimiento y desarrollo de apliaciones web<br />
                <b>IES Galileo, Valladolid</b><br />
                <b>Fecha:</b> Septiembre 2021 - Enero 2045
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Contacto
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl text-white/80 mb-8">
              ¿Interesado en mis servicios de análisis o colaboración? No dudes en contactarme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:vrecio1@gmail.com"
                className="btn btn-primary px-8"
              >
                Enviar Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/victomrecio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-8"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HandballAnalysis; 