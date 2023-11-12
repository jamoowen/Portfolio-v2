'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const AnimationComponent = () => {

    useEffect(() => {
        animate()


    }, [])


    const animate = () => {


        // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
        gsap.fromTo(".contact", { x: -1000 }, { x: 0, duration: 1 });
        gsap.fromTo(".blog", { x: -1100 }, { x: 0, duration: 1.5 });
        gsap.fromTo(".projects", { x: -1200 }, { x: 0, duration: 2 });
        gsap.fromTo(".about", { x: -1300 }, { x: 0, duration: 2.5 });

    }

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 font-raleway font-bold text-xs gap-5 '>
                <Link href='#about'><Button className="font-extrabold about w-full rounded-[3px] hover:bg-white hover:border-4 border-sky-800 hover:shadow-md">About</Button></Link>
                <Link href='#projects'><Button className="font-extrabold projects w-full rounded-[3px] hover:bg-white hover:border-4 border-sky-800 hover:shadow-md">Projects</Button></Link>
                <Link href='#blog'><Button className="font-extrabold blog w-full rounded-[3px] hover:bg-white hover:border-4 border-sky-800 hover:shadow-md">Blog</Button></Link>
                <Link href='#contact'><Button className="font-extrabold contact w-full rounded-[3px] hover:bg-white hover:border-4 border-sky-800 hover:shadow-md">Contact</Button></Link>


            </div>

        </>
    );

};

export default AnimationComponent;
