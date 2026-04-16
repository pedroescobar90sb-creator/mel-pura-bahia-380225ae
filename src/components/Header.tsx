import { WHATSAPP_URL } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-tight text-warm-brown">
            Mel <span className="text-honey-dark">Duas Abelhas</span>
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#beneficios" className="transition-colors hover:text-foreground">Benefícios</a>
          <a href="#origem" className="transition-colors hover:text-foreground">Origem</a>
          <a href="#produtos" className="transition-colors hover:text-foreground">Produtos</a>
          <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-honey active:scale-95"
        >
          Pedir agora
        </a>
      </div>
    </header>
  );
}
