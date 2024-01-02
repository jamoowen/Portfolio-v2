'use client'

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import Link from "next/link"
import { useState } from "react"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const axios = require('axios').default;
import { AxiosError } from 'axios';

import { BsGithub, BsTwitter, BsMedium, BsLinkedin } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useRouter } from "next/navigation"







const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string(),
    message: z.string().min(5, { message: "You need to send a longer message than that!" }).max(3000, { message: "" })
})



const Contact = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            message: ""
        },
    })

    const submitForm = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        console.log('submitting')

        try {
            const { data } = await axios.post('/api/contact', {
                name: values.name,
                email: values.email,
                message: values.message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toast({
                title: "Email sent!",
                description: "I'll respond to you as soon as possible!",
            })
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error(axiosError.response?.data);
            toast({
                title: "ERROR!!",
                description: "Unable to send email; please try again or use an alternative form of contact",

            })
        } finally {
            setLoading(false);
            setTimeout(() => {
                router.refresh();
            }, 1000);
        }


    }

    const [loading, setLoading] = useState(false);

    return (


        <div id="contact" className='w-full h-full min-h-screen overflow-visible text-white font-raleway bg-background'>
            <div className="flex items-center justify-center py-10 text-4xl font-bold text-opacity-70 sm:text-6xl">
                Contact Me
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full gap-4 mx-auto text-xl font-bold sm:text-2xl md:gap-4 bg-opacity-30">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitForm)} className="w-8/12 mx-auto ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" type="email" {...field}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" type="text" {...field}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="placeholder:text-opacity-10"
                                            placeholder="Hi James! I just had a look through your portfolio, and wanted to reach out..."
                                            {...field}

                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="bg-windows mt-2 font-bold w-24 font-raleway rounded-[4px] " type="submit">
                            {loading ? <p className="animate-spin"><AiOutlineLoading3Quarters /></p>
                                : <p>Send</p>}
                        </Button>

                    </form>
                </Form>


                <div className="flex flex-row gap-5 w-8/12 text-4xl border-2 border-windows p-4 rounded-[4px]  justify-around mt-10">
                    <Link target='_blank' href="https://github.com/jamoowen">
                        <BsGithub />
                    </Link>
                    <Link target='_blank' href="https://twitter.com/jmsowen24">
                        <BsTwitter />
                    </Link>
                    <Link target='_blank' href="https://medium.com/@jamesowen.dev">
                        <BsMedium />
                    </Link>
                    <Link target='_blank' href="https://www.linkedin.com/in/jamesowen24/">
                        <BsLinkedin />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Contact

