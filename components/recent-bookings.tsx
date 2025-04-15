"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Booking {
  id: string
  destination: string
  customer: string
  date: string
  amount: number
  status: "confirmed" | "pending" | "cancelled"
}

const bookings: Booking[] = [
  {
    id: "B-1001",
    destination: "Paris, France",
    customer: "John Smith",
    date: "2025-04-15",
    amount: 1250.0,
    status: "confirmed",
  },
  {
    id: "B-1002",
    destination: "Tokyo, Japan",
    customer: "Emma Johnson",
    date: "2025-04-14",
    amount: 2100.5,
    status: "pending",
  },
  {
    id: "B-1003",
    destination: "New York, USA",
    customer: "Michael Brown",
    date: "2025-04-14",
    amount: 950.75,
    status: "confirmed",
  },
  {
    id: "B-1004",
    destination: "Rome, Italy",
    customer: "Sophia Garcia",
    date: "2025-04-13",
    amount: 1450.25,
    status: "cancelled",
  },
  {
    id: "B-1005",
    destination: "London, UK",
    customer: "William Davis",
    date: "2025-04-13",
    amount: 1100.0,
    status: "confirmed",
  },
]

export function RecentBookings() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>View and manage the latest travel bookings</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Booking ID</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Destination</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Customer</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Date</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Amount</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" className="p-0 font-medium">
                  Booking ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-medium">
                  Destination
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell className="text-right">${booking.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit booking</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Cancel booking</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
