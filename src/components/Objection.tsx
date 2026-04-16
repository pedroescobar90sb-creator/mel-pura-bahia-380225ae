import artePureza from "@/assets/arte-pureza.png";
import { CheckCircle, MessageCircle } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FadeIn } from "./shared/FadeIn";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const points = [
  "Mel puro, sem adição de açúcar ou xarope",
  "Sem processamento industrial",
  "Direto do apiário para a sua mesa",
  "Transparência total na procedência",
];

const doubtMessage =
  "Oi! Tenho algumas dúvidas sobre o Mel Duas Abelhas (qualidade, entrega, valores). Pode me ajudar?";

export function Objection() {
  return (
    <SectionWrapper variant="dark">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <FadeIn direction="right" className="flex-1">
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-honey/5 blur-3xl" />
            <img
              src={artePureza}
              alt="Você sabe se o mel que consome é puro?"
              className="relative mx-auto max-h-[500px] w-auto rounded-2xl object-contain"
            />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15} className="flex-1 text-center lg:text-left">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em] text-honey-gold">
            A verdade sobre o mel
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Muito "mel" por aí é misturado.{" "}
            <span className="text-gradient-honey">Aqui é diferente.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
            A maioria dos méis industrializados contém xarope de milho, glucose ou açúcar invertido.
            Você merece saber exatamente o que está consumindo — e exatamente de onde vem.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 shrink-0 text-honey-gold" />
                <span className="text-sm font-medium text-white/85">{point}</span>
              </div>
            ))}
          </div>

          <WhatsAppCTA
            size="lg"
            href={buildWhatsAppUrl(doubtMessage)}
            icon={<MessageCircle className="h-5 w-5" />}
            className="mt-10"
          >
            Tirar minhas dúvidas
          </WhatsAppCTA>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
