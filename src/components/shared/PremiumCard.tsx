import { forwardRef, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverLift?: boolean;
  accentTop?: boolean;
}

export const PremiumCard = forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ children, hoverLift = true, accentTop = false, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-honey/10 bg-card shadow-card-premium transition-all duration-500",
          hoverLift && "hover:-translate-y-1.5 hover:shadow-card-hover hover:border-honey/25",
          className,
        )}
        {...rest}
      >
        {accentTop && (
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-honey-dark via-honey to-honey-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
        {children}
      </div>
    );
  },
);
PremiumCard.displayName = "PremiumCard";
