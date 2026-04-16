import { motion } from "framer-motion";
import artePureza from "@/assets/arte-pureza.png";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function Objection() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
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
              src={artePureza}
              alt="Você sabe se o mel que consome é puro?"
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
              A verdade sobre o mel
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Muito "mel" por aí é misturado.{" "}
              <span className="text-gradient-honey">Aqui é diferente.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              A maioria dos méis industrializados contém misturas como xarope de milho, glucose ou açúcar invertido. 
              O consumidor quer confiança e procedência — e é exatamente isso que o Mel Duas Abelhas entrega.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nosso mel é <strong className="text-foreground">puro, sem adição, sem processamento industrial</strong>. 
              Direto do apiário para a sua mesa, com a transparência que você merece.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-bold text-primary-foreground shadow-honey transition-all hover:shadow-honey-lg active:scale-95"
            >
              Quero mel puro de verdade
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
