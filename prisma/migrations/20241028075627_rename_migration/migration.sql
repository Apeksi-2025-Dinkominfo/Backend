/*
  Warnings:

  - You are about to drop the column `pesawat` on the `datamunas` table. All the data in the column will be lost.
  - You are about to drop the column `pesawat` on the `optd` table. All the data in the column will be lost.
  - Added the required column `transportasi` to the `datamunas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ukuran_baju_bapak` to the `datamunas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ukuran_baju_ibuk` to the `datamunas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportasi` to the `optd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ukuran_baju_bapak` to the `optd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ukuran_baju_ibuk` to the `optd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datamunas` DROP COLUMN `pesawat`,
    ADD COLUMN `transportasi` VARCHAR(191) NOT NULL,
    ADD COLUMN `ukuran_baju_bapak` VARCHAR(191) NOT NULL,
    ADD COLUMN `ukuran_baju_ibuk` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `optd` DROP COLUMN `pesawat`,
    ADD COLUMN `transportasi` VARCHAR(191) NOT NULL,
    ADD COLUMN `ukuran_baju_bapak` VARCHAR(191) NOT NULL,
    ADD COLUMN `ukuran_baju_ibuk` VARCHAR(191) NOT NULL;
