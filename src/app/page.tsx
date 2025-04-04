import Image from 'next/image'
import { Suspense } from 'react'


import Intro from '@/components/intro/intro'

import Contact from '@/components/contact/contact'

export default function Home() {
  return (
    <main className="  items-center z-0  ">

      {/* Page intro */}
      <Intro />

      {/* CONTACT */}
      <Suspense fallback={<div>Loading Contact Page...</div>} >
        <Contact/>
      </Suspense>
      

    </main>
  )
}




