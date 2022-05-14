const { hashPassword, comparePassword } = require("../helpers/bcrypt")
const { createToken, createRefreshToken, verifyToken, decodeToken } = require("../helpers/jwt")
const dataModel = require("../model/dataModel")
const { ObjectId } = require('mongodb');
class Controller {

    static doRegister = async (req, res, next) => {
        try {
            const { username, password, role } = req.body
            const user = await dataModel.findOneUser({ username })

            if (user) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "User Already Registered"
                }
            }
            const response = await dataModel.insertOneUser({ username, password: hashPassword(password), role })
            console.log(response);
            res.status(201).json({ message: "User Registered" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static doLogin = async (req, res, next) => {

        try {
            const { username, password } = req.body
            const data = await dataModel.findOneUser({ username })
            if (!data) {
                throw {
                    code: 401,
                    name: "AuthenticationError",
                    message: "Invalid Username or Password"
                }
            }

            const verifiedPassword = comparePassword(password, data.password)

            if (!verifiedPassword) {
                throw {
                    code: 401,
                    name: "AuthenticationError",
                    message: "Invalid Username or Password"
                }
            }

            const payload = {
                _id: data._id,
                role: data.role
            }

            const token = createToken(payload)
            const refreshToken = createRefreshToken(payload)

            res.status(200).json({ access_token: token, refreshToken })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static refresh = async (req, res, next) => {
        try {
            const { refreshToken } = req.body;

            const isValid = verifyToken(refreshToken);

            if (!isValid) {
                throw {
                    code: 401,
                    name: "AuthenticationError",
                    message: "Invalid Token, loggin again !"
                }
            }

            const user = decodeToken(refreshToken)

            const payload = {
                _id: user._id,
                role: user.role
            }
            const token = createToken(payload)
            res.status(200).json({ access_token: token, refreshToken })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static addMusic = async (req, res, next) => {
        try {
            const { title, genre, singer } = req.body
            const response = await dataModel.insertOneMusic({ title, genre, singer })
            res.status(200).json({ message: "Music Created" })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static getAllMusic = async (req, res, next) => {
        try {
            const musics = await dataModel.findAllMusic()
            console.log(musics);
            res.status(200).json({ musics })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static updateMusic = async (req, res, next) => {
        try {
            const { _id } = req.params
            const { title, genre, singer } = req.body
            if (!_id) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "id cant be empty"
                }
            }
            const music = await dataModel.findOneMusic({ _id: ObjectId(_id) })

            if (!music) {
                throw {
                    code: 404,
                    name: "Not Found",
                    message: "Music Not Found"
                }
            }
            const response = await dataModel.updateOneMusic({ _id: ObjectId(_id) }, { title, genre, singer })
            console.log(response);
            res.status(200).json({ message: "Music Updated" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static deleteMusic = async (req, res, next) => {
        try {
            const { _id } = req.params
            if (!_id) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "id cant be empty"
                }
            }
            const music = await dataModel.findOneMusic({ _id: ObjectId(_id) })

            if (!music) {
                throw {
                    code: 404,
                    name: "Not Found",
                    message: "Music Not Found"
                }
            }
            const response = await dataModel.deleteOneMusic({ _id: ObjectId(_id) })
            console.log(response);
            res.status(200).json({ message: "Music deleted" })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }



}

module.exports = Controller