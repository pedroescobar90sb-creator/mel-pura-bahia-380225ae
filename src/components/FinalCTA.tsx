import produtoGarrafa from "@/assets/produto-garrafa.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FadeIn } from "./shared/FadeIn";
import { BadgePill } from "./shared/BadgePill";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";

const trustTags = ["100% Natural", "Sem mistura", "Produção familiar"];

export function FinalCTA() {
  return (
    <SectionWrapper variant="dark">
      {/* Glow */}
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
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Mel puro, de verdade,{" "}
            <span className="text-gradient-honey">entregue na sua porta</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:max-w-none">
            Direto de Riachão do Jacuípe para Salvador e RMS.
            100% natural, sem mistura, produção familiar. Peça agora e prove a diferença.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {trustTags.map((tag) => (
              <BadgePill key={tag} tone="outline">
                {tag}
              </BadgePill>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <WhatsAppCTA size="lg" icon={<span aria-hidden>🍯</span>}>
              Pedir meu mel agora
            </WhatsAppCTA>
          </div>
          <p className="mt-4 text-sm text-white/40">
            Atendimento rápido e direto pelo WhatsApp
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
