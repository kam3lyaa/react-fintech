export type Expense = {
  id: number
  user: {
    id: number
  }
  category: {
    id: number
  }
  amount: number
  date: string
  description: string
  paymentMethod: string
  paid: boolean
  recurringPayment: boolean
}