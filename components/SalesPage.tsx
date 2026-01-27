
import React, { useState, useRef } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0 bg-white px-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-lg text-gray-900 group-hover:text-black transition-colors">{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : '0'}`}>+</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

interface SalesPageProps {
  onBack?: () => void;
}

const SalesPage: React.FC<SalesPageProps> = ({ onBack }) => {
  const priceRef = useRef<HTMLDivElement>(null);

  const handleCheckout = () => {
    window.open('https://pay.hotmart.com/A103788679M?off=37zf0hgu&checkoutMode=10', '_blank');
  };

  const scrollToPrice = () => {
    priceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-gray-100 pb-24 md:pb-0">
      {/* 1. STICKY BAR SUPERIOR */}
      <div className="sticky top-0 z-50 bg-[#EF4444] py-3 px-4 shadow-xl text-center">
        <p className="text-white font-black text-sm md:text-base tracking-tight animate-pulse">
          ⚠️ ATENCIÓN: Esta oferta del LOTE 3 termina en breve. Asegurá tu lugar con 95% de descuento.
        </p>
      </div>

      {/* Back Button */}
      {onBack && (
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 mt-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 font-bold transition-colors group"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </div>
            Volver
          </button>
        </div>
      )}

      <main className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* 2. HERO SECTION */}
        <section className="py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
            {/* Workshop Logo */}
            <div className="w-full max-w-[280px] h-16 flex items-center justify-center mx-auto md:mx-0">
              <img src="https://i.imgur.com/P35mWYv.png" alt="Workshop Logo" className="h-full object-contain" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-[1.1] uppercase tracking-tighter">
              2 DÍAS EN VIVO PARA CREAR, LANZAR Y VENDER TU PRIMER <span className="text-[#3B82F6]">PRODUCTO DIGITAL</span> 100% CON INTELIGENCIA ARTIFICIAL
            </h1>
            <p className="text-[11px] text-gray-600 font-medium italic">
              (Aunque no tengas experiencia y empieces desde cero)
            </p>
            <button 
              onClick={scrollToPrice}
              className="w-full md:w-auto px-10 py-5 bg-[#16A34A] text-white text-xl font-black rounded-2xl shadow-xl hover:bg-[#15803d] hover:-translate-y-1 transition-all"
            >
              QUIERO ACCEDER AHORA
            </button>
          </div>
          <div className="relative group hidden md:block">
            <div className="absolute -inset-4 bg-gray-50 rounded-[40px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden transform group-hover:rotate-1 transition-transform">
              <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-[32px]">
                <span className="text-7xl">🤖</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                <span className="p-4 bg-white/90 backdrop-blur rounded-2xl shadow-lg text-4xl">🚀</span>
                <span className="p-4 bg-white/90 backdrop-blur rounded-2xl shadow-lg text-4xl">💰</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DETALLES DEL EVENTO */}
        <section className="py-8 px-6 bg-gray-50 rounded-[40px] mb-8 border border-gray-200">
          <div className="text-center mb-6">
            <span className="text-black block mb-2 uppercase text-sm font-black tracking-widest">EXPERIENCIA INMERSIVA</span>
            <h2 className="text-2xl md:text-4xl font-black text-black inline-block leading-tight">
              <span className="text-white bg-black px-4 py-1 rounded-lg mr-2 inline-block">Mirá todo lo que vas a vivir</span> 
              en este workshop en vivo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: '🗓️', label: 'Fechas', val: '14 y 15 de febrero' },
              { icon: '⏰', label: 'Duración', val: '2 días (16h total)' },
              { icon: '💻', label: 'Modalidad', val: '100% Online Zoom' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-2 p-4 bg-white rounded-2xl shadow-md border border-gray-100">
                <div className="text-4xl mb-1 transform transition-transform hover:scale-110 cursor-default">{item.icon}</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{item.label}</p>
                <p className="font-bold text-gray-900 leading-tight text-sm md:text-base">{item.val}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: '🚀', 
                label: 'WORKSHOP EN VIVO', 
                val: '16 horas de contenido intensivo en 2 días Método O.P.E.T. paso a paso Créas tu producto durante las clases Acompaña',
                highlight: false
              },
              { 
                icon: '🤖', 
                label: 'PACK DE AGENTES IA', 
                val: '+ de 5 agentes LISTOS',
                highlight: false
              },
              { 
                icon: '💬', 
                label: 'SOPORTE PREMIUM', 
                val: 'WhatsApp en vivo + 7 días post-evento',
                highlight: false
              },
              { 
                icon: '✅', 
                label: 'PRODUCTOS VALIDADOS', 
                val: 'Te daré una lista con 10 productos validados para que no pierdas tiempo buscando qué vender.',
                highlight: true
              },
              { 
                icon: '📖', 
                label: 'WORKBOOK PRACTICO', 
                val: 'Recibirás un cuaderno de ejercicios prácticos con ejercicios y tareas para acelerar tu implementação.',
                highlight: true
              },
              { 
                icon: '📜', 
                label: 'CERTIFICADO DE PARTICIPACIÓN', 
                val: 'Al final de los dos días del taller, recibirás un certificado oficial que acredita tu formación.',
                highlight: true
              },
            ].map((item, i) => (
              <div key={i} className={`relative text-center space-y-2 p-6 rounded-2xl shadow-md border-2 transition-all duration-300 ${item.highlight ? 'border-blue-400 border-dashed bg-blue-50/40' : 'border-gray-100 bg-white'}`}>
                {item.highlight && (
                   <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                     BONO EXCLUSIVO
                   </span>
                )}
                <div className="text-4xl mb-2 transform transition-transform hover:scale-110 cursor-default">{item.icon}</div>
                <p className="text-[10px] font-black text-black uppercase tracking-tighter">{item.label}</p>
                <p className="font-medium text-gray-500 leading-tight text-sm md:text-base">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECCIÓN DE PRECIO */}
        <section ref={priceRef} className="bg-[#111827] rounded-[48px] p-8 md:p-12 text-center text-white mb-8 shadow-2xl relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="text-[200px] leading-none select-none">💸</span>
          </div>
          <p className="text-[#FBBF24] font-black tracking-widest uppercase mb-4">ÚLTIMOS LUGARES DEL LOTE 3</p>
          <p className="text-gray-400 text-2xl line-through mb-1 italic">De US$ 297</p>
          <div className="flex flex-col items-center justify-center gap-1 mb-6">
             <h2 className="text-6xl md:text-8xl font-black text-[#22C55E]">POR SOLO US$ 7</h2>
             <p className="text-gray-400 font-medium">(Sí, menos que una hamburguesa)</p>
          </div>

          <div className="max-w-[400px] mx-auto text-left space-y-3 mb-8">
            {[
              { text: "WORKSHOP EN VIVO", val: "$497" },
              { text: "PACK DE AGENTES IA LISTOS", val: "$297" },
              { text: "SOPORTE PREMIUM", val: "$397" },
              { text: "PRODUCTOS VALIDADOS", val: "$197" },
              { text: "WORKBOOK PRACTICO", val: "$97" },
              { text: "CERTIFICADO DE PARTICIPACIÓN", val: "$47" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-sm md:text-base font-bold text-gray-300">
                  {item.text} <span className="line-through text-gray-500 ml-1">({item.val})</span>
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={handleCheckout}
            className="w-full max-w-[400px] py-6 bg-[#16A34A] text-white text-2xl font-black rounded-2xl shadow-lg hover:bg-[#15803d] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide"
          >
            ASEGURAR MI LUGAR
          </button>

          <div className="max-w-[400px] mx-auto mt-10">
            <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-green-500 w-[35%] transition-all duration-1000"></div>
            </div>
            <p className="text-red-500 font-black text-xs uppercase tracking-widest animate-pulse">
              35% del lote 3 AGOTADO
            </p>
          </div>
        </section>

        {/* 5. HORARIOS Y LOGÍSTICA */}
        <section className="pt-8 pb-4 border-b border-gray-100 flex flex-col items-center">
          <div className="w-full max-w-[800px] bg-gray-50 rounded-[40px] p-2 md:p-4 shadow-inner overflow-hidden border border-gray-200 group">
            <div className="relative bg-white rounded-[32px] flex items-center justify-center overflow-hidden min-h-[150px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-50"></div>
              <div className="relative flex flex-col items-center text-center space-y-4 px-6 w-full">
                 <div className="flex gap-2">
                    {['🇦🇷', '🇧🇷', '🇨🇱', '🇺🇾', '🇨🇴', '🇵🇪', '🇲🇽', '🇪🇸'].map(f => <span key={f} className="text-2xl md:text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-700">{f}</span>)}
                 </div>
                 <div className="w-full max-w-[600px] p-1 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    <img 
                      src="https://i.imgur.com/IVVKTZK.png" 
                      alt="Horarios Mundiales" 
                      className="w-full h-auto object-contain rounded-xl"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MANEJO DE OBJECIÓN (Grabación) */}
        <section className="py-6">
          <div className="bg-red-50 border-2 border-red-100 rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center gap-6 shadow-sm">
            <div className="text-6xl animate-pulse">🔴</div>
            <div className="max-w-[700px]">
              <h3 className="text-2xl font-black text-red-900 mb-2 uppercase tracking-tight">
                ¿NO PODÉS ESTAR EN VIVO TODO EL TIEMPO?
              </h3>
              <p className="text-red-800 text-lg leading-relaxed">
                No te preocupes. Al inscribirte, puedes adquirir la grabación del evento para verla cuando quieras. No te perdés nada.
              </p>
            </div>
          </div>
        </section>

        {/* 7. SEGMENTACIÓN (Checklist) */}
        <section className="py-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">¿PARA QUIÉN FUE DISEÑADO ESTE WORKSHOP?</h2>
          <div className="max-w-[550px] mx-auto text-left space-y-4">
            {[
              "Para quienes quieren ganar en dólares desde casa...",
              "Para quienes están cansados de la teoría...",
              "Para quienes ya intentaron antes pero se trabaron...",
              "Para quienes quieren aprovechar el boom de la IA..."
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-black transition-colors">
                <span className="text-3xl">✅</span>
                <p className="text-xl font-bold text-gray-800 leading-snug">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-2xl font-black text-black max-w-[550px] mx-auto">
            🚀 "Si te identificás con alguno de estos puntos, el Método O.P.E.T™ es para vos."
          </p>
        </section>

        {/* 8. ROMPE OBJECIONES (Emoji Based) */}
        <section className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center overflow-hidden">
             <div className="w-full aspect-video rounded-[24px] flex items-center justify-center mb-6 bg-gray-100 shadow-inner">
                <span className="text-6xl md:text-7xl">🤖</span>
             </div>
             <h3 className="text-xl font-black mb-2 uppercase text-black">NO NECESITÁS SABER DE IA</h3>
             <p className="text-gray-500 text-sm font-medium">Te entrego mis Agentes configurados para que hagan el trabalho pesado.</p>
          </div>
          <div className="bg-white p-6 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center overflow-hidden">
             <div className="w-full aspect-video rounded-[24px] flex items-center justify-center mb-6 bg-gray-100 shadow-inner">
                <span className="text-6xl md:text-7xl">🎯</span>
             </div>
             <h3 className="text-xl font-black mb-2 uppercase text-black">NO NECESITÁS TENER UN PRODUCTO</h3>
             <p className="text-gray-500 text-sm font-medium">En el Workshop vamos a encontrar tu nicho de oro juntos.</p>
          </div>
        </section>

        {/* 9. GARANTÍA */}
        <section className="py-8">
          <div className="bg-gray-50 rounded-[40px] p-10 md:p-16 border border-gray-200 flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg border-8 border-yellow-400">
              <span className="text-7xl">🛡️</span>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">GARANTÍA DE 'PRUEBA SIN RIESGO'</h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Entrás, participás... si al final del primer día sentís que no es para vos o no aprendiste nada nuevo, te devuelvo el 100% de tu dinero sin preguntas. El riesgo es todo mío.
              </p>
            </div>
          </div>
        </section>

        {/* 10. FAQ (Acordeón) */}
        <section className="py-8 mb-20 bg-gray-50 rounded-[48px] p-8 md:p-16 border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-12 uppercase tracking-tight">PREGUNTAS FRECUENTES</h2>
          <div className="max-w-[800px] mx-auto overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">
            <FAQItem 
              question="¿Necesito herramientas pagas de IA?" 
              answer="No es obligatorio. En el workshop te enseñaré alternativas gratuitas y de bajo costo que funcionan perfectamente para empezar."
            />
            <FAQItem 
              question="¿Qué pasa si no puedo asistir al vivo?" 
              answer="Puedes adquirir la grabación del evento para verla cuando quieras, además de acceso incluido al material complementario y grupo de soporte."
            />
            <FAQItem 
              question="¿Realmente se puede en 48 horas?" 
              answer="Sí, el Método O.P.E.T™ está diseñado para eliminar la parálisis por análisis. Vamos directo a la ejecución técnica."
            />
            <FAQItem 
              question="¿Por qué cuesta menos de US$10?" 
              answer="Es una oferta de lanzamiento masivo para el Lote 3. Queremos que el precio no sea una excusa para que cambies tu realidad financiera."
            />
            <FAQItem 
              question="¿Tengo que mostrar mi cara en los videos?" 
              answer="No. Usamos herramientas de IA para crear avatares y voces sintéticas, permitiéndote vender sin exponerte si así lo prefieres."
            />
          </div>
        </section>
      </main>

      {/* 🔁 STICKY BOTTOM BAR (Solo Móvil) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-[60]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-black text-gray-400 uppercase tracking-tighter leading-none mb-1">PRECIO FINAL</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-black leading-none">US$ 7</span>
              <span className="text-[10px] text-gray-500 font-bold">(95% OFF)</span>
            </div>
          </div>
          <button 
            onClick={scrollToPrice}
            className="flex-1 py-4 bg-[#16A34A] text-white rounded-xl font-black text-base shadow-lg active:scale-95 transition-all uppercase"
          >
            QUIERO ACCEDER AHORA
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
