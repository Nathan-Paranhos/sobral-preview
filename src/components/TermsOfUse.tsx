import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-4xl mx-auto mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Aceitação dos Termos</h2>
        <p className="text-gray-700 mb-2">O acesso e uso do site da Sobral Soluções Financeiras implicam na aceitação integral destes Termos de Uso.</p>
        <p className="text-gray-700 mb-2">O uso do site deve ser feito com boa-fé, não sendo permitido qualquer tipo de ação que comprometa sua segurança, integridade ou funcionamento.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Propriedade Intelectual</h2>
        <p className="text-gray-700 mb-2">Todos os conteúdos, marcas e informações disponíveis são de propriedade exclusiva da Sobral Soluções Financeiras e protegidos por direitos autorais.</p>
        <p className="text-gray-700 mb-2">É proibido copiar, reproduzir ou distribuir qualquer conteúdo sem autorização.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Alterações</h2>
        <p className="text-gray-700 mb-2">Podemos alterar estes termos a qualquer momento, sendo recomendada a visita periódica a esta seção.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-700">Email: <a href="mailto:atendimento@sobralcreditoseguros.com.br" className="text-blue-400 hover:underline break-all p-1">atendimento@sobralcreditoseguros.com.br</a></p>
        <p className="text-gray-700">Phone: +55 11 94226-4710</p>
      </section>
    </motion.div>
  );
};

export default TermsOfUse;
