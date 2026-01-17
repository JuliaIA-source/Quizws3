
import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'binary',
    heroEmoji: '🤖',
    headline: '¿Ya estás facturando en dólares usando la Inteligencia Artificial a tu favor?',
    subheadline: 'Respondé estas preguntas y recibí tu plan personalizado para crear y lanzar tu propio producto digital en un fin de semana, aunque empieces de cero.',
    progress: 5,
    options: [
      { id: 'si', label: 'Sí', icon: '✅' },
      { id: 'no', label: 'No', icon: '🚫', variant: 'danger-light' }
    ]
  },
  {
    id: 2,
    type: 'multiple-choice',
    heroEmoji: '📢',
    headline: '¿Escuchaste hablar de que hoy podés crear tu propio producto digital usando Inteligencia Artificial (IA)?',
    subheadline: 'No importa tu nivel técnico. Vas a salir con un negocio listo usando lo que ya sabés.',
    progress: 15,
    options: [
      { id: 'ni_idea', label: 'Ni idea, nunca escuché hablar', icon: '❌' },
      { id: 'técnico', label: 'Escuché algo, pero me parece muy técnico para mí', icon: '👀' },
      { id: 'herramientas', label: 'Probé algunas herramientas, pero no logré vender nada', icon: '🎨' },
      { id: 'escalar', label: 'Ya uso IA, pero quiero escalar mis resultados', icon: '🚀' }
    ]
  },
  {
    id: 3,
    type: 'multiple-choice',
    heroEmoji: '🏆',
    headline: '¿Cuál es tu nivel actual creando negocios digitales o usando IA?',
    progress: 25,
    options: [
      { id: 'cero', label: 'Desde cero absoluto (me da miedo la tecnología)', icon: '😰' },
      { id: 'empezando', label: 'Estoy empezando, quiero aprender a hacerlo bien', icon: '🥹' },
      { id: 'trabado', label: 'Ya intenté crear algo antes, pero me trabé en el camino', icon: '🔧' },
      { id: 'experto', label: 'Ya tengo experiencia, pero quiero automatizar con agentes de IA', icon: '⚜️' }
    ]
  },
  {
    id: 4,
    type: 'multiple-choice',
    heroEmoji: '💸',
    headline: '¿Ya intentaste ganar plata por Internet antes?',
    progress: 35,
    options: [
      { id: 'primera', label: 'No, esta va a ser mi primera vez en serio', icon: '🥳' },
      { id: 'frustrado', label: 'Sí, compré cursos y lo intenté, pero me trabé y no vendí nada', icon: '😓' },
      { id: 'escalar_ventas', label: 'Sí, ya vendo algo, pero quiero escalar rápido con IA', icon: '💪' }
    ]
  },
  {
    id: 5,
    type: 'multiple-choice',
    heroEmoji: '🛑',
    headline: '¿Qué es lo que más te frena hoy para tener éxito en digital?',
    progress: 45,
    options: [
      { id: 'tiempo_limit', label: 'No tengo tiempo para cursos largos y teóricos', icon: '🏃🏻‍♂️' },
      { id: 'tecnica', label: 'La parte técnica me supera (no sé armar embudos ni webs)', icon: '🤯' },
      { id: 'miedo', label: 'Me da miedo caer en otra promesa vacía de gurús', icon: '😞' },
      { id: 'ideas', label: 'Tengo muchas ideas pero no sé por dónde arrancar', icon: '🤔' }
    ]
  },
  {
    id: 6,
    type: 'multiple-choice',
    heroEmoji: '⏳',
    headline: '¿Cuánto tiempo podés dedicarle a tu negocio?',
    alertText: '⚠️ Sé sincero, esto define qué tan rápido vas a ver plata.',
    progress: 50,
    options: [
      { id: 'poco', label: 'Tengo muy poco tiempo (menos de 1 hora al día)', icon: '🕐' },
      { id: 'workshop', label: 'Estoy dispuesto a bloquear un fin de semana entero para dejar todo listo.', icon: '🗓️', isHighlighted: true },
      { id: 'full', label: 'Tengo tiempo libre y quiero resultados ¡YA!.', icon: '⚡' }
    ]
  },
  {
    id: 7,
    type: 'multiple-choice',
    heroEmoji: '🗺️',
    headline: '¿Sentís que te falta un mapa exacto para dejar de perder tiempo con teoría y empezar a facturar de verdad?',
    subheadline: 'La mayoría falla por exceso de información desordenada.',
    progress: 58,
    options: [
      { id: 'arrancar', label: 'Sí, no sé ni por dónde arrancar.', icon: '😔' },
      { id: 'directo', label: 'Sí, quiero evitar errores e ir directo al punto.', icon: '🎯' },
      { id: 'entender', label: 'No sé, pero me gustaría entender más el camino.', icon: '💡' }
    ]
  },
  {
    id: 8,
    type: 'multiple-choice',
    heroEmoji: '🛡️',
    headline: '¿Creés que tener un acompañamiento y un método comprobado te ayudaría a acelerar los resultados?',
    progress: 66,
    options: [
      { id: 'seguro', label: 'Sí, con seguridad eso ayudaría mucho.', icon: '🚀' },
      { id: 'guia', label: 'Sí, necesito que alguien me guíe (no quiero hacerlo solo).', icon: '🙌🏻' },
      { id: 'seguridad', label: 'Puede ser, pero necesito que sea seguro.', icon: '💡' }
    ]
  },
  {
    id: 9,
    type: 'multiple-choice',
    heroEmoji: '🧠',
    headline: 'Si tuvieras un paso a paso claro, con clases rápidas y fáciles de aplicar, ¿cómo te sentirías?',
    progress: 75,
    options: [
      { id: 'confiado', label: 'Confiado, para comenzar ahora mismo.', icon: '😌' },
      { id: 'animado', label: 'Animado para alcanzar nuevos objetivos.', icon: '🏆' },
      { id: 'aliviado', label: 'Aliviado por poder evitar errores técnicos.', icon: '😮‍💨' }
    ]
  },
  {
    id: 10,
    type: 'multiple-choice',
    heroEmoji: '💰',
    headline: '¿Cómo te imaginarías si pudieras ganar de $500 a $2.000 USD extra al mes trabajando pocas horas desde casa?',
    subheadline: 'Esto es solo el comienzo del potencial real.',
    progress: 85,
    options: [
      { id: 'ingreso', label: 'Completando mi ingreso actual.', icon: '💵' },
      { id: 'su सपनों', label: 'Realizando algunos sueños personales.', icon: '🏡' },
      { id: 'familia', label: 'Con libertad financiera para pasar tiempo con mi familia.', icon: '❤️' },
      { id: 'amor', label: 'Trabajando de algo que realmente amo.', icon: '💻' }
    ]
  },
  {
    id: 11,
    type: 'multiple-choice',
    heroEmoji: '🔥',
    headline: '¿Estás listo para comenzar a ganar dinero y cambiar tu vida ahora mismo?',
    subheadline: 'Solo depende de ti...',
    progress: 95,
    options: [
      { id: 'listo', label: '¡100% LISTO!', icon: '🔥', variant: 'primary' },
      { id: 'duda', label: 'No sé...', icon: '🤔', variant: 'secondary' }
    ]
  }
];
