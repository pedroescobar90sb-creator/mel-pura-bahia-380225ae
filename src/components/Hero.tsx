import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Truck } from "lucide-react";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import { WHATSAPP_URL } from "./WhatsAppButton";

const badges = [
  { icon: Leaf, text: "100% Natural" },
  { icon: ShieldCheck, text: "Sem mistura" },
  { icon: Heart, text: "Produção familiar" },
  { icon: Truck, text: "Direto do produtor" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-warm-brown-deep">
      {/* Background layers */}
      <div className="absolute inset-0 bg-honeycomb-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-brown-deep via-warm-brown-deep/95 to-warm-brown-deep" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center justify-center px-5 pt-24 pb-20 md:flex-row md:gap-12 md:px-8 lg:gap-20">
        {/* Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline */}
          <motion.span
            className="mb-6 inline-block rounded-full border border-honey/30 bg-honey/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-honey-gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mel puro · Abelha italiana · Bahia
          </motion.span>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Mel puro de verdade{" "}
            <span className="text-gradient-honey">para a sua mesa</span>{" "}
            <span className="text-white">em Salvador</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mx-0 md:text-lg">
            Mel Duas Abelhas: mel 100% natural, direto do produtor em Riachão do Jacuípe, com entregas em Salvador e RMS.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-2 rounded-full border border-honey/20 bg-white/5 px-4 py-2 text-xs font-semibold text-honey-gold/90 backdrop-blur-sm"
              >
                <badge.icon className="h-3.5 w-3.5" />
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-honey px-8 py-4 text-base font-bold text-warm-brown-deep shadow-honey-lg transition-all duration-300 hover:bg-honey-gold hover:shadow-[0_20px_60px_-10px_oklch(0.76_0.16_72/0.4)] active:scale-[0.97]"
            >
              <span>🐝</span>
              Pedir agora pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-honey/40 hover:bg-white/10"
            >
              Ver opções de mel
            </a>
          </div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          className="mt-12 flex flex-1 justify-center md:mt-0"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow rings */}
            <div className="absolute -inset-16 rounded-full bg-honey/8 blur-[80px]" />
            <div className="absolute -inset-8 rounded-full bg-honey-gold/6 blur-[40px]" />

            {/* Floating badge */}
            <motion.div
              className="absolute -left-4 bottom-16 z-20 rounded-xl border border-honey/20 bg-warm-brown-deep/90 px-4 py-3 shadow-lg backdrop-blur-md md:-left-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-bold text-honey-gold">100% Natural</p>
              <p className="text-[10px] text-white/50">Sem aditivos · Sem mistura</p>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-20 z-20 rounded-xl border border-honey/20 bg-warm-brown-deep/90 px-4 py-3 shadow-lg backdrop-blur-md md:-right-6"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-xs font-bold text-honey-gold">Abelha Italiana</p>
              <p className="text-[10px] text-white/50">Riachão do Jacuípe – BA</p>
            </motion.div>

            <img
              src={produtoGarrafa}
              alt="Garrafa de Mel Duas Abelhas 500ml - Mel Puro 100% Natural"
              className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:h-[440px] md:h-[520px] lg:h-[580px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
