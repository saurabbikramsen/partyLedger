import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdminDto, AdminLoginDto } from './Dto/admin.dto';
import * as argon from 'argon2';
import { CommonUtils } from '../utils/common.utils';

@Injectable()
export class AdminService {
  as;

  constructor(
    private prisma: PrismaService,
    private utils: CommonUtils,
  ) {}

  async seedAdmin(seedDetails: AdminDto) {
    const count = await this.prisma.admin.count();
    if (!count) {
      const hashPassword = await argon.hash(seedDetails.password);
      await this.prisma.admin.create({
        data: {
          email: seedDetails.email,
          name: seedDetails.name,
          password: hashPassword,
        },
      });
      return { message: 'Admin seeded successfully' };
    }
    return { message: 'Admin already present' };
  }

  async logAdmin(logDetails: AdminLoginDto) {
    const admin = await this.prisma.admin.findFirst({
      where: { email: logDetails.email },
    });

    if (!admin) {
      throw new NotFoundException('Admin is not present');
    }
    await this.utils.passwordMatches(admin.password, logDetails.password);
    const payload = {
      id: admin.id,
      role: 'admin',
    };
    const accessToken = await this.utils.generateAccessToken(payload);
    const refreshToken = await this.utils.generateRefreshToken(payload);
    return { id: admin.id, accessToken, refreshToken };
  }
}
