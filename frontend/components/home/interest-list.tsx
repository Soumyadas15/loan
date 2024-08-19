import { Card, CardContent, CardHeader } from "../ui/card"

interface InterestListProps{
    label: string;
    companies: any[];
}

export const InterestList = ({
    label,
    companies,
} : InterestListProps) => {
    return (
        <Card>
            <CardHeader className="font-semibold">
                {label}
            </CardHeader>
            <CardContent className="mt-6 flex items-center justify-center flex-col max-h-[30vh] overflow-hidden overflow-y-scroll">
                {companies.map((company, index) => (
                    <ListItem key={index} company={company} />
                ))}
            </CardContent>
        </Card>
    )
}

interface ListItemProps{
    company: any;
}

const ListItem = ({
    company
} : ListItemProps) => {

    return (
        <div className="w-full p-4 px-2 flex items-center justify-between">
            <div>
                <h1>{company.name}</h1>
            </div>
            <div>
                <h1>{company.rate}</h1>
            </div>
        </div>
    )
}