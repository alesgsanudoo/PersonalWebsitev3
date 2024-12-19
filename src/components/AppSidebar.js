"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
    Sun,
    Moon, Instagram, Github, Linkedin, User, Briefcase, FileUser, Contact, FlaskConical, Compass, Newspaper, Send
} from 'lucide-react'
import { usePathname, useRouter } from "next/navigation"
import {NavMain} from "@/components/nav-main"
import {NavResources} from "@/components/nav-resources"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail, useSidebar,
} from "@/components/ui/sidebar"
import {NavThemes} from "@/components/nav-themes";
import {Separator} from "@/components/ui/separator";
import {NavSocial} from "@/components/nav-socials";
import {useCallback, useEffect} from "react";

const data = {
    social: [
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/alesgsanudoo_/",
        },
        {
            name: "Github",
            icon: Github,
            url: "https://github.com/alesgsanudoo",
        },
        {
            name: "Linkedin",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/alesgsanudoo/",
        },
    ],
    navMain: [
        {
            title: "Expore",
            url: "/",
            icon: Compass,
            number: 1,
        },
        {
            title: "About Me",
            url: "/about",
            icon: User,
            number: 2,
        },
        {
            title: "Experience",
            url: "#experience",
            icon: Briefcase,
            number: 3,
        },
        {
            title: "Projects",
            url: "#projects",
            icon: FlaskConical,
            number: 4,
        },
        {
            title: "Resume",
            url: "resume",
            icon: FileUser,
            number: 5,
        },
        {
            title: "Contact Me",
            url: "#contact",
            icon: Contact,
            number: 6,
        },
    ],
    res: [
        {
            name: "Me & Myself",
            url: "#",
            icon: Newspaper,
            number: 7,
        },
        {
            name: "Feedback",
            url: "#",
            icon: Send,
            number: 8,
        },
    ],
}

export function AppSidebar(props) {
    const {
        state,
        isMobile,
    } = useSidebar()

    const pathname = usePathname()
    const router = useRouter()

    // Function to check if a URL matches the current pathname
    const isActive = useCallback((url) => {
        if (url === '/') {
            return pathname === url
        }
        return pathname.startsWith(url)
    }, [pathname])

    // Function to handle keyboard navigation
    const handleKeyDown = useCallback((event) => {
        const key = event.key
        if (key >= '1' && key <= '6') {
            const index = parseInt(key) - 1
            if (index < data.navMain.length) {
                const item = data.navMain[index]
                router.push(item.url)
            }
        }
    }, [router])

    // Add event listener for keydown
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <Sidebar collapsible="icon" {...props}>
            {state === "expanded" && (
                <SidebarHeader>
      <pre className="font-mono text-xs text-center text-primary justify-center">
        <code>{`
*      ☄️       .
.    *       *      .
*       .       *
        `}</code>
      </pre>
                </SidebarHeader>
            )}
            <SidebarContent>
                <NavMain items={data.navMain.map(item => ({
                    ...item,
                    isActive: isActive(item.url)
                }))}/>
                <NavResources res={data.res}/>
                {
                    state === "collapsed" && (
                        <Separator orientation="horizontal" className="ml-2 w-8"/>
                    )
                }
                <NavThemes/>
            </SidebarContent>
            <SidebarFooter>
                <NavSocial socials={data.social}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}

