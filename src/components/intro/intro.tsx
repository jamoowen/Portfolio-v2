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
        <div className='min-h-screen w-full relative '>

            <div className=" flex font-raleway items-center justify-center font-black py-10 md:mt-10 md:mb-20   text-zinc-400 text-opacity-70   sm:text-6xl text-4xl">
                James Owen
            </div>

            <div className="grid grid-cols-6 px-2 relative mx-auto w-full sm:text-3xl h-full overflow-hidden gap-4 md:gap-4 text-xl font-rubik font-bold ">

                <div onClick={handleClick} className='col-start-1 px-2 text-background col-end-2  relative'>
                    -                <br />.<br />.
                    <Image

                        src="/../images/windows.png"
                        alt='windows start button'
                        fill={true}
                        className={`cursor-pointer z-20 object-contain mb-3 text-2xl font-semibold`}

                    />
                </div>

                <div className='col-start-2 col-span-5 '>
                    {start &&
                        <>
                            <div className=' px-5 gap-2'>
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
                <div className='col col-start-2 px-5 col-span-4'>
                    {
                        showButtons &&
                        <div className='mt-10'>
                            <SectionButtons />
                        </div>
                    }

                </div>

            </div>

            <Image className='-z-10 mt-56 object-fill  opacity-10 ' fill src='/images/mountains-better-1.png' alt='road background' />
        </div>






    )
}
export default Intro