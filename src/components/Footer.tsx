import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-warm-brown-deep py-14 text-warm-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-bold">
              Mel <span className="text-honey-gold">Duas Abelhas</span>
            </h3>
            <p className="mt-2 text-sm text-white/50">Mel Puro 100% Natural · Abelha Italiana</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-honey-gold" />
              <span>Origem: Riachão do Jacuípe – BA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-honey-gold" />
              <span>Atendimento: Salvador e RMS</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-honey-gold" />
              <span>WhatsApp: (71) 98808-4005</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Mel Duas Abelhas. Todos os direitos reservados.</p>
          <p className="mt-1 font-heading italic text-honey-gold/40">"Doce como o amor de família"</p>
        </div>
      </div>
    </footer>
  );
}
