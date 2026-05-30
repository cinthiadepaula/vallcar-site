const diferenciais = [
  {
    title: "Garantia nos serviços",
    description: "Mais segurança e confiança em cada instalação realizada.",
  },
  {
    title: "Atendimento rápido",
    description: "Agilidade para resolver o problema do seu veículo.",
  },
  {
    title: "Peças de qualidade",
    description: "Trabalhamos com materiais de procedência e bom acabamento.",
  },
  {
    title: "Equipe especializada",
    description: "Profissionais preparados para cuidar do seu auto vidro.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-red-500 font-semibold uppercase">
          Diferenciais
        </span>

        <h2 className="text-4xl font-bold mt-3">Por que escolher a VallCar?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-red-600 transition"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="text-gray-400 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
