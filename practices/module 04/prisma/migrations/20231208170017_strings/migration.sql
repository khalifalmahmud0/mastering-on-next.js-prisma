/*
  Warnings:

  - Added the required column `big_string` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `default_string` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medium_string` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `small_string` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `string_length_Char` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `string_length_varChar` to the `strings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiny_string` to the `strings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `strings` ADD COLUMN `big_string` LONGTEXT NOT NULL,
    ADD COLUMN `default_string` VARCHAR(191) NOT NULL,
    ADD COLUMN `medium_string` MEDIUMTEXT NOT NULL,
    ADD COLUMN `small_string` TEXT NOT NULL,
    ADD COLUMN `string_default_value` VARCHAR(191) NOT NULL DEFAULT 'Khalif',
    ADD COLUMN `string_length_Char` CHAR(200) NOT NULL,
    ADD COLUMN `string_length_varChar` VARCHAR(1000) NOT NULL,
    ADD COLUMN `tiny_string` TINYTEXT NOT NULL;
