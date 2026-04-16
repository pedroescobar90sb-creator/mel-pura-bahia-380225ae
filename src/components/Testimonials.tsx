import { Quote, MessageCircle, Camera } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";
import { PremiumCard } from "./shared/PremiumCard";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const phrases = [
  {
    text: "Mel puro de verdade. Dá para sentir a diferença na primeira colherada.",
    location: "Cliente · Pituba, Salvador",
  },
  {
    text: "Sabor marcante, sem aquele gosto adoçado artificial dos méis de mercado.",
    location: "Cliente · Lauro de Freitas",
  },
  {
    text: "Entrega rápida, atendimento direto e o produto faz jus à origem familiar.",
    location: "Cliente · Itapuã, Salvador",
  },
];

const testimonialMessage =
  "Oi! Quero provar a qualidade do Mel Duas Abelhas. Pode me passar valores e entrega em Salvador/RMS?";

export function Testimonials() {
  return (
    <SectionWrapper variant="light">
      <SectionHeader
        eyebrow="Quem prova, aprova"
        title="A qualidade que"
        highlight="fala por si"
        description="Frases reais que ouvimos de quem já provou o nosso mel em Salvador e RMS."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {phrases.map((t, i) => (
          <FadeIn key={t.location + i} delay={i * 0.1}>
            <PremiumCard className="h-full p-8">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-honey/15" />

              <p className="font-heading text-lg leading-relaxed text-foreground md:text-xl">
                "{t.text}"
              </p>

              <div className="mt-6 border-t border-honey/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-honey-dark">
                  {t.location}
                </p>
              </div>
            </PremiumCard>
          </FadeIn>
        ))}
      </div>

      {/* Convite + CTA pós prova social */}
      <FadeIn delay={0.4} className="mt-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-honey/20 bg-card/80 p-7 text-center md:flex-row md:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-honey/15">
            <Instagram className="h-6 w-6 text-honey-dark" />
          </div>
          <div className="flex-1">
            <p className="font-heading text-base font-bold text-foreground md:text-lg">
              Já é cliente? Compartilhe sua experiência.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Marque <span className="font-semibold text-honey-dark">@melduasabelhas</span> nas suas fotos e stories.
            </p>
          </div>
          <WhatsAppCTA
            href={buildWhatsAppUrl(testimonialMessage)}
            size="md"
            icon={<MessageCircle className="h-4 w-4" />}
            className="shrink-0"
          >
            Quero provar essa qualidade
          </WhatsAppCTA>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
