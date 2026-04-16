import { motion } from "framer-motion";
import produtoGarrafa from "@/assets/produto-garrafa.png";
import produtoTrio from "@/assets/produto-trio.png";
import arteOferta from "@/assets/arte-oferta.png";
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
    image: arteOferta,
    name: "Pedido personalizado",
    desc: "Atacado, eventos, cestas de presente ou quantidades maiores. Fale conosco e montamos sua proposta.",
    highlight: "Sob consulta",
    cta: "Falar sobre pedido especial",
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative overflow-hidden bg-warm-cream py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-dark">
            Nossos Produtos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Escolha o seu{" "}
            <span className="text-gradient-honey">mel puro</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Mel 100% natural de abelha italiana. Direto do produtor para Salvador e RMS.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-honey/10 bg-card shadow-card-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Image area */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-b from-warm-beige/80 to-warm-cream/50 md:h-72">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-110 md:h-56"
                />
                <span className="absolute top-4 right-4 rounded-full bg-warm-brown-deep px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-honey-gold">
                  {p.highlight}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-warm-brown-deep px-6 py-3.5 text-sm font-bold text-honey-gold transition-all duration-300 hover:bg-warm-brown hover:shadow-honey active:scale-[0.97]"
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
