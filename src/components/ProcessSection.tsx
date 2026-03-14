import { motion } from "framer-motion";
import { Leaf, Droplets, Package } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Colheita",
    description: "Frutas frescas colhidas no ponto ideal de maturação, direto das melhores fazendas.",
  },
  {
    icon: Droplets,
    title: "Prensagem",
    description: "Prensagem a frio para preservar todos os nutrientes e o sabor natural.",
  },
  {
    icon: Package,
    title: "Envase",
    description: "Envasado e entregue em até 24h, garantindo máximo frescor na sua mesa.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Da Fazenda à Sua Mesa
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto font-body">
            Um processo simples que preserva o que a natureza tem de melhor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", bounce: 0.4 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <step.icon className="w-10 h-10 text-secondary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
