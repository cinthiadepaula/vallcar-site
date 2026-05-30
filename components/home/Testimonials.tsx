const testimonials = [
  {
    name: "Pablo Dias Colman",
    text: "Top, troquei o meu parabrisa aí e ficou excelente, acabamento perfeito, parabéns.",
  },
  {
    name: "Fernanda Souza",
    text: "Troquei meu para-brisa e ficou perfeito.",
  },
  {
    name: "Marcos Oliveira",
    text: "Equipe muito profissional e preço justo.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-black border border-zinc-800 p-8 rounded-2xl"
            >
              <p className="text-gray-300">"{item.text}"</p>

              <h3 className="text-red-500 font-bold mt-6">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
