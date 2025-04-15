"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TopDestinationsProps {
  className?: string
}

export function TopDestinations({ className }: TopDestinationsProps) {
  // This would be fetched from your API in a real application
  const data = [
    { name: "Paris", value: 400 },
    { name: "New York", value: 300 },
    { name: "Tokyo", value: 300 },
    { name: "London", value: 200 },
    { name: "Rome", value: 150 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Destinations</CardTitle>
        <CardDescription>Most popular booking destinations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
