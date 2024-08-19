import { User } from "@/types";
import { UserAvatar } from "../navbar/user-avatar";
import { Ellipsis, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { signOut } from "@/actions/logout.action";
import { DEFAULT_LOGOUT_REDIRECT } from "@/routes";
import toast from "react-hot-toast";

interface UserLabelProps{
    currentUser: User;
}

export const Userlabel = ({
    currentUser,
} : UserLabelProps) => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSignOut = async () => {
        startTransition(() => {
            signOut()
                .then((data : any) => {
                    if(data.redirect){
                        router.push(`${DEFAULT_LOGOUT_REDIRECT}`)
                    }
                })
                .catch((error: any) => {
                    toast.error("Unexpected error encountered")
                })
        })
    }


    return (
        <div className="w-full p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <UserAvatar user={currentUser}/>
                <div>
                    <h1>{currentUser.name}</h1>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Ellipsis 
                        size={20} 
                        className="hover:opacity-75 cursor-pointer transition duration-300"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem 
                        className="cursor-pointer text-primary flex items-center gap-2 p-2 pr-5" 
                        onClick={handleSignOut}
                    >
                        <LogOut size={20}/>
                        <p>Logout</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}