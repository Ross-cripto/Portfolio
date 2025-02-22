import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-dark.svg';
import { useTranslation } from '../../context/LanguajeContext';

const Navbar = () => {
  const { language, setLanguage } = useTranslation();
  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="mx-2 w-12 h-12"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          className="transition-colors duration-200 hover:text-blue-800" 
          href="https://www.linkedin.com/in/rosniel-allesta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          className="transition-colors duration-200 hover:text-gray-100" 
          href="https://github.com/Ross-cripto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-full  hover:text-white-600 transition-colors duration-200"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isEnglish ? 'en' : 'es'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-base font-medium"
            >
              {isEnglish ? 'EN' : 'ES'}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </nav>
    
  );
};

export default Navbar;