"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-[90vh]
      flex
      items-center
      overflow-hidden
      bg-gradient-to-br
from-[#001677]
via-[#001a85]
to-[#000f4d]
      "
    >
      {/* Glow Azul Superior */}
      <div
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-blue-600/20
        blur-[180px]
        rounded-full
        "
      />

      {/* Glow Azul Inferior */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-[150px]
        rounded-full
        "
      />

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Especialistas em Vidros Automotivos
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-4 text-white">
            <span className="text-blue-500">Segurança</span> e
            <br />
            qualidade para seu
            <br />
            veículo
          </h1>

          <p className="text-gray-300 text-xl mt-6">
            Troca de para-brisas, vidros laterais, traseiros e reparos
            automotivos com qualidade, rapidez e garantia.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-lg
              font-semibold
              shadow-lg
              shadow-blue-500/30
              transition
              "
            >
              Solicitar orçamento
            </button>

            <button
              className="
              border
              border-blue-500
              text-blue-400
              px-8
              py-4
              rounded-lg
              hover:bg-blue-500
              hover:text-white
              transition
              "
            >
              Nossos serviços
            </button>
          </div>
        </motion.div>

        {/* Carro */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <motion.img
            src="/carro.png"
            alt="Carro VallCar"
            className="
            w-full
            drop-shadow-[0_0_70px_rgba(0,87,217,0.55)]
            "
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
