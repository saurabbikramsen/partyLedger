import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import {
  CustomerDto,
  CustomerGetResponse,
  CustomerUpdateDto,
  ResponseDto,
} from './Dto/customer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @ApiOperation({
    summary: 'Adds a new Customer',
  })
  @ApiResponse({ type: ResponseDto })
  @Post()
  addCustomer(@Body() customerInfo: CustomerDto) {
    return this.customerService.addCustomer(customerInfo);
  }
  @ApiOperation({
    summary: 'Gets a Customer with id',
  })
  @ApiResponse({ type: CustomerGetResponse })
  @Get('/:id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }
  @ApiOperation({
    summary: 'Gets all the Customer',
  })
  @ApiResponse({ type: [CustomerDto] })
  @Get()
  getAll() {
    return this.customerService.getAllCustomers();
  }
  @ApiOperation({
    summary: 'Updates an Existing Customer',
  })
  @ApiResponse({ type: ResponseDto })
  @Put('/:id')
  updateCustomer(
    @Body() customerInfo: CustomerUpdateDto,
    @Param('id') id: string,
  ) {
    return this.customerService.updateCustomer(id, customerInfo);
  }

  @ApiOperation({
    summary: 'Delete an Existing Customer',
  })
  @ApiResponse({ type: ResponseDto })
  @Delete('/:id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
