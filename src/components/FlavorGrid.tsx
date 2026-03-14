import { motion } from "framer-motion";
import fruitOrange from "@/assets/fruit-orange.png";
import fruitApple from "@/assets/fruit-apple.png";
import fruitStrawberry from "@/assets/fruit-strawberry.png";
import fruitMango from "@/assets/fruit-mango.png";

const flavors = [
  {
    name: "Laranja Pura",
    description: "Clássico e refrescante. Vitamina C em cada gole.",
    image: fruitOrange,
    bg: "bg-orange-50",
    accent: "text-juice-orange",
  },
  {
    name: "Maçã Verde",
    description: "Levemente ácido e irresistível. Detox natural.",
    image: fruitApple,
    bg: "bg-green-50",
    accent: "text-juice-green",
  },
  {
    name: "Morango Fresco",
    description: "Doce e aromático. O favorito da galera.",
    image: fruitStrawberry,
    bg: "bg-red-50",
    accent: "text-juice-strawberry",
  },
  {
    name: "Manga Tropical",
    description: "Cremoso e exótico. Sabor de verão o ano todo.",
    image: fruitMango,
    bg: "bg-yellow-50",
    accent: "text-juice-mango",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.4 } },
};

const FlavorGrid = () => {
  return (
    <section id="sabores" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Sabores
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto font-body">
            Cada garrafa é uma explosão de sabor. Escolha o seu favorito!
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {flavors.map((flavor) => (
            <motion.div
              key={flavor.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${flavor.bg} rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-xl`}
            >
              <img
                src={flavor.image}
                alt={flavor.name}
                className="w-32 h-32 object-contain mb-6 drop-shadow-lg"
              />
              <h3 className={`text-xl font-bold ${flavor.accent} mb-2`}>
                {flavor.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {flavor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlavorGrid;
