import React from 'react';
import { motion } from 'framer-motion';

const LGPD: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 max-w-4xl mx-auto mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">LGPD - Lei Geral de Proteção de Dados</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Finalidade</h2>
        <p className="mb-2">Dados são utilizados para contato, propostas de seguros e análises cadastrais.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Segurança</h2>
        <p className="mb-2">Adotamos medidas para proteger contra acessos não autorizados.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Acesso aos dados</li>
          <li>Correção de dados incompletos</li>
          <li>Solicitação de exclusão</li>
          <li>Revogação de consentimento</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <div className="flex flex-col space-y-2">
          <p className="text-gray-700">Email: <a href="mailto:atendimento@sobralcreditoseguros.com.br" className="text-blue-400 hover:underline break-all p-1">atendimento@sobralcreditoseguros.com.br</a></p>
          <p className="text-gray-700">Phone: +55 11 94226-4710</p>
        </div>
      </section>
    </motion.div>
  );
};

export default LGPD;
