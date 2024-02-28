'use client'
import { gsap, random } from 'gsap';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const TechStack = () => {
    const tlCan = gsap.timeline({ repeat: -1 });

    const randomNum = Math.random()
    const modifierLarge = Math.floor(Math.random() * 8 + 1);
    const modifierMedium = Math.floor(Math.random() * 6 + 1);
    const modifierCust = 5;


    /*Can Animation*/
    const floatAnimation = () => {
        tlCan
            //move top left
            .to('.can > img', { duration: 3, y: `-=${30}`, x: `+=${20}`, rotation: `-=${modifierCust}`, ease: 'power1.inOut' })
            //move down right
            .to('.can > img', { duration: 3, y: `+=${30}`, x: `-=${20}`, rotation: `-=${modifierCust}`, ease: 'power1.inOut' })


            .to('.can > img', { duration: 3, y: `-=${30}`, x: `-=${20}`, rotation: `+=${modifierCust}`, ease: 'power1.inOut' })
            //move down right
            .to('.can > img', { duration: 3, y: `+=${30}`, x: `+=${20}`, rotation: `+=${modifierCust}`, ease: 'power1.inOut' })


        gsap.to(tlCan, { duration: 20, ease: 'power1.inOut' });

    };
    // useEffect(() => {
    //     floatAnimation();


    // }, [])

    const handleClick = () => {
        floatAnimation();
    }

    
    


    return (
        <div className='flex flex-row items-center gap-5 p-2 lg:gap-16 md:gap-10 shrink-0 w-max'>

            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href='https://axios-http.com/'><Image width={40} height={40} alt='tech stack' src="https://api.iconify.design/logos/axios.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href='https://zod.dev/'><Image width={40} height={40} alt='tech stack' src="https://api.iconify.design/logos/zod.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href=''><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href=''><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://www.postgresql.org/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://tailwindcss.com/"><Image width={40} height={40} alt='tech stack' src="https://github.com/devicons/devicon/tree/v2.16.0/icons/tailwindcss/tailwindcss-plain.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://soliditylang.org/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://supabase.com/"><Image width={40} height={40} alt='tech stack' src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://sanity.io"><Image width={40} height={40} alt='tech stack' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Sanity-logo-svg.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://azure.microsoft.com/en-us/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://spark.apache.org/"><Image width={40} height={40} alt='tech stack' src="https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://nodejs.org/en//"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://www.python.org/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://zustand-demo.pmnd.rs/"><Image width={40} height={40} alt='tech stack' src="https://github.com/pmndrs/zustand/blob/main/examples/demo/public/logo192.png?raw=true" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://ecma-international.org/publications-and-standards/standards/ecma-262"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://jestjs.io/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://react.dev/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://nextjs.org/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /></Link>
            <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href="https://www.typescriptlang.org/"><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></Link>
            
            
            
        </div>
    )
}
export default TechStack


