'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { AiOutlineMenu, AiFillHome } from "react-icons/ai"
import { GrHome } from 'react-icons/gr'
import React from "react"
import Link from "next/link"
import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs'

const Nav = () => {

    return (
        <nav className="fixed top-0 left-0 z-50 flex flex-row justify-between w-full px-2 text-white shrink-0 bg-background">

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="flex flex-row items-center justify-center gap-2 px-1 text-lg">
                        <Link href="/"><AiFillHome /></Link>
                        <NavigationMenuTrigger className="" >
                            Menu <AiOutlineMenu />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>

                            <ul className="z-40 m-0 grid list-none gap-x-[10px] p-[22px] w-[400px] sm:grid-flow-col font-rubik sm:grid-rows-3">
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#about'>
                                        <div className="mb-[5px] font-medium leading-[1.2]">About</div>
                                        <p className="text-xs opacity-70 leading-[1.4]">My background and journey thus far</p>

                                    </Link>
                                </li>
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#projects'>
                                        <div className="mb-[5px] font-medium leading-[1.2]">Projects</div>
                                        <p className="text-xs opacity-70 leading-[1.4]">Side projects I&apos;ve worked on in my spare time</p>

                                    </Link>
                                </li>
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#blog'>
                                        <div className="mb-[5px] font-medium leading-[1.2]">Blog</div>
                                        <p className="text-xs opacity-70 leading-[1.4]">My Medium blog articles - Mostly on Web3 related topics</p>

                                    </Link>
                                </li>
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#contact'>
                                        <div className="mb-[5px] font-medium leading-[1.2]">Contact</div>
                                        <p className="text-xs opacity-70 leading-[1.4]">Get in touch with me</p>

                                    </Link>
                                </li>

                            </ul>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex flex-row items-center gap-5 text-xl shrink-0">
                <Link target="_blank" href="https://github.com/jamoowen">
                    <BsGithub />
                </Link>
                <Link target="_blank" href="https://twitter.com/jmsowen24">
                    <BsTwitter />
                </Link>
                <Link target="_blank" href="https://medium.com/@jamesowen.dev">
                    <BsMedium />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/jamesowen24/">
                    <BsLinkedin />
                </Link>
            </div>


        </nav>
    )
}



export default Nav