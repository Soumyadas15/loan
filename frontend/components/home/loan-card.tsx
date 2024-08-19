import { Card, CardContent, CardHeader } from "../ui/card"

export const LoanCard = () => {
    return (
        <Card>
            <CardHeader className="font-semibold">
                Active Loans
            </CardHeader>
            <CardContent className="mt-6 flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold mb-6">50,000</h1>
                <p>Due: 33,0000</p>
                <p>Due Date: 30th August 2024</p>
                <p>Taken on: 1st July 2024</p>
            </CardContent>
        </Card>
    )
}