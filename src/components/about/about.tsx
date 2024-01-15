import TechStack from "./tech-stack"
import Link from "next/link"
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
const About = () => {

    return (





        <div id="about" className='w-full h-full min-h-screen overflow-visible bg-white font-raleway text-zinc-700'>
            <div className="flex items-center justify-center py-10 text-4xl font-semibold text-background sm:text-5xl">
                About me
            </div>
            <div className="flex justify-between w-full h-full gap-4 mx-auto text-sm sm:text-lg md:gap-4 bg-opacity-30">


                <div className='flex flex-col w-full h-full gap-5 '>
                    <div className="w-10/12 mx-auto space-y-1.5 px-6">
                        <p>{`I'm a Software Developer and Entrepreneur, passionate about building apps that are scalable, provide a great UX, and have real utility.
                        I love web development and working with Typescript and React. I am interested in both Frontend and Backend development and love learning new 
                        languages, frameworks and technologies.`}</p><br />
                        <p>{`I have a background in Data Engineering and have spent a lot of time working with Python, SQL , Databricks and Spark.
                            I Studied in South Africa, at the University of the Witwatersrand, and graduated with a Bachelor of Commerce, majoring in Corporate Finance 
                            and Investment.
                        `}</p>
                        <br></br>
                        <p>{`Additionally, I am a big proponent of decentralization and Web3, and have written 
                         some technical articles on various topics here - `}<Link className="text-purple-800 underline" href="https://medium.com/@jamesowen.dev">Medium blog.</Link></p>
                        <br />
                    </div>

                    <div className='relative  w-11/12 mx-auto overflow-hidden h-14 bg-sky-950 bg-opacity-20 rounded-xl'>

                        <div className="absolute px-2 right-full animate-move-xs sm:animate-move-small md:animate-move-medium lg:animate-move-large xl:animate-move-xl rounded-xl ">
                            <TechStack />
                        </div>




                    </div>

                    <div className="flex flex-col items-center justify-center py-1 bg-opacity-10 border-background">
                        <h2 className="py-10 text-4xl  text-background">Core Skills</h2>
                        <div className="grid w-10/12 grid-cols-1 gap-1 mb-2 ml-1 mr-1  auto-rows">
                            <Link href="#projects">
                                <Card className="flex flex-col hover:bg-windows group h-full relative bg-white  text-background border-none justify-start  rounded-[1px]">
                                    <CardHeader>
                                        <CardTitle className="">Web Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        As a Web Developer, I have experience building applications with Typescript, React and NextJS.
                                        I have used Supabase, for my backend services and Sanity as a headless CMS. Common features I have implemented are
                                        User Authentication, data fetching, state management, form creation and handling, rendering large quantities of data into tables,
                                        creating datasets from scratch, advanced SQL queries and DB optimization, protected routes + much more.
                                        I have interacted with many different JS libraries such as Zustand, Tanstack table, React-hook-form, Nodemailer, Axios, etc.


                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: Flask, Selenium, Beautiful Soup
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="#projects">
                                <Card className="flex flex-col hover:bg-windows group h-full relative bg-white  text-background border-none justify-start  rounded-[1px]">
                                    <CardHeader>
                                        <CardTitle className="">Data Engineering</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                    As a Data Engineer, I built robust data pipelines using predominantly Python and Apache Spark. I worked extensively on the Databricks platform and used both
                                    AWS and Azure Cloud services. I interacted with tools like Data Factory, Azure Functions, AWS Lambda, S3, Blob Storage, etc. I am familiar with SQL server, PostgresSQL and
                                    often had to refactor old SQL server code to Pyspark or Databricks SQL. As well as Data Engineering responsibilities, I worked on product development of 
                                    Sagacity Solutions&apos; Value Based Management model and was responsible for many features in the 2023 Wave4 release.
                
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: zsh/bash, SQL Server, On prem data processing, data analytics
                                    </CardFooter>
                                </Card>
                            </Link>

                            <Link href="#blog">
                                <Card className="flex flex-col hover:bg-windows group h-full relative bg-white  text-background border-none justify-start  rounded-[1px]">
                                    <CardHeader>
                                        <CardTitle className="">Technical Writing</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        I write technical articles on Web3 Protocols and mechanisms, mainly around the Ethereum ecosystem. Topics include Rollups, Restaking, Decentralized Exchanges, Real World Asset Tokenization, Security etc.
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: Posts threads of similar content on Twitter
                                    </CardFooter>
                                </Card>
                            </Link>

                        </div>

                    </div>

                </div>



            </div>


        </div>
    )
}

export default About

{/* <Link href="">
                                <Card className="bg-gradient-to-b group flex flex-col h-full relative   rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Business Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm sm:text-lg">
                                        Analytical skills developed through data anlaysis (data engineering), analyzing market conditions in Web3 (Technical writing). As a small business owner,
                                        conducted client outreach through social media, pyhsical advertisement, public interactions. Worked on lead acquisition, knowlege transfer and built relationships with clients.
                                    </CardContent>
                                    <CardFooter className="justify-between mt-auto text-xs sm:text-sm">
                                        B2C sales, CRM software, networking
                                    </CardFooter>
                                </Card>
                            </Link> */}