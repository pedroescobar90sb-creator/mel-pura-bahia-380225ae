import { motion } from "framer-motion";
import { Truck, Leaf, Heart, Star } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Direto do produtor",
    desc: "Nosso mel sai do apiário e vai direto para sua mesa, sem intermediários. Você compra de quem realmente produz.",
  },
  {
    icon: Leaf,
    title: "Mel puro 100% natural",
    desc: "Mel de abelha italiana, extraído com cuidado e sem nenhum tipo de adição, conservante ou mistura.",
  },
  {
    icon: Heart,
    title: "Produção familiar com origem real",
    desc: "Produzido com amor em Riachão do Jacuípe, no interior da Bahia. Cada garrafa carrega a história da nossa família.",
  },
  {
    icon: Star,
    title: "Sabor marcante e confiável",
    desc: "Quem prova reconhece: o sabor é intenso, verdadeiro e inesquecível. Mel de verdade é outro nível.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-honeycomb py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Diferenciais
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher o Mel Duas Abelhas?
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="rounded-2xl border border-honey/15 bg-card p-7 shadow-sm transition-shadow hover:shadow-honey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-honey-light/50">
                <b.icon className="h-6 w-6 text-honey-dark" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
