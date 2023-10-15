import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerDto, CustomerUpdateDto } from './Dto/customer.dto';
import { CommonUtils } from '../utils/common.utils';

@Injectable()
export class CustomerService {
  constructor(
    private prisma: PrismaService,
    private utils: CommonUtils,
  ) {}

  async getCustomer(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        address: true,
        balance: true,
        createdAt: true,
        contact: true,
        id: true,
        khataTransaction: true,
        moneyTransaction: true,
      },
    });
    if (!customer) throw new NotFoundException('Customer Not Found');
    return customer;
  }

  async getAllCustomers(search: string) {
    const customers = await this.prisma.customer.findMany({
      where: { name: { contains: search, mode: 'insensitive' } },
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        contact: true,
        createdAt: true,
        balance: true,
        moneyTransaction: true,
        khataTransaction: true,
      },
    });
    const count = await this.prisma.customer.count({
      where: {
        name: { contains: search, mode: 'insensitive' },
      },
    });
    return this.utils.paginatedResponse(customers, 0, 10, count);
  }
  async addCustomer(customerDetails: CustomerDto) {
    const customer = await this.prisma.customer.findUnique({
      where: { email: customerDetails.email },
    });
    if (customer) throw new BadRequestException('User Already Present');

    await this.prisma.customer.create({
      data: {
        ...customerDetails,
      },
    });
    return {
      message: 'Customer Added Successfully',
    };
  }

  async updateCustomer(id: string, customerDetails: CustomerUpdateDto) {
    await this.getCustomer(id);
    await this.prisma.customer.update({
      where: { id },
      data: { ...customerDetails },
    });
    return {
      message: 'Player Updated Successfully',
    };
  }
  async deleteCustomer(id: string) {
    await this.getCustomer(id);
    await this.prisma.customer.delete({
      where: { id },
    });
    return {
      message: 'Player Deleted Successfully',
    };
  }
}
