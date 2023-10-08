import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  TransactionDto,
  TransactionGetResponse,
  TransactionUpdateDto,
} from './Dto/transaction.dto';
import { ResponseDto } from '../customer/Dto/customer.dto';

@ApiTags('Transactions')
// @ApiBearerAuth()
// @UseGuards(AdminAuthGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @ApiOperation({
    summary: 'Adds a new Transaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Post()
  addTransaction(@Body() transactionInfo: TransactionDto) {
    return this.transactionService.addTransaction(transactionInfo);
  }
  @ApiOperation({
    summary: 'Gets a Transaction with id',
  })
  @ApiResponse({ type: TransactionGetResponse })
  @Get('/:id')
  getTransaction(@Param('id') id: string) {
    return this.transactionService.getTransaction(id);
  }
  @ApiOperation({
    summary: 'Gets all the Transaction',
  })
  @ApiResponse({ type: [TransactionDto] })
  @Get()
  getAll() {
    return this.transactionService.getAllTransactions();
  }
  @ApiOperation({
    summary: 'Updates an Existing Transaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Put('/:id')
  updateTransaction(
    @Body() transactionInfo: TransactionUpdateDto,
    @Param('id') id: string,
  ) {
    return this.transactionService.updateTransaction(id, transactionInfo);
  }

  @ApiOperation({
    summary: 'Delete an Existing Transaction',
  })
  @ApiResponse({ type: ResponseDto })
  @Delete('/:id')
  deleteTransaction(@Param('id') id: string) {
    return this.transactionService.deleteTransaction(id);
  }
}
