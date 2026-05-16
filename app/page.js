import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbe600]/20 via-black to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#fbe600]/15 border border-[#fbe600] text-sm font-medium mb-6">
              Academia Beatmaker • Formación para Productores Musicales
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Aprende Producción Musical desde Cero y crea beats profesionales.
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
              Domina FL Studio, mezcla, estructura musical, creación de beats y estrategias para monetizar tu talento como productor musical.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#inscripcion"
                className="bg-[#fbe600] hover:bg-[#ffe81a] text-black transition px-8 py-4 rounded-2xl font-bold text-center shadow-2xl shadow-[#fbe600]/20"
              >
                Inscribirme Ahora
              </a>
              <a
                href="#curso"
                className="border border-zinc-700 hover:border-[#fbe600] hover:bg-[#fbe600]/10 transition px-8 py-4 rounded-2xl font-semibold text-center"
              >
                Ver Información
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <h3 className="text-3xl font-black">+500</h3>
                <p className="text-zinc-400 text-sm">Estudiantes</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <h3 className="text-3xl font-black">100%</h3>
                <p className="text-zinc-400 text-sm">Práctico</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <h3 className="text-3xl font-black">Online</h3>
                <p className="text-zinc-400 text-sm">y Presencial</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl shadow-[#fbe600]/20 bg-zinc-900">
              <img
                src="/produccion-musical-101.png"
                alt="Producción Musical"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 max-w-xs shadow-2xl">
              <p className="text-sm text-zinc-400 mb-2">Próximo Curso</p>
              <h3 className="font-black text-2xl mb-2">Producción Musical 101</h3>
              <p className="text-zinc-300 text-sm">Inicia Junio 2026 • Cupos Limitados</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE LA ACADEMIA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/productores-para-productores.png"
              alt="Academia Beatmaker"
              className="rounded-[32px] border border-zinc-800 w-full"
            />
          </div>
          <div>
            <span className="text-[#fbe600] font-semibold uppercase tracking-widest text-sm">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6 leading-tight">
              Academia Creada por Productores para Productores.
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
              En Academia Beatmaker enseñamos producción musical de manera práctica y enfocada en resultados reales. Nuestro objetivo es ayudarte a crear música profesional, desarrollar tu identidad sonora y convertir tu talento en una oportunidad de negocio.
            </p>
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">Aprendizaje Práctico</h3>
                <p className="text-zinc-400">Trabaja proyectos reales desde la primera clase.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">Mentoría Personalizada</h3>
                <p className="text-zinc-400">Recibe feedback y acompañamiento durante tu proceso.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">Enfoque Comercial</h3>
                <p className="text-zinc-400">Aprende también cómo vender beats y posicionarte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURSO */}
      <section id="curso" className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <span className="text-[#fbe600] font-semibold uppercase tracking-widest text-sm">
              Curso Destacado
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mt-4 mb-6">
              Producción Musical 101
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              El programa ideal para comenzar desde cero y aprender a producir música urbana, beats y canciones completas utilizando FL Studio.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black mb-4">¿Qué aprenderás?</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Uso completo de FL Studio</li>
                <li>• Creación de beats urbanos</li>
                <li>• Drum patterns y melodías</li>
                <li>• Mezcla básica profesional</li>
                <li>• Exportación y distribución</li>
                <li>• Branding para productores</li>
              </ul>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black mb-4">Curso Incluye</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Clases en vivo</li>
                <li>• Acceso a grabaciones</li>
                <li>• Material descargable</li>
                <li>• Certificado digital</li>
                <li>• Grupo privado</li>
                <li>• Feedback personalizado</li>
              </ul>
            </div>

            <div className="bg-[#fbe600] rounded-3xl p-8 text-black flex flex-col justify-between">
              <div>
                <p className="font-bold uppercase tracking-widest mb-4 text-sm">Próxima Cohorte</p>
                <h3 className="text-5xl font-black mb-4">Junio 2026</h3>
                <p className="font-medium mb-8">Cupos limitados disponibles.</p>
              </div>
              <a
                href="#inscripcion"
                className="bg-black text-white px-6 py-4 rounded-2xl font-bold text-center hover:bg-zinc-900 transition"
              >
                Reservar Mi Cupo
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold mb-2">Modalidad</h4>
              <p className="text-zinc-400">Online / Presencial</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold mb-2">Duración</h4>
              <p className="text-zinc-400">8 Semanas</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold mb-2">Nivel</h4>
              <p className="text-zinc-400">Principiante</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold mb-2">Software</h4>
              <p className="text-zinc-400">FL Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-[#fbe600] font-semibold uppercase tracking-widest text-sm">
          Tu Instructor
        </span>
        <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-16 leading-tight">
          La persona detrás de Academia Beatmaker.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl shadow-[#fbe600]/10">
            <img
              src="/dioalex.png"
              alt="Dioalex Beatz en el estudio"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-[#fbe600] text-black rounded-xl px-4 py-2">
              <p className="text-xs font-bold uppercase tracking-wider">Productor & Mentor</p>
            </div>
          </div>

          <div>
            <h3 className="text-5xl lg:text-6xl font-black mb-2">Dioalex Beatz</h3>
            <p className="text-zinc-400 text-lg mb-8">
              Productor Musical · BeatMaker · Especialista en Marketing Musical
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mb-10">
              Productor musical con experiencia en géneros urbanos, marketing musical
              y desarrollo de marca para artistas emergentes. Ha formado a cientos de
              productores que hoy crean música profesional y generan ingresos con sus beats.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h4 className="text-4xl font-black text-[#fbe600]">+500</h4>
                <p className="text-zinc-400 text-sm mt-1">Estudiantes formados</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h4 className="text-4xl font-black text-[#fbe600]">+15 años</h4>
                <p className="text-zinc-400 text-sm mt-1">En producción musical</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Producción Musical", "Beatmaking", "Marketing Musical", "Mezcla & Mastering", "Ventas de Beats", "Branding"].map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#fbe600] font-semibold uppercase tracking-widest text-sm">
              Testimonios
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-zinc-300 text-lg">
              Productores que comenzaron desde cero y hoy crean música con calidad profesional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Contenido super interesante y de alta calidad, por precios muy bajos.
                Estoy sorprendido y plenamente satisfecho del trato recibido. ¡Muchas Gracias!"
              </p>
              <div>
                <h4 className="font-bold">Simone Pisani.</h4>
                <p className="text-zinc-500 text-sm">Productor Musical</p>
              </div>
            </div>
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Excelente curso, mucha información valiosa y te guían paso a paso en el proceso
                con la debida atención logras el objetivo."
              </p>
              <div>
                <h4 className="font-bold">Prakata.</h4>
                <p className="text-zinc-500 text-sm">Beatmaker</p>
              </div>
            </div>
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Aprendí producción y también cómo comenzar a vender mis beats online."
              </p>
              <div>
                <h4 className="font-bold">Luis T.</h4>
                <p className="text-zinc-500 text-sm">Productor Independiente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="text-[#fbe600] font-semibold uppercase tracking-widest text-sm">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-zinc-400 text-lg">
              Si tienes alguna otra duda, escríbenos por WhatsApp.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">¿Necesito experiencia previa en producción musical?</h3>
              <p className="text-zinc-400 leading-relaxed">No. Producción Musical 101 está diseñado para comenzar desde cero. No necesitas saber nada de música ni de software — te enseñamos todo paso a paso desde la primera clase.</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">¿Qué equipo necesito para tomar el curso?</h3>
              <p className="text-zinc-400 leading-relaxed">Solo necesitas una computadora (Mac o PC) que soporte FL Studio. No necesitas una computadora potente para empezar. Auriculares o parlantes son opcionales pero recomendados.</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">¿Las clases son en vivo o grabadas?</h3>
              <p className="text-zinc-400 leading-relaxed">Las clases son en vivo para que puedas interactuar directamente con el instructor. Además, todas las sesiones quedan grabadas y tendrás acceso a ellas para repasar el contenido cuando quieras.</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">¿Cuánto dura el curso y cuál es la inversión?</h3>
              <p className="text-zinc-400 leading-relaxed">El curso tiene una duración de 8 semanas. Para conocer el precio actual y los métodos de pago disponibles, escríbenos por WhatsApp y te damos toda la información.</p>
            </div>
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">¿Recibo algún certificado al finalizar?</h3>
              <p className="text-zinc-400 leading-relaxed">Sí. Al completar el curso recibes un certificado digital de Academia Beatmaker que acredita tu formación en Producción Musical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="inscripcion" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#fbe600] to-[#ffd500] rounded-[40px] p-10 lg:p-16 text-black text-center shadow-2xl shadow-[#fbe600]/20">
          <span className="uppercase tracking-widest font-bold text-sm">Inscripciones Abiertas</span>
          <h2 className="text-4xl lg:text-6xl font-black mt-4 mb-6 leading-tight">
            Convierte tu pasión por la música en una habilidad profesional.
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-medium mb-10">
            Únete a Academia Beatmaker y aprende producción musical con un sistema práctico, moderno y enfocado en resultados reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/FPWKB6V27UDHD1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/academiabeatmaker"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/30 px-8 py-4 rounded-2xl font-bold hover:bg-black/10 transition"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-black">Academia Beatmaker</h3>
            <p className="text-zinc-500 mt-2">Formación moderna para productores musicales.</p>
          </div>
          <div className="flex gap-6 text-zinc-400">
            <a
              href="https://www.instagram.com/academiabeatmaker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/message/FPWKB6V27UDHD1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.youtube.com/@academiabeatmaker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}