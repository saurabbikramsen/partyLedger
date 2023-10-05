import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  MoneyTransactionDto,
  MoneyTransactionUpdateDto,
} from './Dto/moneyTransaction.dto';

@Injectable()
export class MoneyTransactionService {
  constructor(private prisma: PrismaService) {}

  async getMoneyTransaction(id: string) {
    const transaction = await this.prisma.moneyTransaction.findFirst({
      where: { id },
      select: {
        amount: true,
        customer: true,
      },
    });
    if (!transaction) throw new NotFoundException('No Such Transaction');
    return transaction;
  }

  async getAllMoneyTransactions() {
    return this.prisma.moneyTransaction.findMany();
  }

  async addMoneyTransaction(transactionDetail: MoneyTransactionDto) {
    const transaction = await this.prisma.moneyTransaction.create({
      data: {
        amount: transactionDetail.amount,
        customer: { connect: { id: transactionDetail.customerId } },
      },
      select: { customer: true },
    });
    await this.prisma.customer.update({
      where: { id: transactionDetail.customerId },
      data: {
        balance: transaction.customer.balance - transactionDetail.amount,
      },
    });
    return { message: 'Money Transaction Added Successfully' };
  }

  async updateMoneyTransaction(
    id: string,
    transactionDetail: MoneyTransactionUpdateDto,
  ) {
    const transaction = await this.getMoneyTransaction(id);
    await this.prisma.moneyTransaction.update({
      where: { id },
      data: {
        ...transactionDetail,
      },
    });
    const balanceChange = transaction.amount - transactionDetail.amount;
    await this.prisma.customer.update({
      where: { id: transaction.customer.id },
      data: { balance: transaction.customer.balance + balanceChange },
    });
    return { message: 'Money Transaction Updated Successfully' };
  }
  async deleteMoneyTransaction(id: string) {
    await this.getMoneyTransaction(id);
    await this.prisma.moneyTransaction.delete({ where: { id } });
  }
}
