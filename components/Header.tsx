"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre nós" },
    { href: "/servicos", label: "Serviços" },
    { href: "/lojas", label: "Nossas lojas" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50
     bg-[#001677]/95
      backdrop-blur-md
      border-b
     border-blue-400/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="hover:scale-105 transition duration-300">
          <Image
            src="/logo-vallcar.png"
            alt="VallCar Auto Vidros"
            width={170}
            height={60}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-white font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
              hover:text-blue-400
              transition
              duration-300
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
          md:hidden
          text-white
          hover:text-blue-400
          transition
          "
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav
          className="
          md:hidden
          bg-[#020617]
          border-t
          border-blue-900/30
          px-6
          py-6
          flex
          flex-col
          gap-5
          text-white
          font-semibold
          "
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
              hover:text-blue-400
              transition
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
