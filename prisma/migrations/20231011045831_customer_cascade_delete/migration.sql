-- DropForeignKey
ALTER TABLE "KhataTransaction" DROP CONSTRAINT "KhataTransaction_customerId_fkey";

-- DropForeignKey
ALTER TABLE "MoneyTransaction" DROP CONSTRAINT "MoneyTransaction_customerId_fkey";

-- AddForeignKey
ALTER TABLE "KhataTransaction" ADD CONSTRAINT "KhataTransaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyTransaction" ADD CONSTRAINT "MoneyTransaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
