"use client"

import { Compass, Layout, List } from "lucide-react"
import { SidebarItem } from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";

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

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: Compass,
        label: "Analytics",
        href: "/teacher/analytics"
    },
]
export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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