const catchAsync = require("../utils/catchAsync");
const Jornada = require("../modelos/modeloJornada");

exports.pegar = catchAsync(async (req, res, next) => {
  const jornada = await Jornada.findOne({}).select("-_id -__v");
  //   console.log(jornada);

  res.status(200).json({
    status: "success",
    data: jornada,
  });
});

exports.alterar = catchAsync(async (req, res, next) => {
  const novaJornada = {
    jornadaAtiva: req.body.jornadaAtiva,
    config: req.body.config,
    dom: {
      atv: req.body.dom.atv,
      inicio: req.body.dom.inicio,
      fim: req.body.dom.fim,
    },
    seg: {
      atv: req.body.seg.atv,
      inicio: req.body.seg.inicio,
      fim: req.body.seg.fim,
    },
    ter: {
      atv: req.body.ter.atv,
      inicio: req.body.ter.inicio,
      fim: req.body.ter.fim,
    },
    qua: {
      atv: req.body.qua.atv,
      inicio: req.body.qua.inicio,
      fim: req.body.qua.fim,
    },
    qui: {
      atv: req.body.qui.atv,
      inicio: req.body.qui.inicio,
      fim: req.body.qui.fim,
    },
    sex: {
      atv: req.body.sex.atv,
      inicio: req.body.sex.inicio,
      fim: req.body.sex.fim,
    },
    sab: {
      atv: req.body.sab.atv,
      inicio: req.body.sab.inicio,
      fim: req.body.sab.fim,
    },
  };

  await Jornada.findOneAndUpdate({}, novaJornada);
  // await Jornada.create(novaJornada);

  res.status(200).json({
    status: "success",
    data: novaJornada,
  });
});
