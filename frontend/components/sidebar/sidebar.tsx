"use client"

import { User } from "@/types"
import { SidebarItem } from "./sidebar-item"
import { Userlabel } from "./user-label";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface SidebarProps{
    currentUser: User;
}


export const Sidebar = ({
    currentUser,
} : SidebarProps) => {

    const { onOpen } = useModal();

    return (
        <div className="
                h-full 
                w-full 
                flex 
                flex-col
                items-center 
                justify-between 
                 
                bg-tranaparent 
                border-r-2 
                py-6 px-4
        ">
            <div className="w-full">
                <div className="w-full flex items-start flex-col gap-4">
                    <h1 className="text-2xl font-bold">NEXUS</h1>
                    <div className="w-full flex items-start flex-col gap-2">
                        <SidebarItem label="Home"/>
                        <SidebarItem label="Profile"/>
                        <SidebarItem label="Loans"/>
                        <SidebarItem label="Settings"/>
                        <Button 
                            className="w-full"
                            onClick={() => {
                                onOpen('applyLoanModal');
                            }}
                        >
                            <Plus size={20} className="mr-1"/>
                            <p>Apply for Loan</p>
                        </Button>
                    </div>
                </div>

                
            </div>

            <div className="w-full flex flex-col items-start">
                <ThemeToggle/>
                <Userlabel currentUser={currentUser}/>
            </div>
            
        </div>
    )
}