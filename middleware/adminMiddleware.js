module.exports = (req, res, next) => {

    if (req.session.loggedUser && req.session.loggedUser.admin === 0) {
        next();
    } else {
        return res.redirect('/');
    }
}