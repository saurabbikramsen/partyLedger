import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

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
}
export class TransactionUpdateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  item?: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  unitPrice?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}

export class TransactionGetResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

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
}
