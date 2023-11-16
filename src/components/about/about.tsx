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





        <div id="about" className='w-full h-full min-h-screen overflow-visible bg-white text-sky-950'>
            <div className="flex items-center justify-center py-10 text-4xl font-black font-raleway text-opacity-70 sm:text-6xl">
                About me
            </div>
            <div className="flex justify-between w-full h-full gap-4 mx-auto text-xl font-bold sm:text-2xl md:gap-4 font-rubik bg-opacity-30">


                <div className='flex flex-col w-full h-full gap-5 '>
                    <div className="w-11/12 mx-auto">
                        <p>{`I'm a Full Stack Developer and Entrepreneur, passionate about decentralization and all things Web3!`}</p>
                        <p>{`I love creating cool Web Apps, working with data, reading about the latest developments in Web3, and being involved with almost anything related to technology.`}</p>
                        <br></br>
                        <p>{`Also, I write medium articles on different Web3 Protocols and mechanisms - check `}<Link className="text-purple-800 underline" href="https://medium.com/@jamesowen.dev">this.</Link></p>
                        <br />
                    </div>
                    <div className='flex flex-row w-11/12 px-2 mx-auto overflow-hidden bg-sky-500 bg-opacity-20 rounded-xl '>
                        <div className="flex items-center justify-between w-full row-auto gap-2 p-1 overflow-hidden  animate-animation-container shrink-0 rounded-xl">
                            <TechStack />
                        </div>




                    </div>

                    <div className="flex flex-col items-center justify-center py-1 border bg-opacity-10 border-sky-950">
                        <h2 className="py-10 text-4xl">Core Skills</h2>
                        <div className="grid grid-cols-1 gap-1 mb-2 ml-1 mr-1 lg:grid-cols-3 auto-rows">
                            <Link href="#projects">
                                <Card className="flex flex-col group f bg-gradient-to-t h-full relative bg-background border-4 border-sky-950 justify-start rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Web Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">

                                        Building Full Stack Web applications with Typescript, React and NextJS. Backend services created with Supabase, PostgresSql. Experience in implementing Authentication,
                                        Account management features, tabular data with Tanstack Table (React Table). Connected to REST API&apos;s, created datasets from scratch, built forms and API endpoints for
                                        emailing users, + interacted with many other JS libraries.
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: Flask, Selenium, Beautiful Soup
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="#projects">
                                <Card className="flex flex-col group h-full relative bg-background border-4 border-sky-950 justify-start  rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Data Engineering</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        Developed Data modeling software using Python, Apache Spark, SQL. Created data pipelines using Databricks Lakehouse and AWS and Azure Cloud services. ETL&apos;d data, created logging and error handling,
                                        queried and performed ad-hoc data analysis. Worked using the SDLC, as well as agile, and managed service requests.
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additional experience: zsh/bash, SQL Server, On prem data processing, data analytics
                                    </CardFooter>
                                </Card>
                            </Link>
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
                            <Link href="#blog">
                                <Card className="flex flex-col group  h-full relative bg-background border-4 border-sky-950 justify-start  rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Technical Writing</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow text-sm sm:text-lg">
                                        Written technical articles on Web3 Protocols and mechanisms, mainly around the Ethereum ecosystem. Topics include Rollups, Restaking, Decentralized Exchanges, Real World Asset Tokenization, Security etc.
                                    </CardContent>
                                    <CardFooter className="text-xs sm:text-sm">
                                        Additionally experience: Posts threads of similar content on Twitter
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

