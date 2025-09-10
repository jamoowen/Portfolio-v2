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
                        I&apos;m James.                     </p>
                    <p className="text-3xl font-bold text-zinc-200 sm:text-4xl">
                        I&apos;m a Backend Engineer, Amateur Boxer, and a life long learner.
                    </p>
                    <p className="text-xl font-normal">
                        I&apos;m a Backend leaning Engineer with a wealth of experience building scalable backends with Node and sometimes Go. I can work across the stack if needed and even have some experience with Smart Contract as well as Data Engineering.
                    </p>
                    <p className="text-xl font-normal">
                        When I&apos;m not coding, I&apos;m  challenging myself in other ways: either in the boxing ring, or tackling a new language, or even sometimes in an intense 1v1 on Rust (those who know, know). Overcoming tough challenges and levelling up my skills in life are what drive me daily.
                    </p>

                    {/* Tech Stack Section */}
                    <div className="pt-6">
                        <h3 className="mb-4 text-2xl text-zinc-200">Technical Experience</h3>
                        <div className="grid grid-cols-2 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-emerald-400">Languages</span>
                                <p className="text-sm font-normal">TypeScript, Go, JavaScript</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-blue-400">Web Development</span>
                                <p className="text-sm font-normal">NodeJS, NestJS, React, NextJS, KoaJS, JWT auth, REST API, RTK Query</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-purple-400">Data & Storage</span>
                                <p className="text-sm font-normal">Postgres, MongoDB, Redis, Apache Kafka, BigQuery</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-yellow-400">Cloud & Infrastructure</span>
                                <p className="text-sm font-normal">AWS, GCP, Kubernetes, Docker</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-red-400">Testing & Tooling</span>
                                <p className="text-sm font-normal">Jest, Git, Github Actions, Agile, MacOS, Ubuntu Server</p>
                            </div>
                            <div className="p-3 rounded-lg bg-zinc-800/50">
                                <span className="text-indigo-400">Other</span>
                                <p className="text-sm font-normal">Smart Contract development, Data Engineering</p>
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
