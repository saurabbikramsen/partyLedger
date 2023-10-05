import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MoneyTransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
export class MoneyTransactionUpdateDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}

export class MoneyTransactionGetResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  amount: number;
}
