const express = require("express");
const controladorJornada = require("../controladores/controladorJornada");

const router = express.Router();

router.get("/", controladorJornada.pegar);
router.put("/", controlador.alterar);

module.exports = router;
