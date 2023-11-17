
'use client'
import { useEffect, useState } from "react";
const axios = require('axios').default;
import { AxiosResponse, AxiosError } from 'axios'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { stringify } from "querystring";



const Blog = () => {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jamesowen.dev";

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
        axios.get(mediumURL)
            .then((info: AxiosResponse) => {
                // const image = info.data.feed.image;
                // console.log(`image: ${image}`)
                // const link = info.data.feed.link;
                // console.log(`link: ${link}`)
                const blogs = info.data.items;
                // console.log(`blogs: ${blogs}`)
                const posts = blogs.filter((post: BlogItem) => post.categories.length > 0)



                // setSelectedArticle(posts[0].title);
                // setProfile(p => ({ ...p, profileUrl: link, profileImage: image }));
                setBlog({ item: posts, isLoading: false, error: null });

            })
            .catch((err: AxiosError) => setBlog({ item: [], isLoading: false, error: err.message }));


    }, [axios])

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




    return (
        <div id="blog" className='w-full h-full min-h-screen overflow-visible text-white bg-opacity-50 bg-zinc-800 bg-background'>
            <div className="flex items-center justify-center py-10 text-4xl font-black font-raleway text-opacity-70 sm:text-6xl">
                Blog
            </div>

            <div className="items-center justify-center w-full h-full mx-auto">


                <div className="grid grid-cols-3 gap-1 mb-4 sm:gap-4 sm:px-2">
                    <div className="col-span-3 sm:col-start-2 sm:col-span-2">
                        <h2 className="p-4 sm:p-2">All of my medium articles are available on my Medium account: <Link className="text-purple-600 underline" href="https://medium.com/@jamesowen.dev">@jamesowen.dev</Link></h2>
                    </div>
                    <div className="col-span-1">

                        <ScrollArea className="flex border-2 rounded-md h-96 shrink border-background">
                            <div className="p-4">

                                <h4 className="mb-4 font-bold leading-none text-md">Articles</h4>
                                {blog.item ?
                                    blog.item.map((post, index) => (
                                        <div key={post.title}>
                                            <div onClick={() => handleArticleSelect(index, post.title)} className={`text-xs sm:text-sm font-raleway p-2 bg-blend-soft-light cursor-pointer ${articleIndex === index ? ' shadow-sm shadow-white bg-opacity-30 font-semibold text-white' : null}`}>
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
                            <div className="p-2 mb-10 border-2 border-windows white rounded-xl ">
                                <h2 className="p-2 font-bold text-black bg-white text-md sm:text:lg">{blog.item[articleIndex].title}</h2>
                                <Link href={blog.item[articleIndex].link} target='_blank'>
                                    <div className="w-full bg-center bg-no-repeat h-52 sm:h-72" style={{ backgroundImage: `url(${blog.item[articleIndex].thumbnail})` }}>
                                    </div>
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
