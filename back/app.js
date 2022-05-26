const express = require("express");
const jornadaRouter = require("./rotas/jornadaRouter");

const app = express();

app.use("/s", jornadaRouter);

app.use(express.static(path.join(__dirname, "front/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "front/build", "index.html"));
});

app.use(manipuladorErroGlobal);

module.exports = app;
