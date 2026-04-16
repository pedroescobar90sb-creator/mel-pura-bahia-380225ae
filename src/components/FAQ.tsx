import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <motion.div
      className="border-b border-honey/10 last:border-b-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
    >
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
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-dark">
            Dúvidas frequentes
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Perguntas e{" "}
            <span className="text-gradient-honey">respostas</span>
          </h2>
        </motion.div>

        <div className="rounded-3xl border border-honey/10 bg-card px-7 py-2 shadow-card-premium md:px-10">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} {...faq} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          ⚠️ Mel não é indicado para menores de 1 ano.
        </p>
      </div>
    </section>
  );
}
