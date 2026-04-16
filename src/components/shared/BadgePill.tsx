import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "honey" | "dark" | "outline" | "gold";

interface BadgePillProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}

const toneClasses: Record<Tone, string> = {
  honey: "bg-honey/10 border-honey/20 text-warm-brown",
  dark: "bg-warm-brown-deep text-honey-gold border-warm-brown-deep",
  outline: "border-honey/25 bg-white/5 text-honey-gold backdrop-blur-sm",
  gold: "bg-honey text-warm-brown-deep border-honey",
};

export function BadgePill({ children, tone = "honey", className, icon }: BadgePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider",
        toneClasses[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
