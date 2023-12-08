'use client'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SectionButtons from '../section-buttons';
import { FaHandPointLeft } from "react-icons/fa";


const Intro = () => {
    const router = useRouter();

    const [start, setStart] = useState(false)
    const [rep, setRep] = useState(0)
    const [showButtons, setShowButtons] = useState(false)




    const handleClick = () => {
      
        if (!start) {
            setTimeout(() => {
                setShowButtons(true)
            }, 10500);
            setStart(true)
        } else {
            router.refresh()
        }
 
    }

    return (
        <div className='relative w-full min-h-screen '>

            <div className="flex items-center justify-center py-10 text-4xl font-black font-raleway md:mt-10 md:mb-10 text-zinc-400 text-opacity-70 sm:text-6xl">
                James Owen
            </div>

            <div className="relative grid items-start w-full h-screen grid-cols-6 gap-4 px-2 overflow-hidden text-xl font-bold bg-opacity-10 sm:text-3xl md:gap-4 font-rubik">

                <div onClick={handleClick} className='absolute top-0 h-32 col-start-1 col-end-2 px-2 w-14 md:w-24 animate-bounce-temporary text-background '>
                    -                <br />.<br />.
                    <Image

                        src="/images/windows-start-xs.png"
                        alt='windows start button'
                        fill
                        className={`cursor-pointer z-20 max-h-14 w-full md:w-min object-contain mb-3 text-2xl font-semibold`}

                    />
                </div>

                <div className='col-span-5 col-start-2 mt-3 sm:mt-1'>
                    {start ?
                        <>
                            <div className='gap-2 px-5 '>
                                <TypeAnimation
                                    className='items-start '
                                    sequence={[
                                        300,
                                        "Hi",
                                        1000, // Waits 1s
                                        "Hi, I'm James 👋",

                                        () => {
                                        },
                                    ]}
                                    style={{
                                        display: 'inline-block',
                                    }}

                                    wrapper="span"
                                    cursor={false}
                                    repeat={rep}

                                />
                                <TypeAnimation
                                    sequence={[

                                        3000, // Waits 1s
                                        "I'm a developer!",
                                        700,
                                        "I'm a Web Developer, Entrepreneur, and amateur boxer!",
                                   
                                        () => {
                                        },
                                    ]}
                                    style={{
                                        display: 'block',
                                    }}

                                    wrapper="span"
                                    cursor={false}
                                    repeat={rep}

                                />
                                <TypeAnimation
                                    sequence={[

                                        9300, // Waits 1s
                                        "Welcome to my portfolio.",

                                        () => {
                                        },
                                    ]}
                                    style={{
                                        display: 'block',
                                    }}

                                    wrapper="span"
                                    cursor={false}
                                    repeat={rep}

                                />
                            </div>
                        </>
                        : <div className='flex flex-row gap-2 mt-2 cursor-default text-windows '> <p className='animate-bounce-left'><FaHandPointLeft/></p> Click here </div>
                    }

                </div>
                <div className='h-auto col-span-4 col-start-2 px-5 mb-56'>
                    {
                        showButtons &&
                        <div className='z-10 min-h-full '>
                            <SectionButtons />
                        </div>
                    }

                </div>

            </div>

            <Image className='object-none w-full opacity-50 mt-72 -z-10 grayscale ' fill src='/images/mountains-better-1.png' alt='background mountains' />
        </div>






    )
}
export default Intro