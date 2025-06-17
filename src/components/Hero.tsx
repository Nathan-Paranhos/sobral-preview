import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511942264710?text=Olá! Gostaria de simular uma garantia locatícia.', '_blank');
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>

      {/* Visio Logo */}
      <img src="/visio.png" alt="Visio Logo" className="w-64 h-64 mx-auto" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A garantia que{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                protege você
              </motion.span>{' '}
              e seu imóvel
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contrate fiança digital, seguro incêndio, título de capitalização ou seguro fiança com as{' '}
              <strong className="text-blue-200">melhores seguradoras do Brasil</strong>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Simule Agora pelo WhatsApp</span>
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-semibold py-5 px-10 rounded-full backdrop-blur-sm transition-all duration-300 text-lg"
            >
              Saiba Mais
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Shield, title: "100% Seguro", desc: "Respaldo jurídico das melhores seguradoras" },
              { icon: Zap, title: "Aprovação Rápida", desc: "Análise automática em minutos" },
              { icon: MessageCircle, title: "Sem Burocracia", desc: "Contratação 100% digital" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-white font-bold mb-3 text-xl">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;