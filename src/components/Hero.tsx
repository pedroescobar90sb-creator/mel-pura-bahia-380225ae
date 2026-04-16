import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Truck } from "lucide-react";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-honeycomb pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-cream via-background to-warm-beige" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {[
                { icon: Leaf, text: "100% Natural" },
                { icon: ShieldCheck, text: "Sem mistura" },
                { icon: Heart, text: "Produção familiar" },
                { icon: Truck, text: "Direto do produtor" },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-honey/30 bg-honey-light/40 px-3 py-1 text-xs font-medium text-warm-brown"
                >
                  <badge.icon className="h-3.5 w-3.5 text-honey-dark" />
                  {badge.text}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Mel puro de verdade{" "}
              <span className="text-gradient-honey">para a sua mesa</span>{" "}
              em Salvador
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Mel Duas Abelhas: mel 100% natural, direto do produtor em Riachão do Jacuípe, com entregas em Salvador e RMS.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-honey transition-all hover:shadow-honey-lg hover:brightness-105 active:scale-95"
              >
                🐝 Pedir agora pelo WhatsApp
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 rounded-full border border-honey/40 bg-background px-6 py-3.5 text-base font-semibold text-warm-brown transition-all hover:bg-warm-cream active:scale-95"
              >
                Ver opções de mel
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex flex-1 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-honey/10 blur-3xl" />
              <img
                src={produtoGarrafa}
                alt="Garrafa de Mel Duas Abelhas 500ml - Mel Puro 100% Natural"
                className="relative z-10 h-[420px] w-auto object-contain drop-shadow-2xl md:h-[520px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
