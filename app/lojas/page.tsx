"use client";

import { useState } from "react";

const lojas = [
  {
    name: "Pacaembu",
    address: "Olindo Periodo, 1038/1050 - Cascavel/PR",
    whatsapp: "554530354455",
    map: "https://www.google.com/maps/embed?pb=!4v1780173523529!6m8!1m7!1s4eLu3zY5mKB5q8OckPKmCQ!2m2!1d-24.9571436377854!2d-53.42255418563852!3f58.547913!4f0!5f0.7820865974627469",
  },
  {
    name: "Guarapuava",
    address: "Rua Sergipe, Marginal da BR, 277 - Industrial - Guarapuava/PR",
    whatsapp: "554236296038",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.181627470102!2d-51.4799132!3d-25.3652286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef365aa70f5f67%3A0xf34c0fc4ae45e29a!2sVallcar%20Auto%20Vidros!5e0!3m2!1spt-BR!2sbr!4v1780173971253!5m2!1spt-BR!2sbr",
  },

  {
    name: "Pato Branco",
    address: "Av. Tupi, 458 - Borlot, Pato Branco/PR",
    whatsapp: "554632232924",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780174117614!5m2!1spt-BR!2sbr!6m8!1m7!1sGxGgjWucVtuNKCBkGXcMVg!2m2!1d-26.21007379065075!2d-52.67688381798245!3f214.72685!4f0!5f0.7820865974627469",
  },

  {
    name: "Bela Vista",
    address: "BR-272, 1374, Bela Vista Capo Mourão/PR",
    whatsapp: "554438157815",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780174278837!5m2!1spt-BR!2sbr!6m8!1m7!1sV5jQCSb8VvwPS-31QZwnYQ!2m2!1d-24.03688320246218!2d-52.38591114731465!3f291.3582512811439!4f5.7908449547734335!5f0.7820865974627469",
  },
  {
    name: "Foz do Iguaçu",
    address: "Av Carlos Gomes, 1115 - Monjolo, Foz do Iguaçu/PR",
    whatsapp: "5545999930756",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780174841691!5m2!1spt-BR!2sbr!6m8!1m7!1sj1DzWq52KPSDT3r5oolUOQ!2m2!1d-25.51351680305421!2d-54.58415749101925!3f4.8305902!4f0!5f0.7820865974627469",
  },
  {
    name: "Francisco Beltrão",
    address: "Av Duque de Caxias, 230 - Marrecas - Francisco Beltrão/PR",
    whatsapp: "5545999930756",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780174978250!5m2!1spt-BR!2sbr!6m8!1m7!1scpN81KSplXqm6KQ4YYm6iw!2m2!1d-26.07867113856226!2d-53.07077754925551!3f302.25186!4f0!5f0.7820865974627469",
  },
  {
    name: "Belo Horizonte",
    address: "Av. 24 de Outubro, 1460 - Belo Horizonte, Medianeira/PR",
    whatsapp: "5545999384429",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780175114551!5m2!1spt-BR!2sbr!6m8!1m7!1sA6JnJDbmgXgvbJ6oOurACA!2m2!1d-25.28551037923224!2d-54.09046430810133!3f329.47235!4f0!5f0.7820865974627469",
  },
];

export default function Lojas() {
  const [activeMap, setActiveMap] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const lojasFiltradas = lojas.filter((loja) =>
    `${loja.name} ${loja.address}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-500 font-semibold uppercase">
            Nossas lojas
          </span>

          <h1 className="text-5xl font-bold mt-4">
            Encontre a VallCar mais próxima
          </h1>

          <p className="text-gray-400 mt-4">
            Temos 10 unidades para atender você.
          </p>

          <input
            type="text"
            placeholder="Buscar por unidade, bairro ou cidade..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full mt-10 bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-600"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {lojasFiltradas.map((loja) => (
              <div
                key={loja.name}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold text-red-500">{loja.name}</h2>

                <p className="text-gray-300 mt-3">{loja.address}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={`https://wa.me/${loja.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 px-5 py-3 rounded-lg font-semibold"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loja.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-red-500 px-5 py-3 rounded-lg"
                  >
                    Como chegar
                  </a>

                  <button
                    onClick={() =>
                      setActiveMap(activeMap === loja.name ? null : loja.name)
                    }
                    className="border border-zinc-600 px-5 py-3 rounded-lg"
                  >
                    {activeMap === loja.name ? "Fechar mapa" : "Ver mapa"}
                  </button>
                </div>

                {activeMap === loja.name && (
                  <iframe
                    src={loja.map}
                    className="w-full h-72 border-0 mt-6 rounded-xl"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>

          {lojasFiltradas.length === 0 && (
            <p className="text-gray-400 mt-8">Nenhuma unidade encontrada.</p>
          )}
        </div>
      </section>
    </main>
  );
}
