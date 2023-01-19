module.exports = (req, res, next) => {
console.log(req.session.loggedUser.admin)
    if (req.session.loggedUser && req.session.loggedUser.admin === 1) {
        next();
    } else {
        return res.redirect('/');
    }
}