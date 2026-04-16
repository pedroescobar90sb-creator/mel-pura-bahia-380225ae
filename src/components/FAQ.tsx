import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";

const faqs = [
  {
    q: "O mel cristaliza?",
    a: "Sim, e isso é um sinal de pureza! Mel puro cristaliza naturalmente com o tempo, dependendo da temperatura e da florada. Basta aquecer levemente em banho-maria para voltar ao estado líquido.",
  },
  {
    q: "O mel é puro mesmo?",
    a: "100%. Nosso mel é extraído diretamente das colmeias de abelhas italianas em Riachão do Jacuípe – BA. Sem adição de açúcar, xarope, glucose ou qualquer outro ingrediente.",
  },
  {
    q: "Entrega em quais regiões?",
    a: "Realizamos entregas em Salvador e toda a Região Metropolitana de Salvador (RMS). O prazo e a forma de entrega são combinados diretamente pelo WhatsApp.",
  },
  {
    q: "Qual a validade do mel?",
    a: "Mel puro, quando armazenado corretamente (em local seco, arejado e longe da luz solar), pode durar anos sem perder suas propriedades.",
  },
  {
    q: "Crianças podem consumir?",
    a: "Crianças acima de 1 ano podem consumir mel normalmente. Mel não é indicado para menores de 1 ano, conforme orientação médica.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.06} duration={0.4} className="border-b border-honey/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-honey-dark"
      >
        <span className="pr-4 font-heading text-base font-semibold text-foreground md:text-lg">{q}</span>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-honey/20 transition-all duration-300 ${open ? "rotate-180 bg-honey/10" : ""}`}>
          <ChevronDown className="h-4 w-4 text-honey-dark" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
      </div>
    </FadeIn>
  );
}

export function FAQ() {
  return (
    <SectionWrapper variant="light" narrow>
      <SectionHeader
        eyebrow="Dúvidas frequentes"
        title="Perguntas e"
        highlight="respostas"
      />

      <div className="rounded-3xl border border-honey/10 bg-card px-7 py-2 shadow-card-premium md:px-10">
        {faqs.map((faq, i) => (
          <FaqItem key={faq.q} {...faq} index={i} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        ⚠️ Mel não é indicado para menores de 1 ano.
      </p>
    </SectionWrapper>
  );
}
