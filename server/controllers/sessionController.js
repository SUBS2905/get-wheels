const sessionValidation = (req, res) => {

    const userToken = req.cookies.user_token;
    if(userToken.length !== 0) {
        res.send({
            status: 1,
            msg: `session not expired`,
            user_token: userToken
        })
    }
    else {
        res.send({
            status: 0,
            msg: `session expired`,
            user_token: null
        })
    }
}

module.exports = { sessionValidation }