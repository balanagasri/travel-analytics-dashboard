import { BookingTrends } from "@/components/booking-trends"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentBookings } from "@/components/recent-bookings"
import { TopDestinations } from "@/components/top-destinations"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Travel Analytics Dashboard"
        text="Real-time insights into travel booking trends and patterns"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <BookingTrends className="lg:col-span-2" />
        <TopDestinations />
      </div>
      <RecentBookings />
    </DashboardShell>
  )
}
