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





        <div id="about" className='min-h-screen h-full w-screen overflow-visible  text-sky-950 bg-white'>
            <div className="flex font-raleway  items-center font-black py-10  text-opacity-70 justify-center  sm:text-6xl text-4xl">
                About me
            </div>
            <div className="flex justify-between mx-auto  w-screen h-full sm:text-2xl gap-4 md:gap-4 text-xl font-rubik font-bold  bg-opacity-30">


                <div className='flex flex-col gap-5 h-full w-full '>
                    <div className="w-11/12  mx-auto">
                        <p>{`I'm a Full Stack Developer and Entrepreneur, passionate about decentralization and all things Web3!`}</p>
                        <p>{`I love creating cool Web Apps, reading about the latest developments in Web3, and being involved with almost anything related to technology.`}</p>
                        <br></br>
                        <p>{`Also, I write medium articles on different Web3 Protocols and mechanisms - check `}<Link className="text-purple-800 underline" href="https://medium.com/@jamesowen.dev">this.</Link></p>
                        <br/>
                    </div>
                    <div className='bg-sky-500 bg-opacity-20  w-11/12 mx-auto overflow-hidden px-2 rounded-xl  '>
                    <div className=" items-center animate-animation-container flex w-full justify-between flex-row overflow-hidden shrink-0 row-auto gap-2 rounded-xl  p-1 ">
                        <TechStack />
                        </div>
                        
                  
                    </div>
                
                    <div className="bg-gray-500 items-center justify-center flex flex-col bg-opacity-10 border-sky-950 border py-1 rounded-[4px]">
                        <h2 className="py-10 text-4xl">Core Skills</h2>
                        <div className="grid-cols-1 ml-1 mr-1 lg:grid-cols-4 auto-rows grid gap-1">
                            <Link href="">
                                <Card className=" group bg-gradient-to-t h-full relative from-sky-950 to-indigo-850 justify-start text-stone-400 outline-double hover:outline hover:outline-violet-800 hover:text-white rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Web Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm sm:text-lg">

                                        Built Full Stack Web Applications primarily with Typescript, React and NextJS. Created backend servies with Supabase and PostgresSql. Implemented Authentication,
                                        Account management features, tabular data with Tanstack Table (React Table), created datasets from scratch with Python/Pyspark, created CSS animations. + Utilized many other JS libraries.
                                    </CardContent>
                                    <CardFooter className="mt-auto text-xs sm:text-sm justify-between">
                                        Additional experience: Flask, Selenium, Beautiful Soup
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="">
                                <Card className="bg-gradient-to-t group flex flex-col h-full relative from-sky-950 to-indigo-850  text-stone-400 hover:text-white hover:outline hover:outline-violet-800   rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Data Engineering</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm sm:text-lg">
                                        Developed Data modeling software using Python, Apache Spark, SQL. Created data pipelines using Databricks Lakehouse and AWS and Azure Cloud services. ETL'd data, created logging and error handling, service requests.
                                    </CardContent>
                                    <CardFooter className="mt-auto text-xs sm:text-sm justify-between">
                                        Bash scripting, API ingestion, SQL Server, On prem data processing.
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="">
                                <Card className="bg-gradient-to-b group flex flex-col h-full relative from-sky-950 to-indigo-850  text-stone-400 hover:text-white outline-double hover:outline-violet-800   rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Business Development</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm sm:text-lg">
                                        Analytical skills developed through data anlaysis (data engineering), analyzing market conditions in Web3 (Technical writing). As a small business owner,
                                        conducted client outreach through social media, pyhsical advertisement, public interactions. Worked on lead acquisition, knowlege transfer and built relationships with clients.
                                    </CardContent>
                                    <CardFooter className="mt-auto text-xs sm:text-sm justify-between">
                                        B2C sales, CRM software, networking
                                    </CardFooter>
                                </Card>
                            </Link>
                            <Link href="">
                                <Card className="bg-gradient-to-b group flex flex-col h-full relative from-sky-950 to-indigo-850  text-stone-400 hover:text-white outline-double hover:outline-violet-800   rounded-[4px]">
                                    <CardHeader>
                                        <CardTitle className="group-hover:border-b-2 group-hover:border-white">Technical Writing</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm sm:text-lg">
                                        Written technical articles on Web3 Protocols and mechanisms, mainly around the Ethereum ecosystem. Topics include Rollups, Restaking, Decentralized Exchanges, Real World Asset Tokenization, Security etc.
                                    </CardContent>
                                    <CardFooter className="mt-auto text-xs sm:text-sm justify-between">
                                        Additionally, posts threads of similar content on Twitter
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

