import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TransactionModule } from './khata_transaction/transaction.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';
import { MoneyTransactionModule } from './money-transaction/money-transaction.module';
import { AdminModule } from './admin/admin.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CustomerModule,
    TransactionModule,
    JwtModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UtilsModule,
    MoneyTransactionModule,
    AdminModule,
  ],
})
export class AppModule {}
