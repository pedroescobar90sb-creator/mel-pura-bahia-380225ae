import { ShieldCheck, Leaf, Heart, Truck, Award, MapPin } from "lucide-react";
import { FadeIn } from "./shared/FadeIn";

const items = [
  { icon: Truck, text: "Direto do produtor" },
  { icon: Leaf, text: "100% natural" },
  { icon: ShieldCheck, text: "Sem mistura" },
  { icon: Award, text: "Qualidade garantida" },
  { icon: Heart, text: "Produção familiar" },
  { icon: MapPin, text: "Entregas em Salvador e RMS" },
];

export function TrustBar() {
  return (
    <section className="relative -mt-1 border-b border-honey/10 bg-background py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <FadeIn
              key={item.text}
              delay={i * 0.06}
              duration={0.4}
              distance={12}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-honey/10 bg-warm-cream/50 px-3 py-4 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-honey/10">
                <item.icon className="h-5 w-5 text-honey-dark" />
              </div>
              <span className="text-xs font-semibold leading-tight text-warm-brown">{item.text}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
