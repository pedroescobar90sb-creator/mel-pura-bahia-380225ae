import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Fit = "contain" | "cover-top" | "cover-center";

interface ProductImageFrameProps {
  src: string;
  alt: string;
  fit?: Fit;
  /** Height utility classes for the frame, e.g. "h-72 md:h-80" */
  height?: string;
  badge?: ReactNode;
  /** Extra glow intensity */
  glow?: boolean;
  className?: string;
}

const fitClasses: Record<Fit, string> = {
  contain: "object-contain p-6 md:p-8",
  "cover-top": "object-cover object-top",
  "cover-center": "object-cover object-center",
};

export function ProductImageFrame({
  src,
  alt,
  fit = "contain",
  height = "h-72 md:h-80",
  badge,
  glow = true,
  className,
}: ProductImageFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        // organic asymmetric mask: large rounded top, gentler bottom
        "rounded-t-[2.5rem] rounded-b-[1.25rem]",
        // layered warm gradient background
        "bg-[radial-gradient(circle_at_30%_20%,oklch(0.93_0.05_85),oklch(0.96_0.02_90)_60%,oklch(0.93_0.04_80))]",
        // subtle inner separation
        "ring-1 ring-inset ring-honey/15",
        height,
        className,
      )}
    >
      {/* honeycomb texture overlay */}
      <div className="absolute inset-0 bg-honeycomb opacity-50" aria-hidden />

      {/* radial honey glow behind product */}
      {glow && (
        <>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-honey/20 blur-[60px]" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-honey-gold/25 blur-[40px]" aria-hidden />
        </>
      )}

      {/* warm vignette at the bottom for typography integration on next block */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-warm-cream/60 to-transparent" aria-hidden />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "relative z-10 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:rotate-[-1deg]",
          "drop-shadow-[0_25px_45px_rgba(80,45,10,0.25)]",
          fitClasses[fit],
        )}
      />

      {badge && (
        <div className="absolute top-4 right-4 z-20">
          {badge}
        </div>
      )}
    </div>
  );
}
