import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-4xl mx-auto mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Coleta de Dados</h2>
        <p className="text-gray-700 mb-2">A Sobral Soluções Financeiras LTDA coleta informações como nome, e-mail e telefone para atendimento e serviços relacionados a seguros e garantias locatícias.</p>
        <p className="text-gray-700 mb-2">Seus dados são tratados com segurança e confidencialidade, e nunca são vendidos a terceiros.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
        <p className="text-gray-700 mb-2">Você pode solicitar a visualização, correção ou exclusão de seus dados a qualquer momento.</p>
        <p className="text-gray-700">Email: <a href="mailto:atendimento@sobralcreditoseguros.com.br" className="text-blue-400 hover:underline break-all p-1">atendimento@sobralcreditoseguros.com.br</a></p>
        <p className="text-gray-700">Phone: +55 11 94226-4710</p>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
