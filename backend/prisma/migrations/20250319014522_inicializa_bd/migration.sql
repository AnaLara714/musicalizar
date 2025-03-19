-- CreateTable
CREATE TABLE "Aluno" (
    "CPF" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("CPF")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "prof" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "num_vagas" INTEGER NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id_curso" INTEGER NOT NULL,
    "cpf_aluno" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id_curso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_CPF_key" ON "Aluno"("CPF");

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_cpf_aluno_fkey" FOREIGN KEY ("cpf_aluno") REFERENCES "Aluno"("CPF") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
