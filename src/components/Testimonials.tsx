import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";
import { PremiumCard } from "./shared/PremiumCard";

const testimonials = [
  {
    name: "Ana Cláudia S.",
    location: "Pituba, Salvador",
    text: "Melhor mel que já provei! Sabor intenso e puro de verdade. Já virou item obrigatório aqui em casa.",
  },
  {
    name: "Carlos Eduardo M.",
    location: "Lauro de Freitas",
    text: "A diferença pro mel de supermercado é gritante. Comprei 3 garrafas e já estou pedindo mais.",
  },
  {
    name: "Dona Maria José",
    location: "Itapuã, Salvador",
    text: "Doce como o amor de família mesmo! Uso todo dia no café da manhã. Minha neta adora.",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper variant="light">
      <SectionHeader
        eyebrow="Depoimentos"
        title="O que dizem"
        highlight="nossos clientes"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <PremiumCard className="h-full p-8">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-honey/10" />

              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-honey text-honey" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-honey/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-honey/10 font-heading text-lg font-bold text-honey-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </PremiumCard>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
