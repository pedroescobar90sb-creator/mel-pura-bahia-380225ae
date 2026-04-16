import { motion } from "framer-motion";
import arteMarca from "@/assets/arte-marca.png";

const tags = [
  "Abelha Italiana",
  "Riachão do Jacuípe – BA",
  "Produção Familiar",
  "Desde a colmeia até você",
];

export function Origin() {
  return (
    <section id="origem" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-honey/8 blur-2xl" />
              <img
                src={arteMarca}
                alt="Mel Duas Abelhas - Mel Puro 100% Natural, Abelha Italiana"
                className="relative mx-auto max-h-[500px] w-auto rounded-2xl object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-dark">
              Nossa Origem
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Do sertão baiano{" "}
              <span className="text-gradient-honey">para a sua mesa</span>{" "}
              em Salvador
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Em Riachão do Jacuípe, no coração do interior da Bahia, nossa família cuida das abelhas italianas
              com respeito, carinho e dedicação. Cada gota de mel carrega a força do sertão, o cuidado artesanal
              e a tradição de uma produção que passa de geração em geração.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Não somos uma marca de gôndola. Somos uma família que produz mel de verdade —
              e leva até a sua porta em Salvador e Região Metropolitana.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-honey/20 bg-honey/8 px-5 py-2.5 text-sm font-semibold text-warm-brown"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
