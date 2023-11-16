'use client'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SectionButtons from '../section-buttons';

const Intro = () => {
    const router = useRouter();

    const [start, setStart] = useState(false)
    const [rep, setRep] = useState(0)
    const [showButtons, setShowButtons] = useState(false)




    const handleClick = () => {
      
        if (!start) {
            setTimeout(() => {
                setShowButtons(true)
            }, 16000);
            setStart(true)
        } else {
            router.refresh()
        }
 
    }

    return (
        <div className='relative w-full min-h-screen '>

            <div className="flex items-center justify-center py-10 text-4xl font-black font-raleway md:mt-10 md:mb-20 text-zinc-400 text-opacity-70 sm:text-6xl">
                James Owen
            </div>

            <div className="relative grid w-full h-full grid-cols-6 gap-4 px-2 mx-auto overflow-hidden text-xl font-bold sm:text-3xl md:gap-4 font-rubik ">

                <div onClick={handleClick} className='relative col-start-1 col-end-2 px-2 text-background'>
                    -                <br />.<br />.
                    <Image

                        src="/../images/gray-button.png"
                        alt='windows start button'
                        fill={true}
                        sizes='md'
                        className={`cursor-pointer z-20 max-h-14 object-contain mb-3 text-2xl font-semibold`}

                    />
                </div>

                <div className='col-span-5 col-start-2 '>
                    {start &&
                        <>
                            <div className='gap-2 px-5 '>
                                <TypeAnimation
                                    className='items-start justify-start'
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
                                        "I'm a Full Stack Developer, Entrepreneur, and Crypto enthusiast!",
                                        800,
                                        "I'm a Full Stack Developer, Entrepreneur, and Crypto Degen.",
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

                                        11600, // Waits 1s
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
                    }

                </div>
                <div className='col-span-4 col-start-2 px-5 col'>
                    {
                        showButtons &&
                        <div className='mt-10'>
                            <SectionButtons />
                        </div>
                    }

                </div>

            </div>

            <Image className='object-fill mt-56 -z-10 opacity-10 ' fill src='/images/mountains-better-1.png' alt='road background' />
        </div>






    )
}
export default Intro