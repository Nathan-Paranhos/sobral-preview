import type React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  ShieldIcon as FileShield,
  CheckCircle,
  ArrowRight,
  Lock,
  Coins,
  ShieldCheck,
} from "lucide-react";
import { LinkSimple } from "@phosphor-icons/react";

const Products: React.FC = () => {
  const mainProducts = [
    {
      id: "fianca-digital",
      icon: Lock,
      title: "Fiança Digital",
      subtitle: "Mais agilidade, menos burocracia. A locação do jeito que o mercado exige.",
      description:
        "A Fiança Digital veio para simplificar o processo de locação com tecnologia, rapidez e segurança. Esqueça o fiador tradicional: com análise automatizada, contratação 100% online e proteção jurídica para o proprietário, ela é a escolha mais eficiente para quem quer alugar sem travas.",
      features: [
        "Contratação totalmente digital",
        "Aprovação rápida, sem papelada",
        "Sem necessidade de fiador",
        "Proteção jurídica já incluída",
        "Mais autonomia para o inquilino e tranquilidade para o locador",
      ],
      idealFor:
        "Prática, moderna e segura. A Fiança Digital é o caminho mais rápido entre a visita e a assinatura do contrato.",
      color: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600",
      modernIcon: Lock,
    },
    {
      id: "seguro-digital",
      icon: FileShield,
      title: "Seguro Digital Sobral",
      subtitle: "A melhor escolha para alugar com liberdade, agilidade e segurança.",
      description:
        "Uma solução moderna, prática e sem burocracia para garantir seu contrato de aluguel, sem precisar de fiador. Perfeita para quem busca autonomia no processo e proteção jurídica completa para o imóvel.",
      features: ["100% digital", "Análise automática", "Sem fiador", "Economia real", "Segurança jurídica garantida"],
      idealFor: "Quem deseja alugar com rapidez e sem complicações",
      color: "from-indigo-600 to-indigo-700",
      bgGradient: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-600",
      modernIcon: FileShield,
    },
    {
      id: "seguro-incendio",
      icon: Flame,
      title: "Seguro Incêndio",
      subtitle: "Proteção obrigatória e essencial para imóveis alugados",
      description:
        "Oferece cobertura completa contra incêndios, explosões, raios e fumaça. Protege o patrimônio do proprietário e garante tranquilidade ao inquilino. Inclui assistência 10 horas e suporte especializado em sinistros.",
      features: [
        "Cobertura contra incêndio e explosão",
        "Proteção contra raios e fumaça",
        "Assistência 10h disponível",
        "Suporte especializado em sinistros",
      ],
      idealFor: "Proteção obrigatória para contratos de locação",
      color: "from-red-600 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      iconBg: "bg-red-600",
      modernIcon: Flame,
    },
    {
      id: "titulo-capitalizacao",
      icon: Coins,
      title: "Título de Capitalização",
      subtitle: "Uma opção de garantia sem fiador, com devolução do valor",
      description:
        'O inquilino deposita um valor acordado que fica "guardado" durante a locação e é devolvido ao final, caso não haja pendências. Uma alternativa econômica e sem análise de crédito rigorosa.',
      features: [
        "Sem análise de crédito rigorosa",
        "Contratação fácil e rápida",
        "Alternativa econômica",
        "Devolução garantida ao final",
      ],
      idealFor: "Quem busca uma alternativa econômica sem análise de crédito",
      color: "from-green-600 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
      modernIcon: Coins,
    },
  ];

  const centerProducts = [
    {
      id: "seguro-fianca",
      icon: ShieldCheck,
      title: "Seguro Fiança",
      subtitle: "Solução tradicional com cobertura ampliada.",
      description:
        "O Seguro Fiança segue sendo uma opção sólida para quem busca uma garantia mais abrangente. Cobre aluguel, encargos e possíveis danos ao imóvel, além de incluir suporte jurídico. Embora tenha um custo mensal e não preveja devolução de valores, ainda é uma alternativa válida em contratos mais conservadores.",
      features: [
        "Cobertura de aluguel, condomínio e IPTU",
        "Assistência jurídica disponível",
        "Sem necessidade de fiador",
      ],
      idealFor: "Mais tradicional, recomendado para contratos que exigem maior controle e previsibilidade.",
      color: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-600",
      modernIcon: ShieldCheck,
    },
    {
      id: "seguro-auto-moto",
      icon: LinkSimple,
      title: "Seguros e Soluções Sob Medida",
      subtitle: "Novos tempos. Novas soluções.",
      description:
        "Em breve, lançaremos uma nova linha de seguros e soluções financeiras, desenvolvida em parceria com marcas reconhecidas no mercado.",
      features: [
        "Coberturas inteligentes para diferentes tipos de bens",
        "Soluções personalizadas para proteger seu patrimônio com tranquilidade",
        "Atendimento exclusivo e ágil",
        "Benefícios diferenciados com parceiros estratégicos",
        "Uma experiência premium, digital e descomplicada",
      ],
      idealFor:
        "🔒 Tudo isso pensado para quem valoriza segurança, praticidade e confiança. Aguarde. O futuro da proteção está chegando.",
      color: "from-orange-600 to-orange-700",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-600",
      modernIcon: LinkSimple,
      comingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const ProductCard = ({ product, index }: { product: any; index: number }) => (
    <motion.div
      key={product.title}
      id={product.id}
      variants={cardVariants}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative h-full"
    >
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 h-full flex flex-col">
          {/* Header com ícone moderno */}
          <div className={`bg-gradient-to-br ${product.bgGradient} p-4 sm:p-6 md:p-8 text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>

            {/* Ícone principal moderno */}
            <motion.div
              className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-3xl ${product.iconBg} flex items-center justify-center shadow-xl relative z-10`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <product.modernIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </motion.div>

            <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 relative z-10">{product.title}</h3>
            <p className="text-base sm:text-base md:text-lg font-medium text-slate-600 mb-3 sm:mb-4 relative z-10">{product.subtitle}</p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed relative z-10 text-center">{product.description}</p>
        </div>

        {/* Conteúdo */}
        <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
          {/* Features */}
          <ul className="space-y-2 sm:space-y-3 flex-1 mb-4 sm:mb-5 md:mb-6">
            {product.features.map((feature: string, featureIndex: number) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + featureIndex * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Ideal para */}
          <motion.div
            className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-slate-600 mb-1">Ideal para:</p>
            <p className="text-sm text-slate-700">{product.idealFor}</p>
          </motion.div>

          {/* Botão */}
          {product.comingSoon ? (
            <motion.button
              disabled
              className={`w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 opacity-70 cursor-not-allowed`}
            >
              <span>Em Breve</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(`https://wa.me/5511942264710?text=Olá! Gostaria de contratar ${product.title}.`, "_blank")
              }
              className={`w-full bg-gradient-to-r ${product.color} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2`}
            >
              <span>Solicitar Cotação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          )}
        </div>
      </div>
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12"></div>
    </motion.div>
  )

  return (
    <section
      id="produtos"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden"
    >
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6"
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
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos as melhores opções do mercado em garantias locatícias e seguros imobiliários
          </motion.p>
        </motion.div>

        {/* Produtos Principais - Grid 4 colunas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
        >
          {mainProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Produtos Centrais - 2 cards no meio */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full">
            {centerProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 4} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-10">Precisa de ajuda para escolher?</h3>
            <p className="text-blue-100 mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg relative z-10">
              Nossa equipe está pronta para encontrar a melhor solução para você
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/5511942264710?text=Olá! Gostaria de ajuda para escolher o melhor produto.",
                  "_blank",
                )
              }
              className="bg-white text-blue-700 font-bold py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
            >
              Falar com Especialista
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
