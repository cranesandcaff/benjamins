import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { TransactionsService } from './transactions/transactions.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly transactionService: TransactionsService,
  ) {}

  @Get('/interest/:accountId/:date')
  getInterest(
    @Param('accountId') accountId: string,
    @Param('date') date: string,
  ): any {
    return this.transactionService.getInterest({
      accountId: Number.parseInt(accountId),
      month: new Date(date),
    });
  }
}
