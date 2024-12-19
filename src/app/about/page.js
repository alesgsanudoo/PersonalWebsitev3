"use client"

import { Heart, Languages, Code, Camera } from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import Card from '@/components/CardsAbout'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import React from "react";

export default function Home() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>About Me ⋅ Alejandro Griffith</title>
            <header
                className="relative z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b dark:border-neutral-800/50 dark:backdrop-blur-sm dark:bg-neutral-950/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    {!isMobile ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                            <span>
                                <SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>
                            </span>
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
                                <BreadcrumbPage>About me</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <section className="max-w-6xl mx-auto space-y-12">
                        {/* About Me Section */}
                        <div className="bg-gray-100/80 dark:bg-neutral-900/70 backdrop-blur-md p-6 rounded-lg">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 mb-6 select-none">
                                About me
                            </h1>
                            <div className="space-y-4 text-neutral-300">
                                <p className="dark:text-gray-200 text-black">
                                    <span
                                        className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">
                                        Little did I know, when I touched my first laptop
                                    </span>,
                                    that I would become <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">passionate</span> about
                                    computer science and project development. My journey began with <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">creating Minecraft servers</span>,
                                    <span
                                        className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500"> developing addons</span>,
                                    and <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">designing websites</span> and <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">shops</span> for
                                    these servers. After successfully running several
                                    servers with more than <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">10,000 players</span>,
                                    I decided to go deeper into computer science.
                                </p>
                                <p className="dark:text-gray-200 text-black">
                                    Today, I have <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">built</span> several <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">private</span>, <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">public</span>,
                                    and <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">class projects</span>,
                                    some of which
                                    have generated
                                    <span
                                        className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500"> income</span>.
                                    Currently, I am
                                    focused on creating <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">side projects</span> to
                                    showcase my skills, particularly
                                    using <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">C++</span>,
                                    a language I am
                                    eager to learn more about and thoroughly enjoy programming in.
                                </p>
                                <p className="dark:text-gray-200 text-black">
                                    When I am not coding, I <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">enjoy playing any type of sports or games</span>, <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">working out</span>, <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">watching series</span>,
                                    <span
                                        className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500"> reading</span>,
                                    and <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">spending</span> time
                                    with <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">friends</span> and <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">family</span>.
                                </p>
                                <p className="dark:text-gray-200 text-black">
                                    <span
                                        className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">Feel free</span> to
                                    reach out; I
                                    love <span
                                    className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-500">meeting</span> new
                                    people
                                    and engaging in conversations.
                                </p>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card
                                icon={Heart}
                                title="Programming Interests"
                                description="Things I'm passionate about."
                                type="interests"
                            />
                            <Card
                                icon={Languages}
                                title="Languages"
                                description="The ones I use to connect with the world."
                                type="languages"
                            />
                            <div className="md:col-span-2">
                                <Card
                                    icon={Code}
                                    title="Programming Languages"
                                    description="Programming languages I work with."
                                    type="programming"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Card
                                    icon={Camera}
                                    title="Photography"
                                    description="Capturing moments through my phone."
                                    type="posts"
                                />
                            </div>
                        </div>
                    </section>
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

