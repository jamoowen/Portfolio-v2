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
}


type IconKey = keyof typeof iconMap;
type TechnologyList = IconKey[];


interface ProjectProps {
    projectName: string;
    projectUrl?: string | null;
    projectDescription: string;
    technologies: TechnologyList;
}

const ProjectCard = ({ projectName, projectUrl = null, projectDescription, technologies }: ProjectProps) => {






    return (
        <div className="w-11/12">
            <Card className=" group bg-gradient-to-t h-full relative from-sky-950 to-indigo-850 justify-start text-stone-400 outline-double hover:outline hover:outline-violet-800 hover:text-white rounded-[4px]">
                <CardHeader>
                    <CardTitle className="group-hover:border-b-2 group-hover:border-white">{projectName}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-lg py-2">
                    <div>
                        {projectUrl ?
                            <p>Status: <span className="text-green-500">Live </span> <span className="text-indigo-700 underline"><Link href={projectUrl}>{projectUrl}</Link></span></p>
                            : <p>Status: <span className="text-red-600">Not Live</span></p>
                        }
                    </div>
                    Built Full Stack Web Applications primarily with Typescript, React and NextJS. Created backend servies with Supabase and PostgresSql. Implemented Authentication,
                    Account management features, tabular data with Tanstack Table (React Table), created datasets from scratch with Python/Pyspark, created CSS animations. + Utilized many other JS libraries.
                </CardContent>
                <CardFooter className="mt-auto text-xs sm:text-sm justify-between">
                    <Link className='hover:outline rounded-[4px] hover:outline-sky-950' target='_blank' href=''><Image width={40} height={40} alt='tech stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" /></Link>
                </CardFooter>
            </Card>
        </div>
    )
}
export default ProjectCard