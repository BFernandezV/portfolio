import { format } from 'date-fns'

export const formatDate = (date: Date | string, formatValue: string): string => {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return format(date, formatValue)
}
