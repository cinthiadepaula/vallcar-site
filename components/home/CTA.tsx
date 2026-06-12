export default function CTA() {
  return (
    <section className="py-24 bg-[#000f4d]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="
          bg-gradient-to-r
          from-[#001677]
          to-[#0030cc]
          rounded-3xl
          p-12
          text-center
          shadow-2xl
          "
        >
          <span className="text-blue-200 uppercase tracking-widest font-semibold">
            Atendimento Rápido
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Precisa trocar o vidro do seu veículo?
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Nossa equipe está pronta para atender você com rapidez, qualidade e
            garantia.
          </p>

          <a
            href="https://wa.me/5545999930737"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            mt-8
            bg-green-600
            hover:bg-green-500
            text-white
            px-8
            py-4
            rounded-xl
            font-bold
            transition
            shadow-lg
            shadow-green-500/30
            "
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
