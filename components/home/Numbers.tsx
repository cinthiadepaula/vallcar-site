export default function Numbers() {
  return (
    <section className="py-24 bg-[#000f4d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-200 uppercase tracking-widest font-semibold">
            Nossa história em números
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Resultados que demonstram nossa experiência
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="
            bg-[#00145f]
            border
            border-blue-400/20
            rounded-2xl
            p-8
            text-center
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <h3 className="text-5xl font-bold text-blue-200">10+</h3>

            <p className="mt-4 text-blue-100">Anos de experiência</p>
          </div>

          <div
            className="
            bg-[#00145f]
            border
            border-blue-400/20
            rounded-2xl
            p-8
            text-center
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <h3 className="text-5xl font-bold text-blue-200">5.000+</h3>

            <p className="mt-4 text-blue-100">Clientes atendidos</p>
          </div>

          <div
            className="
            bg-[#00145f]
            border
            border-blue-400/20
            rounded-2xl
            p-8
            text-center
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <h3 className="text-5xl font-bold text-blue-200">100%</h3>

            <p className="mt-4 text-blue-100">Garantia nos serviços</p>
          </div>

          <div
            className="
            bg-[#00145f]
            border
            border-blue-400/20
            rounded-2xl
            p-8
            text-center
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <h3 className="text-5xl font-bold text-blue-200">10</h3>

            <p className="mt-4 text-blue-100">Unidades</p>
          </div>
        </div>
      </div>
    </section>
  );
}
