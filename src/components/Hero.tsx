// @ts-nocheck
import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToCars = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fotopiazzale.jpeg"
          alt="Concessionaria auto"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Contact Info */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-center space-x-2 text-white/90">
            <MapPin size={20} />
            <span className="text-lg">SP4 SNC – San Sperate</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-white/90">
            <Phone size={20} />
            <a href="tel:3792538068" className="text-lg hover:text-white transition-colors">379 253 8068</a>
          </div>
        </div>

        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            SoddisfAuto
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 italic">
            La realtà di guidare un sogno
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Auto selezionate, controllate e garantite.
            <br />
            Vieni a trovarci e scopri perché la soddisfazione è nel nostro nome.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://www.google.com/maps/dir//SP4,+Snc,+09026+San+Sperate+SU/@39.342956,8.9382006,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12e7493c3adc40c1:0x22838f2b9c72cffb!2m2!1d9.0206015!2d39.3429851?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            Vieni a trovarci
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={scrollToCars}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Scopri le auto in vendita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;