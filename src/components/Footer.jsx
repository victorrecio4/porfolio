import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="glass-effect py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Contacto</h3>
            <p className="text-white/60">
              ¿Interesado en trabajar juntos?<br />
              No dudes en contactarme
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, color: '#00f5d4' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, color: '#ff206e' }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent2 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, color: '#fbff12' }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent3 transition-colors"
            >
              <FaTwitter size={24} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-white/40 text-sm"
        >
          <p>&copy; 2024 VR. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 