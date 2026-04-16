import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";
import img1 from "@/assets/produto-garrafa.png";
import img2 from "@/assets/produto-trio.png";
import img3 from "@/assets/produto-lote1.png";
import img4 from "@/assets/produto-lote2.png";
import img5 from "@/assets/produto-lote3.png";
import img6 from "@/assets/produto-lote4.png";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const images: GalleryImage[] = [
  { src: img1, alt: "Garrafa de Mel Duas Abelhas na mão", span: "md:col-span-2 md:row-span-2" },
  { src: img2, alt: "Trio de garrafas Mel Duas Abelhas", span: "" },
  { src: img3, alt: "Lote de garrafas Mel Duas Abelhas", span: "" },
  { src: img4, alt: "Garrafas de mel vistas de frente", span: "" },
  { src: img5, alt: "Produção de mel artesanal", span: "" },
  { src: img6, alt: "Garrafas de mel alinhadas", span: "md:col-span-2" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  );

  // Teclado: ESC fecha, setas navegam. Bloqueia scroll do body quando aberto.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  // Swipe simples no mobile
  const onTouchHandlers = (() => {
    let startX = 0;
    let startY = 0;
    return {
      onTouchStart: (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      },
      onTouchEnd: (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
      },
    };
  })();

  return (
    <SectionWrapper variant="dark">
      <SectionHeader
        eyebrow="Produto Real"
        title="Conheça de perto o"
        highlight="nosso mel"
        tone="dark"
      />

      <p className="mx-auto -mt-4 mb-10 max-w-xl text-center text-sm text-white/55">
        Toque em qualquer foto para ampliar. Use as setas, deslize ou pressione ESC para sair.
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px] md:gap-4 lg:auto-rows-[200px]">
        {images.map((img, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => open(i)}
            aria-label={`Ampliar imagem: ${img.alt}`}
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.94 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-warm-brown/30 ring-1 ring-honey/0 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-honey/40 hover:ring-honey/40 hover:shadow-[0_25px_60px_rgba(190,140,40,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-honey [transform:translateZ(0)] ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.12] [transform:translateZ(0)] [backface-visibility:hidden]"
            />

            {/* Overlay + indicador de zoom */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-brown-deep/85 via-warm-brown-deep/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />

            <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-honey/40 bg-warm-brown-deep/80 text-honey-gold opacity-0 shadow-honey backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:right-3.5 md:top-3.5">
              <ZoomIn className="h-4 w-4" />
            </span>

            <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-warm-brown-deep/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-honey-gold backdrop-blur-sm md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
              <Maximize2 className="h-3 w-3" />
              Ampliar
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-warm-brown-deep/95 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={close}
          {...onTouchHandlers}
        >
          {/* Botão fechar — grande e fácil de tocar */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Fechar"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-honey/30 bg-warm-brown-deep/80 text-honey-gold shadow-lg transition hover:scale-105 hover:border-honey/60 hover:bg-warm-brown md:right-6 md:top-6 md:h-14 md:w-14"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Setas */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-honey/30 bg-warm-brown-deep/80 text-honey-gold shadow-lg transition hover:scale-105 hover:border-honey/60 hover:bg-warm-brown md:left-8 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-honey/30 bg-warm-brown-deep/80 text-honey-gold shadow-lg transition hover:scale-105 hover:border-honey/60 hover:bg-warm-brown md:right-8 md:h-14 md:w-14"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Imagem */}
          <motion.figure
            key={openIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[85vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl border border-honey/20 object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="mt-4 flex items-center gap-3 rounded-full border border-honey/20 bg-warm-brown-deep/80 px-5 py-2 text-sm font-medium text-honey-gold backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-honey/70">
                {openIndex + 1} / {images.length}
              </span>
              <span className="hidden h-3 w-px bg-honey/30 sm:inline-block" />
              <span className="hidden text-white/80 sm:inline">{images[openIndex].alt}</span>
            </figcaption>
          </motion.figure>
        </div>
      )}
    </SectionWrapper>
  );
}
