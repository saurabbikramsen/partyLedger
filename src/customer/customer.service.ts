import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerDto, CustomerUpdateDto } from './Dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getCustomer(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        address: true,
        balance: true,
        id: true,
        Transaction: true,
      },
    });
    if (!customer) throw new NotFoundException('Customer Not Found');
    return customer;
  }

  async getAllCustomers() {
    return this.prisma.customer.findMany();
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
