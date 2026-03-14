import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-suquivos.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <motion.a href="#" className="flex items-center gap-3" whileHover={{ scale: 1.03 }}>
          <img src={logo} alt="Suquivos" className="w-12 h-12 rounded-full" />
          <span className="text-2xl font-display font-bold text-primary">Suquivos</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#sabores" className="font-body font-semibold text-foreground hover:text-secondary transition-colors">Sabores</a>
          <a href="#processo" className="font-body font-semibold text-foreground hover:text-secondary transition-colors">Processo</a>
          <a href="#sobre" className="font-body font-semibold text-foreground hover:text-secondary transition-colors">Sobre</a>
          <motion.a
            href="#contato"
            className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-body font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Peça Agora
          </motion.a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-6 flex flex-col gap-4"
        >
          <a href="#sabores" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Sabores</a>
          <a href="#processo" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Processo</a>
          <a href="#sobre" className="font-body font-semibold text-foreground" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#contato" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-body font-bold text-center" onClick={() => setIsOpen(false)}>Peça Agora</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
