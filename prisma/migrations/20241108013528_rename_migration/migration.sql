/*
  Warnings:

  - Added the required column `EventParticipation` to the `optd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `optd` ADD COLUMN `EventParticipation` VARCHAR(191) NOT NULL;
