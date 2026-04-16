import arteBeneficios from "@/assets/arte-beneficios.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FadeIn } from "./shared/FadeIn";

export function About() {
  return (
    <SectionWrapper id="sobre" variant="cream">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <FadeIn direction="right" className="flex-1">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-honey/8 blur-2xl" />
            <img
              src={arteBeneficios}
              alt="Produto direto do produtor, 100% natural, qualidade garantida"
              className="relative mx-auto max-h-[500px] w-auto rounded-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15} className="flex-1 text-center lg:text-left">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em] text-honey-dark">
            Sobre Nós
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Doce como o{" "}
            <span className="text-gradient-honey">amor de família</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A Mel Duas Abelhas nasceu do trabalho de uma família apaixonada pela apicultura.
            Em Riachão do Jacuípe, no interior da Bahia, cuidamos de abelhas italianas com dedicação
            e respeito à natureza.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nosso compromisso é oferecer um mel verdadeiro: puro, sem mistura e com a qualidade
            que só quem acompanha cada etapa da produção pode garantir. Da colmeia à sua mesa,
            com todo o cuidado que você e sua família merecem.
          </p>
          <div className="mt-8 rounded-2xl border border-honey/15 bg-card p-6">
            <p className="font-heading text-xl font-semibold italic text-honey-dark">
              "Doce como o amor de família"
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— Família Mel Duas Abelhas</p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
