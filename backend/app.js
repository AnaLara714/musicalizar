require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const authRoutes = require("./src/routes/authRoutes");
const coursesRoutes = require("./src/routes/courseRoutes");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
