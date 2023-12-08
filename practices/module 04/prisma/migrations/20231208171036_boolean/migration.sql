/*
  Warnings:

  - Added the required column `trueORfalse` to the `booleans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booleans` ADD COLUMN `trueORfalse` BOOLEAN NOT NULL;
