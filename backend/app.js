require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const authRoutes = require("./src/routes/authRoutes");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Impede acesso do JS ao cookie
      secure: false, // Deve ser 'true' em produção com HTTPS
      sameSite: "lax", // Permite cookies apenas para navegação normal
    },
  })
);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
