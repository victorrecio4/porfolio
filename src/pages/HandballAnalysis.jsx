import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Jugador de Balonmano',
    description: 'Más de 15 años de experiencia como jugador de balonmano, desarrollando un profundo conocimiento del juego desde dentro del terreno de juego.',
    period: '2010 - Presente',
    icon: '🏃',
    color: 'accent',
  },
  {
    title: 'Entrenador Nivel II',
    description: 'Formación oficial como entrenador de balonmano, especializado en la preparación táctica y técnica de equipos.',
    period: '2021 - Presente',
    icon: '📚',
    color: 'accent2',
  },
  {
    title: 'Analista de Video',
    description: 'Analista de video para la Selección Cadete Masculina de Castilla y León en el CESA 2025, proporcionando análisis tácticos y estadísticos detallados sobre el rival.',
    period: '2023 - Presente',
    icon: '🎥',
    color: 'accent3',
  },
];

const analyses = [
  {
    title: 'Análisis Seleccion de Andalucia Cadete',
    description: 'Estudio detallado del juego de la Seleccion de Andalucia Cadete en el CESA 2025',
    date: 'Enero 2025',
    tags: ['Táctica', 'Defensa', 'Análisis de Video'],
    pdf: '/analisis/INFORME SELECCION NAVARRA CADETE .pdf',
  },
  {
    title: 'Analisis propio CDBM Delicias',
    description: 'Analisis propio del Balonmano Delicias Juvenil 2025',
    date: 'Febrero 2025',
    tags: ['Estadísticas', 'Rendimiento', 'Análisis de Datos'],
    pdf: '/analisis/tendencias-juego.pdf',
  },
  {
    title: 'Análisis Ademar León Juvenil para Fase Final CYL 2025',
    description: 'Estudio detallador del juego y jugadores de Ademar León Juvenil para Fase Final CYL 2025',
    date: 'Abril 2025',
    tags: ['Táctica', 'Defensa', 'Análisis de Video'],
    pdf: '/analisis/analisis ademar.pdf',
  },
  {
    title: 'Estadísticas de Eficiencia CDBM Delicias',
    description: 'Analisis de la eficacion de lanzamiento del Balonmano Delicias Juvenil 2025',
    date: 'Proximamente',
    tags: ['Estadísticas', 'Rendimiento', 'Análisis de Datos'],
    pdf: '/analisis/tendencias-juego.pdf',
  },

];

const HandballAnalysis = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Experiencia en Balonmano
            </h1>
            <p className="text-2xl text-white/80">
              Jugador, Entrenador y Analista
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Mi Trayectoria
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
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 text-${exp.color}`}>
                  {exp.title}
                </h3>
                <p className="text-white/80 mb-4">{exp.description}</p>
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
            Análisis Recientes
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
                  Publicado: {analysis.date}
                </div>
                <div className="flex justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={analysis.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-8 text-center"
                  >
                    Ver Análisis
                  </motion.a>
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
            Metodología de Análisis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">
                Análisis de Video
              </h3>
              <p className="text-white/80">
                Uso de software especializado para el análisis detallado de jugadas y patrones de juego.
                Experiencia en la preparación de informes técnicos para equipos de alto rendimiento.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent2">
                Estadísticas
              </h3>
              <p className="text-white/80">
                Recopilación y análisis de datos para identificar tendencias y patrones de rendimiento.
                Desarrollo de métricas personalizadas para evaluar el rendimiento individual y colectivo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent3">
                Scouting
              </h3>
              <p className="text-white/80">
                Observación y análisis de equipos y jugadores para identificar fortalezas y debilidades.
                Preparación de informes detallados para la planificación estratégica de partidos.
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
                href="mailto:tu@email.com"
                className="btn btn-primary px-8"
              >
                Enviar Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/tu-perfil"
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