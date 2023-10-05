import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TransactionDto, TransactionUpdateDto } from './Dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async getTransaction(id: string) {
    const transaction = await this.prisma.khataTransaction.findFirst({
      where: { id },
      select: {
        item: true,
        unitPrice: true,
        quantity: true,
        totalPrice: true,
        customer: true,
      },
    });
    if (!transaction) throw new NotFoundException('No Such Transaction');
    return transaction;
  }

  async getAllTransactions() {
    return this.prisma.khataTransaction.findMany();
  }

  async addTransaction(transactionDetail: TransactionDto) {
    const transaction = await this.prisma.khataTransaction.create({
      data: {
        item: transactionDetail.item,
        unitPrice: transactionDetail.unitPrice,
        quantity: transactionDetail.quantity,
        totalPrice: transactionDetail.totalPrice,

        customer: { connect: { id: transactionDetail.customerId } },
      },
      select: { totalPrice: true, customer: true },
    });
    await this.prisma.customer.update({
      where: { id: transactionDetail.customerId },
      data: {
        balance: transaction.customer.balance + transaction.totalPrice,
      },
    });
    return { message: 'Khata Transaction Added Successfully' };
  }

  async updateTransaction(id: string, transactionDetail: TransactionUpdateDto) {
    const transaction = await this.getTransaction(id);
    await this.prisma.khataTransaction.update({
      where: { id },
      data: {
        ...transactionDetail,
      },
    });

    const balanceChange = transactionDetail.totalPrice - transaction.totalPrice;
    await this.prisma.customer.update({
      where: { id: transaction.customer.id },
      data: { balance: transaction.customer.balance + balanceChange },
    });
    return { message: 'Khata Transaction Updated Successfully' };
  }

  async deleteTransaction(id: string) {
    await this.getTransaction(id);
    await this.prisma.khataTransaction.delete({ where: { id } });
    return { message: 'Khata Transaction Deleted Successfully' };
  }
}
