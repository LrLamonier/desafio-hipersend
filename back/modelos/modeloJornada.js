const mongoose = require("mongoose");

const schemaJornada = new mongoose.Schema({
  jornadaAtiva: {
    type: Boolean,
  },
  config: {
    type: String,
    enum: ["Abortar", "Enviar no próximo expediente"],
  },
  dom: {
    type: Boolean,
  },
  domHI: {
    type: String,
  },
  domHF: {
    type: String,
  },
  seg: {
    type: Boolean,
  },
  segHI: {
    type: String,
  },
  segHF: {
    type: String,
  },
  ter: {
    type: Boolean,
  },
  terHI: {
    type: String,
  },
  terHF: {
    type: String,
  },
  qua: {
    type: Boolean,
  },
  quaHI: {
    type: String,
  },
  quaHF: {
    type: String,
  },
  qui: {
    type: Boolean,
  },
  quiHI: {
    type: String,
  },
  quiHF: {
    type: String,
  },
  sex: {
    type: Boolean,
  },
  sexHI: {
    type: String,
  },
  sexHF: {
    type: String,
  },
  sab: {
    type: Boolean,
  },
  sabHI: {
    type: String,
  },
  sabHF: {
    type: String,
  },
});

const Jornada = mongoose.model("Jornada", schemaJornada);

module.exports = Jornada;
