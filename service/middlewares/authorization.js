const authorization = async (req, res, next) => {
    try {
        const role = req.userTryingToLogin.role
        if (role !== 'admin') {
            throw {
                code: 401,
                name: "Unauthorized",
                message: "Authorization Failed"
            }
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authorization