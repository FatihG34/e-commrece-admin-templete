import type { Metadata } from 'next'
import { dir } from 'i18next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { languages } from '../i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Trader App',
  description: 'This website contains wholesale reliable products',
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Navbar lng={lng} />
        {children}
      </body>
    </html>
  )
}
