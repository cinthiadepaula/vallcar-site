const services = [
  {
    title: "Troca de Para-brisa",
    description: "Substituição com garantia e qualidade.",
  },
  {
    title: "Vidros Laterais",
    description: "Instalação rápida e segura.",
  },
  {
    title: "Vidro Traseiro",
    description: "Reposição para diversos modelos.",
  },
  {
    title: "Reparos",
    description: "Correção de danos em vidros automotivos.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-black border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>

              <p className="text-gray-400 mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
