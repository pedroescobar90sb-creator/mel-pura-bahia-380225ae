import { motion } from "framer-motion";
import { MessageCircle, MapPin, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Clique no botão do WhatsApp",
    desc: "Você será direcionado para nosso atendimento rápido e direto.",
  },
  {
    icon: MapPin,
    step: "2",
    title: "Informe quantidade e bairro",
    desc: "Diga quantas garrafas deseja e seu bairro em Salvador ou RMS.",
  },
  {
    icon: CreditCard,
    step: "3",
    title: "Combine pagamento e entrega",
    desc: "Forma de pagamento flexível e entrega combinada no seu tempo.",
  },
];

export function HowToBuy() {
  return (
    <section className="bg-honeycomb py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Simples e rápido
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Como comprar seu mel
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Atendimento direto em Salvador e Região Metropolitana. Sem burocracia, sem complicação.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-honey-light/50 shadow-honey">
                <s.icon className="h-7 w-7 text-honey-dark" />
              </div>
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-honey-dark">Passo {s.step}</span>
              <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
