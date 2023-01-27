import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PrismaService } from './prisma/prisma.service';
import { InterestCalculatorService } from './interest-calculator/interest-calculator.service';

@Module({
  imports: [AccountsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, InterestCalculatorService],
})
export class AppModule {}
