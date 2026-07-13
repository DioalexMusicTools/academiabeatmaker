import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.dioalex.com'),
  title: 'Academia Beatmaker — Formación para Productores Musicales',
  description: 'Aprende producción musical desde cero. Domina FL Studio, mezcla, beats y monetiza tu talento con Academia Beatmaker.',
  keywords: 'producción musical, beatmaker, fl studio, curso de música, beats urbanos',
  openGraph: {
    title: 'Academia Beatmaker',
    description: 'Aprende producción musical desde cero y crea beats profesionales.',
    url: 'https://www.dioalex.com',
    siteName: 'Academia Beatmaker',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
