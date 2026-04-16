import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-honey/20 bg-warm-brown py-12 text-warm-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-heading text-xl font-bold">
              Mel <span className="text-honey-gold">Duas Abelhas</span>
            </h3>
            <p className="mt-1 text-sm opacity-80">Mel Puro 100% Natural · Abelha Italiana</p>
          </div>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-honey-gold" />
              <span>Origem: Riachão do Jacuípe – BA</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-honey-gold" />
              <span>Atendimento: Salvador e RMS</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-honey-gold" />
              <span>WhatsApp: (71) 98808-4005</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-warm-cream/10 pt-6 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Mel Duas Abelhas. Todos os direitos reservados.</p>
          <p className="mt-1">"Doce como o amor de família"</p>
        </div>
      </div>
    </footer>
  );
}
