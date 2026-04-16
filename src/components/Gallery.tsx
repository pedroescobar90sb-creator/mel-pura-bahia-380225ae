import img1 from "@/assets/produto-garrafa.png";
import img2 from "@/assets/produto-trio.png";
import img3 from "@/assets/produto-lote1.png";
import img4 from "@/assets/produto-lote2.png";
import img5 from "@/assets/produto-lote3.png";
import img6 from "@/assets/produto-lote4.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";

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
    <SectionWrapper variant="dark">
      <SectionHeader
        eyebrow="Produto Real"
        title="Conheça de perto o"
        highlight="nosso mel"
        tone="dark"
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((img, i) => (
          <FadeIn
            key={i}
            delay={i * 0.07}
            duration={0.4}
            distance={16}
            className={`group overflow-hidden rounded-2xl border border-white/5 ${img.span}`}
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
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
