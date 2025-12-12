import React from 'react';
import { Truck, ShoppingCart, Clock, ShieldCheck, Smartphone, Map, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 transform origin-top-left translate-y-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block bg-orange-100 text-primary px-4 py-1.5 rounded-full font-semibold text-sm tracking-wide uppercase">
                Livraison en 30 minutes
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-secondary leading-tight">
                Vos envies, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Livrées.
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Connectez-vous à vos restaurants et commerces préférés. Une logistique ultra-réactive pour une expérience client sans compromis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1">
                  <Smartphone size={24} />
                  App Store
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all transform hover:-translate-y-1">
                  <Smartphone size={24} />
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative lg:h-[600px] flex justify-center items-center">
              {/* Mockup Placeholder */}
              <div className="relative w-80 h-[550px] bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-20">
                <div className="absolute top-0 w-full h-full bg-white flex flex-col">
                  <div className="bg-primary h-32 flex items-center justify-center pt-8">
                    <h3 className="text-white font-display text-2xl font-bold">Delix</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-100 h-32 rounded-xl"></div>
                    <div className="bg-gray-100 h-10 rounded-xl"></div>
                    <div className="bg-gray-100 h-10 rounded-xl"></div>
                    <div className="bg-gray-100 h-10 rounded-xl"></div>
                  </div>
                  <button className="mx-4 mt-auto mb-8 bg-secondary text-white py-3 rounded-lg font-bold">Commander</button>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider mb-2">Nos Services</h2>
            <h3 className="text-4xl font-display font-bold text-secondary">Plus qu'une simple livraison</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShoppingCart className="w-10 h-10 text-white" />}
              title="Restaurants & Commerces"
              description="Accédez à un large choix de partenaires : restaurants locaux, supermarchés, et boutiques spécialisées."
            />
            <ServiceCard
              icon={<Truck className="w-10 h-10 text-white" />}
              title="Logistique Réactive"
              description="Une flotte optimisée pour des livraisons express. Suivez votre commande en temps réel."
            />
            <ServiceCard
              icon={<Package className="w-10 h-10 text-white" />}
              title="Service Déplacement"
              description="Besoin de déplacer un colis ou du matériel ? Nous offrons des services de transport sur mesure."
            />
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-8 font-medium">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            {['Sandwich +', 'Burger & Co', 'Shopreat', 'Azar Libre Service', 'Tonino Market'].map((name, index) => (
              <span key={index} className="text-2xl font-bold font-display text-gray-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/800/600"
                alt="Delivery Driver"
                className="rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl lg:text-4xl font-display font-bold">
                Une technologie au service de l'efficacité
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg mt-1">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Rapidité Inégalée</h4>
                    <p className="text-blue-100">Algorithmes d'optimisation de route pour garantir les délais les plus courts du marché.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg mt-1">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Couverture Étendue</h4>
                    <p className="text-blue-100">Nous livrons partout en ville et dans les banlieues proches, sans minimum de commande.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary p-2 rounded-lg mt-1">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Sécurité Garantie</h4>
                    <p className="text-blue-100">Paiement sécurisé et respect des normes d'hygiène strictes pour toutes les livraisons.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Prêt à commander ou à expédier ?
          </h2>
          <p className="text-orange-100 text-xl mb-10">
            Rejoignez des milliers d'utilisateurs satisfaits. Téléchargez l'application dès aujourd'hui.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center mb-6 shadow-orange-500/30 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold font-display text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Home;