import { HomeClient } from "@/components/home/home-client";
import { DataTable } from "@/components/users/data-table";
import { getCurrentUser } from "@/lib/get-current-user";

const HomePage = async () => {

    const currentUser = await getCurrentUser();

    return (
        <div className="h-full w-full">
            <HomeClient currentUser={currentUser}/>
        </div>
    )
}
export default HomePage;