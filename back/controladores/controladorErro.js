const enviarErroDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const enviarErroProd = (err, req, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Algo deu errado!",
  });
};

module.exports = (err, req, res, next) => {
  let erro = { ...err };

  enviarErroDev(err, res);
  enviarErroProd(erro, req, res);
};
