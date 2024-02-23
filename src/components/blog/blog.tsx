
'use client'
import { useEffect, useState } from "react";
const axios = require('axios').default;
import { AxiosResponse, AxiosError } from 'axios'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { stringify } from "querystring";
import { json } from "stream/consumers";
import { parse } from 'rss-to-json'
import Image from "next/image";





const Blog = () => {
    const rssApiKey = process.env.NEXT_PUBLIC_RSS_API_KEY
    const mediumURL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jamesowen.dev&api_key=${rssApiKey}`;
    // const mediumRssUrl = "https://www.toptal.com/developers/feed2json/convert?url=https://medium.com/feed/@jamesowen.dev"

    // types
    interface Profile {
        name: string;
        profileImage: string;
        profileUrl: string;
    }

    interface BlogItem {
        categories: string[];
        title: string;
        link: string;
        pubDate: string;
        thumbnail: string;
        description: string;
        // Add other properties of the blog item
    }

    interface BlogState {
        item: BlogItem[];
        isLoading: boolean;
        error: string | null;
    }


    //   STATE
    // const [profile, setProfile] = useState<Profile>({
    //     name: 'James Owen',
    //     profileImage: '',
    //     profileUrl: ''
    // })

    const [blog, setBlog] = useState<BlogState>({
        item: [],
        isLoading: true,
        error: null
    })

    // const [selectedArticle, setSelectedArticle] = useState<string>('');
    const [articleIndex, setArticleIndex] = useState<number>(0)


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(mediumURL);
                // const image = response.data.feed.image;
                // console.log(`image: ${image}`);
                // const link = response.data.feed.link;
                // console.log(`link: ${link}`);
                const blogs = response.data.items;
                // console.log(`blogs: ${blogs}`);
                const posts = blogs.filter((post: BlogItem) => post.categories.length > 0);
            

                // setSelectedArticle(posts[0].title);
                // setProfile(p => ({ ...p, profileUrl: link, profileImage: image }));
                setBlog({ item: posts, isLoading: false, error: null });
                
            } catch (error) {
                if (error instanceof Error) {
                    setBlog({ item: [], isLoading: false, error: error.message });
                }
                else {
                    console.log('ERORR LOADING BLOG DATA:', error)
                }
                
            } 
            
        }

        fetchData();


    }, [])

    // console.log(blog)

    function extractP(htmlText: string): string {
        const pRegex = /<p>(.*?)<\/p>/;
        const match = pRegex.exec(htmlText);
        const contents = match ? match[1] : '';

        const htmlRegex = /(<([^>]+)>)/gi;
        return contents.replace(htmlRegex, '');;
    }

    const handleArticleSelect = (index: number, title: string) => {
        // setSelectedArticle(title);
        setArticleIndex(index)
        // console.log()

    }

    const handleLog = () => {
        console.log(blog.item[0])
    }


    return (
        <div id="blog" className='w-full h-full min-h-screen overflow-visible bg-white font-raleway text-background border-y border-windows'>
            <div className="flex items-center justify-center py-10 text-4xl font-semibold text-opacity-70 sm:text-5xl">
                Blog
            </div>
            

            <div className="items-center justify-center w-full h-full mx-auto">


                <div className="grid grid-cols-3 gap-1 mb-4 sm:gap-4 sm:px-2">
                    <div className="col-span-3 sm:col-start-2 sm:col-span-2">
                        <h2 className="p-4 sm:p-2  ml-2">All of my medium articles are available on my Medium page: <Link className="text-indigo-600 underline" href="https://medium.com/@jamesowen.dev">@jamesowen.dev</Link></h2>
                    </div>
                    <div className="col-span-1 flex p-4 flex-col h-96 bg-windows border-2 ml-2">
                    <h4 className="mb-4 font-bold leading-none text-md">Articles</h4>
                        <ScrollArea className="flex  rounded-[3px] h-full shrink border-background">
                            <div className="">

                                
                                {blog.item ?
                                    blog.item.map((post, index) => (
                                        <div key={post.title}>
                                            <div onClick={() => handleArticleSelect(index, post.title)} className={`text-xs sm:text-sm font-raleway py-2 bg-blend-soft-light cursor-pointer ${articleIndex === index ? ' shadow-sm shadow-background bg-opacity-30 font-semibold text-background' : null}`}>
                                                {post.title}
                                            </div>
                                            {/* <Separator className="my-2" /> */}
                                        </div>
                                    )) :
                                    <div>Blog loading</div>}
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="col-span-2 ">

                        {blog.item[0] ?
                            <div className="p-2 mb-10  border-background rounded-[3px]">
                                <Link href={blog.item[articleIndex].link} className="text-background hover:text-indigo-600" target='_blank'>
                                <h2 className="ml-2 font-bold  border-windows text-md sm:text:lg">{blog.item[articleIndex].title}</h2>
                                    {/* <div className="w-full bg-center bg-no-repeat h-52 sm:h-72" style={{ backgroundImage: `url(${blog.item[articleIndex].thumbnail})` }}>
                                    </div> */}
                                    <Image
                                    height={300}
                                    width={300}
                                    alt="medium profile"
                                    src='/images/mediumprofile.png'/>
                                </Link>
                                <p className="p-2 mt-2 text-xs sm:text-lg">
                                    {`${extractP(blog.item[articleIndex].description.substring(0, 1000))}`}
                                </p>
                                ... <br />
                                <span className="text-xs italic sm:text-sm">James Owen {blog.item[articleIndex].pubDate}</span>

                            </div>
                            : <div></div>}
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Blog
