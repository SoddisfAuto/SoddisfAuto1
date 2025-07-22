import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Parla direttamente con chi ci mette la faccia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Indirizzo</h3>
                  <p className="text-gray-600">
                    SoddisfAuto – SP4 SNC<br />
                    San Sperate (CA)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telefono</h3>
                  <p className="text-gray-600">
                    379 253 8068
                  </p>
                  <a href="tel:3792538068" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group">
                    <Phone size={16} className="mr-2" />
                    Chiama ora
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Orari</h3>
                  <p className="text-gray-600">
                    Aperto dal lunedì al sabato<br />
                    Su appuntamento domenicale
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/393792538068"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle size={20} className="mr-3" />
                Scrivici su WhatsApp
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://www.google.com/maps/dir//SP4,+Snc,+09026+San+Sperate+SU/@39.342956,8.9382006,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12e7493c3adc40c1:0x22838f2b9c72cffb!2m2!1d9.0206015!2d39.3429851?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-gray-900 text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <MapPin size={20} className="mr-3" />
                Vieni a trovarci
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/IMG_4546.jpg"
                alt="Mappa concessionaria"
                className="w-full h-full object-cover"
                />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;