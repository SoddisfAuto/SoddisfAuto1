// @ts-nocheck
import React from 'react';
import { CheckCircle, Car, Search, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto usate selezionate",
      description: "Ogni veicolo passa attraverso rigorosi controlli di qualità"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Ricerca personalizzata",
      description: "Troviamo l'auto giusta per te, anche su richiesta specifica"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tutela completa",
      description: "Controlli pre-acquisto e consulenza dedicata per ogni cliente"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chi siamo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Più di una rivendita, un alleato nella scelta dell'auto
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SoddisfAuto nasce dalla passione per i motori e dal desiderio di offrire 
              un'esperienza d'acquisto serena, sicura e su misura. Il nostro obiettivo? 
              Farti guidare il mezzo perfetto per te, senza pensieri.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="/images/Red White and Black Modern Geometric Car Dealers Presentation.png"
              alt="Team SoddisfAuto"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;