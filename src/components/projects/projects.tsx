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
            <div className="flex items-center justify-center py-10 text-4xl font-bold font-raleway text-opacity-70 sm:text-6xl">
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
                        projectName="Portfolio Site"
                        projectUrl="https://james-owen.xyz/"
                        projectDescription="Portfolio Website."

                        projectFeatures="Built with Typescript, NextJS. Architected as a single page scrollable app, with component streaming to minimize render times. CSS animations used for basic animation of 
                        items and React-type-animation used to animate intro typing at top of page. Email form validated with zod, created with react-hook-form, sent with Nodemailer. Medium Articles embedded using RSS feeds and API calls with Axios.

                         ShadcnUI used for cards and menu item. All other components/styling done with Tailwind CSS.
                        react-multi-carousel used for carousel implementation"
                        technologies={['typescript', 'nextjs', 'react', 'zod', 'axios' ,'css','node']} 
                        bgColor="border-4 border-sky-500 bg-background"
                        />


                </Carousel>
            </div>




        </div>
    )
}

export default Projects




