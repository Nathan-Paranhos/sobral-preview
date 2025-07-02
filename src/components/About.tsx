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
    <section id="sobre" className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem <span className="text-accent-400">Somos</span>
          </h2>
        </motion.div>

        {/* História da Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A <strong className="text-accent-400">Sobral Soluções Financeiras</strong> é mais do que uma empresa de seguros, é um reflexo de valores enraizados em uma história de família. Fundada por <strong className="text-white">Adiel e Talita Sobral</strong>, uniram tradição, ética e humanidade para oferecer algo que o mercado anda esquecendo: respeito genuíno pelo cliente.
            </p>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              <strong className="text-white">Adiel</strong>, advogado com mais de 17 anos de experiência, e <strong className="text-white">Talita</strong>, administradora com o mesmo tempo de atuação no setor imobiliário, formam não só o coração da empresa, mas também uma história de vida construída com propósito. Estão juntos desde 2003, desde os primeiros dias de faculdade, onde sonhavam em constituir uma família e seguir o propósito de servir com verdade e integridade.
            </p>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Esse sonho virou missão. E essa missão virou a <strong className="text-accent-400">Sobral</strong>.
            </p>

            <motion.div 
              className="bg-gradient-to-r from-accent-500/20 to-accent-400/20 rounded-xl p-8 border border-accent-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold text-white mb-4">
                Aqui, você não é número, contrato ou protocolo.
              </p>
              <p className="text-xl text-accent-200">
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Nossos Fundadores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <img src={founder.image} alt={founder.name} className="w-40 h-40 mx-auto mb-6 rounded-full object-cover border-4 border-accent-400 shadow-lg" />
                <h4 className="text-xl font-bold text-white mb-2">{founder.name}</h4>
                <p className="text-accent-400 font-semibold mb-2">{founder.role}</p>
                <p className="text-white/80 text-sm mb-4">{founder.experience}</p>
                <p className="text-white/70 leading-relaxed">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nossa Missão e Localização */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Nossa Missão
            </h3>
            <p className="text-lg text-white/80 text-center leading-relaxed mb-8">
              Facilitar o acesso a garantias locatícias e seguros imobiliários através de tecnologia 
              avançada e atendimento humanizado, proporcionando segurança e tranquilidade para 
              inquilinos e proprietários com o cuidado de uma família.
            </p>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5511942264710?text=Olá! Gostaria de conhecer mais sobre a Sobral.', '_blank')}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Fale Conosco
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Endereço</p>
                  <p className="text-white/80">R. Dante Belodi, 123 - Jardim Ermida II</p>
                  <p className="text-white/80">Jundiaí - SP, 13212-200</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Telefone</p>
                  <p className="text-white/80">+55 11 94226-4710</p>
                </div>
              </div>
              <div className="flex items-center space-x-3" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <Mail className="w-6 h-6 text-accent-400 flex-shrink-0" />
  <div style={{ flex: '1 1 auto', minWidth: '0' }}>
    <p className="text-white font-medium">E-mail</p>
    <p 
      className="text-white/80 email-text" 
      style={{ 
        wordBreak: 'break-all', 
        overflowWrap: 'break-word', 
        whiteSpace: 'normal', 
        maxWidth: '100%', 
        display: 'block' 
      }}
    >
      atendimento@sobralcreditoseguro.com.br
    </p>
  </div>
</div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Horário de Funcionamento</p>
                  <p className="text-white/80">Segunda a Sexta: 8h às 18h</p>
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