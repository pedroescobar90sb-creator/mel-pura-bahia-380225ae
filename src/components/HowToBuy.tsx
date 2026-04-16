import { MessageCircle, MapPin, CreditCard } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { SectionHeader } from "./shared/SectionHeader";
import { FadeIn } from "./shared/FadeIn";
import { WhatsAppCTA } from "./shared/WhatsAppCTA";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Chame no WhatsApp",
    desc: "Atendimento direto, sem robô e sem cadastro.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Diga quantidade e bairro",
    desc: "Confirmamos disponibilidade e entrega em Salvador ou RMS.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Pague na entrega ou PIX",
    desc: "Forma de pagamento flexível. Mel entregue em até 24h.",
  },
];

const howToMessage =
  "Oi! Quero fazer meu pedido do Mel Duas Abelhas. Pode me passar valores e combinar a entrega?";

export function HowToBuy() {
  return (
    <SectionWrapper variant="light">
      <SectionHeader
        eyebrow="3 passos · Sem complicação"
        title="Como pedir"
        highlight="seu mel"
        description="Atendimento direto em Salvador e Região Metropolitana. Entrega em até 24h."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.12} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-honey/30 to-honey/10 md:block" />
            )}

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-honey/15 bg-card shadow-card-premium">
              <s.icon className="h-8 w-8 text-honey-dark" />
            </div>
            <span className="mb-2 block font-heading text-3xl font-bold text-honey/30">{s.step}</span>
            <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-14 text-center">
        <WhatsAppCTA
          size="lg"
          href={buildWhatsAppUrl(howToMessage)}
          icon={<MessageCircle className="h-5 w-5" />}
        >
          Fazer meu pedido agora
        </WhatsAppCTA>
        <p className="mt-3 text-sm text-muted-foreground">Resposta rápida · Sem cadastro · Sem aplicativo</p>
      </FadeIn>
    </SectionWrapper>
  );
}
