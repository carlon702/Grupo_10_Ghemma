const locals = function (req, res, next) {
  res.locals.usuario = null;

  if (req.session.loggedUser) {
    res.locals.usuario = req.session.loggedUser;
  }
  next();
};
module.exports = locals;
//
