const services = [
  "Troca de para-brisa",
  "Vidros laterais",
  "Vidro traseiro",
  "Reparo em vidros",
  "Retrovisores",
  "Palhetas automotivas",
];

export default function Servicos() {
  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-500 font-semibold uppercase">Serviços</span>

          <h1 className="text-5xl font-bold mt-4">
            Soluções completas em auto vidros
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-600 transition"
              >
                <h2 className="text-2xl font-bold">{service}</h2>

                <p className="text-gray-400 mt-4">
                  Atendimento profissional com qualidade, segurança e garantia.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
