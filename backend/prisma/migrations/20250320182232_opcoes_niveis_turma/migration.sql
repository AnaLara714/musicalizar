/*
  Warnings:

  - You are about to drop the column `nivel` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `nivel` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Niveis" AS ENUM ('Iniciante', 'Basico', 'Intemerdiário', 'Avançado');

-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "nivel";

-- AlterTable
ALTER TABLE "Turma" ADD COLUMN     "nivel" "Niveis" NOT NULL;
