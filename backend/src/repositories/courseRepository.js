const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findCourses = async () => {
  console.log(await prisma.curso.findMany());
  return prisma.curso.findMany();
};

const createCourse = async (nome, prof, descricao, num_vagas, turma = []) => {
  try {
    return await prisma.curso.create({
      data: { nome, prof, descricao, num_vagas, turma: { create: turma } },
      include: { turma: true },
    });
  } catch (error) {
    console.error("Erro ao criar curso:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteCourseById = async (id) => {
  await prisma.turma.deleteMany({
    where: { id_curso: Number(id) },
  });

  return prisma.curso.delete({ where: { id: Number(id) } });
};
module.exports = {
  findCourses,
  createCourse,
  deleteCourseById,
};
