import React from 'react'
import { BsFullscreen } from 'react-icons/bs';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: '17 Sun', thisWeek: 60000, lastWeek: 50000 },
    { name: '18 Mon', thisWeek: 30000, lastWeek: 11000 },
    { name: '19 Tue', thisWeek: 20000, lastWeek: 50000 },
    { name: '20 Wed', thisWeek: 52000, lastWeek: 50000 },
    { name: '21 Thu', thisWeek: 51000, lastWeek: 12000 },
    { name: '22 Fri', thisWeek: 60000, lastWeek: 5000 },
    { name: '23 Sat', thisWeek: 50000, lastWeek: 12000 },
];

const Graph = () => {
    return (
        <div>
            <ResponsiveContainer width={"100%"} height={200}>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="1" /> */}
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}

                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => (value >= 1000 ? `${value / 1000}k` : value)}
                    />
                    <Tooltip />
                    <CartesianGrid vertical={false} stroke='#F3F3F3' />
                    <Bar
                        dataKey="thisWeek"
                        fill="#299D91"
                        barSize={16}
                        radius={[5, 5, 0, 0]}
                    />
                    <Bar
                        dataKey="lastWeek"
                        fill="#E8E8E8"
                        barSize={16}
                        radius={[5, 5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph