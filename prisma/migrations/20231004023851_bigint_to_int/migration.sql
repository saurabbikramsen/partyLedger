/*
  Warnings:

  - The `balance` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "balance",
ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "paidPrice" SET DEFAULT 0,
ALTER COLUMN "status" SET DEFAULT 'unPaid';
