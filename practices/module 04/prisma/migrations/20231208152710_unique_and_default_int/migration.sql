/*
  Warnings:

  - A unique constraint covering the columns `[default_unique_int]` on the table `numbers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `numbers` ADD COLUMN `default_unique_int` INTEGER NOT NULL DEFAULT 96;

-- CreateIndex
CREATE UNIQUE INDEX `numbers_default_unique_int_key` ON `numbers`(`default_unique_int`);
