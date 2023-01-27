// import { InterestCalculator } from '@benjamins/models'
import { Injectable } from '@nestjs/common';

import { Prisma, Transaction, Account } from '@prisma/client';
import { endOfMonth, startOfMonth } from 'date-fns';
import { InterestCalculator } from '../interest-calculator/interest-calculator';
import { InterestCalculatorService } from '../interest-calculator/interest-calculator.service'
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private readonly calculator: InterestCalculatorService,
  ) {}

  async listTransactions(
    args: Prisma.TransactionFindManyArgs,
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany(args);
  }

  async addTransaction(transaction: Prisma.TransactionUncheckedCreateInput) {
    return this.prisma.transaction
      .findFirst({
        where: {
          accountId: transaction.accountId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      .then((previousTransaction) => {
        transaction.openingBalance =
          previousTransaction.amount + previousTransaction.openingBalance;

        return this.prisma.transaction.create({
          data: transaction,
        });
      });
  }

  async getInterest({ accountId, month }: { accountId: number; month: Date }) {
    return this.prisma.transaction
      .findMany({
        where: {
          accountId,
          createdAt: {
            lte: endOfMonth(month),
            gte: startOfMonth(month),
          },
        },
      })
      .then((transactions) => {
        return this.calculator.calculate(transactions);
      });
  }
}
