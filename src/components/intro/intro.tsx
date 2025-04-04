'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SectionButtons from '../section-buttons';

const Intro = () => {
    return (
        <div className='relative w-full min-h-screen'>
            <div className="flex items-center justify-center py-10 text-4xl font-bold md:mt-10 md:mb-10 text-zinc-400 text-opacity-70 sm:text-6xl">
                James Owen
            </div>

            <div className="relative grid items-start w-full h-screen grid-cols-1 gap-4 px-4 overflow-hidden text-xl bg-opacity-10 sm:text-2xl md:gap-4 md:px-16 lg:px-32">
                {/* Main introduction */}
                <div className="space-y-6 text-zinc-300">
                    <p className="text-3xl font-bold text-zinc-200 sm:text-4xl">
                        I'm James.                     </p>
                    <p className="text-3xl font-bold text-zinc-200 sm:text-4xl">
                        I'm a Backend Engineer, Amateur Boxer, and a life long learner.
                    </p>


                    <p className="text-xl font-normal">
                        I love building scalable, distributed systems and APIs that power modern applications.
                        I am currently working at Tribally Studios, where I build across the tribally stack. Primarily building microservices with  Node.j, Kafka, Postgres, etc.
                    </p>

                    {/* Tech Stack Section */}
                    <div className="pt-6">
                        <h3 className="mb-4 text-2xl text-zinc-200">Technical Experience</h3>
                        <div className="grid grid-cols-2 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-emerald-400">Languages</span>
                                <p className="text-sm font-normal">TypeScript, Go, Python, JavaScript</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-blue-400">Web Development</span>
                                <p className="text-sm font-normal">NodeJS, React, NextJS, ExpressJS, KoaJS, JWT auth, REST API, RTK Query</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-purple-400">Data & Storage</span>
                                <p className="text-sm font-normal">Postgres, MongoDB, Redis, Apache Kafka, BigQuery</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-yellow-400">Cloud & Infrastructure</span>
                                <p className="text-sm font-normal">GCP, Kubernetes, Docker, Cloud Run, Cloud Functions</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-red-400">Testing & Tools</span>
                                <p className="text-sm font-normal">Jest, Git, Github Actions, Agile, MacOS, Ubuntu Server</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-indigo-400">Other</span>
                                <p className="text-sm font-normal">Smart Contract development, Puppeteer, Selenium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Image className='object-none w-full opacity-50 mt-72 -z-10 grayscale' fill src='/images/mountains-better-1.png' alt='background mountains' />
        </div>
    )
}

export default Intro