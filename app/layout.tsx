import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Favicon from '@/app/favicon.ico';
import Footer from '@/layouts/Footer'
import NavigationBar from '@/layouts/NavigationBar'
import RootContainer from '@/layouts/RootContainer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen grid grid-rows-[auto,1fr,auto] leading-relaxed tracking-wide`}>
        <RootContainer>
          <NavigationBar/>
          {children}
          <Footer/>
        </RootContainer>
      </body>
    </html>
  )
}
