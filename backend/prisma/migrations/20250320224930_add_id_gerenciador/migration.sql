/*
  Warnings:

  - The primary key for the `Gerenciador` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Gerenciador" DROP CONSTRAINT "Gerenciador_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Gerenciador_pkey" PRIMARY KEY ("id");
