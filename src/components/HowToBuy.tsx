import { motion } from "framer-motion";
import { MessageCircle, MapPin, CreditCard } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Clique no botão do WhatsApp",
    desc: "Você será direcionado para nosso atendimento rápido e direto.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Informe quantidade e bairro",
    desc: "Diga quantas garrafas deseja e seu bairro em Salvador ou RMS.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Combine pagamento e entrega",
    desc: "Forma de pagamento flexível e entrega combinada no seu tempo.",
  },
];

export function HowToBuy() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-dark">
            Simples e rápido
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Como comprar{" "}
            <span className="text-gradient-honey">seu mel</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Atendimento direto em Salvador e Região Metropolitana. Sem burocracia.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-honey/30 to-honey/10 md:block" />
              )}

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-honey/15 bg-card shadow-card-premium">
                <s.icon className="h-8 w-8 text-honey-dark" />
              </div>
              <span className="mb-2 block font-heading text-3xl font-bold text-honey/30">{s.step}</span>
              <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-base font-bold text-warm-brown-deep shadow-honey transition-all duration-300 hover:bg-honey-gold hover:shadow-honey-lg active:scale-[0.97]"
          >
            <MessageCircle className="h-5 w-5" />
            Iniciar pedido pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
