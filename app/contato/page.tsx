"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const whatsapp = "5545999930737";

    const texto = `
Olá, vim pelo site da VallCar.

Nome: ${form.nome}
Telefone: ${form.telefone}
Serviço: ${form.servico}
Mensagem: ${form.mensagem}
`;

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-red-500 font-semibold uppercase">
              Contato
            </span>

            <h1 className="text-5xl font-bold mt-4">Solicite seu orçamento</h1>

            <p className="text-gray-300 mt-6 text-lg">
              Preencha o formulário e fale com a equipe da VallCar pelo
              WhatsApp.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>📞 Atendimento rápido pelo WhatsApp</p>
              <p>📍 10 unidades para melhor atender você</p>
              <p>⏰ Segunda a sexta, 08h às 18h</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/autovidrosvallcar/"
                target="_blank"
                className="bg-zinc-950 border border-zinc-800 hover:border-red-600 p-4 rounded-full transition"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/Vallcar"
                target="_blank"
                className="bg-zinc-950 border border-zinc-800 hover:border-blue-600 p-4 rounded-full transition"
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://wa.me/5511968297720"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-800 hover:border-green-500 p-4 rounded-full transition"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 space-y-5"
          >
            <input
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-600"
            />

            <input
              name="telefone"
              type="text"
              placeholder="Telefone/WhatsApp"
              value={form.telefone}
              onChange={handleChange}
              required
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-600"
            />

            <select
              name="servico"
              value={form.servico}
              onChange={handleChange}
              required
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-600"
            >
              <option value="">Selecione o serviço</option>
              <option value="Troca de para-brisa">Troca de para-brisa</option>
              <option value="Vidro lateral">Vidro lateral</option>
              <option value="Vidro traseiro">Vidro traseiro</option>
              <option value="Reparo em vidro">Reparo em vidro</option>
              <option value="Outro serviço">Outro serviço</option>
            </select>

            <textarea
              name="mensagem"
              placeholder="Descreva o que você precisa"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 rounded-lg py-4 font-bold text-white transition"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
