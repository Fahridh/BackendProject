function checkRole(role) {
    return function(req, res, next) {
        const userRole = req.session.role || req.user.role;

        if (userRole === role) {
            next();
        } else {
            res.status(403).json({ error: 'Forbidden' });
        }
    };
}

module.exports = checkRole;