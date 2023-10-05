import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto, AdminLoginDto } from './Dto/admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @ApiOperation({ summary: 'seed the first admin user' })
  @Post('seed')
  seedAdmin(@Body() adminDto: AdminDto) {
    return this.adminService.seedAdmin(adminDto);
  }

  @ApiOperation({ summary: 'login the admin user' })
  @Post('login')
  loginAdmin(@Body() adminLoginInfo: AdminLoginDto) {
    return this.adminService.logAdmin(adminLoginInfo);
  }
}
