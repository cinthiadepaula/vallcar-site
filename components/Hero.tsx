"use client";

import { useEffect, useState } from "react";

const images = ["/hero1.png", "/hero2.png"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Backgrounds */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000
            ${index === currentImage ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradiente azul */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#001677]/80
        via-transparent
        to-transparent
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="text-blue-200 font-semibold uppercase tracking-[4px]">
            VallCar Auto Vidros
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-6 leading-tight">
            Segurança e qualidade
            <br />
            para seu veículo
          </h1>

          <p className="text-xl text-blue-100 mt-8 leading-relaxed max-w-2xl">
            Especialistas em troca de para-brisas, vidros laterais, vidros
            traseiros e reparos automotivos com garantia.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/5545999930737"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-600
                hover:bg-green-500
                px-8
                py-4
                rounded-xl
                font-bold
                text-white
                transition
                shadow-lg
                shadow-green-500/30
              "
            >
              Solicitar orçamento
            </a>

            <a
              href="/servicos"
              className="
                border
                border-white
                px-8
                py-4
                rounded-xl
                font-bold
                text-white
                hover:bg-white
                hover:text-[#001677]
                transition
              "
            >
              Nossos serviços
            </a>
          </div>

          {/* Indicadores */}
          <div className="flex gap-3 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`
                  h-3 w-3 rounded-full transition
                  ${currentImage === index ? "bg-white" : "bg-white/40"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-[#001677]
        to-transparent
        "
      />
    </section>
  );
}
