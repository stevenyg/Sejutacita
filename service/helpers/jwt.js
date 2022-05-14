const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY

const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '2m' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '10m' })
}

const verifyToken = (token) => {
    return jwt.verify(token, secretKey)
}

const decodeToken = (token) => {
    return jwt.decode(token)
}

module.exports = { createToken, verifyToken, createRefreshToken, decodeToken }