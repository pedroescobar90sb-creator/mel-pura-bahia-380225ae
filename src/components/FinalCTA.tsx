import { Truck, Leaf, MapPin } from "lucide-react";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FadeIn } from "./shared/FadeIn";
import { BadgePill } from "./shared/BadgePill";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const trustTags = [
  { label: "Entrega em 24h", icon: <Truck className="h-3.5 w-3.5" /> },
  { label: "100% Natural", icon: <Leaf className="h-3.5 w-3.5" /> },
  { label: "Salvador e RMS", icon: <MapPin className="h-3.5 w-3.5" /> },
];

const finalMessage =
  "Oi! Quero receber o Mel Duas Abelhas hoje em Salvador/RMS. Pode confirmar valores, entrega e disponibilidade?";

export function FinalCTA() {
  return (
    <SectionWrapper variant="dark">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-honey/5 blur-[120px]" />

      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <FadeIn className="hidden flex-shrink-0 lg:block" direction="none" duration={0.7}>
          <img
            src={produtoGarrafa}
            alt="Mel Duas Abelhas"
            className="h-[360px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </FadeIn>

        <FadeIn className="flex-1 text-center lg:text-left" duration={0.7}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-honey/40 bg-honey/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-honey-gold">
            <Truck className="h-3.5 w-3.5" />
            Pedidos até 14h saem hoje
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Receba seu mel{" "}
            <span className="text-gradient-honey">hoje mesmo</span>{" "}
            em Salvador
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg lg:max-w-none">
            Direto de Riachão do Jacuípe. 100% natural, sem mistura, atendimento direto pelo WhatsApp.
            Sem aplicativo, sem cadastro, sem complicação.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {trustTags.map((tag) => (
              <BadgePill key={tag.label} tone="outline" icon={tag.icon}>
                {tag.label}
              </BadgePill>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <WhatsAppCTA
              size="lg"
              href={buildWhatsAppUrl(finalMessage)}
              icon={<span aria-hidden>🍯</span>}
            >
              Receber meu mel hoje
            </WhatsAppCTA>
          </div>
          <p className="mt-4 text-sm text-white/45">
            Pagamento na entrega ou PIX · Frete combinado por bairro
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
