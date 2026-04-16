import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "cream" | "dark" | "light" | "transparent";

interface SectionWrapperProps {
  id?: string;
  variant?: Variant;
  pattern?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  /** narrower width for content like FAQ */
  narrow?: boolean;
}

const variantClasses: Record<Variant, string> = {
  cream: "bg-warm-cream text-foreground",
  dark: "bg-warm-brown-deep text-white",
  light: "bg-background text-foreground",
  transparent: "text-foreground",
};

export function SectionWrapper({
  id,
  variant = "light",
  pattern = true,
  className,
  containerClassName,
  children,
  narrow = false,
}: SectionWrapperProps) {
  const isDark = variant === "dark";
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 md:py-32",
        variantClasses[variant],
        className,
      )}
    >
      {pattern && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            isDark ? "bg-honeycomb-dark" : "bg-honeycomb opacity-40",
          )}
          aria-hidden
        />
      )}
      <div
        className={cn(
          "relative mx-auto px-5 md:px-8",
          narrow ? "max-w-3xl" : "max-w-7xl",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
