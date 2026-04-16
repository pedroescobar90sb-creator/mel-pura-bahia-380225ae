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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-honey/15">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-foreground md:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-honey-dark transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-honeycomb py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Dúvidas frequentes
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Perguntas e respostas
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-honey/15 bg-card px-6 shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          ⚠️ Mel não é indicado para menores de 1 ano.
        </p>
      </div>
    </section>
  );
}
