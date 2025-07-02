import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Heart, Scale, Shield, MapPin, Clock, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Anos de Experiência', icon: Award },
    { number: '3000+', label: 'Clientes Atendidos', icon: Users },
    { number: '100%', label: 'Satisfação', icon: Target },
    { number: '10h', label: 'Suporte', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Humanidade',
      description: 'Tratamos cada cliente com o cuidado que só quem vive para servir sabe oferecer.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Scale,
      title: 'Ética',
      description: 'Transparência e honestidade em cada processo, sem surpresas ou pegadinhas.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Tradição',
      description: 'Experiência sólida construída ao longo de anos no mercado imobiliário e jurídico.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const founders = [
    {
      name: 'Adiel Sobral',
      role: 'Advogado',
      experience: '+17 anos de experiência',
      description: 'Especialista em direito civil, processo civil e imobiliário.',
      image: '/adiel.jpg'
    },
    {
      name: 'Talita Sobral',
      role: 'Administradora',
      experience: '+17 anos no setor imobiliário',
      description: 'Especialista em gestão e relacionamento com clientes.',
      image: '/talita.jpg'
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Quem <span className="text-accent-400">Somos</span>
          </h2>
        </motion.div>

        {/* História da Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <div className="text-center mb-12">
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
              A <strong className="text-accent-400">Sobral Soluções Financeiras</strong> é mais do que uma empresa de seguros, é um reflexo de valores enraizados em uma história de família.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
              Fundada por <strong className="text-white">Adiel e Talita Sobral</strong>, uniram tradição, ética e humanidade para oferecer algo que o mercado anda esquecendo: respeito genuíno pelo cliente.
            </p>
            
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
              <strong className="text-white">Adiel</strong>, advogado com mais de 17 anos de experiência, e <strong className="text-white">Talita</strong>, administradora com o mesmo tempo de atuação no setor imobiliário, formam não só o coração da empresa, mas também uma história de vida construída com propósito.
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
              Estão juntos desde 2003, desde os primeiros dias de faculdade, onde sonhavam em constituir uma família e seguir o propósito de servir com verdade e integridade.
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
              Esse sonho virou missão.
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed px-2 sm:px-4">
              E essa missão virou a <strong className="text-accent-400">Sobral</strong>.
            </p>

            <motion.div 
              className="bg-gradient-to-r from-accent-500/20 to-accent-400/20 rounded-xl p-4 sm:p-6 md:p-8 border border-accent-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
                Aqui, você não é número, contrato ou protocolo.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-accent-200">
                Você é tratado com o cuidado que só quem vive pra servir sabe oferecer.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Fundadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Nossos Fundadores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <img src={founder.image} alt={founder.name} className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full object-cover border-4 border-accent-400 shadow-lg" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{founder.name}</h4>
                <p className="text-accent-400 font-semibold mb-2">{founder.role}</p>
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">{founder.experience}</p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-6 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400 mx-auto mb-2 sm:mb-4" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nossos Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-6 lg:px-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <motion.div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">{value.title}</h4>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nossa Missão e Localização */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center">
              Nossa Missão
            </h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center">
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed px-1 sm:px-2 md:px-4">
                Especialistas em garantias locatícias e seguros imobiliários.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed px-1 sm:px-2 md:px-4 mb-4 sm:mb-6 md:mb-8">
                Soluções digitais com a segurança que você precisa.
              </p>
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5511942264710?text=Olá! Gostaria de conhecer mais sobre a Sobral.', '_blank')}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Fale Conosco
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm sm:text-base font-medium">Endereço</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">R. Dante Belodi, 123 - Jardim Ermida II</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">Jundiaí - SP, 13212-200</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm sm:text-base font-medium">Telefone</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">+55 11 94226-4710</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm sm:text-base font-medium">E-mail</p>
                  <div className="w-full">
                    <p className="text-white/80 text-xs sm:text-sm md:text-base inline-block whitespace-normal break-normal"
                       style={{ wordBreak: 'break-all' }}>
                      atendimento@sobralcreditoseguro.com.br
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm sm:text-base font-medium">Horário de Funcionamento</p>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;