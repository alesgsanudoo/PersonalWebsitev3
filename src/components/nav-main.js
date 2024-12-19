"use client"

import {Command} from 'lucide-react'

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem, useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({items}) {
    const {
        state,
        isMobile,
    } = useSidebar()

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                            <a href={item.url}>
                                {item.icon && <item.icon/>}
                                <span>{item.title}</span>
                                {!isMobile && (
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

