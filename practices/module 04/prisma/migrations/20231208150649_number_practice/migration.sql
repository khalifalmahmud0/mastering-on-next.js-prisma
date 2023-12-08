/*
  Warnings:

  - Added the required column `big_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medium_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `small_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiny_int` to the `numbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `numbers` ADD COLUMN `big_int` BIGINT NOT NULL,
    ADD COLUMN `medium_int` MEDIUMINT NOT NULL,
    ADD COLUMN `small_int` SMALLINT NOT NULL,
    ADD COLUMN `tiny_int` TINYINT NOT NULL;
