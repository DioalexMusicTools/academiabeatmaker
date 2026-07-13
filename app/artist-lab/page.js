const WHATSAPP_URL = 'https://wa.me/message/FPWKB6V27UDHD1'

export const metadata = {
  title: 'Artist Lab Alpha | by Dioalex Beatz',
  description:
    'Una membresía creativa para artistas que quieren mantener un flujo constante de lanzamientos profesionales.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': 0,
      'max-image-preview': 'none',
      'max-video-preview': 0,
    },
  },
}

const membershipItems = [
  '1 producción musical completa por mes',
  'Grabación, edición vocal, mezcla y mastering',
  '1 videoclip sencillo o performance video',
  'Reunión mensual de planificación creativa',
  'Calendario y prioridad de agenda',
  'Seguimiento durante cada ciclo',
]

const includedItems = [
  'Producción musical personalizada',
  'Dirección y grabación vocal',
  'Mezcla y mastering',
  'Videoclip sencillo en una locación',
  'Planificación creativa junto al artista y su equipo',
  'Entrega lista para distribución',
]

const excludedItems = [
  'Distribución digital o pitching',
  'Management, relaciones públicas o community management',
  'Campañas publicitarias',
  'Locaciones, actores, maquillaje o utilería pagada',
  'Videoclips narrativos o de producción compleja',
  'Promesas de viralidad o resultados garantizados',
]

const processSteps = [
  {
    label: 'SEMANA 1',
    title: 'Planificar y producir',
    text: 'Definimos referencias, dirección y estructura de la canción.',
  },
  {
    label: 'SEMANA 2',
    title: 'Grabar y pulir',
    text: 'Grabamos voces, editamos y trabajamos la mezcla y el master.',
  },
  {
    label: 'SEMANA 3',
    title: 'Conceptualizar y rodar',
    text: 'Diseñamos un video sencillo y realizamos el rodaje.',
  },
  {
    label: 'SEMANA 4',
    title: 'Editar y entregar',
    text: 'Finalizamos el video, consolidamos revisiones y preparamos el próximo ciclo.',
  },
]

const faqItems = [
  {
    question: '¿Artist Lab distribuye mi música?',
    answer:
      'No. Entregamos la canción y el video listos. La distribución y la ejecución de la campaña corresponden al artista o a su equipo.',
  },
  {
    question: '¿Puedo acumular una canción o un video?',
    answer:
      'No. La membresía reserva capacidad para un ciclo mensual. Los servicios no utilizados por retrasos del artista no se acumulan.',
  },
  {
    question: '¿Qué se considera un video sencillo?',
    answer:
      'Un performance video o concepto sencillo, normalmente en una locación y con un rodaje de hasta dos horas. Las producciones complejas se cotizan por separado.',
  },
  {
    question: '¿Cuántas revisiones incluye?',
    answer:
      'La propuesta Alpha contempla hasta dos rondas musicales y una ronda consolidada para el video, siempre dentro del alcance aprobado.',
  },
  {
    question: '¿Qué ocurre después de solicitar la llamada?',
    answer:
      'Conversaremos sobre tu proyecto, evaluaremos si Artist Lab encaja con tu etapa actual y te explicaré los siguientes pasos del programa Alpha.',
  },
]

function WhatsAppButton({ children, className = '' }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-2xl bg-[#FFD200] px-7 py-4 text-center font-black text-black transition hover:-translate-y-0.5 hover:bg-[#ffe04d] ${className}`}
    >
      {children}
    </a>
  )
}

function CheckList({ items, dark = true }) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 border-b py-3 text-sm leading-relaxed ${
            dark ? 'border-zinc-800 text-zinc-300' : 'border-zinc-200 text-zinc-700'
          }`}
        >
          <span className="font-black text-[#FFD200]">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ArtistLabPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F7F7F4]">
      <header className="sticky top-0 z-50 border-b border-zinc-800/90 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#inicio" aria-label="Ir al inicio de Artist Lab">
            <img
              src="/artist-lab/artist-lab-logo.png"
              alt="Artist Lab by Dioalex Beatz"
              className="h-auto w-[190px] sm:w-[245px]"
            />
          </a>

          <nav className="flex items-center gap-6 text-sm font-semibold text-zinc-300">
            <a href="#propuesta" className="hidden transition hover:text-white md:inline">
              La propuesta
            </a>
            <a href="#incluye" className="hidden transition hover:text-white md:inline">
              Qué incluye
            </a>
            <a href="#proceso" className="hidden transition hover:text-white lg:inline">
              Proceso
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#FFD200] px-4 py-2 text-[#FFD200] transition hover:bg-[#FFD200] hover:text-black"
            >
              Solicitar llamada
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,210,0,0.16),transparent_32%),linear-gradient(135deg,#050505_45%,#171717)]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#FFD200]">
                Programa Alpha · Acceso privado
              </span>

              <h1 className="mt-6 max-w-[10ch] text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Tu carrera no puede depender de la inspiración.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 lg:text-xl">
                Obtén un equipo creativo dedicado a tu proyecto musical y mantén un flujo
                constante de lanzamientos profesionales, mes tras mes.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton>Solicitar una llamada</WhatsAppButton>
                <a
                  href="#incluye"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-7 py-4 font-bold transition hover:border-[#FFD200] hover:bg-[#FFD200]/10"
                >
                  Conocer la membresía
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 divide-y divide-zinc-800 border border-zinc-800 bg-black/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  ['1 canción', 'terminada cada mes'],
                  ['1 video', 'sencillo cada mes'],
                  ['Un equipo', 'dentro de un proceso continuo'],
                ].map(([title, text]) => (
                  <div key={title} className="p-5">
                    <strong className="block text-lg">{title}</strong>
                    <span className="mt-1 block text-xs text-zinc-500">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-x-3 -inset-y-3 translate-x-3 translate-y-3 border-2 border-[#FFD200]" />
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <img
                  src="/artist-lab/dioalex-portrait.jpg"
                  alt="Dioalex Beatz trabajando en su estudio"
                  className="h-full w-full object-cover object-top saturate-[0.75] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-bold text-white">
                    Una membresía creativa respaldada por Dioalex Beatz.
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section id="propuesta" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
            01 / El problema
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Un lanzamiento aislado puede llamar la atención. La consistencia construye la
              carrera.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
              <p>
                Muchos artistas tienen talento e ideas, pero su proceso se detiene entre una
                canción y la siguiente. Deben buscar productor, estudio, mezcla, video y edición
                por separado.
              </p>
              <p>
                Los costos cambian, las agendas no coinciden y cada lanzamiento vuelve a empezar
                desde cero.
              </p>
              <p className="font-bold text-white">
                Artist Lab convierte ese proceso fragmentado en una relación de trabajo continua.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-[#171717]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
              02 / La promesa
            </p>
            <h2 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Somos el equipo creativo que trabaja junto a ti para que tu carrera nunca deje de
              avanzar.
            </h2>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                ['01', 'Crear', 'Desarrollamos una canción con dirección, identidad y calidad profesional.'],
                ['02', 'Visualizar', 'Producimos un videoclip sencillo coherente con el lanzamiento.'],
                ['03', 'Mejorar', 'Aprendemos de cada ciclo para elevar el siguiente lanzamiento.'],
              ].map(([number, title, text]) => (
                <article key={title} className="border border-zinc-700 bg-black/35 p-7">
                  <span className="text-sm font-black text-[#FFD200]">{number}</span>
                  <h3 className="mt-8 text-3xl font-black">{title}</h3>
                  <p className="mt-4 leading-relaxed text-zinc-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="incluye" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
            03 / Artist Lab Membership
          </p>

          <div className="mt-8 grid items-start gap-14 lg:grid-cols-[1fr_.85fr] lg:gap-20">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Un ciclo de producción mensual, no una colección de servicios sueltos.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Artist Lab está diseñado para transformar tus ideas en lanzamientos listos para
                que tú y tu equipo ejecuten la distribución y la campaña con más claridad,
                consistencia y dirección.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <img
                  src="/artist-lab/dioalex-process-1.jpg"
                  alt="Proceso de producción musical en Artist Lab"
                  className="aspect-[4/3] w-full object-cover grayscale-[25%]"
                />
                <img
                  src="/artist-lab/dioalex-process-2.jpg"
                  alt="Proceso audiovisual de Artist Lab"
                  className="aspect-[4/3] w-full object-cover grayscale-[25%]"
                />
              </div>
            </div>

            <aside className="border border-zinc-700 border-t-4 border-t-[#FFD200] bg-[#0d0d0d] p-7 sm:p-9">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
                Membresía Artist Lab
              </span>
              <p className="mt-6 leading-relaxed text-zinc-300">
                Una experiencia de trabajo continuo para artistas que quieren avanzar con orden,
                calidad y acompañamiento creativo real.
              </p>
              <div className="mt-7">
                <CheckList items={membershipItems} />
              </div>
              <WhatsAppButton className="mt-8 w-full">Solicitar una llamada</WhatsAppButton>
            </aside>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
              04 / Alcance claro
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="border border-zinc-800 border-t-4 border-t-[#FFD200] bg-black p-7 sm:p-9">
                <h3 className="text-3xl font-black">Lo que sí hacemos</h3>
                <div className="mt-6">
                  <CheckList items={includedItems} />
                </div>
              </article>

              <article className="border border-zinc-800 border-t-4 border-t-zinc-600 bg-black p-7 sm:p-9">
                <h3 className="text-3xl font-black">Lo que no incluye</h3>
                <div className="mt-6">
                  <CheckList items={excludedItems} />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="proceso" className="bg-[#171717]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
              05 / Cómo funciona
            </p>
            <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Cada mes, un paso adelante.
            </h2>

            <ol className="mt-14 grid divide-y divide-zinc-700 border border-zinc-700 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
              {processSteps.map((step) => (
                <li key={step.label} className="min-h-[250px] bg-[#171717] p-7">
                  <span className="text-xs font-black tracking-[0.18em] text-[#FFD200]">
                    {step.label}
                  </span>
                  <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-zinc-400">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
            06 / ¿Es para ti?
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="border border-zinc-800 border-t-4 border-t-[#FFD200] bg-zinc-950 p-7 sm:p-9">
              <h3 className="text-3xl font-black">Artist Lab es para ti si...</h3>
              <div className="mt-6">
                <CheckList
                  items={[
                    'Ya estás desarrollando una propuesta artística',
                    'Quieres publicar con más frecuencia y calidad',
                    'Valoras el feedback y la colaboración',
                    'Puedes cumplir fechas y tomar decisiones',
                    'Entiendes que una carrera se construye lanzamiento tras lanzamiento',
                  ]}
                />
              </div>
            </article>

            <article className="border border-zinc-800 border-t-4 border-t-zinc-600 bg-zinc-950 p-7 sm:p-9">
              <h3 className="text-3xl font-black">No es para ti si...</h3>
              <div className="mt-6">
                <CheckList
                  items={[
                    'Buscas fama inmediata o fórmulas garantizadas',
                    'Quieres delegar toda la responsabilidad de tu carrera',
                    'No puedes sostener un ritmo mensual',
                    'No aceptas procesos, feedback o planificación',
                    'Solo te interesa obtener un descuento',
                  ]}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
              07 / Derechos y créditos
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ['100%', 'Letra', 'La participación correspondiente a la letra pertenece al compositor o compositores de la letra.'],
                ['100%', 'Composición musical', 'La participación correspondiente a la composición musical pertenece a Dioalex Sánchez.'],
                ['90 / 10', 'Máster', 'Salvo acuerdo distinto por escrito, el artista conserva 90% y Dioalex Sánchez 10% del máster y de sus ingresos netos.'],
                ['Créditos', 'Dioalex Sánchez', 'Productor Musical, Ingeniero de Mezcla e Ingeniero de Mastering.'],
              ].map(([number, title, text]) => (
                <article key={title} className="border border-zinc-800 bg-black p-7">
                  <strong className="text-3xl font-black text-[#FFD200]">{number}</strong>
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{text}</p>
                </article>
              ))}
            </div>

            <p className="mt-7 max-w-4xl text-sm leading-relaxed text-zinc-500">
              Los términos finales se documentan por escrito para cada obra y grabación. El
              acuerdo de membresía se revisa y firma antes de iniciar.
            </p>
          </div>
        </section>

        <section className="bg-[#171717]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <img
              src="/artist-lab/dioalex-portrait-wide.jpg"
              alt="Dioalex Beatz, productor musical y fundador de Artist Lab"
              className="aspect-[4/3] w-full object-cover grayscale-[35%]"
            />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
                08 / Respaldado por Dioalex Beatz
              </p>
              <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Un productor que conoce la música, el proceso y la realidad del artista
                independiente.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-zinc-300">
                Dioalex Sánchez combina producción musical, ingeniería de mezcla y mastering,
                dirección creativa y experiencia audiovisual. Artist Lab reúne esas capacidades
                dentro de una relación de trabajo estable.
              </p>
              <blockquote className="mt-8 border-l-4 border-[#FFD200] pl-5 text-xl font-bold text-[#FFD200]">
                “No trabajamos para que tengas una canción más. Trabajamos para que tu carrera
                siga avanzando.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-32">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD200]">
            09 / Preguntas frecuentes
          </p>
          <div className="mt-8 divide-y divide-zinc-800 border-y border-zinc-800">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black">
                  {item.question}
                  <span className="text-[#FFD200] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-zinc-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F7F4] text-black">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-32">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8c7300]">
                Contacto directo
              </span>
              <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Solicita una llamada conmigo y conversemos sobre tu proyecto.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-zinc-700">
                Si sientes que Artist Lab puede ayudarte a mantener un flujo constante de
                lanzamientos profesionales, escríbeme por WhatsApp y coordinamos una llamada.
              </p>
            </div>

            <div className="border border-zinc-300 bg-white p-7 shadow-2xl shadow-black/10 sm:p-10">
              <p className="font-bold text-zinc-800">En la llamada podremos revisar:</p>
              <div className="mt-5">
                <CheckList
                  dark={false}
                  items={[
                    'Tu etapa actual como artista',
                    'El tipo de música y contenido que estás creando',
                    'Si Artist Lab encaja con tus objetivos',
                    'Cómo sería el siguiente paso si decidimos trabajar juntos',
                  ]}
                />
              </div>
              <WhatsAppButton className="mt-8 w-full">Solicitar llamada por WhatsApp</WhatsAppButton>
              <p className="mt-4 text-center text-xs text-zinc-500">
                Serás redirigido a WhatsApp Business para iniciar la conversación.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 text-sm text-zinc-500 sm:flex-row sm:items-center lg:px-8">
          <img
            src="/artist-lab/artist-lab-logo.png"
            alt="Artist Lab by Dioalex Beatz"
            className="h-auto w-[220px]"
          />
          <p>La consistencia construye carreras.</p>
          <p>Programa Alpha · Presentación privada · 2026</p>
        </div>
      </footer>
    </div>
  )
}
