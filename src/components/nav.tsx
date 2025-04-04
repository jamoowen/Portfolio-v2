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
        <nav className="fixed top-0 left-0 z-50 flex flex-row justify-between w-full px-4 py-3 text-white shrink-0 bg-background">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="flex flex-row items-center justify-center gap-2 text-xl">
                        <Link href="/" className="p-2 transition-colors hover:text-sky-400">
                            <AiFillHome className="w-6 h-6" />
                        </Link>
                        <NavigationMenuTrigger className="gap-2 text-lg px-4 py-2">
                            Menu <AiOutlineMenu className="w-5 h-5" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-background">
                            <ul className="z-40 grid list-none gap-3 p-6 w-[450px] sm:grid-flow-col grid-rows-4">
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-lg p-4 text-[16px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#about'>
                                        <div className="mb-2 text-lg font-medium leading-[1.2]">About</div>
                                        <p className="text-sm opacity-70 leading-[1.4]">My background and journey thus far</p>
                                    </Link>
                                </li>
                                <li className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-sky-950 block select-none rounded-lg p-4 text-[16px] leading-none no-underline outline-none transition-colors' >
                                    <Link href='#contact'>
                                        <div className="mb-2 text-lg font-medium leading-[1.2]">Contact</div>
                                        <p className="text-sm opacity-70 leading-[1.4]">Get in touch with me</p>
                                    </Link>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex flex-row items-center gap-6 text-2xl shrink-0">
                <Link target="_blank" href="https://github.com/jamoowen" className="p-2 transition-colors hover:text-sky-400">
                    <BsGithub />
                </Link>
                <Link target="_blank" href="https://medium.com/@jamesowen.dev" className="p-2 transition-colors hover:text-sky-400">
                    <BsMedium />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/jamesowen24/" className="p-2 transition-colors hover:text-sky-400">
                    <BsLinkedin />
                </Link>
            </div>
        </nav>
    )
}

export default Nav