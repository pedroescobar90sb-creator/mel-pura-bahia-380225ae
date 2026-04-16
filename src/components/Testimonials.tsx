import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Cláudia S.",
    location: "Pituba, Salvador",
    text: "Melhor mel que já provei! Sabor intenso e puro de verdade. Já virou item obrigatório aqui em casa.",
  },
  {
    name: "Carlos Eduardo M.",
    location: "Lauro de Freitas",
    text: "A diferença pro mel de supermercado é gritante. Comprei 3 garrafas e já estou pedindo mais.",
  },
  {
    name: "Dona Maria José",
    location: "Itapuã, Salvador",
    text: "Doce como o amor de família mesmo! Uso todo dia no café da manhã. Minha neta adora.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
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
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            O que dizem{" "}
            <span className="text-gradient-honey">nossos clientes</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative overflow-hidden rounded-2xl border border-honey/10 bg-card p-8 shadow-card-premium"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-honey/10" />

              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-honey text-honey" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-honey/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-honey/10 font-heading text-lg font-bold text-honey-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
