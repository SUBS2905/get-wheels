const jwt = require('jsonwebtoken');

const requireSignIn = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.jwt_secret);
        req.user = user;
    } else {
        res.status(400).json({ msg: `Authorization required` });
    }
    next();
}

const renterMiddleware = (req, res, next) => {
    if (req.user.role !== 'renter') {
        res.status(400).json({
            msg: 'User access denide'
        })
    }
    next();
}


module.exports = {
    requireSignIn,
    renterMiddleware
}