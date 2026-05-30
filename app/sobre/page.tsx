export default function Sobre() {
  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-500 font-semibold uppercase">
              Sobre nós
            </span>

            <h1 className="text-5xl font-bold mt-4">
              Cuidamos da segurança do seu veículo
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              A VallCar Auto Vidros é especializada em soluções para vidros
              automotivos, oferecendo atendimento ágil, produtos de qualidade e
              mão de obra especializada.
            </p>

            <p className="text-gray-300 mt-4 text-lg">
              Nosso compromisso é entregar confiança, segurança e excelência em
              cada serviço realizado.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-500">
              Nosso compromisso
            </h2>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✔ Atendimento especializado</li>
              <li>✔ Serviços com garantia</li>
              <li>✔ Qualidade na instalação</li>
              <li>✔ Segurança para você e sua família</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
