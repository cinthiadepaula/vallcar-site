"use client";

import { useState } from "react";

const lojas = [
  {
    name: "Unidade Centro",
    address: "Rua Exemplo, 123",
    whatsapp: "5545999999999",
    map: "https://www.google.com/maps?q=Rua%20Exemplo%20123&output=embed",
  },
  {
    name: "Unidade Norte",
    address: "Av. Exemplo, 456",
    whatsapp: "5545988888888",
    map: "https://www.google.com/maps?q=Av.%20Exemplo%20456&output=embed",
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
