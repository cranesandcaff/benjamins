import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//// @ts-ignore
//
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const account = await prisma.account.create({
    data: {},
  });

  await prisma.transaction.create({
    data: {
      accountId: account.id,
      amount: 10000 * 100,
      type: 'DEPOSIT',
      openingBalance: 0,
      createdAt: new Date('1/1/2023'),
    },
  });

  const transaction = await prisma.transaction.create({
    data: {
      accountId: account.id,
      amount: 5000 * 100,
      type: 'DEPOSIT',
      openingBalance: 0,
      createdAt: new Date('1/5/2023')

    },
  });

  // await prisma.transaction.create({
  //   data: {
  //     accountId: account.id,
  //     amount: 5000 * 100,
  //     type: 'WITHDRAWAL',
  //     openingBalance: 0,
  //   },
  // });

  console.log(account);
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
