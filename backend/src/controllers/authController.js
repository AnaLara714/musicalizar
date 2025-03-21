const { register, login } = require("../services/authService");

const registerManager = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    const manager = await register(email, password);
    res.status(201).json({ message: "Manager created", manager });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginManager = async (req, res) => {
  const { email, password } = req.body;

  try {
    const manager = await login(email, password);
    req.session.userId = manager.id;
    res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const logoutManager = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ message: "Logout successfull" });
  });
};

module.exports = { registerManager, loginManager, logoutManager };
