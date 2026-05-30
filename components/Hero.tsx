"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      min-h-[90vh]
      flex
      items-center
      bg-gradient-to-br
      from-black
      via-zinc-950
      to-black
      "
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red-500 font-semibold uppercase">
            Especialistas em Vidros Automotivos
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-4">
            <span className="text-red-500">Segurança</span> e
            <br />
            qualidade para seu
            <br />
            veículo
          </h1>

          <p className="text-gray-300 text-xl mt-6">
            Troca de para-brisas, vidros laterais, traseiros e reparos
            automotivos.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="
              bg-red-600
              hover:bg-red-700
              px-8
              py-4
              rounded-lg
              font-semibold
              shadow-lg
              shadow-red-500/30
              transition
              "
            >
              Solicitar orçamento
            </button>

            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
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
            alt="Carro"
            className="
            w-full
            drop-shadow-[0_0_40px_rgba(255,0,0,0.4)]
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
