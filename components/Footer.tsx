import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h3 className="font-bold text-xl">VallCar Auto Vidros</h3>

        <p className="text-gray-400 mt-2">
          Segurança e qualidade para seu veículo.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.instagram.com/autovidrosvallcar/"
            target="_blank"
            className="bg-zinc-900 hover:bg-red-600 p-3 rounded-full transition"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://facebook.com/vallcar"
            target="_blank"
            className="bg-zinc-900 hover:bg-blue-600 p-3 rounded-full transition"
          >
            <FaFacebookF size={22} />
          </a>

          <a
            href="https://wa.me/5545999999999"
            target="_blank"
            className="bg-zinc-900 hover:bg-green-500 p-3 rounded-full transition"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        <p className="text-sm mt-6">© {new Date().getFullYear()} VallCar</p>
      </div>
    </footer>
  );
}
