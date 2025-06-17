import React from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Send,
      title: 'Envie seus dados',
      description: 'Via formulário ou WhatsApp de forma rápida e segura',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Receba sua proposta',
      description: 'Retorno em minutos com opções personalizadas',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Contrate online',
      description: '100% digital, com respaldo das melhores seguradoras',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Como <span className="text-primary-600">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Processo simples e descomplicado em apenas 3 passos
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                    className="hidden md:flex justify-center"
                  >
                    <ArrowRight className="w-8 h-8 text-primary-600 animate-pulse" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de iniciar o processo de contratação.', '_blank')}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-lg"
            >
              Começar Agora
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;