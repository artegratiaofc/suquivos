import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-3xl font-display font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          🍊 Suquivos
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sabores" className="font-body font-semibold text-foreground hover:text-primary transition-colors">Sabores</a>
          <a href="#processo" className="font-body font-semibold text-foreground hover:text-primary transition-colors">Processo</a>
          <a href="#sobre" className="font-body font-semibold text-foreground hover:text-primary transition-colors">Sobre</a>
          <motion.a
            href="#contato"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Peça Agora
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-6 flex flex-col gap-4"
        >
          <a href="#sabores" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Sabores</a>
          <a href="#processo" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Processo</a>
          <a href="#sobre" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#contato" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body font-bold text-center" onClick={() => setIsOpen(false)}>Peça Agora</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
