import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Controller('transactions')
export class TransactionsController {
  constructor(private prisma: PrismaService) {}
  @Get()
  findTransactions() {}
}
