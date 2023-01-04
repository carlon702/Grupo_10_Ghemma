module.exports = (req, res, next) => {

    if (req.session.loggedUser) {
        next();
    } else {
        return res.redirect('/user/login');
    }
}