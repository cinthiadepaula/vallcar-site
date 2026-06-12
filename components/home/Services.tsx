const services = [
  {
    icon: "🚘",
    title: "Troca de Para-brisa",
    description:
      "Substituição com qualidade, segurança e garantia para seu veículo.",
  },
  {
    icon: "🔧",
    title: "Vidros Laterais",
    description:
      "Instalação rápida e acabamento profissional para todas as marcas.",
  },
  {
    icon: "🛠️",
    title: "Vidro Traseiro",
    description:
      "Reposição com peças de qualidade e mão de obra especializada.",
  },
  {
    icon: "✨",
    title: "Reparos",
    description: "Correção de pequenos danos evitando trocas desnecessárias.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#001677]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-200 uppercase tracking-widest font-semibold">
            Serviços
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Soluções completas para seu veículo
          </h2>

          <p className="text-blue-100 mt-6 max-w-3xl mx-auto text-lg">
            Trabalhamos com equipamentos modernos, materiais de qualidade e
            profissionais especializados para garantir o melhor resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
              bg-[#00145f]
              border
              border-blue-400/20
              rounded-2xl
              p-8
              text-center
              hover:-translate-y-2
              hover:border-blue-300
              transition-all
              duration-300
              "
            >
              <div className="text-5xl mb-5">{service.icon}</div>

              <h3 className="text-xl font-bold text-blue-200">
                {service.title}
              </h3>

              <p className="text-blue-100 mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/servicos"
            className="
            inline-flex
            items-center
            gap-2
            bg-blue-500
            hover:bg-blue-400
            px-8
            py-4
            rounded-xl
            font-bold
            transition
            shadow-lg
            shadow-blue-500/20
            "
          >
            Ver todos os serviços →
          </a>
        </div>
      </div>
    </section>
  );
}
