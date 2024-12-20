"use client"

import React from 'react';
import Resume from "../../components/ResumeViewer";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function ResumePage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>Resume ⋅ Alejandro Griffith</title>
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
                                <BreadcrumbPage>Resume</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <Resume/>
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <a href="/about"
                           className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">Previous Page</div>
                                <div className="text-xl dark:text-white text-black">Projects</div>
                            </div>
                        </a>
                        <a href="/Projects"
                           className="flex items-center gap-2 text-right text-gray-500 hover:text-gray-300 transition-colors">
                            <div>
                                <div className="text-sm font-medium">Next Page</div>
                                <div className="text-xl dark:text-white text-black">Contact Me</div>
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
    );
}
