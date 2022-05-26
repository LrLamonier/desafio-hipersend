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
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  seg: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  ter: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  qua: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  qui: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  sex: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
  sab: {
    atv: {
      type: Boolean,
    },
    inicio: {
      type: Date,
    },
    fim: {
      type: Date,
    },
  },
});

const Jornada = mongoose.model("Jornada", schemaJornada);

module.exports = Jornada;
