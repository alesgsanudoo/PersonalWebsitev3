"use client"

import {
    Briefcase,
    GraduationCap,
    Calendar,
    MapPin,
    Building,
    ExternalLink,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {motion} from "motion/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import React, {useEffect, useState} from "react";

export default function ExperiencePage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";

    const workExperience = [
        {
            title: "Teaching Assistant (CS252 - System Programming)",
            type:
                "Teaching",
            company:
                "Purdue University",
            date:
                "Jan 2025 - Present",
            location:
                "West Lafayette, IN",
            responsibilities:
                [
                    "Evaluate student projects and lab assignments in C, C++, and Shell Scripting.",
                    "Provide support by addressing student questions and problems during office hours or online forums.",
                    "Conduct lab sessions to help students with homework, exam preparation, and course-related questions."
                ],
            technologies:
                ["C", "C++", "Shell Scripting"],
            link: 'https://www.cs.purdue.edu/'
        },
        {
            title: "Teaching Assistant (CS250 - Computer Architecture)",
            type:
                "Teaching",
            company:
                "Purdue University",
            date:
                "Aug 2024 - Dec 2024",
            location:
                "West Lafayette, IN",
            responsibilities:
                [
                    "Evaluate student projects and lab assignments in C, C++, and Assembly.",
                    "Provide support by addressing student questions and problems during office hours or online forums.",
                    "Conduct lab sessions to help students with homework, exam preparation, and course-related questions."
                ],
            technologies:
                ["C", "C++", "Assembly", "Shell Scripting", "Hardware Architecture", "Circuits"],
            link: 'https://www.cs.purdue.edu/'
        },
        {
            title: "Customer Service Assistant",
            type:
                "Part-time",
            company:
                "Self-Employed",
            date:
                "Aug 2022 - Present",
            location:
                "Indianapolis, IN",
            responsibilities:
                [
                    "Received and redistributed donated items for resale: This role directly supports the center’s mission to help victims of domestic abuse.",
                ],
            technologies:
                ["Customer Service", "TailwindCSS", "MongoDB", "Firebase"],
            link: 'https://www.juliancenter.org/thrifty-threads/'
        },
        {
            title: "Minecraft Server Developer",
            type:
                "Remote",
            company:
                "Self-Employed",
            date:
                "Aug 2016 - Sep 2020",
            location:
                "Jerez de la Frontera, ES",
            responsibilities:
                [
                    "Game Developer: Designed and developed game add-ons in Java, enhancing the gaming experience for hundreds of online players around the world. This role involved creating engaging content for Minecraft games, successfully generated revenue.",
                    "Server Owner: Owned and managed servers using shell scripting and Java that hosted over 10,000 registered users.",
                ],
            technologies: ['MySQl', 'CSS', 'HTML', 'MariaDB', 'Product Development', 'Java']
        }
    ]

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            type:
                "Undergraduate",
            institution:
                "Purdue University",
            date:
                "Fall 2022 - Present",
            location:
                "West Lafayette, IN",
            highlights:
                [
                    "GPA: 3.66/4.0",
                    "Dean's List & Semester Honors: Fall 2022, Spring 2023, Fall 2023, Spring 2024, and Fall 2024.",
                    "Awards: 2x Purdue Black Caucus of Faculty & Staff Service Award.",
                    "Activities and societies: Badminton Club and Computer Society.",
                    "Current Vice-President of the Association of Black Computer Scientists."
                ],
            relevantCourses:
                [
                    "Competitive Programming I",
                    "Computer Architecture",
                    "Data Structures and Algorithms",
                    "Foundations of Computer Science",
                    "Problem Solving And Object-Oriented Programming",
                    "Programming in C",
                    "Software Engineering I",
                    "Systems Programming",
                    "Computer Security",
                    "Information Systems",
                    "Introduction to the Analysis of Algorithms"
                ],
            link: 'https://www.cs.purdue.edu/'
        },
        {
            degree: "High School Diploma",
            type:
                "Secondary Education",
            institution: "IES Andrés Benítez",
            date: "2016 - 2022",
            location: "Jerez de la Frontera, ES",
            highlights: [
                "Coordinated events that raised money for homeless shelters.",
                "Created my high school's official webpage.",
            ],
            relevantCourses: [],
            link: null,
        }
    ]


    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>Experience ⋅ Alejandro Griffith</title>
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
                                <BreadcrumbPage>Experience</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto" suppressHydrationWarning>
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 select-none">
                            My Journey
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-neutral-400 select-none max-w-2xl">
                            My professional journey and educational background.
                        </p>
                    </div>
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-15% 0px -15% 0px", amount: "some"}}
                        transition={{duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
                        suppressHydrationWarning
                    >
                        {/* Work Experience */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-neutral-200 select-none flex items-center gap-2">
                                <Briefcase className="h-6 w-6 dark:text-amber-500 text-blue-500"/>
                                Work Experience
                            </h2>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 bottom-4 w-px bg-[#2C2C2C]"/>

                                {/* Experience Items */}
                                {workExperience.map((experience, index) => (
                                    <div key={index} className="relative pl-16 pb-10">
                                        {/* Timeline Dot */}
                                        <div
                                            className="absolute left-[25px] w-4 h-4 rounded-full dark:bg-amber-500 bg-blue-500"/>
                                        <Card
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <div className="space-y-1">
                                                    <div className="flex items-start justify-between">
                                                        <CardTitle className="flex items-center gap-2">
                                                            <a href={experience.link} target="_blank"
                                                               className="group flex items-center gap-2">
                                                                <span
                                                                    className="text-xl font-semibold transition-colors group-hover:text-blue-500 dark:group-hover:text-amber-500">{experience.title}</span>
                                                                {!isMobile && (
                                                                    <ExternalLink
                                                                        className="h-4 w-4 text-blue-500 dark:text-amber-500 transition-transform group-hover:translate-x-0.5"/>
                                                                )}
                                                            </a>
                                                        </CardTitle>
                                                        <Badge variant="secondary"
                                                               className="bg-blue-500 dark:bg-amber-500 dark:text-black dark:hover:text-white text-white hover:text-black select-none">
                                                            {experience.type}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Building
                                                            className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                        <span>{experience.company}</span>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{experience.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{experience.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {experience.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx}>{responsibility}</li>
                                                    ))}
                                                </ul>
                                                <div className="flex gap-2 mt-4 flex-wrap">
                                                    {experience.technologies.map((tech, idx) => (
                                                        <Badge key={idx} variant="outline"
                                                               className="border-blue-500 text-blue-500 dark:border-amber-500 dark:text-amber-500 hover:text-white hover:bg-blue-500 dark:hover:bg-amber-500 select-none">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* Education */}
                        <section className="space-y-6 mt-10">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-neutral-200 select-none flex items-center gap-2">
                                <GraduationCap className="h-6 w-6 dark:text-amber-500 text-blue-500"/>
                                Education
                            </h2>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 bottom-0 w-px bg-[#2C2C2C]"/>

                                {/* Education Items */}
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-16 pb-10">
                                        {/* Timeline Dot */}
                                        <div
                                            className="absolute left-[25px] w-4 h-4 rounded-full dark:bg-amber-500 bg-blue-500"/>

                                        <Card
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <div className="space-y-1">
                                                    <div className="flex items-start justify-between">
                                                        {edu.link != null ? (
                                                            <CardTitle className="flex items-center gap-2">
                                                                <a href={edu.link} target="_blank"
                                                                   className="group flex items-center gap-2">
                                                                    <span
                                                                        className="text-xl font-semibold transition-colors group-hover:text-blue-500 dark:group-hover:text-amber-500">{edu.degree}</span>
                                                                    {!isMobile && (
                                                                        <ExternalLink
                                                                            className="h-4 w-4 text-blue-500 dark:text-amber-500 transition-transform group-hover:translate-x-0.5"/>
                                                                    )}
                                                                </a>
                                                            </CardTitle>
                                                        ) : (
                                                            <CardTitle
                                                                className="text-xl font-semibold">{edu.degree}</CardTitle>
                                                        )
                                                        }
                                                        <Badge variant="secondary"
                                                               className="bg-blue-500 dark:bg-amber-500 dark:text-black dark:hover:text-white text-white hover:text-black select-none">
                                                            {edu.type}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Building
                                                            className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                        <span>{edu.institution}</span>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{edu.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{edu.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {edu.highlights.map((highlight, idx) => (
                                                        <li key={idx}>{highlight}</li>
                                                    ))}
                                                </ul>
                                                <div className="flex gap-2 mt-4 flex-wrap">
                                                    {edu.relevantCourses.map((course, idx) => (
                                                        <Badge key={idx} variant="outline"
                                                               className="border-blue-500 text-blue-500 dark:border-amber-500 dark:text-amber-500 hover:text-white hover:bg-blue-500 dark:hover:bg-amber-500 select-none">
                                                            {course}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <a href="/about"
                           className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">Previous Page</div>
                                <div className="text-xl dark:text-white text-black">About Me</div>
                            </div>
                        </a>
                        <a href="/Projects"
                           className="flex items-center gap-2 text-right text-gray-500 hover:text-gray-300 transition-colors">
                            <div>
                                <div className="text-sm font-medium">Next Page</div>
                                <div className="text-xl dark:text-white text-black">Projects</div>
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


