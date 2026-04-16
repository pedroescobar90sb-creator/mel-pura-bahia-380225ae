import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Truck, Leaf, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-mel-duas-abelhas.jpg";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const STORAGE_KEY = "mda_welcome_seen_v1";
const OPEN_DELAY_MS = 700;

const seals = [
  { icon: Leaf, text: "100% Natural" },
  { icon: Truck, text: "Entrega em 24h" },
  { icon: MapPin, text: "Salvador e RMS" },
];

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage indisponível — segue sem persistência
    }
    const t = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Lock scroll + ESC
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const goCatalog = () => {
    close();
    // pequeno delay para o modal sair antes do scroll suave
    window.setTimeout(() => {
      const el = document.getElementById("produtos");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
          aria-describedby="welcome-desc"
          className="fixed inset-0 z-[120] flex items-end justify-center px-4 pb-4 pt-6 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop sutil — escurece sem bloquear visual */}
          <motion.button
            type="button"
            aria-label="Fechar boas-vindas"
            onClick={close}
            className="absolute inset-0 bg-warm-brown-deep/55 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Card */}
          <motion.div
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }
            }
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-honey/25 bg-warm-cream shadow-[0_30px_80px_rgba(80,45,10,0.45)]"
          >
            {/* Top decorative band */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-honey-dark via-honey to-honey-gold"
            />

            {/* Soft honey glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-honey/25 blur-3xl"
            />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-honey/20 bg-white/70 text-warm-brown transition hover:scale-105 hover:border-honey/40 hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative px-6 pb-6 pt-8 text-center sm:px-8 sm:pb-8 sm:pt-10">
              {/* Logo seal */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-2 ring-honey/40 shadow-[0_10px_30px_rgba(190,140,40,0.35)]"
              >
                <img
                  src={logo}
                  alt="Mel Duas Abelhas"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-honey/30 bg-honey/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-honey-dark">
                <Truck className="h-3 w-3" />
                Entrega hoje em Salvador
              </span>

              <h2
                id="welcome-title"
                className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-[28px]"
              >
                Seja bem-vindo à{" "}
                <span className="text-gradient-honey">Mel Duas Abelhas</span>
              </h2>

              <p
                id="welcome-desc"
                className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground"
              >
                Mel puro 100% natural, direto do produtor, com entregas em Salvador e Região Metropolitana.
              </p>

              {/* Selos */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {seals.map((s) => (
                  <span
                    key={s.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-honey/20 bg-white/70 px-3 py-1 text-[11px] font-semibold text-warm-brown"
                  >
                    <s.icon className="h-3 w-3 text-honey-dark" />
                    {s.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-honey px-6 py-3.5 text-sm font-bold text-warm-brown-deep shadow-honey-lg transition-all duration-300 hover:bg-honey-gold active:scale-[0.98] sm:text-base"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={goCatalog}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-honey/30 bg-white/70 px-6 py-3.5 text-sm font-bold text-warm-brown transition-all duration-300 hover:border-honey/50 hover:bg-white active:scale-[0.98] sm:text-base"
                >
                  Ver catálogo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={close}
                className="mt-4 text-xs font-medium text-muted-foreground/70 underline-offset-4 transition hover:text-warm-brown hover:underline"
              >
                Continuar navegando
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
