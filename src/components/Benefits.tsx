import { motion } from "framer-motion";
import { Truck, Leaf, Heart, Star } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Direto do produtor",
    desc: "Nosso mel sai do apiário e vai direto para sua mesa, sem intermediários. Você compra de quem realmente produz.",
    accent: "bg-amber-500/10",
  },
  {
    icon: Leaf,
    title: "Mel puro 100% natural",
    desc: "Mel de abelha italiana, extraído com cuidado e sem nenhum tipo de adição, conservante ou mistura.",
    accent: "bg-emerald-500/10",
  },
  {
    icon: Heart,
    title: "Produção familiar com origem real",
    desc: "Produzido com amor em Riachão do Jacuípe, no interior da Bahia. Cada garrafa carrega a história da nossa família.",
    accent: "bg-rose-500/10",
  },
  {
    icon: Star,
    title: "Sabor marcante e confiável",
    desc: "Quem prova reconhece: o sabor é intenso, verdadeiro e inesquecível. Mel de verdade é outro nível.",
    accent: "bg-orange-500/10",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-honeycomb" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-honey-dark">
            Diferenciais
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Por que escolher o{" "}
            <span className="text-gradient-honey">Mel Duas Abelhas?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Qualidade que você sente no sabor e na confiança de cada garrafa.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-honey/10 bg-card p-8 shadow-card-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-dark via-honey to-honey-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${b.accent}`}>
                <b.icon className="h-7 w-7 text-honey-dark" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
