import { motion } from "framer-motion";
import arteMarca from "@/assets/arte-marca.png";

export function Origin() {
  return (
    <section id="origem" className="bg-honeycomb py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={arteMarca}
              alt="Mel Duas Abelhas - Mel Puro 100% Natural, Abelha Italiana"
              className="mx-auto max-h-[480px] w-auto rounded-2xl object-contain shadow-honey-lg"
            />
          </motion.div>
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
              Nossa Origem
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Do sertão baiano{" "}
              <span className="text-gradient-honey">para a sua mesa</span>{" "}
              em Salvador
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Em Riachão do Jacuípe, no coração do interior da Bahia, nossa família cuida das abelhas italianas 
              com respeito, carinho e dedicação. Cada gota de mel carrega a força do sertão, o cuidado artesanal 
              e a tradição de uma produção que passa de geração em geração.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Não somos uma marca de gôndola. Somos uma família que produz mel de verdade — 
              e leva até a sua porta em Salvador e Região Metropolitana.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Abelha Italiana", "Riachão do Jacuípe – BA", "Produção Familiar", "Desde a colmeia até você"].map((tag) => (
                <span key={tag} className="rounded-full border border-honey/30 bg-honey-light/30 px-4 py-2 text-sm font-medium text-warm-brown">
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
