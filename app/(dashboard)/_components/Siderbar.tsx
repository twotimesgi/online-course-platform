import { Logo } from "./Logo"
import { SidebarRoutes } from "./SidebarRoutes"

export const Sidebar = () => {
    return <div className="h-full border-r flex-col flex overflow-y-auto bg-white shadow-sm">
        <div className="p-6 h-[80px]">
            <Logo/>
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
}

