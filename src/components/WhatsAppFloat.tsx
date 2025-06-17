import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511942264710?text=Olá! Gostaria de mais informações sobre os seguros da Sobral.', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulso animado */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </motion.button>
  );
};

export default WhatsAppFloat;