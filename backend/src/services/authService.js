const {
  createManager,
  findManagerByEmail,
} = require("../repositories/managerRepository");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

const register = async (email, password) => {
  const existingManager = await findManagerByEmail(email);
  if (existingManager) throw new Error("Manager already existing");
  const hashedPassword = await hashPassword(password);
  return createManager(email, hashedPassword);
};

const login = async (email, password) => {
  const manager = await findManagerByEmail(email);
  if (!manager || !(await comparePassword(password, manager.password)))
    throw new Error("Invalid credentials");
  return manager;
};

module.exports = { register, login };
