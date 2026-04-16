import { Heart, Leaf, MapPin } from "lucide-react";
import arteMarca from "@/assets/arte-marca.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FadeIn } from "./shared/FadeIn";

const pillars = [
  {
    icon: Heart,
    title: "Família",
    desc: "Produção familiar, com cuidado de quem trata cada colmeia como parte da casa.",
  },
  {
    icon: Leaf,
    title: "Pureza",
    desc: "Mel 100% natural de abelha italiana. Sem mistura, sem aditivos, sem atalhos.",
  },
  {
    icon: MapPin,
    title: "Procedência",
    desc: "Direto de Riachão do Jacuípe – BA até a sua casa em Salvador e RMS.",
  },
];

export function Origin() {
  return (
    <SectionWrapper id="origem" variant="light">
      <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
        <FadeIn direction="left" className="flex-1">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-honey/8 blur-2xl" />
            <img
              src={arteMarca}
              alt="Mel Duas Abelhas — Mel Puro 100% Natural, produção familiar em Riachão do Jacuípe"
              className="relative mx-auto max-h-[460px] w-auto rounded-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15} className="flex-1 text-center lg:text-left">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em] text-honey-dark">
            História & Procedência
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Da nossa família{" "}
            <span className="text-gradient-honey">para a sua mesa</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Em Riachão do Jacuípe, no interior da Bahia, nossa família cuida de abelhas italianas
            com respeito e dedicação. Não somos marca de gôndola — somos quem produz, quem entrega
            e quem responde no WhatsApp.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-honey/15 bg-card p-5 text-left shadow-card-premium"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-honey/12">
                  <p.icon className="h-5 w-5 text-honey-dark" />
                </div>
                <p className="font-heading text-base font-bold text-foreground">{p.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
