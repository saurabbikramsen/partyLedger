import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from '../customer/Dto/customer.dto';

import { MoneyTransactionService } from './money-transaction.service';
import {
  MoneyTransactionDto,
  MoneyTransactionGetResponse,
  MoneyTransactionUpdateDto,
} from './Dto/moneyTransaction.dto';

@ApiTags('MoneyTransaction')
// @ApiBearerAuth()
// @UseGuards(AdminAuthGuard)
@Controller('moneyTransaction')
export class MoneyTransactionController {
  constructor(private moneyTransactionService: MoneyTransactionService) {}

  @ApiOperation({
    summary: 'Adds a new MoneyTransaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Post()
  addMoneyTransaction(@Body() moneyTransactionInfo: MoneyTransactionDto) {
    return this.moneyTransactionService.addMoneyTransaction(
      moneyTransactionInfo,
    );
  }
  @ApiOperation({
    summary: 'Gets a MoneyTransaction with id',
  })
  @ApiResponse({ type: MoneyTransactionGetResponse })
  @Get('/:id')
  getMoneyTransaction(@Param('id') id: string) {
    return this.moneyTransactionService.getMoneyTransaction(id);
  }
  @ApiOperation({
    summary: 'Gets all the MoneyTransaction',
  })
  @ApiResponse({ type: [MoneyTransactionDto] })
  @Get()
  getAll() {
    return this.moneyTransactionService.getAllMoneyTransactions();
  }
  @ApiOperation({
    summary: 'Updates an Existing MoneyTransaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Put('/:id')
  updateMoneyTransaction(
    @Body() moneyTransactionInfo: MoneyTransactionUpdateDto,
    @Param('id') id: string,
  ) {
    return this.moneyTransactionService.updateMoneyTransaction(
      id,
      moneyTransactionInfo,
    );
  }

  @ApiOperation({
    summary: 'Delete an Existing MoneyTransaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Delete('/:id')
  deleteMoneyTransaction(@Param('id') id: string) {
    return this.moneyTransactionService.deleteMoneyTransaction(id);
  }
}
