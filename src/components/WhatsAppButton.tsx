import { WHATSAPP_URL } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-7 md:right-7 [transform:translateZ(0)]"
    >
      {/* Tooltip / label — desktop */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-honey/30 bg-warm-brown-deep/95 px-4 py-2 font-heading text-sm font-semibold text-honey-gold opacity-0 shadow-honey-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:inline-flex">
        Pedir meu mel 🍯
      </span>

      {/* Botão circular */}
      <span className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
        {/* Pulse ring honey */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-honey/40 animate-ping-slow"
        />
        {/* Anel dourado externo */}
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-honey via-honey-gold to-honey-dark opacity-90 blur-[2px]"
        />
        {/* Núcleo verde WhatsApp com leve gradiente */}
        <span
          className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#2BD96F] to-[#128C4A] shadow-[0_10px_30px_-6px_rgba(18,140,74,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] ring-2 ring-honey/60 transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] md:h-8 md:w-8"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.715.315-.442.485-1.317 1.348-1.317 2.49 0 1.17.687 2.31 1.31 3.13 1.575 2.072 3.474 3.787 5.85 4.787.396.157 2.234.91 2.834.91.602 0 1.39-.16 1.94-.46.395-.225.93-.78 1.06-1.215.143-.443.215-.91.215-1.39 0-.114-.007-.214-.063-.286-.158-.286-2.106-1.245-2.405-1.39-.156-.072-.287-.115-.43-.115zM16.05 5C9.96 5 5 9.96 5 16.05c0 1.978.521 3.911 1.51 5.617L5 27.05l5.582-1.464a11.04 11.04 0 0 0 5.467 1.428h.005C22.143 27.014 27.1 22.054 27.1 15.965 27.1 9.876 22.143 5 16.05 5zm0 20.205h-.004a9.149 9.149 0 0 1-4.668-1.278l-.335-.198-3.474.91.927-3.39-.218-.346a9.103 9.103 0 0 1-1.396-4.853c0-5.043 4.107-9.15 9.156-9.15 2.448 0 4.747.952 6.476 2.683a9.092 9.092 0 0 1 2.682 6.475c-.002 5.044-4.108 9.147-9.146 9.147z" />
          </svg>
        </span>
        {/* Mini badge mel (gota dourada) */}
        <span
          aria-hidden
          className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-honey text-[10px] shadow-honey ring-2 ring-warm-cream"
        >
          🍯
        </span>
      </span>
    </a>
  );
}
