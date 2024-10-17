"use client"
import { Category } from "@prisma/client"
import { Record } from "@prisma/client/runtime/library"
import {
    FcMusic,
    FcCommandLine,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcEditImage
} from "react-icons/fc"
import { IconType } from "react-icons/lib"
import { CategoryItem } from "./CategoryItem"

interface CategoriesProps {
    items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
    "Music": FcMusic,
    "Computer Science": FcCommandLine,
    "Photography": FcOldTimeCamera,
    "Accounting": FcSalesPerformance,
    "Photo Editing": FcEditImage
}

export const Categories = ({items} : CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}