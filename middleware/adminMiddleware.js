module.exports = (req, res, next) => {

    if (req.session.loggedUser && req.session.loggedUser.email==="ghemma@gmail.com") {
        next();
    } else {
        return res.redirect('/');
    }
}