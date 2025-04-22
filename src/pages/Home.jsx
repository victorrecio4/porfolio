import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Desarrollador & Analista
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-12">
            Fusionando código y estrategia deportiva
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn btn-primary">
              Ver Proyectos
            </Link>
            <Link to="/handball-analysis" className="btn btn-secondary">
              Análisis de Balonmano
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Habilidades</h2>
            <p className="text-xl text-white/60">Tecnología y análisis deportivo</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', color: 'accent' },
              { name: 'JavaScript', color: 'accent2' },
              { name: 'Python', color: 'accent3' },
              { name: 'Análisis de Datos', color: 'accent' },
              { name: 'Tácticas de Balonmano', color: 'accent2' },
              { name: 'Estadísticas', color: 'accent3' },
              { name: 'UI/UX', color: 'accent' },
              { name: 'Desarrollo Web', color: 'accent2' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`card text-center p-6 border-${skill.color}/30`}
              >
                <span className={`text-${skill.color} text-2xl font-bold`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Sobre Mí
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Desarrollador apasionado por la tecnología y el análisis deportivo.
                Combinando habilidades técnicas con conocimiento táctico para crear
                soluciones innovadoras en el mundo del balonmano.
              </p>
              <Link to="/projects" className="btn btn-primary">
                Conoce mi trabajo
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden glass-effect">
                {/* Aquí iría tu imagen de perfil */}
                <div className="w-full h-full bg-gradient-to-br from-accent via-accent2 to-accent3 opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 