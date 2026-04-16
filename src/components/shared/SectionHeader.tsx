import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  highlight?: ReactNode;
  /** Optional text rendered after the highlight (same line) */
  titleAfter?: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  titleAfter,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  const eyebrowColor = isDark ? "text-honey-gold" : "text-honey-dark";
  const titleColor = isDark ? "text-white" : "text-foreground";
  const descColor = isDark ? "text-white/60" : "text-muted-foreground";

  return (
    <FadeIn
      className={cn(
        "mb-14 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em]",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl",
          titleColor,
        )}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-honey">{highlight}</span>
          </>
        )}
        {titleAfter && <> {titleAfter}</>}
      </h2>
      {description && (
        <p className={cn("mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg", descColor, align === "left" && "mx-0")}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
