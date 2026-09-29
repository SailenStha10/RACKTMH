import { format } from "date-fns"

function formatDate(date: Date): string {
  return format(date, "MMM d, yyyy")
}

function formatTime(date: Date): string {
  return format(date, "h:mm a")
}

export { formatDate, formatTime }
