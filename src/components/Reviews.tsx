import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Pierluigi F.",
      text: "Assistenza ottima e puntuale in tutte le fasi dell acquisto. Mi hanno sollevato da ogni problema. L auto è davvero come mi era stato assicurato. Praticamente nuova. Confido di ricevere la stessa assistenza per eventuali problematiche dovessero insorgere in futuro. Grazie!",
      rating: 5
    },
    {
      id: 2,
      name: "Mauro C.",
      text: "Sono stato guidato e seguito sull'acquisto della mia auto con serietà, professionalità e tanta cura, al fine di riuscire a completare l'acquisto e il ritiro in modo rapido e secondo le mie tempistiche. Consiglio vivamente!",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={20} 
          className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recensioni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dicono di noi. Ogni cliente è una storia. E ogni recensione, una conferma del nostro impegno.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <StarRating rating={review.rating} />
              <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "{review.text}"
              </blockquote>
              <cite className="text-gray-600 font-semibold">– {review.name}</cite>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <div className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg mb-4">
            <span className="font-semibold mr-2">Leggi tutte le recensioni su Google</span>
          </div>
          <div>
            <a 
              href="https://www.google.com/search?sca_esv=397bf5706f45ee43&rlz=1C5CHFA_enIT1125IT1125&tbm=lcl&q=SoddisfAuto+%7C+Acquisti+Mirati+e+Vendita+Auto+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MrEws7SwsDA2MzewNLcwNLG03MDI-IrRPDg_JSWzOM2xtCRfoUbBMbmwNLO4JFPBN7MoEUilKoSl5qVkliQqgBUEpSan5hVn5udlLmIlVycA-w290o4AAAA&rldimm=2486988836709781499&hl=it-IT&sa=X&ved=2ahUKEwiXmrXQ3dCOAxV8nf0HHavnMIQQ9fQKegQISxAF#lkt=LocalPoiReviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center mx-auto group"
            >
              Vai alle recensioni
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;