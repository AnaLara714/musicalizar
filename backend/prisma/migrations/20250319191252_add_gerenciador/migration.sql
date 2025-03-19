-- CreateTable
CREATE TABLE "Gerenciador" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Gerenciador_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gerenciador_email_key" ON "Gerenciador"("email");
