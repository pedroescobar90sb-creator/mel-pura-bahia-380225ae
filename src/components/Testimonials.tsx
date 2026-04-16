import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="bg-honeycomb py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-honey-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-honey/15 bg-card p-7 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-honey text-honey" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
