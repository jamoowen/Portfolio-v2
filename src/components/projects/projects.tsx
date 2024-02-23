'use client'
import Link from "next/link"

import { useEffect } from "react"
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Carousel from "react-multi-carousel";
import ProjectCard from "./project-card"
import "react-multi-carousel/lib/styles.css";


const Projects = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (





        <div id="projects" className='w-full h-full min-h-screen overflow-visible text-white bg-background'>
            <div className="flex items-center justify-center py-10 text-4xl font-semibold font-raleway text-opacity-70 sm:text-5xl">
                Projects
            </div>
            <div className="items-center justify-center w-full h-full mx-auto">

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/Movie-Searcher"
                        imageUrl = "/images/movie.png"
                        projectName="Movie Finder"
                        projectUrl="https://movie-searcher-100.vercel.app/"
                        projectDescription="Movie Searching app that allows users to Sign up, search for movies/actors/directors, add/delete movies from their 'watchlist'."

                        projectFeatures="Datasets created using IMDB public data - cleaned, joined, and optimized with Apache Spark/Python.
                    Supabase + PostgresSql used for App backend. Authentication Implemented with Supabase Auth (Email). Tanstack Table (React Table) used to enter, filter and delete tabular data.
                    Components styled with Tailwind CSS"
                        technologies={['typescript', 'nextjs', 'react', 'supabase', 'python', 'apache_spark', 'postgresql']}
                        bgColor="border-4 border-teal-400 bg-background "
                    />
                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/coin-dashboard"
                        imageUrl = "/images/coin-dashboard.png"
                        projectName="Coin Dashboard"
                        projectUrl="https://coin-dashboard-iota.vercel.app/"
                        projectDescription="Coin dashboard and live pricing"

                        projectFeatures="This app pulls live coin data from the coinbase api and displays in an interactive dashboard. 
                        A websocket connection pulls the latest ticker information.
                        This app was made using NextJs, Typescript, Highcharts stock, Axios, Vitest, ShadcnUi, HeadlessUI, Lucide."
                        technologies={['typescript', 'nextjs', 'react', 'highcharts', 'jest', 'axios' ]}
                        bgColor="border-4 border-orange-600 bg-background "
                    />
                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/club-stampz"
                        imageUrl = "/images/clubstamps.png"
                        projectName="Club Stamps"
                        projectUrl="https://www.clubstamps.co.uk//"
                        projectDescription="Website made for freelance client"

                        projectFeatures="Website created for a client, using Typescript, NextJS, utilizing Sanity CMS. Used ShadcnUI
                        as well as raw RadixUI primitives for certain components. React-hook-form + zod used for forms. 
                        React-multi-carousel used to create carousel on homepage."
                        technologies={['typescript', 'nextjs', 'react', 'sanity', 'zod', 'node' ]}
                        bgColor="border-4 border-red-600 bg-background "
                    />
                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/restaurant-resolver"
                        imageUrl = "/images/restaurant.png"
                        projectName="Restaurant Resolver"
                        projectUrl="https://restaurant-resolver.vercel.app/"
                        projectDescription="App which creates a tournament bracket and decides on a winner, given a list of restaurants as inputs. 
                        Results can be automatically emailed to a list of recipients."

                        projectFeatures="Built with Typescript, NextJS. Zustand used for state management. Nodemailer used to send results to recipients.
                        Lots of React used to handle state changes and form submission. 

                        All components styled with Tailwind CSS."
                        technologies={['typescript', 'nextjs', 'react', 'zustand', 'axios', 'css', 'node']}
                        bgColor="border-4 border-yellow-500 bg-background"
                    />
                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/real-messenger"
                        imageUrl = "/images/messenger.png"
                        projectName="Real Messenger"
                        projectUrl={null}
                        projectDescription="Instant messaging App"

                        projectFeatures="Blazingly fast instant messaging app created with Typescript/NextJS. Redis used for backend, optimizing speed of read/write operations.
                        Webhooks implemented with Pusher, that subscribe users to realtime events (new friend requests, messages etc.). Auth implemented with Next Auth. Zod used for input validation, 
                        CLSX for rendering classnames conditionally, Lucide Icons, Base UI, React-Hot-Toast ++ 
                    "
                        technologies={['typescript', 'nextjs', 'react', 'redis', 'nextauth', 'zod', 'axios',]}
                        bgColor="border-4 border-indigo-500 bg-background"
                    />

                    <ProjectCard
                        githubRepo="https://github.com/jamoowen/Portfolio-v2"
                        imageUrl = "/images/portfolio.png"
                        projectName="Portfolio Site"
                        projectUrl="https://james-owen.xyz/"
                        projectDescription="Portfolio Website."

                        projectFeatures="Built with Typescript, NextJS. Architected as a single page scrollable app, with component streaming to minimize render times. CSS animations used for basic animation of 
                        items and React-type-animation used to animate intro typing at top of page. Email form validated with zod, created with react-hook-form, sent with Nodemailer. Medium Articles embedded using RSS feeds and API calls with Axios.

                         ShadcnUI used for cards and menu item. All other components/styling done with Tailwind CSS.
                        react-multi-carousel used for carousel implementation"
                        technologies={['typescript', 'nextjs', 'react', 'zod', 'axios', 'css', 'node']}
                        bgColor="border-4 border-sky-500 bg-background"
                    />
                    


                </Carousel>
            </div>




        </div>
    )
}

export default Projects




