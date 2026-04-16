import { Truck, Leaf, Heart, Star } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";
import { PremiumCard } from "./shared/PremiumCard";

const benefits = [
  {
    icon: Truck,
    title: "Direto do produtor",
    desc: "Nosso mel sai do apiário e vai direto para sua mesa, sem intermediários. Você compra de quem realmente produz.",
    accent: "bg-amber-500/10",
  },
  {
    icon: Leaf,
    title: "Mel puro 100% natural",
    desc: "Mel de abelha italiana, extraído com cuidado e sem nenhum tipo de adição, conservante ou mistura.",
    accent: "bg-emerald-500/10",
  },
  {
    icon: Heart,
    title: "Produção familiar com origem real",
    desc: "Produzido com amor em Riachão do Jacuípe, no interior da Bahia. Cada garrafa carrega a história da nossa família.",
    accent: "bg-rose-500/10",
  },
  {
    icon: Star,
    title: "Sabor marcante e confiável",
    desc: "Quem prova reconhece: o sabor é intenso, verdadeiro e inesquecível. Mel de verdade é outro nível.",
    accent: "bg-orange-500/10",
  },
];

export function Benefits() {
  return (
    <SectionWrapper id="beneficios" variant="light">
      <SectionHeader
        eyebrow="Diferenciais"
        title="Por que escolher o"
        highlight="Mel Duas Abelhas?"
        description="Qualidade que você sente no sabor e na confiança de cada garrafa."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <FadeIn key={b.title} delay={i * 0.1}>
            <PremiumCard accentTop className="h-full p-8">
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${b.accent}`}>
                <b.icon className="h-7 w-7 text-honey-dark" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </PremiumCard>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
