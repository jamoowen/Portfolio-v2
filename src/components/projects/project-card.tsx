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
import { FaHandPointRight } from 'react-icons/fa'

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
    "axios": "https://api.iconify.design/logos/axios.svg"
}



type IconKey = keyof typeof iconMap;
type TechnologyList = IconKey[];


interface ProjectProps {
    projectName: string;
    projectUrl?: string | null;
    projectDescription: string;
    projectFeatures: string;
    technologies: TechnologyList;
    bgColor: string;
}

const ProjectCard = ({ projectName, projectUrl = null, projectDescription, projectFeatures, technologies, bgColor }: ProjectProps) => {
   

    return (
        <div className="w-10/12 mx-auto " >
            <Card className={bgColor}>
                <CardHeader>
                    <CardTitle className="">{projectName}</CardTitle>
                </CardHeader>
                <CardContent className="py-2 text-sm sm:text-lg">
                    <div>
                        {projectUrl ?
                            <p>Status: <span className="text-green-500">Live </span> <span className="flex flex-row items-center gap-3 underline "><FaHandPointRight/><Link className="hover:text-indigo-500" target="_blank" href={projectUrl}>{projectUrl}</Link></span></p>
                            : <p>Status: <span className="text-red-600">Not Live</span></p>
                        }
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
