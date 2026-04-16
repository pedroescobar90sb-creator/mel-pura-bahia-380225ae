import { motion } from "framer-motion";
import arteBeneficios from "@/assets/arte-beneficios.png";

export function About() {
  return (
    <section id="sobre" className="bg-warm-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={arteBeneficios}
              alt="Produto direto do produtor, 100% natural, qualidade garantida"
              className="mx-auto max-h-[480px] w-auto rounded-2xl object-contain shadow-honey-lg"
            />
          </motion.div>
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
              Sobre Nós
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Doce como o{" "}
              <span className="text-gradient-honey">amor de família</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              A Mel Duas Abelhas nasceu do trabalho de uma família apaixonada pela apicultura. 
              Em Riachão do Jacuípe, no interior da Bahia, cuidamos de abelhas italianas com dedicação 
              e respeito à natureza.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nosso compromisso é oferecer um mel verdadeiro: puro, sem mistura e com a qualidade 
              que só quem acompanha cada etapa da produção pode garantir. Da colmeia à sua mesa, 
              com todo o cuidado que você e sua família merecem.
            </p>
            <p className="mt-6 font-heading text-lg font-semibold italic text-honey-dark">
              "Doce como o amor de família"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
