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
            <div className="flex items-center justify-center py-10 text-4xl font-bold text-background sm:text-6xl">
                About me
            </div>
            <div className="flex justify-between w-full h-full gap-4 mx-auto text-xl sm:text-2xl md:gap-4 bg-opacity-30">


                <div className='flex flex-col w-full h-full gap-5 '>
                    <div className="w-11/12 mx-auto">
                        <p>{`I'm a Full Stack Developer and Entrepreneur, passionate about building apps that are scalable, provide a great UX, and have real utility.`}</p><br/>
                        <p>{`I spend most of my time creating cool apps, reading about the latest developments in tech, and boxing.`}</p>
                        <br></br>
                        <p>{`Also, I have a medium blog where I have written various articles relating to Web2 and Web3 topics - check `}<Link className="text-purple-800 underline" href="https://medium.com/@jamesowen.dev">this.</Link></p>
                        <br />
                    </div>

                    <div className='relative w-11/12 mx-auto overflow-hidden h-14 bg-sky-950 bg-opacity-20 rounded-xl'>
                        
                        <div className="absolute px-2 right-full animate-move-xs sm:animate-move-small md:animate-move-medium lg:animate-move-large xl:animate-move-xl rounded-xl ">
                            <TechStack />
                        </div>




                    </div>

                    <div className="flex flex-col items-center justify-center py-1 bg-opacity-10 border-background">
                        <h2 className="py-10 text-4xl text-background">Core Skills</h2>
                        <div className="grid grid-cols-1 gap-1 mb-2 ml-1 mr-1 lg:grid-cols-3 auto-rows">
                            <Link href="#projects">
                                <Card className="flex flex-col hover:bg-opacity-50 group h-full relative bg-windows border border-background text-background  justify-start rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="">Web Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        As a Full Stack Web Developer, I have experience building applications with Typescript, React and NextJS.
                                        I have used Supabase, the free Firebase alternative, for my backends. Common features I have implemented are 
                                        User Authentication, data fetching, state management, form creation and handling, rendering large quantities of data into tables, 
                                        creating datasets from scratch, advanced SQL queries and DB optimization, protected routes + much more.
                                        I have interacted with many different JS libraries such as Zustand, Tanstack table, React-form, Nodemailer, Axios, etc.

                
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: Flask, Selenium, Beautiful Soup
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="#projects">
                                <Card className="flex flex-col hover:bg-opacity-50 group h-full relative bg-windows text-background border border-background justify-start  rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="">Data Engineering</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        Development of data modeling software using Python, Apache Spark, SQL. Created data pipelines using Databricks Lakehouse and AWS and Azure Cloud services. ETL/ELT, logging and error handling,
                                        queries and ad-hoc data analysis. Worked using the SDLC, as well as Agile, and managed service requests.
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: zsh/bash, SQL Server, On prem data processing, data analytics
                                    </CardFooter>
                                </Card>
                            </Link>
                     
                            <Link href="#blog">
                                <Card className="flex flex-col hover:bg-opacity-50 group  h-full relative bg-windows text-background border border-background justify-start  rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="">Technical Writing</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                         Technical articles on Web3 Protocols and mechanisms, mainly around the Ethereum ecosystem. Topics include Rollups, Restaking, Decentralized Exchanges, Real World Asset Tokenization, Security etc.
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