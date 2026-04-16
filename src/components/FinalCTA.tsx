import { motion } from "framer-motion";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-warm-cream py-20 md:py-28">
      <div className="absolute inset-0 bg-honeycomb opacity-40" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-4xl">🐝</span>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Mel puro, de verdade,{" "}
            <span className="text-gradient-honey">entregue na sua porta</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Direto de Riachão do Jacuípe para Salvador e RMS. 
            100% natural, sem mistura, produção familiar. Peça agora e prove a diferença.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-honey-lg transition-all hover:brightness-105 active:scale-95"
          >
            🍯 Pedir meu mel agora
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Atendimento rápido e direto pelo WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
