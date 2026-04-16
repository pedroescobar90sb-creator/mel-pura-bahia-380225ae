import { motion } from "framer-motion";
import img1 from "@/assets/produto-garrafa.png";
import img2 from "@/assets/produto-trio.png";
import img3 from "@/assets/produto-lote1.png";
import img4 from "@/assets/produto-lote2.png";
import img5 from "@/assets/produto-lote3.png";
import img6 from "@/assets/produto-lote4.png";

const images = [
  { src: img1, alt: "Garrafa de Mel Duas Abelhas na mão" },
  { src: img2, alt: "Trio de garrafas Mel Duas Abelhas" },
  { src: img3, alt: "Lote de garrafas Mel Duas Abelhas" },
  { src: img4, alt: "Garrafas de mel vistas de frente" },
  { src: img5, alt: "Produção de mel artesanal" },
  { src: img6, alt: "Garrafas de mel alinhadas" },
];

export function Gallery() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Produto Real
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Conheça de perto o nosso mel
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group overflow-hidden rounded-xl border border-honey/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
