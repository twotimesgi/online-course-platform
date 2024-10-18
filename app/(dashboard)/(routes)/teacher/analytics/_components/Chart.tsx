"use client"

import { Card, CardHeader } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts"
interface ChartProps {
    data: {
        name: string;
        total: number;
    }[];
}
export const Chart = ({data}: ChartProps) => {
    return (
        <Card>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarChart data={data}>
                    <XAxis dataKey={"name"}
                    stroke="#888888"
                    fontFamily="12"
                    tickLine={false}
                    axisLine={false}
                    />
                    <YAxis
                     stroke="#888888"
                     fontFamily="12"
                     tickLine={true}
                     axisLine={true}
                     tickFormatter={(value) => `$${value}`}
                    />
                    <Bar fill="#0369a1" dataKey={"total"} radius={[4,4,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}