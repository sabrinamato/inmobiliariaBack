const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET

exports.verifyToken = (req, res, next) => {
    const token = req.header("auth-token")
    if(!token) {
        return res.status(401).json({ error: "Acceso denegado" }) 
    }
    try {
        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        next()
    }
    catch(error) {
        console.log(error)
        res.status(400).json({error: "El tokoen no es valido" })
    }
}

module.exports = {
    verifyToken,
    TOKEN_SECRET
}