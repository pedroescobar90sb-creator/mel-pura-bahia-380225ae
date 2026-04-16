import { Truck, CreditCard, MapPin, Flame } from "lucide-react";
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
  highlightTone: "honey" | "dark" | "gold";
  cta: string;
  fit: Fit;
  height: string;
  whatsappMessage: string;
  featured?: boolean;
  ribbon?: string;
  saving?: string;
}

const products: Product[] = [
  {
    image: produtoGarrafa,
    alt: "Garrafa de Mel Duas Abelhas 500 ml",
    name: "Mel 500 ml",
    desc: "Garrafa individual para começar a sentir a diferença do mel puro de verdade na sua casa.",
    highlight: "Para experimentar",
    highlightTone: "honey",
    cta: "Quero experimentar",
    fit: "cover-center",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Quero pedir 1 garrafa de Mel Duas Abelhas 500 ml com entrega em Salvador/RMS. Pode me passar o valor?",
  },
  {
    image: produtoKit,
    alt: "Kit econômico com 3 garrafas de Mel Duas Abelhas",
    name: "Kit Econômico — 3 unidades",
    desc: "Três garrafas de 500 ml com condição especial. O preferido de quem já é cliente e não quer ficar sem.",
    highlight: "Mais pedido",
    highlightTone: "gold",
    cta: "Quero o kit econômico",
    fit: "cover-center",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Quero o Kit Econômico com 3 garrafas de Mel Duas Abelhas. Pode me passar o valor com desconto e a entrega em Salvador/RMS?",
    featured: true,
    ribbon: "MAIS PEDIDO",
    saving: "Economize 15%",
  },
  {
    image: produtoPersonalizados,
    alt: "Mel Duas Abelhas — Personalizados com sabor e carinho",
    name: "Pedido personalizado",
    desc: "Atacado, eventos, lembrancinhas e cestas de presente. Montamos sua proposta sob medida.",
    highlight: "Sob consulta",
    highlightTone: "dark",
    cta: "Falar sobre pedido especial",
    fit: "cover-top",
    height: "h-80 md:h-96",
    whatsappMessage:
      "Oi! Tenho interesse em pedidos personalizados de Mel Duas Abelhas (atacado, eventos, lembrancinhas). Pode me ajudar?",
  },
];

const trustStrip = [
  { icon: Truck, text: "Entrega em 24h em Salvador" },
  { icon: CreditCard, text: "Pagamento na entrega ou PIX" },
  { icon: MapPin, text: "Frete combinado por bairro" },
];

export function Products() {
  return (
    <SectionWrapper id="produtos" variant="cream">
      <SectionHeader
        eyebrow="Escolha o seu"
        title="Mel puro"
        highlight="entregue hoje"
        description="Direto do produtor para Salvador e Região Metropolitana. Atendimento rápido pelo WhatsApp."
      />

      <div className="grid gap-7 md:grid-cols-3 md:items-stretch md:gap-8">
        {products.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.12} className="h-full">
            <PremiumCard
              accentTop
              className={`flex h-full flex-col ${
                p.featured
                  ? "ring-2 ring-honey shadow-[0_30px_70px_-20px_rgba(190,140,40,0.45)] md:scale-[1.03]"
                  : ""
              }`}
            >
              {/* Ribbon for featured product */}
              {p.ribbon && (
                <div className="absolute left-0 right-0 top-0 z-30 flex justify-center">
                  <span className="-mt-px inline-flex items-center gap-1.5 rounded-b-xl bg-gradient-to-r from-honey-dark via-honey to-honey-gold px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-warm-brown-deep shadow-honey">
                    <Flame className="h-3.5 w-3.5" />
                    {p.ribbon}
                  </span>
                </div>
              )}

              <ProductImageFrame
                src={p.image}
                alt={p.alt}
                fit={p.fit}
                height={p.height}
                badge={
                  <div className="flex flex-col items-end gap-1.5">
                    <BadgePill tone={p.highlightTone}>{p.highlight}</BadgePill>
                    {p.saving && (
                      <BadgePill tone="gold" className="text-[10px]">
                        {p.saving}
                      </BadgePill>
                    )}
                  </div>
                }
              />

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-bold leading-tight text-foreground md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-honey/20 bg-honey/8 px-3 py-1 text-[11px] font-semibold text-warm-brown">
                  <Truck className="h-3 w-3" />
                  Entrega em 24h em Salvador
                </div>

                <WhatsAppCTA
                  href={buildWhatsAppUrl(p.whatsappMessage)}
                  variant={p.featured ? "primary" : "dark"}
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

      {/* Trust strip below products */}
      <FadeIn delay={0.3} className="mt-10">
        <div className="grid gap-3 rounded-2xl border border-honey/15 bg-card/80 p-5 sm:grid-cols-3 sm:gap-4 sm:p-6">
          {trustStrip.map((t) => (
            <div key={t.text} className="flex items-center justify-center gap-2.5 text-center sm:justify-start sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey/15">
                <t.icon className="h-4 w-4 text-honey-dark" />
              </span>
              <span className="text-sm font-semibold text-warm-brown">{t.text}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
