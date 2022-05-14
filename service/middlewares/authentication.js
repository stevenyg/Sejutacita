const { ObjectId } = require('mongodb');
const { verifyToken } = require('../helpers/jwt');
const dataModel = require('../model/dataModel');

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const payload = verifyToken(access_token)
        const userFound = await dataModel.findOneUser({ _id: ObjectId(payload._id) })

        if (!userFound) {
            throw {
                code: 401,
                name: "AuthenticationError",
                message: "User not found Authentication Failed"
            }
        }
        req.userTryingToLogin = {
            _id: userFound._id,
            role: userFound.role
        }
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }

}

module.exports = authentication