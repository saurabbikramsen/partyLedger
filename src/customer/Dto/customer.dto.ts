import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TransactionDto } from '../../khata_transaction/Dto/transaction.dto';

export class CustomerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contact: string;
}

export class CustomerUpdateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  contact: string;
}
export class ResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;
}

export class CustomerGetResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  contact: number;

  @ApiProperty()
  transaction: TransactionDto;
}
