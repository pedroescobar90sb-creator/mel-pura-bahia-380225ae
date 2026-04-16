import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface WhatsAppCTAProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-honey text-warm-brown-deep shadow-honey-lg hover:bg-honey-gold hover:shadow-[0_20px_60px_-10px_oklch(0.76_0.16_72/0.4)]",
  secondary:
    "border border-white/20 bg-white/5 text-white/90 backdrop-blur-sm hover:border-honey/40 hover:bg-white/10",
  ghost:
    "border border-honey/20 bg-honey/5 text-warm-brown hover:bg-honey/10 hover:border-honey/40",
  dark:
    "bg-warm-brown-deep text-honey-gold hover:bg-warm-brown hover:shadow-honey",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm md:text-base",
  lg: "px-9 py-4 text-base md:text-lg",
};

export function WhatsAppCTA({
  children,
  href = WHATSAPP_URL,
  variant = "primary",
  size = "md",
  className,
  icon,
}: WhatsAppCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all duration-300 active:scale-[0.97]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {icon}
      {children}
    </a>
  );
}
