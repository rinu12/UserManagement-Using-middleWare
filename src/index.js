const express = require("express");
const app = express();

const port = 3000;

const userRoutes = require("./routes/users.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Express is up",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
