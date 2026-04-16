import { motion } from "framer-motion";
import { WHATSAPP_URL } from "./WhatsAppButton";
import produtoGarrafa from "@/assets/produto-garrafa.png";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-warm-brown-deep py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb-dark" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-honey/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            className="hidden flex-shrink-0 lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={produtoGarrafa}
              alt="Mel Duas Abelhas"
              className="h-[360px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Mel puro, de verdade,{" "}
              <span className="text-gradient-honey">entregue na sua porta</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:max-w-none">
              Direto de Riachão do Jacuípe para Salvador e RMS.
              100% natural, sem mistura, produção familiar. Peça agora e prove a diferença.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="rounded-full border border-honey/20 bg-honey/10 px-4 py-2 text-xs font-semibold text-honey-gold">100% Natural</span>
              <span className="rounded-full border border-honey/20 bg-honey/10 px-4 py-2 text-xs font-semibold text-honey-gold">Sem mistura</span>
              <span className="rounded-full border border-honey/20 bg-honey/10 px-4 py-2 text-xs font-semibold text-honey-gold">Produção familiar</span>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-honey px-10 py-4 text-lg font-bold text-warm-brown-deep shadow-honey-lg transition-all duration-300 hover:bg-honey-gold hover:shadow-[0_20px_60px_-10px_oklch(0.76_0.16_72/0.4)] active:scale-[0.97]"
              >
                🍯 Pedir meu mel agora
              </a>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Atendimento rápido e direto pelo WhatsApp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
