import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

export const metadata = {
  title: "VallCar Auto Vidros",
  description:
    "Especialistas em vidros automotivos, para-brisas, reparos e substituições.",

  keywords: [
    "auto vidros",
    "para-brisa",
    "vidro automotivo",
    "vallcar",
    "troca de para-brisa",
  ],
};
