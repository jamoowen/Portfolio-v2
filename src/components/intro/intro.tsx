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
        console.log('hoho')
        if (!start) {
            setTimeout(() => {
                setShowButtons(true)
            }, 14000);
            setStart(true)
        } else {
            router.refresh()
        }
        console.log('clicked')
    }

    return (
        <div className='min-h-screen w-screen'>
            <div className=" flex font-raleway items-center  font-black mt-5 md:mt-10 md:mb-20 mb-10  text-zinc-400 text-opacity-70 justify-center  sm:text-6xl text-4xl">
                James Owen
            </div>

            <div className="grid grid-cols-6 p-2  mx-auto w-full sm:text-3xl h-full gap-4 md:gap-4 text-xl font-rubik font-bold  bg-opacity-30">

                <div onClick={handleClick} className='col-start-1 bg-red-300 col-end-2 h-6 sm:h-12 relative'>
                    <Image

                        src="/../images/windows.png"
                        alt='windows start button'
                        fill={true}
                        className={`cursor-pointer mb-3 text-2xl font-semibold`}

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

                                        11400, // Waits 1s
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

                <div className='-z-30 absolute -bottom-24 sm:-bottom-36 w-full h-full'><Image className='-z-30 opacity-10 grayscale  mx-auto ' fill objectFit='none' sizes='50vw' objectPosition='bottom ' src='/images/road.png' alt='road background' /></div>

                {/* <Image className="fade-image" src="/images/btc_wall.jpg" width={2000} height={1000} alt="bitcoin wallpaper" /> */}

            </div>



        </div>





    )
}
export default Intro