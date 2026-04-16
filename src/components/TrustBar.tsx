import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Heart, Truck, Award, MapPin } from "lucide-react";

const items = [
  { icon: Truck, text: "Direto do produtor" },
  { icon: Leaf, text: "100% natural" },
  { icon: ShieldCheck, text: "Sem mistura" },
  { icon: Award, text: "Qualidade garantida" },
  { icon: Heart, text: "Produção familiar" },
  { icon: MapPin, text: "Entregas em Salvador e RMS" },
];

export function TrustBar() {
  return (
    <section className="border-y border-honey/20 bg-warm-cream/60 py-6">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-warm-brown">
              <item.icon className="h-4 w-4 text-honey-dark" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
