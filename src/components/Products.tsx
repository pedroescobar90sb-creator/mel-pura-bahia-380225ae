import produtoGarrafa from "@/assets/produto-garrafa.png";
import produtoKit from "@/assets/produto-kit.jpg";
import produtoPersonalizados from "@/assets/produto-personalizados.jpg";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";
import { PremiumCard } from "./shared/PremiumCard";
import { ProductImageFrame } from "./shared/ProductImageFrame";
import { BadgePill } from "./shared/BadgePill";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Fit = "contain" | "cover-top" | "cover-center";

interface Product {
  image: string;
  alt: string;
  name: string;
  desc: string;
  highlight: string;
  cta: string;
  fit: Fit;
  height: string;
  whatsappMessage: string;
}

const products: Product[] = [
  {
    image: produtoGarrafa,
    alt: "Garrafa de Mel Duas Abelhas 500 ml",
    name: "Mel Duas Abelhas 500 ml",
    desc: "Uma garrafa de mel puro 100% natural, de abelha italiana, direto de Riachão do Jacuípe.",
    highlight: "Mais vendido",
    cta: "Comprar pelo WhatsApp",
    fit: "contain",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Quero comprar 1 garrafa de Mel Duas Abelhas 500 ml. Pode me passar o valor e a entrega em Salvador/RMS?",
  },
  {
    image: produtoKit,
    alt: "Kit econômico com 3 garrafas de Mel Duas Abelhas",
    name: "Kit Econômico — 3 unidades",
    desc: "Três garrafas de 500 ml com condição especial. Ideal para quem já conhece e quer garantir o estoque.",
    highlight: "Melhor custo-benefício",
    cta: "Consultar valor especial",
    fit: "cover-center",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Quero saber o valor do Kit Econômico com 3 garrafas de Mel Duas Abelhas e a entrega em Salvador/RMS.",
  },
  {
    image: produtoPersonalizados,
    alt: "Mel Duas Abelhas — Personalizados com sabor e carinho",
    name: "Pedido personalizado",
    desc: "Atacado, eventos, lembrancinhas e cestas de presente. Fale conosco e montamos sua proposta sob medida.",
    highlight: "Sob consulta",
    cta: "Falar sobre pedido especial",
    fit: "cover-top",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Tenho interesse em pedidos personalizados de Mel Duas Abelhas (atacado, eventos, lembrancinhas). Pode me ajudar?",
  },
];

export function Products() {
  return (
    <SectionWrapper id="produtos" variant="cream">
      <SectionHeader
        eyebrow="Nossos Produtos"
        title="Escolha o seu"
        highlight="mel puro"
        description="Mel 100% natural de abelha italiana. Direto do produtor para Salvador e RMS."
      />

      <div className="grid gap-7 md:grid-cols-3 md:gap-8">
        {products.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.12} className="h-full">
            <PremiumCard accentTop className="flex h-full flex-col">
              <ProductImageFrame
                src={p.image}
                alt={p.alt}
                fit={p.fit}
                height={p.height}
                badge={<BadgePill tone="dark">{p.highlight}</BadgePill>}
              />

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-bold leading-tight text-foreground md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <WhatsAppCTA
                  href={buildWhatsAppUrl(p.whatsappMessage)}
                  variant="dark"
                  size="md"
                  className="mt-6 w-full"
                >
                  {p.cta}
                </WhatsAppCTA>
              </div>
            </PremiumCard>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
