"use client"

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./SidebarItem";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    },
]
export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return <div className="flex flex-col w-full">
        {routes.map((item) => (
            <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}/>
        ))}
        </div>
}