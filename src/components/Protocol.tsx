// @ts-nocheck
import React from 'react';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';

const Protocol = () => {
  const checks = [
    "Stato meccanico e motore",
    "Diagnosi centraline e assenza di errori", 
    "Controllo impianto frenante e sospensioni",
    "Verifica infiltrazioni, perdite e stato gomme",
    "Ispezione carrozzeria, interni e impianti elettrici"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Protocollo 60 Controlli
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Per guidare sereno, davvero
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Tutte le nostre auto passano attraverso il Protocollo 60 Controlli, 
              una checklist minuziosa che garantisce la massima qualità e sicurezza:
            </p>
            
            <div className="space-y-4 mb-8">
              {checks.map((check, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{check}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-8">
              Scarica l'elenco completo oppure passa a trovarci: te lo mostriamo di persona!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1PLjoekKo2wZ7CtdIv3fLiVLzVMGplW32/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
              >
                <Download size={20} className="mr-2" />
                Scopri il Protocollo 60 Controlli
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/images/CONTROLLIALE.jpg"
              alt="Controllo qualità auto"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-gray-900">60</span>
              <span className="text-sm text-gray-600 ml-1">controlli</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;