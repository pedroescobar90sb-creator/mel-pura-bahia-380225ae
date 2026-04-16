import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#origem", label: "Origem" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-honey/10 bg-warm-brown-deep/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            Mel <span className="text-honey-gold">Duas Abelhas</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-honey-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-honey px-6 py-2.5 text-sm font-bold text-warm-brown-deep shadow-honey transition-all duration-300 hover:bg-honey-gold hover:shadow-honey-lg active:scale-95 sm:inline-flex"
          >
            Pedir agora
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-warm-brown-deep/98 px-5 pb-6 pt-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-white/80 transition-colors hover:text-honey-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full bg-honey py-3 text-base font-bold text-warm-brown-deep shadow-honey"
          >
            Pedir agora pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
