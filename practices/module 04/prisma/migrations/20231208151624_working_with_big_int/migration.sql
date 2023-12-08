/*
  Warnings:

  - You are about to drop the column `basic_int` on the `numbers` table. All the data in the column will be lost.
  - Added the required column `default_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unsigned_big_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unsigned_default_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unsigned_medium_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unsigned_small_int` to the `numbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unsigned_tiny_int` to the `numbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `numbers` DROP COLUMN `basic_int`,
    ADD COLUMN `default_int` INTEGER NOT NULL,
    ADD COLUMN `unsigned_big_int` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `unsigned_default_int` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `unsigned_medium_int` MEDIUMINT UNSIGNED NOT NULL,
    ADD COLUMN `unsigned_small_int` SMALLINT UNSIGNED NOT NULL,
    ADD COLUMN `unsigned_tiny_int` TINYINT UNSIGNED NOT NULL;
