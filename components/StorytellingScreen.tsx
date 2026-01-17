
import React, { useRef } from 'react';

interface StorytellingScreenProps {
  onComplete: () => void;
}

const StorytellingScreen: React.FC<StorytellingScreenProps> = ({ onComplete }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 font-sans text-[#374151]">
      <div 
        ref={contentRef}
        className="w-full max-w-[650px] bg-white rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-y-auto max-h-[90vh] custom-scrollbar"
      >
        {/* 1. HEADER IMAGE */}
        <div className="p-6 flex flex-col items-center border-b border-[#E5E7EB]">
          <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
            <img 
              src="https://i.imgur.com/MJluNNv.png" 
              alt="Leonardo Arias Presentation" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        {/* 2. CUERPO DEL TEXTO (Parte 1) */}
        <div className="p-8 md:p-10 space-y-8 flex flex-col items-center text-center">
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-bold text-black">¡Mucho gusto! Soy Leonardo Arias 👋</h3>
            <p className="text-lg leading-relaxed">
              Después de generar más de <strong>US$ 3.000.000</strong> en ventas online, encontré la clave para que cualquiera pueda empezar sin trabarse: la <strong>Inteligencia Artificial</strong>.
            </p>
          </div>

          {/* 3. PRIMER CTA - Black Button */}
          <div className="flex justify-center w-full">
            <button 
              onClick={onComplete}
              className="px-10 py-4 bg-black text-white font-black rounded-2xl shadow-[0_4px_0_rgb(31,41,55)] hover:bg-gray-800 hover:translate-y-0.5 hover:shadow-[0_2px_0_rgb(31,41,55)] transition-all active:scale-95 uppercase tracking-wide flex items-center gap-2"
            >
              CONTINUAR 🚀
            </button>
          </div>

          {/* 4. CUERPO DEL TEXTO (Parte 2) */}
          <div className="space-y-6 w-full">
            <p className="text-lg leading-relaxed">
              Hoy vivo de crear sistemas automatizados y ayudo a emprendedores a facturar cifras altas sin depender de equipos grandes ni estructuras complejas.
            </p>
            <p className="text-lg leading-relaxed font-bold">
              Y ahora quiero ayudarte a vos también.
            </p>

            {/* Caja Destacada (Quote Box) - Black border */}
            <div className="bg-[#F3F4F6] border-l-4 border-black p-6 rounded-r-2xl relative overflow-hidden group w-full text-center">
              <span className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:scale-110 transition-transform">💡</span>
              <div className="flex flex-col items-center gap-4 relative z-10">
                <span className="text-3xl">💡</span>
                <p className="text-lg font-bold text-gray-800 leading-snug italic">
                  "La IA no es solo 'tecnología', es tu socio para crear negocios en tiempo récord."
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Y en los próximos días voy a realizar el <strong>Workshop Producto con IA en 48 Horas</strong>, donde vamos a pasar 2 días juntos en vivo y te voy a mostrar paso a paso cómo crear y lanzar un producto con potencial de facturar US$ 7.000 al mes.
            </p>
          </div>

          {/* 5. LISTA DE BENEFICIOS */}
          <div className="space-y-4 w-full">
            <h4 className="text-xl font-black text-black">Todo de forma práctica, rápida y accesible:</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Sin tener experiencia previa.",
                "Sin ser un experto en tecnología.",
                "Sin contratar equipos costosos.",
                "Sin tragarte meses de teoría aburrida.",
                "Sin aparecer en cámara (usamos IA para eso)."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-xl">✅</span>
                  <p className="font-bold text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. LISTA DE LOGROS */}
          <div className="space-y-4 pt-4 w-full">
            <h4 className="text-xl font-black text-black">💻 En este Workshop vas a lograr:</h4>
            <div className="space-y-3 flex flex-col items-center">
              {[
                "Crear tu producto (Ebook, Curso o Audiolibro) 100% con IA.",
                "Tener tu oferta validada y lista para vender.",
                "Activar un embudo y anuncios que venden por vos."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 justify-center">
                  <span className="text-xl">🔥</span>
                  <p className="font-bold text-gray-800 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. CIERRE Y CTA FINAL */}
          <div className="pt-8 space-y-8 w-full">
            <div className="text-center space-y-4">
              <p className="text-xl font-black text-black leading-tight">
                Y lo mejor… Vas a salir con tu negocio digital listo para vender en solo 48 horas. 🚀
              </p>
              <p className="text-lg font-bold text-black">
                Nos vemos en el Workshop Producto con IA en 28h. 💥
              </p>
            </div>

            <button 
              onClick={onComplete}
              className="w-full py-6 bg-black text-white text-2xl font-black rounded-2xl shadow-[0_6px_0_rgb(31,41,55)] hover:bg-gray-800 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(31,41,55)] transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              CONTINUAR 🚀
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </div>
  );
};

export default StorytellingScreen;
