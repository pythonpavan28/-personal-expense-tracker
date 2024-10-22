const jwt = require('jsonwebtoken')

const authentication = (req,res,next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader){
        return res.status(401).send("Unauthorized")
    }
    const jwtToken = authHeader.split(" ")[1]
    if (!jwtToken){
        return res.status(401).send("Unauthorized")
    }

    jwt.verify(jwtToken, 'secret', (err,user) => {
        if (err){
            return res.status(403).json({msg: 'forbidden/invalid jwt token'})
        }
        next()
    })
}

module.exports = authentication