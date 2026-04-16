import { motion } from "framer-motion";
import artePureza from "@/assets/arte-pureza.png";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { CheckCircle } from "lucide-react";

const points = [
  "Mel puro, sem adição de açúcar ou xarope",
  "Sem processamento industrial",
  "Direto do apiário para a sua mesa",
  "Transparência total na procedência",
];

export function Objection() {
  return (
    <section className="relative overflow-hidden bg-warm-brown-deep py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb-dark" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-honey/5 blur-3xl" />
              <img
                src={artePureza}
                alt="Você sabe se o mel que consome é puro?"
                className="relative mx-auto max-h-[500px] w-auto rounded-2xl object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-gold">
              A verdade sobre o mel
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Muito "mel" por aí é misturado.{" "}
              <span className="text-gradient-honey">Aqui é diferente.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
              A maioria dos méis industrializados contém misturas como xarope de milho, glucose ou açúcar invertido.
              O consumidor quer confiança e procedência — e é exatamente isso que o Mel Duas Abelhas entrega.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-left">
                  <CheckCircle className="h-5 w-5 shrink-0 text-honey-gold" />
                  <span className="text-sm font-medium text-white/80">{point}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-base font-bold text-warm-brown-deep shadow-honey-lg transition-all duration-300 hover:bg-honey-gold active:scale-[0.97]"
            >
              Quero mel puro de verdade
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
