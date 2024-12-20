"use client"

import {
    Building, Calendar,
    ChevronLeft,
    ChevronRight,
    ExternalLink, Linkedin,
    Loader2,
    Mail, MapPin,
    MessageSquare,
    Phone,
    Send
} from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {cn} from "@/lib/utils"
import React from "react"
import {useFormStatus} from "react-dom"
import {sendEmail} from "@/hooks/send-email";
import {useToast} from "@/hooks/use-toast";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

function SubmitButton() {
    const {pending} = useFormStatus()

    return (
        <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-amber-500 dark:hover:bg-amber-600 text-white"
            disabled={pending}
        >
            {pending ? (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                    Sending...
                </>
            ) : (
                <>
                    <Send className="w-4 h-4 mr-2"/>
                    Send Message
                </>
            )}
        </Button>
    )
}

export default function ContactPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const {toast} = useToast()

    async function handleSubmit(formData) {
        const result = await sendEmail(formData)

        if (result.success) {
            toast({
                title: "Success!",
                description: result.message,
            })
            const form = document.getElementById('contact-form')
            form.reset()
        } else {
            toast({
                title: "Error!",
                description: result.message,
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>Contact me ⋅ Alejandro Griffith</title>
            <header
                className="relative z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b dark:border-neutral-800/50 dark:backdrop-blur-sm dark:bg-neutral-950/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    {!isMobile ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>
                                </TooltipTrigger>
                                <TooltipContent side="right"
                                                className={cn("light:bg-black text-primary-foreground", "border-primary", "shadow-md"
                                                )}>
                                    <p>{isExpanded ? 'Close' : 'Open'} sidebar <kbd
                                        className="ml-2 rounded border px-1 text-xs border-blue-400 text-blue-500 dark:text-orange-500 dark:border-orange-500">B</kbd>
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (<SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>)}
                    <Separator orientation="vertical" className="mr-2 h-4 dark:bg-white bg-gray-700"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Explore</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Contact me</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <section className="max-w-6xl mx-auto space-y-12">
                        {/* Contact Header */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 select-none">
                                Contact
                            </h1>
                            <p className="text-lg text-gray-500 dark:text-neutral-400 select-none">
                                Feel free to reach out. I'd love to hear from you!
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a href="mailto:contact@alesgsanudoo.com" target="_blank"
                               className="group bg-gray-100/80 dark:bg-neutral-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-200/20 hover:border-blue-500 dark:hover:border-amber-500 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-blue-500 dark:text-amber-500"/>
                                    <div>
                                        <h3 className="font-semibold dark:text-white text-black group-hover:text-blue-500 dark:group-hover:text-amber-500 transition-colors">Email</h3>
                                        <p className="text-sm text-gray-500">contact@alesgsanudoo.com</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/alesgsanudoo/" target="_blank"
                               className="group bg-gray-100/80 dark:bg-neutral-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-200/20 hover:border-blue-500 dark:hover:border-amber-500 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Linkedin className="h-6 w-6 text-blue-500 dark:text-amber-500"/>
                                    <div>
                                        <h3 className="font-semibold dark:text-white text-black group-hover:text-blue-500 dark:group-hover:text-amber-500 transition-colors">LinkedIn</h3>
                                        <p className="text-sm text-gray-500">@alesgsanudoo</p>
                                    </div>
                                </div>
                            </a>
                            <div
                                className="flex items-center gap-4 group bg-gray-100/80 dark:bg-neutral-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-200/20 hover:border-blue-500 dark:hover:border-amber-500 transition-colors">
                                <Phone className="h-6 w-6 text-blue-500 dark:text-amber-500"/>
                                <div>
                                    <h3 className="font-semibold dark:text-white text-black group-hover:text-blue-500 dark:group-hover:text-amber-500 transition-colors">My
                                        Phone</h3>
                                    <p className="text-sm text-gray-500">(765) 407-0468</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">Send me a message</CardTitle>
                                <CardDescription className="text-gray-500 dark:text-neutral-400">Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form id="contact-form" action={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name"
                                                   className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name here..."
                                                className="bg-white/50 dark:bg-black/50"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email"
                                                   className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your email here..."
                                                className="bg-white/50 dark:bg-black/50"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject"
                                               className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="How can I help you?"
                                            className="bg-white/50 dark:bg-black/50"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message"
                                               className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message here..."
                                            className="min-h-[150px] bg-white/50 dark:bg-black/50 relative z-[1]"
                                            required
                                        />
                                    </div>
                                    <SubmitButton/>
                                </form>
                            </CardContent>
                        </Card>
                    </section>
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <a href="/"
                           className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">Previous Page</div>
                                <div className="text-xl dark:text-white text-black">Resume</div>
                            </div>
                        </a>
                        <a href="/experience"
                           className="flex items-center gap-2 text-right text-gray-500 hover:text-gray-300 transition-colors">
                            <div>
                                <div className="text-sm font-medium">Next Section</div>
                                <div className="text-xl dark:text-white text-black">Me & Myself</div>
                            </div>
                            <ChevronRight className="w-4 h-4"/>
                        </a>
                    </nav>
                </div>
            </main>
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center">
                <h2 className="text-gray-500">
                    Made with love by <a href="https://github.com/alesgsanudoo" target="_blank"
                                         className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">Alex</a> ❤️!
                </h2>
                <h2 className="text-gray-500 text-center">
                    Built with <a href="https://nextjs.org/" target="_blank"
                                  className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">NextJS</a> and <a
                    href="https://tailwindcss.com/" target="_blank"
                    className="font-bold text-blue-500 hover:text-blue-700  dark:text-amber-500 dark:hover:text-amber-700">TailwindCSS</a>.
                </h2>
            </footer>
        </div>
    )
}

