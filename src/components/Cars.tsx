// @ts-nocheck
import React from 'react';
import { ArrowRight, Fuel, Calendar, Navigation, Eye } from 'lucide-react';

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Mini Countryman",
      price: "€9,200",
      image: "/images/c7cac4d5-b010-412f-88b7-c3e41e635a58 2.JPG",
      specs: [
        "Motore 1.6 90cv",
        "Anno: 2012 – 150.000 km",
        "Diesel, Cambio Manuale",
        "Distribuzione e Tagliando appena eseguiti"
      ],
      color: "bg-green-500"
    },
    {
      id: 2,
      name: "Kia Sportage",
      price: "€16.000",
      image: "/images/5290bbbd-3274-4260-a7ca-fc6fb9ef6f32 2.JPG",
      specs: [
        "Motore 1.7 141cv",
        "Anno: 2017 – 177.000 km",
        "Diesel, Cambio Automatico",
        "Gomme nuove e Tagliando appena eseguito"
      ],
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Citroën C3 Van",
      price: "€4.000",
      image: "/images/c3van.jpeg",
      specs: [
        "Motore 1.6 75cv",
        "Anno: 2017 – 192.000 km",
        "Diesel, Cambio Manuale",
        "Ideale per professionisti"
      ],
      color: "bg-yellow-500"
    }
  ];

  const ctaTexts = ["Scopri di più", "Scopri di più", "Scopri di più"];

  return (
    <section id="cars" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Auto in vendita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronte a partire. Le nostre auto sono visibili dal vivo e pronte per la prova su strada.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car, index) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 w-4 h-4 rounded-full ${car.color}`}></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                  <span className="text-2xl font-bold text-gray-900">{car.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {car.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                
                {car.id === 3 ? (
                  <a 
                    href="https://www.subito.it/auto/citroen-c3-van-sud-sardegna-607093053.htm" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                  >
                    {ctaTexts[index]}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : car.id === 2 ? (
                  <a 
                    href="https://www.subito.it/vi/605808404.htm" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                  >
                    {ctaTexts[index]}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group">
                    {ctaTexts[index]}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a href="https://impresapiu.subito.it/shops/44318-soddisfauto-srls" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 group">
            <Eye size={20} className="mr-2" />
            Vedi tutte le auto
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cars;