import { User } from "@/types"
import { Card, CardContent, CardHeader } from "../ui/card"
import { UserAvatar } from "../navbar/user-avatar";

interface UserCardProps{
    currentUser: User;
}


export const UserCard = ({
    currentUser,
} : UserCardProps) => {
    return (
        <Card className="">
            <CardHeader className="font-semibold">
                Your Profile
            </CardHeader>
            <CardContent className="flex items-center flex-col">
                <div className="h-[20vh] aspect-square rounded-full overflow-hidden relative bg-neutral-200 dark:bg-neutral-600">

                </div>
                <div className="mt-4 flex flex-col gap-2 text-center">
                    <h1 className="font-semibold text-xl">{currentUser.name}</h1>
                    <h1 className="font-normal ">Credit score: 600</h1>
                </div>
            </CardContent>
        </Card>
    )
}