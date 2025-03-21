-- CreateTable
CREATE TABLE "Turma" (
    "id_turma" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id_turma")
);

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
