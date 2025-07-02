import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Mail, Phone, MapPin, Clock,
  Instagram, Facebook
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Fiança Digital', href: '#fianca-digital' },
    { name: 'Seguro Incêndio', href: '#seguro-incendio' },
    { name: 'Título de Capitalização', href: '#titulo-capitalizacao' },
    { name: 'Seguro Fiança', href: '#seguro-fianca' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Sobre Nós', href: '#sobre' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+55 11 94226-4710',
      href: 'tel:+5511942264710'
    },
    {
      icon: Mail,
      text: 'atendimento@sobralcreditoseguro.com.br',
      href: 'mailto:atendimento@sobralcreditoseguro.com.br'
    },
    {
      icon: MapPin,
      text: 'R. Dante Belodi, 123 - Jardim Ermida II, Jundiaí - SP, 13212-200',
      href: 'https://maps.google.com/?q=R.+Dante+Belodi,+123+-+Jardim+Ermida+II,+Jundiaí+-+SP,+13212-200'
    },
    {
      icon: Clock,
      text: 'Seg-Sex: 8h-18h',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sobral.solucoes?igsh=Nm01ZGgwdDVpczM2',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1Dvoq4Qv3g/?mibextid=wwXIfr',
      label: 'Facebook'
    }
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', path: '/politica-privacidade' },
    { name: 'Termos de Uso', path: '/termos-uso' },
    { name: 'LGPD - Lei Geral de Proteção de Dados', path: '/lgpd' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    }
  };

  const handleLegalClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo + Social + Botão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Logo />
            <p className="text-blue-100 mt-6 mb-8 leading-relaxed text-lg">
              Especialistas em garantias locatícias e seguros imobiliários.
              Soluções digitais com a segurança que você precisa.
            </p>

            <div className="flex space-x-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.button
                  key={label}
                  onClick={() => handleNavClick(href)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5511942264710', '_blank')}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full transition-colors duration-300 shadow-lg flex items-center space-x-2"
              aria-label="Fale Conosco via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Fale Conosco</span>
            </motion.button>
          </motion.div>

          {/* Produtos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-200">Produtos</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 lg:pr-8"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-200">Contato</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mt-1">
                    <Icon className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="flex-1">
                    <button
                      onClick={() => handleNavClick(href)}
                      className="text-blue-100 hover:text-white transition-colors duration-300 text-left text-xs sm:text-sm break-words"
                    >
                      {text}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Rodapé Legal */}
        <div className="border-t border-blue-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0 text-center md:text-left">
              <p>
                © 2025 Sobral Crédito Seguro Ltda. – CNPJ: 24.963.609/0001-24 | Registrada na SUSEP sob o nº 212121383 | Responsável técnica: Ana Beatriz Morelli – SUSEP nº 211111101.
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
              {legalLinks.map(({ name, path }) => (
                <button
                  key={name}
                  onClick={() => handleLegalClick(path)}
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <section className="text-sm text-blue-200 mt-8 text-center md:text-left space-y-2">
            <p>
              Atuação conforme normas da Superintendência de Seguros Privados —{' '}
              <a
                href="https://www.susep.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                www.susep.gov.br
              </a>
            </p>
            <p>
              Atuamos com seguradoras autorizadas pela SUSEP, garantindo segurança e transparência em todos os processos de contratação.
            </p>
            <p>
              Para mais informações, consulte a SUSEP ou fale conosco.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
