import { motion } from "framer-motion";
import img1 from "@/assets/produto-garrafa.png";
import img2 from "@/assets/produto-trio.png";
import img3 from "@/assets/produto-lote1.png";
import img4 from "@/assets/produto-lote2.png";
import img5 from "@/assets/produto-lote3.png";
import img6 from "@/assets/produto-lote4.png";

const images = [
  { src: img1, alt: "Garrafa de Mel Duas Abelhas na mão", span: "md:col-span-2 md:row-span-2" },
  { src: img2, alt: "Trio de garrafas Mel Duas Abelhas", span: "" },
  { src: img3, alt: "Lote de garrafas Mel Duas Abelhas", span: "" },
  { src: img4, alt: "Garrafas de mel vistas de frente", span: "" },
  { src: img5, alt: "Produção de mel artesanal", span: "" },
  { src: img6, alt: "Garrafas de mel alinhadas", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-warm-brown-deep py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb-dark" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-gold">
            Produto Real
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Conheça de perto o{" "}
            <span className="text-gradient-honey">nosso mel</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`group overflow-hidden rounded-2xl border border-white/5 ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="relative h-full overflow-hidden bg-warm-brown/30">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown-deep/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
