import logo from "@/assets/logo-suquivos.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Suquivos" className="w-12 h-12 rounded-full" />
              <h3 className="text-2xl font-display font-bold text-primary-foreground">Suquivos</h3>
            </div>
            <p className="text-primary-foreground/70 font-body">
              Sucos artesanais 100% naturais, feitos com amor e frutas frescas.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4 text-lg">Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#sabores" className="text-primary-foreground/70 hover:text-secondary transition-colors">Sabores</a></li>
              <li><a href="#processo" className="text-primary-foreground/70 hover:text-secondary transition-colors">Processo</a></li>
              <li><a href="#sobre" className="text-primary-foreground/70 hover:text-secondary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4 text-lg">Contato</h4>
            <ul className="space-y-2 font-body text-primary-foreground/70">
              <li>📧 contato@suquivos.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 font-body text-sm">© 2026 Suquivos — Sucos Artesanais. Todos os direitos reservados.</p>
          <a href="https://www.youtube.com/@gelow_geladinhos" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary transition-colors font-body text-xs">
            Desenvolvido por @gelow_geladinhos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
