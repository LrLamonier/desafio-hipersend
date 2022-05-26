const mongoose = require("mongoose");

const schemaJornada = new mongoose.Schema({
  jornadaAtiva: {
    type: Boolean,
  },
});
