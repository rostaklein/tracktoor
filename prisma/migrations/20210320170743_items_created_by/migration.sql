/*
  Warnings:

  - You are about to drop the column `orderId` on the `Commodity` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Commodity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commodity" DROP CONSTRAINT "Commodity_orderId_fkey";

-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Commodity" DROP COLUMN "orderId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_CommodityToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CommodityToOrder_AB_unique" ON "_CommodityToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_CommodityToOrder_B_index" ON "_CommodityToOrder"("B");

-- AddForeignKey
ALTER TABLE "_CommodityToOrder" ADD FOREIGN KEY ("A") REFERENCES "Commodity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommodityToOrder" ADD FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commodity" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
