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
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  seg: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  ter: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  qua: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  qui: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  sex: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
  sab: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: String,
    },
    fim: {
      type: String,
    },
  },
});

const Jornada = mongoose.model("Jornada", schemaJornada);

module.exports = Jornada;
