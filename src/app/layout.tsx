import type { Metadata } from 'next'

import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

import { Merriweather, Permanent_Marker as Marker, Raleway, Rubik, Press_Start_2P } from "next/font/google"
import Nav from '../components/nav'

export const fontSerif = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: '--font-serif',
})

export const fontMarker = Marker({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marker",
})
export const fontRaleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})
export const font2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-2p",
})
export const fontRubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: 'James Owen',
  description: 'Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontMarker.variable} ${fontRaleway.variable} ${font2P.variable} ${fontRubik.variable}`}>
      <body className={`min-h-screen bg-background font-serif antialiased`}>
        <Nav />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}

