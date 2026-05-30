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
    <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-vallcar.png"
            alt="VallCar Auto Vidros"
            width={170}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-white font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black border-t border-zinc-800 px-6 py-6 flex flex-col gap-5 text-white font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
