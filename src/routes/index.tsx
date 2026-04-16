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
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mel Duas Abelhas — Mel Puro com Entrega em 24h em Salvador" },
      {
        name: "description",
        content:
          "Mel puro 100% natural, direto do produtor em Riachão do Jacuípe. Entrega em 24h em Salvador e RMS. Peça agora pelo WhatsApp.",
      },
      { property: "og:title", content: "Mel Duas Abelhas — Mel Puro com Entrega em 24h em Salvador" },
      {
        property: "og:description",
        content:
          "Mel puro direto do produtor em Riachão do Jacuípe – BA. Entrega em 24h em Salvador e Região Metropolitana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "mel puro Salvador, mel natural Salvador, entrega de mel Salvador, mel direto do produtor, mel 100% natural, mel da Bahia, mel Riachão do Jacuípe, mel duas abelhas",
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
        {/* 1. Hero — proposta + entrega 24h + CTA primário */}
        <Hero />
        {/* 2. Selos rápidos */}
        <TrustBar />
        {/* 3. Produtos — oferta visível cedo, kit em destaque */}
        <Products />
        {/* 4. Benefícios — reforça desejo pós-oferta */}
        <Benefits />
        {/* 5. Origem + Sobre fundidos — confiança sem cortar venda */}
        <Origin />
        {/* 6. Galeria — prova visual */}
        <Gallery />
        {/* 7. Depoimentos — prova social neutralizada + CTA */}
        <Testimonials />
        {/* 8. Como comprar — remove fricção */}
        <HowToBuy />
        {/* 9. Quebra-objeção próximo do fechamento */}
        <Objection />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. CTA final — urgência entrega hoje */}
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
