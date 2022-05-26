const express = require("express");
const controladorJornada = require("../controladores/controladorJornada");

const router = express.Router();

router.get("/", controladorJornada.pegar);
router.put("/", controladorJornada.alterar);

module.exports = router;
