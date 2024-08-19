import { User } from "@/types"
import { HomeHeader } from "./home-header"
import { UserCard } from "./user-card"
import { LoanCard } from "./loan-card";
import { PaymentGraph } from "./payment-graph";
import { InterestList } from "./interest-list";

interface HomeClientProps{
    currentUser: User;
}

const HomeLoans = [
    {
        name: "LIC Housing Finance",
        rate: "7%"
    },
    {
        name: "Reliance Capital",
        rate: "10%"
    },
    {
        name: "Fullerton India",
        rate: "11%"
    },
    {
        name: "Muthoot Fincorp Limited",
        rate: "8%"
    },
    {
        name: "Sundaram Finance Ltd.",
        rate: "11%"
    },
    {
        name: "CreditAccess Grameen",
        rate: "8%"
    }
]
export const HomeClient = ({
    currentUser,
} : HomeClientProps) => {

    return (
        <div className="w-full h-full">
            <HomeHeader/>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                <UserCard currentUser={currentUser}/>
                <LoanCard/>
                <InterestList label="Home loans" companies={HomeLoans}/>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-6">
                <div className="lg:col-span-2">
                    <PaymentGraph/>
                </div>
                <InterestList label="Personal loans" companies={HomeLoans}/>
            </div>
        </div>
    )
}