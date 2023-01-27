import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { InterestCalculatorService } from '../interest-calculator/interest-calculator.service'

@Module({
  providers: [TransactionsService, PrismaService, InterestCalculatorService],
  exports: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
