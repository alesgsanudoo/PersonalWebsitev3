"use client"

import {Command, Folder, Forward, MoreHorizontal, Trash2} from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import * as React from "react";

export function NavResources({res}) {
    const {state, isMobile} = useSidebar()

    return (
        <SidebarGroup>
            {state === "expanded" && (
                <SidebarGroupLabel
                    className={"font-bold text-md text-blue-500 dark:text-amber-500 transition-colors duration-300 ease-in-out"}>
                    <span>Resources</span>
                </SidebarGroupLabel>
            )}
            <SidebarMenu>
                {res.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                            <a href={item.url}>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                                { !isMobile && (
                                <SidebarMenuBadge
                                    className="flex items-center space-x-1 px-1.5 py-0.5 text-xs font-medium dark:text-orange-500 text-blue-500">
                                    <b className="opacity-70 border dark:border-orange-500 border-blue-500 px-1.5 py-1 rounded">{item.number}</b>
                                </SidebarMenuBadge>
                                )}
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

