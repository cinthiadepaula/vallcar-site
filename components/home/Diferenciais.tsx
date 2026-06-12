const diferenciais = [
  {
    icon: "🛡️",
    title: "Garantia nos Serviços",
    description: "Mais segurança e tranquilidade em cada instalação realizada.",
  },
  {
    icon: "⚡",
    title: "Atendimento Rápido",
    description:
      "Agilidade para resolver o problema do seu veículo sem complicações.",
  },
  {
    icon: "💎",
    title: "Peças de Qualidade",
    description:
      "Materiais de procedência com excelente acabamento e durabilidade.",
  },
  {
    icon: "👨‍🔧",
    title: "Equipe Especializada",
    description:
      "Profissionais treinados para cuidar do seu auto vidro com excelência.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 bg-[#001677]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-200 font-semibold uppercase tracking-widest">
            Diferenciais
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Por que escolher a VallCar?
          </h2>

          <p className="text-blue-100 mt-6 max-w-3xl mx-auto text-lg">
            Trabalhamos com qualidade, segurança e compromisso para entregar a
            melhor experiência em vidros automotivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {diferenciais.map((item) => (
            <div
              key={item.title}
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
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-blue-200">{item.title}</h3>

              <p className="text-blue-100 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
