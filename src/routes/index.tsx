import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Benefits } from "@/components/Benefits";
import { Objection } from "@/components/Objection";
import { Origin } from "@/components/Origin";
import { Products } from "@/components/Products";
import { HowToBuy } from "@/components/HowToBuy";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mel Duas Abelhas — Mel Puro 100% Natural em Salvador" },
      {
        name: "description",
        content:
          "Mel puro 100% natural de abelha italiana, direto do produtor em Riachão do Jacuípe. Entregas em Salvador e RMS. Sem mistura, produção familiar.",
      },
      { property: "og:title", content: "Mel Duas Abelhas — Mel Puro 100% Natural em Salvador" },
      {
        property: "og:description",
        content:
          "Mel puro direto do produtor em Riachão do Jacuípe – BA. 100% natural, sem mistura. Entregas em Salvador e Região Metropolitana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "mel puro Salvador, mel natural Salvador, mel direto do produtor Salvador, mel 100% natural Salvador, mel da Bahia, mel Riachão do Jacuípe, mel duas abelhas",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Objection />
        <Origin />
        <Products />
        <HowToBuy />
        <Gallery />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
