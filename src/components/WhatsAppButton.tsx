import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5571988084005?text=Oi%2C+quero+comprar+Mel+Duas+Abelhas.+Vi+no+site+e+gostaria+de+mais+informações+sobre+valores+e+entrega+em+Salvador%2FRMS.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-4px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_-4px_rgba(37,211,102,0.6)] active:scale-95 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
    </a>
  );
}

export { WHATSAPP_URL };
