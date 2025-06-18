import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.img
          src="/logo.jpg"
          alt="Logo Sobral"
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center font-sans ml-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="text-white font-bold text-3xl md:text-4xl leading-tight">SOBRAL</span>
        <span className="text-white italic text-xl md:text-2xl pl-[14px]">SOLUÇÕES</span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;