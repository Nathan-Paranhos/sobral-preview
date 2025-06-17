  import React from 'react';
  import { motion } from 'framer-motion';
  import { Clock, UserCheck, Headphones, Building, Shield } from 'lucide-react';

  const Benefits: React.FC = () => {
    const benefits = [
      {
        icon: Clock,
        title: 'Sem Burocracia',
        description: 'Processo simplificado e descomplicado para aprovação rápida.',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        icon: UserCheck,
        title: 'Sem Fiador',
        description: 'Não precisa mais de fiador para alugar seu imóvel com segurança.',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50'
      },
      {
        icon: Headphones,
        title: 'Atendimento Ágil',
        description: 'Suporte humano e personalizado para todas as suas dúvidas.',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        icon: Building,
        title: 'Melhores Seguradoras',
        description: 'Parcerias com MAPFRE, PORTO SEGURO e TOKIO MARINE.',
        color: 'from-indigo-500 to-indigo-600',
        bgColor: 'bg-indigo-50'
      },
      {
        icon: Shield,
        title: 'Segurança Garantida',
        description: 'Proteção jurídica completa e respaldo das melhores seguradoras.',
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50'
      }
    ];

    return (
      <section id="beneficios" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:32px_32px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Nossos Diferenciais
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Por que escolher a Sobral Soluções para suas garantias locatícias e seguros imobiliários
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logos das Seguradoras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-12">
              Parceiros de Confiança
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src="/porto.jpg" 
                  alt="Porto Seguro" 
                    className="h-28 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src="/mapfre.jpg" 
                  alt="Mapfre" 
                   className="h-28 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src="/tokio.jpg" 
                  alt="Tokio Marine" 
                  className="h-28 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default Benefits;