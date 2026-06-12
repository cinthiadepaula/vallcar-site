"use client";

import { useState } from "react";

const lojas = [
  {
    name: "Cascavel",
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
    name: "Campo Mourão",
    address: "BR-272, 1374, Bela Vista Campo Mourão/PR",
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
    whatsapp: "5546999761353",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780174978250!5m2!1spt-BR!2sbr!6m8!1m7!1scpN81KSplXqm6KQ4YYm6iw!2m2!1d-26.07867113856226!2d-53.07077754925551!3f302.25186!4f0!5f0.7820865974627469",
  },
  {
    name: "Medianeira",
    address: "Av. 24 de Outubro, 1460 - Belo Horizonte, Medianeira/PR",
    whatsapp: "5545999384429",
    map: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1780175114551!5m2!1spt-BR!2sbr!6m8!1m7!1sA6JnJDbmgXgvbJ6oOurACA!2m2!1d-25.28551037923224!2d-54.09046430810133!3f329.47235!4f0!5f0.7820865974627469",
  },
  {
    name: "Toledo",
    address: "Av. Parigot de Souza, 231 - Campo Mourão/PR",
    whatsapp: "5545999932063",
    map: "https://www.google.com/maps/embed?pb=!4v1781307506495!6m8!1m7!1sutLJLJ2nooFZz1DarBMh8g!2m2!1d-24.72027832575909!2d-53.7171124509364!3f176.0210115541167!4f11.565759267574023!5f0.7820865974627469",
  },
  {
    name: "Umuarama",
    address: "Av. Brasil Zona VII, 2375 - Umuruama/PR",
    whatsapp: "554430562535",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2552958672095!2d-53.323074623908084!3d-23.773921669437154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d6bca82501ef%3A0x8068fa711689620a!2sAv.%20Brasil%2C%202375%20-%20Zona%20VII%2C%20Umuarama%20-%20PR%2C%2087503-420!5e0!3m2!1spt-BR!2sbr!4v1781307714548!5m2!1spt-BR!2sbr",
  },
  {
    name: "Guaira",
    address:
      "Cia Mate Laranjeira - Av. Alm. Tamandaré, 1377 - centro, Guaíra - PR, 85980-000",
    whatsapp: "5545991114842",
    map: "https://www.google.com/maps/embed?pb=!4v1781307973452!6m8!1m7!1so4G2FQ8F6sKvGXCguO0uVA!2m2!1d-24.08234482949281!2d-54.24409104134087!3f99.31156!4f0!5f0.7820865974627469",
  },
];

export default function Lojas() {
  const [activeMap, setActiveMap] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const lojasFiltradas = lojas.filter((loja) =>
    `${loja.name} ${loja.address}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="bg-[#001677] text-white min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-300 font-semibold uppercase">
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
            className="
w-full
mt-10
bg-[#000f4d]
border
border-blue-500/30
rounded-xl
px-5
py-4
text-white
outline-none
focus:border-blue-400
"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {lojasFiltradas.map((loja) => (
              <div
                key={loja.name}
                className="
bg-[#000f4d]
border
border-blue-500/20
rounded-2xl
p-6
backdrop-blur-sm
"
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
                    className="
border
border-blue-400
px-5
py-3
rounded-lg
hover:bg-blue-500
transition
"
                  >
                    Como chegar
                  </a>

                  <button
                    onClick={() =>
                      setActiveMap(activeMap === loja.name ? null : loja.name)
                    }
                    className="
border
border-blue-500/30
px-5
py-3
rounded-lg
hover:bg-blue-900/40
transition
"
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
