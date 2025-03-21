/*
  Warnings:

  - The values [Intemerdiário,Avançado] on the enum `Niveis` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Niveis_new" AS ENUM ('Iniciante', 'Basico', 'Intermediario', 'Avancado');
ALTER TABLE "Turma" ALTER COLUMN "nivel" TYPE "Niveis_new" USING ("nivel"::text::"Niveis_new");
ALTER TYPE "Niveis" RENAME TO "Niveis_old";
ALTER TYPE "Niveis_new" RENAME TO "Niveis";
DROP TYPE "Niveis_old";
COMMIT;
