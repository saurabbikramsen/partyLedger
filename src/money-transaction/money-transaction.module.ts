import { Module } from '@nestjs/common';
import { MoneyTransactionService } from './money-transaction.service';
import { MoneyTransactionController } from './money-transaction.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [MoneyTransactionController],
  providers: [MoneyTransactionService],
})
export class MoneyTransactionModule {}
