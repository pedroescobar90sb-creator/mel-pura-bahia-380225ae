import { motion } from "framer-motion";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import produtoTrio from "@/assets/produto-trio.png";
import { WHATSAPP_URL } from "./WhatsAppButton";

const products = [
  {
    image: produtoGarrafa,
    name: "Mel Duas Abelhas 500ml",
    desc: "Uma garrafa de mel puro 100% natural, de abelha italiana, direto de Riachão do Jacuípe.",
    highlight: "Mais vendido",
    cta: "Comprar pelo WhatsApp",
  },
  {
    image: produtoTrio,
    name: "Kit Econômico — 3 unidades",
    desc: "Três garrafas de 500ml com condição especial. Ideal para quem já conhece e quer garantir o estoque.",
    highlight: "Melhor custo-benefício",
    cta: "Consultar valor especial",
  },
  {
    image: null,
    name: "Pedido personalizado",
    desc: "Atacado, eventos, cestas de presente ou quantidades maiores. Fale conosco e montamos sua proposta.",
    highlight: "Sob consulta",
    cta: "Falar sobre pedido especial",
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-warm-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Nossos Produtos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Escolha o seu mel puro
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-honey/15 bg-card shadow-sm transition-shadow hover:shadow-honey-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative flex h-56 items-center justify-center bg-warm-beige/50">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-48 w-auto object-contain transition-transform group-hover:scale-105" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-5xl">🍯</span>
                  </div>
                )}
                <span className="absolute top-4 right-4 rounded-full bg-honey-dark px-3 py-1 text-xs font-bold text-white">
                  {p.highlight}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-honey transition-all hover:shadow-honey-lg active:scale-95"
                >
                  {p.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
