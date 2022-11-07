const locals = function (req, res, next) {
  res.locals.usuario = null;

  if (req.session.usuarioLogueado) {
    res.locals.usuario = req.session.usuarioLogueado;
  }
  next();
};
module.exports = locals;
//
