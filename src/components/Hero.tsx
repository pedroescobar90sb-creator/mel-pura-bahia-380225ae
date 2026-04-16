import { motion } from "framer-motion";
import { Leaf, Truck, MapPin } from "lucide-react";
import heroProduto from "@/assets/hero-produto.jpg";
import logo from "@/assets/logo-mel-duas-abelhas.jpg";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const microSeals = [
  { icon: Leaf, text: "100% Natural" },
  { icon: MapPin, text: "Direto do produtor" },
  { icon: Truck, text: "Entrega em 24h em Salvador" },
];

const heroMessage =
  "Oi! Vi no site e quero pedir o Mel Duas Abelhas com entrega em Salvador/RMS. Pode me passar valores e prazos?";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-warm-brown-deep">
      {/* Background layers */}
      <div className="absolute inset-0 bg-honeycomb-dark" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pt-24 pb-20 md:flex-row md:gap-12 md:px-8 lg:gap-20">
        {/* Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo seal */}
          <motion.div
            className="mb-5 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-2 ring-honey/40 shadow-[0_10px_40px_rgba(190,140,40,0.4)] sm:h-28 sm:w-28 md:h-20 md:w-20 lg:h-24 lg:w-24">
              <img
                src={logo}
                alt="Mel Duas Abelhas — Mel Puro 100% Natural"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </span>
          </motion.div>

          {/* Anchor offer badge — diferencial comercial #1 */}
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-honey/40 bg-honey/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-honey-gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Truck className="h-3.5 w-3.5" />
            Entrega no mesmo dia em Salvador e RMS
          </motion.span>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Mel puro entregue{" "}
            <span className="text-gradient-honey">hoje</span>{" "}
            em Salvador
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 md:mx-0 md:text-lg">
            100% natural · direto do produtor em Riachão do Jacuípe – BA. Sem mistura, sem intermediário, sem complicação.
          </p>

          {/* Micro-selos comerciais */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
            {microSeals.map((seal) => (
              <span
                key={seal.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-honey/25 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-honey-gold/95"
              >
                <seal.icon className="h-3.5 w-3.5" />
                {seal.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row md:items-start">
            <WhatsAppCTA
              size="lg"
              href={buildWhatsAppUrl(heroMessage)}
              icon={<span aria-hidden>🍯</span>}
              className="w-full sm:w-auto"
            >
              Pedir agora pelo WhatsApp
            </WhatsAppCTA>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 transition-all duration-300 hover:border-honey/40 hover:bg-white/10"
            >
              Ver produtos
            </a>
          </div>

          <p className="mt-4 text-xs text-white/45 md:text-sm">
            Atendimento direto · Pagamento na entrega ou PIX
          </p>
        </motion.div>

        {/* Product Image — editorial frame */}
        <motion.div
          className="mt-12 flex flex-1 justify-center md:mt-0"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="group relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px]">
            <div
              className="pointer-events-none absolute -inset-12 hidden rounded-full bg-honey/15 blur-3xl will-change-transform [transform:translateZ(0)] md:block"
              aria-hidden
            />

            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[3rem] ring-1 ring-honey/30 shadow-[0_30px_80px_rgba(80,45,10,0.55)] [transform:translateZ(0)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-20 mix-blend-overlay" aria-hidden />

              <img
                src={heroProduto}
                alt="Mel Duas Abelhas 500ml — mel puro 100% natural com favo, flores e colheres de mel"
                loading="eager"
                className="relative z-10 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] [transform:translateZ(0)] [backface-visibility:hidden]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-warm-brown-deep/50 to-transparent" aria-hidden />
            </div>

            {/* Floating badge — entrega 24h (commercial anchor) */}
            <motion.div
              className="absolute -left-3 bottom-10 z-20 rounded-xl border border-honey/40 bg-warm-brown-deep px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] will-change-transform md:-left-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="flex items-center gap-1.5 text-xs font-bold text-honey-gold">
                <Truck className="h-3.5 w-3.5" />
                Entrega em 24h
              </p>
              <p className="text-[10px] text-white/60">Salvador e Região Metropolitana</p>
            </motion.div>

            <motion.div
              className="absolute -right-3 top-10 z-20 rounded-xl border border-honey/30 bg-warm-brown-deep px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] will-change-transform md:-right-6"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-xs font-bold text-honey-gold">100% Natural</p>
              <p className="text-[10px] text-white/60">Sem aditivos · Sem mistura</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
