const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-background mb-4">🍊 Suquivos</h3>
            <p className="text-background/70 font-body">
              Sucos 100% naturais, feitos com amor e frutas frescas. Nutrindo você desde 2024.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-4 text-lg">Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#sabores" className="text-background/70 hover:text-primary transition-colors">Sabores</a></li>
              <li><a href="#processo" className="text-background/70 hover:text-primary transition-colors">Processo</a></li>
              <li><a href="#sobre" className="text-background/70 hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-4 text-lg">Contato</h4>
            <ul className="space-y-2 font-body text-background/70">
              <li>📧 contato@suquivos.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/50 font-body text-sm">© 2024 Suquivos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
