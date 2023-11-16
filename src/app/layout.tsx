import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

import { Inter as FontSans, Permanent_Marker as Marker, Raleway,Rubik ,Press_Start_2P, Rubik_Glitch } from "next/font/google"
import Nav from '../components/nav'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
  description: 'Full Stack Web2 and Web3 Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${fontSans.variable} ${fontMarker.variable} ${fontRaleway.variable} ${font2P.variable} ${fontRubik.variable}`}>
      <body className={`min-h-screen bg-background font-sans antialiased `}>
        <Nav />
        {children}
        <Toaster />
        </body>

    </html>
  )
}

