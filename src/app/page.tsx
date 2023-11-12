import Image from 'next/image'
import { Suspense } from 'react'


import Intro from '@/components/intro/intro'

import About from '@/components/about/about'
import Projects from '@/components/projects/projects'
import Contact from '@/components/contact/contact'

export default function Home() {
  return (
    <main className="  items-center z-0 w-screen ">

      {/* Page intro */}
      <Intro />

      {/* ABOUT */}
      <Suspense fallback={<div>Loading About...</div>} >
        <About />
      </Suspense>

      {/* PROJECTS (carousel) */}
      <Suspense fallback={<div>Loading Contact Page...</div>} >
        <Projects/>
      </Suspense>


      {/* CONTACT */}
      <Suspense fallback={<div>Loading Contact Page...</div>} >
        <Contact/>
      </Suspense>






    </main>
  )
}




