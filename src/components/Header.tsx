import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: 'Produtos',
      href: '#produtos',
      submenu: [
        { title: 'Fiança Digital', href: '#fianca-digital', icon: '🔐' },
        { title: 'Seguro Incêndio', href: '#seguro-incendio', icon: '🔥' },
        { title: 'Título de Capitalização', href: '#titulo-capitalizacao', icon: '💰' },
        { title: 'Seguro Fiança', href: '#seguro-fianca', icon: '🛡️' }
      ]
    },
    { title: 'Como Funciona', href: '#como-funciona' },
    { title: 'Benefícios', href: '#beneficios' },
    { title: 'Sobre', href: '#sobre' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-md border-b border-blue-800/50 shadow-lg"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-blue-100 hover:text-white transition-colors duration-300 font-medium flex items-center space-x-1 py-2"
                >
                  <span>{item.title}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
                    >
                      {item.submenu.map((subItem, index) => (
                        <motion.button
                          key={subItem.title}
                          onClick={() => handleNavClick(subItem.href)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-left"
                        >
                          <span className="text-xl">{subItem.icon}</span>
                          <span className="font-medium">{subItem.title}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5511942264710?text=Olá! Gostaria de simular uma garantia locatícia.', '_blank')}
              className="hidden md:flex bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Simular Agora
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => { navigate('/'); setIsMenuOpen(false); }}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
            >
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      {item.title}
                    </button>
                    {item.submenu && (
                      <div className="pl-8">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.title}
                            onClick={() => handleNavClick(subItem.href)}
                            className="w-full text-left flex items-center space-x-2 px-4 py-2 text-blue-200 hover:text-white transition-colors duration-200"
                          >
                            <span>{subItem.icon}</span>
                            <span>{subItem.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;