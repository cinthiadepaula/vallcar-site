const services = [
  {
    title: "Troca de Para-brisa",
    description:
      "Substituição com qualidade, segurança e garantia para seu veículo.",
    icon: "🚘",
  },
  {
    title: "Vidros Laterais",
    description:
      "Instalação rápida e acabamento profissional para todas as marcas.",
    icon: "🔧",
  },
  {
    title: "Vidro Traseiro",
    description:
      "Reposição com peças de qualidade e mão de obra especializada.",
    icon: "🛠️",
  },
  {
    title: "Reparo em Vidros",
    description:
      "Correção de pequenas trincas e impactos evitando trocas desnecessárias.",
    icon: "✨",
  },
  {
    title: "Retrovisores",
    description:
      "Substituição e manutenção de retrovisores com total segurança.",
    icon: "🚗",
  },
  {
    title: "Palhetas Automotivas",
    description:
      "Melhor visibilidade em dias de chuva e mais segurança ao dirigir.",
    icon: "🌧️",
  },
];

export default function Servicos() {
  return (
    <main className="bg-[#001f8a] text-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-200 font-semibold uppercase tracking-widest">
              Serviços
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-4">
              Soluções completas em Auto Vidros
            </h1>

            <p className="text-blue-100 mt-6 text-xl">
              Atendimento especializado, materiais de qualidade e garantia em
              todos os serviços realizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="
                bg-[#00145f]
                border
                border-blue-400/20
                rounded-2xl
                p-8
                hover:-translate-y-2
                hover:border-blue-300
                transition-all
                duration-300
                "
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h2 className="text-2xl font-bold text-blue-200">
                  {service.title}
                </h2>

                <p className="text-blue-100 mt-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
            mt-20
            bg-[#00145f]
            border
            border-blue-400/20
            rounded-3xl
            p-10
            text-center
            "
          >
            <h2 className="text-4xl font-bold">Precisa de um orçamento?</h2>

            <p className="text-blue-100 mt-4 text-lg">
              Nossa equipe está pronta para atender você com rapidez e
              qualidade.
            </p>

            <a
              href="/contato"
              className="
              inline-block
              mt-8
              bg-green-600
              hover:bg-green-500
              px-8
              py-4
              rounded-xl
              font-bold
              transition
              "
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
