/*
  Warnings:

  - Added the required column `jabatan` to the `datamunas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datamunas` ADD COLUMN `jabatan` VARCHAR(191) NOT NULL;
