const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findManagerByEmail = async (email) => {
  return prisma.gerenciador.findUnique({ where: { email } });
};

const createManager = async (email, password) => {
  try {
    return await prisma.gerenciador.create({
      data: { email, password },
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
module.exports = { findManagerByEmail, createManager };
