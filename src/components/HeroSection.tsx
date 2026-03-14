import { motion } from "framer-motion";
import heroJuice from "@/assets/hero-juice.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Frescor que vem da <span className="text-primary">natureza</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md font-body">
            Sucos 100% naturais, feitos com frutas frescas colhidas direto da fazenda. Sem conservantes, sem açúcar adicionado. Puro sabor.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#sabores"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Sabores
            </motion.a>
            <motion.a
              href="#processo"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-body font-bold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}
              whileTap={{ scale: 0.95 }}
            >
              Nosso Processo
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src={heroJuice}
            alt="Garrafa de suco de laranja fresco com frutas"
            className="w-full max-w-md drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
