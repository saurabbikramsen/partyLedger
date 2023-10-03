import { PaymentState } from '../Enums/enum';

export interface Transaction {
  item: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  status: PaymentState;
  paidPrice: number;
  remainingPrice: number;
}

export interface CustomerDto {
  id: string;
  name: string;
  email: string;
  address: string;
  balance: number;
  transaction: Transaction;
}
