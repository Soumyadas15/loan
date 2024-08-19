"use client"

import { usePathname } from "next/navigation";

interface SidebarItemProps{
    label: string;
}

export const SidebarItem = ({
    label,
} : SidebarItemProps) => {

    const pathname = usePathname();
    

    return(
        <div className="px-4 p-2 w-full flex items-start gap-2 transition duration-300 rounded-lg cursor-pointer">
            <h1 className="hover:underline font-semibold">
                {label}
            </h1>
        </div>
    )
}