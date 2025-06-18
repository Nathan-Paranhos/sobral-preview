import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, PiggyBank, Shield as FileShield, CheckCircle, ArrowRight, Lock, Coins, ShieldCheck } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 'fianca-digital',
      icon: Lock,
      title: 'Fiança Digital',
      subtitle: 'Substitua o fiador tradicional com segurança e agilidade',
      description: 'Com a Fiança Digital, o locatário garante o imóvel sem precisar correr atrás de fiador. A contratação é 100% online, rápida, com análise automática e proteção jurídica para o proprietário.',
      features: [
        'Contratação 100% online',
        'Análise automática e rápida',
        'Proteção jurídica garantida',
        'Sem necessidade de fiador'
      ],
      idealFor: 'Quem quer alugar sem depender de terceiros',
      color: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-600',
      modernIcon: Lock
    },
    {
      id: 'seguro-incendio',
      icon: Flame,
      title: 'Seguro Incêndio',
      subtitle: 'Proteção obrigatória e essencial para imóveis alugados',
      description: 'Oferece cobertura completa contra incêndios, explosões, raios e fumaça. Protege tanto o patrimônio do proprietário quanto garante tranquilidade ao inquilino. Inclui assistência 24 horas e suporte especializado em sinistros.',
      features: [
        'Cobertura contra incêndio e explosão',
        'Proteção contra raios e fumaça',
        'Assistência 10h disponível',
        'Suporte especializado em sinistros'
      ],
      idealFor: 'Proteção obrigatória para contratos de locação',
      color: 'from-red-600 to-red-700',
      bgGradient: 'from-red-50 to-red-100',
      iconBg: 'bg-red-600',
      modernIcon: Flame
    },
    {
      id: 'titulo-capitalizacao',
      icon: Coins,
      title: 'Título de Capitalização',
      subtitle: 'Uma opção de garantia sem fiador, com devolução do valor',
      description: 'O inquilino deposita um valor acordado que fica "guardado" durante a locação e é devolvido ao final, caso não haja pendências. Uma alternativa econômica e sem análise de crédito rigorosa.',
      features: [
        'Sem análise de crédito rigorosa',
        'Contratação fácil e rápida',
        'Alternativa econômica',
        'Devolução garantida ao final'
      ],
      idealFor: 'Quem busca uma alternativa econômica sem análise de crédito',
      color: 'from-green-600 to-green-700',
      bgGradient: 'from-green-50 to-green-100',
      iconBg: 'bg-green-600',
      modernIcon: Coins
    },
    {
      id: 'seguro-fianca',
      icon: ShieldCheck,
      title: 'Seguro Fiança',
      subtitle: 'A solução mais completa para garantir o contrato de aluguel',
      description: 'O Seguro Fiança oferece a cobertura mais abrangente do mercado, protegendo contra inadimplência de aluguel, condomínio, IPTU e danos ao imóvel. Inclui assistência jurídica completa e processo simplificado de contratação.',
      features: [
        'Cobertura de aluguel e encargos',
        'Proteção contra danos ao imóvel',
        'Assistência jurídica incluída',
        'Processo simplificado de contratação'
      ],
      idealFor: 'A proteção mais completa para proprietários e inquilinos',
      color: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-600',
      modernIcon: ShieldCheck
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="produtos" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nossas Soluções
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos as melhores opções do mercado em garantias locatícias e seguros imobiliários
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              id={product.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative h-full"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 h-full flex flex-col">
                {/* Header com ícone moderno */}
                <div className={`bg-gradient-to-br ${product.bgGradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                  
                  {/* Ícone principal moderno */}
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-3xl ${product.iconBg} flex items-center justify-center shadow-xl relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <product.modernIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 relative z-10">
                    {product.title}
                  </h3>
                  <p className="text-lg font-medium text-slate-600 mb-4 relative z-10">
                    {product.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    {product.description}
                  </p>
                </div>
                
                {/* Conteúdo */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (featureIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Ideal para */}
                  <motion.div 
                    className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-medium text-slate-600 mb-1">Ideal para:</p>
                    <p className="text-sm text-slate-700">{product.idealFor}</p>
                  </motion.div>
                  
                  {/* Botão */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(`https://wa.me/5511942264710?text=Olá! Gostaria de contratar ${product.title}.`, '_blank')}
                    className={`w-full bg-gradient-to-r ${product.color} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <span>Solicitar Cotação</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Precisa de ajuda para escolher?
            </h3>
            <p className="text-blue-100 mb-8 text-lg relative z-10">
              Nossa equipe está pronta para encontrar a melhor solução para você
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5511942264710?text=Olá! Gostaria de ajuda para escolher o melhor produto.', '_blank')}
              className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
            >
              Falar com Especialista
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;