import { PaymentState } from '../../Enums/enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  item: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  unitPrice: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;

  @ApiProperty()
  @IsString()
  status: PaymentState;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  paidPrice: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  remainingPrice: number;
}
