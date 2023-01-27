import * as Dinero from 'dinero.js'
import { Transaction, TransactionType } from '../transaction'

export class InterestCalculator {
  interestRate = 0.02
  
  getDailyInterest() {
    return this.interestRate / 365
  }

  calculate(transactions: Transaction[]) {
    return transactions.reduce((prev, next) => {
      const accruedInterest = this.calculateAccrual(next)
      return prev + accruedInterest
    }, 0)
  }

  calculateAccrual(transaction: Transaction) {
    const interestRate = this.getDailyInterest()
    const daysInMonth = getDaysInMonth(transaction.createdAt)
    const accrualStart = transaction.createdAt.getDate()
    const daysInterestAcrrued = daysInMonth - accrualStart + 1
    // ! Just casts to a negative if its withdrawal
    const amount =
      transaction.type === TransactionType.deposit
        ? transaction.amount
        : transaction.amount * -1

    const interest = Dinero({ amount: amount })
      .multiply(daysInterestAcrrued)
      .multiply(interestRate)

    return interest.getAmount()
  }
}



function getDaysInMonth(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()
}

