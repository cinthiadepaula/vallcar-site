import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Diferenciais from "@/components/home/Diferenciais";
import Numbers from "@/components/home/Numbers";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Diferenciais />
      <Services />
      <Numbers />
      <CTA />
    </>
  );
}
