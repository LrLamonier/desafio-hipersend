const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./back/app");

mongoose.connect(process.env.DATABASE);

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
