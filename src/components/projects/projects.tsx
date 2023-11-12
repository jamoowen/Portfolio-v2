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





        <div id="projects" className='min-h-screen h-full w-full overflow-visible  text-sky-100 bg-background'>
            <div className="flex font-raleway  items-center font-black py-10  text-opacity-70 justify-center  sm:text-6xl text-4xl">
                Projects
            </div>
            <div className="flex justify-between mx-auto  w-11/12 h-full sm:text-2xl gap-4 md:gap-4 text-xl font-rubik font-bold  bg-opacity-30">
                <div className="bg-red-300 items-center mx-auto w-full h-full ">
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
                    <ProjectCard projectName="Movie Search" projectDescription="Movie website made with nextjs" technologies={['javascript', 'typescript']}/>
                    <ProjectCard projectName="Movie Search" projectDescription="Movie website made with nextjs" technologies={['javascript', 'typescript']}/>
                    <ProjectCard projectName="Movie Search" projectDescription="Movie website made with nextjs" technologies={['javascript', 'typescript']}/>
                    <ProjectCard projectName="Movie Search" projectDescription="Movie website made with nextjs" technologies={['javascript', 'typescript']}/>

                    </Carousel>
                </div>


            </div>


        </div>
    )
}

export default Projects




