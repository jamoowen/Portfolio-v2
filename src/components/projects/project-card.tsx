import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import { FaHandPointRight, FaGithub } from 'react-icons/fa'

const iconMap = {
    "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "react": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "supabase": "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    "apache_spark": "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg",
    "bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "node": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "zod": "https://api.iconify.design/logos/zod.svg",
    "axios": "https://api.iconify.design/logos/axios.svg",
    "zustand": "https://github.com/pmndrs/zustand/blob/main/examples/demo/public/logo192.png?raw=true",
    "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "nextauth": "https://next-auth.js.org/img/logo/logo-sm.png",
    "sanity": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sanity-logo-svg.svg",
    "highcharts": "https://cdn.worldvectorlogo.com/logos/highcharts-1.svg",
    "jest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
}



type IconKey = keyof typeof iconMap;
type TechnologyList = IconKey[];


interface ProjectProps {
    githubRepo: string;
    imageUrl: string;
    projectName: string;
    projectUrl?: string | null;
    projectDescription: string;
    projectFeatures: string;
    technologies: TechnologyList;
    bgColor: string;
}

const ProjectCard = ({githubRepo, imageUrl, projectName, projectUrl = null, projectDescription, projectFeatures, technologies, bgColor }: ProjectProps) => {
   

    return (
        <div className="w-10/12 mx-auto font-raleway mb-2 " >
            <Card className={bgColor}>
                <CardHeader>
                    <CardTitle className="flex gap-5">{projectName} <Link target="_blank" href={githubRepo}><FaGithub/></Link>  </CardTitle>
                  
                </CardHeader>
                <CardContent className="py-2 text-sm sm:text-lg">
                    <div>
                        
                        {projectUrl ?
                            <p>Status: <span className="text-green-500">Live </span> <span className="flex flex-row items-center gap-3 underline "><FaHandPointRight/><Link className="hover:text-indigo-500" target="_blank" href={projectUrl}>{projectUrl}</Link></span></p>
                            : <p>Status: <span className="text-red-600">Not Live</span></p>
                        }
                    </div>
                    <div className=" relative">
                        <Image 
                        src={imageUrl}
                        alt={`Image of project: ${projectName}`}
                        height={500}
                        width={800}
                        /> 
                    </div>
                    <p className="mt-5">
                        {projectDescription}
                    </p>
                    <p className="mt-2 mb-5">
                        {projectFeatures}
                    </p>
                


                </CardContent>
                <CardFooter className="items-center p-2 text-xs bg-white sm:text-sm justify-evenly gap-auto">
                    {technologies.length > 0 ? (
                        technologies.map((item: IconKey) => (
                            <Link
                                key={item}
                                className="hover:outline rounded-[4px] hover:outline-sky-950"
                                target="_blank"
                                href=""
                            >
                                <Image width={40} height={40} alt="tech stack" src={iconMap[item]} />
                            </Link>
                        ))
                    ) : (
                        <div></div>
                    )}
                </CardFooter>


            </Card>
        </div>
    )
}
export default ProjectCard
