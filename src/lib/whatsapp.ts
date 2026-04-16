export const WHATSAPP_PHONE = "5571988084005";

export const WHATSAPP_URL =
  "https://wa.me/5571988084005?text=Oi%2C+quero+comprar+Mel+Duas+Abelhas.+Vi+no+site+e+gostaria+de+mais+informações+sobre+valores+e+entrega+em+Salvador%2FRMS.";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
