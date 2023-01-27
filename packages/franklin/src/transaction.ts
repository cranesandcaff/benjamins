export type Transaction = {
  accountId: number
  amount: number
  createdAt: Date
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'OPENING_BALANCE'

}

export const TransactionType = {
  deposit: 'DEPOSIT',
  withdrawal: 'WITHDRAWAL'
} as const
