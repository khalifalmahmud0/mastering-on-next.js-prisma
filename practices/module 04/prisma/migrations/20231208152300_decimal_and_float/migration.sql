/*
  Warnings:

  - Added the required column `decimal_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `double_float_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `only_float_int` to the `numbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `numbers` ADD COLUMN `decimal_int` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `double_float_int` DOUBLE NOT NULL,
    ADD COLUMN `only_float_int` FLOAT NOT NULL;
