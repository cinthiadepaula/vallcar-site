export default function Sobre() {
  return (
    <main className="bg-[#001f8a] text-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-200 font-semibold uppercase tracking-widest">
              Sobre nós
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-4">
              Há anos protegendo o que move você
            </h1>

            <p className="text-blue-100 mt-8 text-xl leading-relaxed">
              A VallCar Auto Vidros é referência em soluções para vidros
              automotivos, oferecendo qualidade, segurança e atendimento
              especializado em cada serviço realizado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-[#00145f] border border-blue-400/20 rounded-2xl p-8">
              <h3 className="text-blue-200 text-xl font-bold mb-4">
                Nossa Missão
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Oferecer soluções em vidros automotivos com excelência,
                garantindo segurança, qualidade e tranquilidade para nossos
                clientes.
              </p>
            </div>

            <div className="bg-[#00145f] border border-blue-400/20 rounded-2xl p-8">
              <h3 className="text-blue-200 text-xl font-bold mb-4">
                Nossa Visão
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Ser referência em atendimento e inovação no segmento de vidros
                automotivos em toda a região Sul do Brasil.
              </p>
            </div>

            <div className="bg-[#00145f] border border-blue-400/20 rounded-2xl p-8">
              <h3 className="text-blue-200 text-xl font-bold mb-4">
                Nossos Valores
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Transparência, comprometimento, qualidade, respeito ao cliente e
                busca constante pela excelência.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-[#00145f] rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-200">10</h3>
              <p className="mt-2 text-blue-100">Unidades</p>
            </div>

            <div className="bg-[#00145f] rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-200">100%</h3>
              <p className="mt-2 text-blue-100">Garantia nos Serviços</p>
            </div>

            <div className="bg-[#00145f] rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-200">+5 mil</h3>
              <p className="mt-2 text-blue-100">Clientes Atendidos</p>
            </div>

            <div className="bg-[#00145f] rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-200">⭐ 5.0</h3>
              <p className="mt-2 text-blue-100">Excelência no Atendimento</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
