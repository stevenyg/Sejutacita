
const errorHandler = (err, req, res, next) => {

    switch (err.name) {
        case "Bad Request":
            res.status(err.code).json({ message: err.message })
            break;
        case "Not Found":
            res.status(err.code).json({ message: err.message })
            break;
        case "AuthenticationError":
            res.status(err.code).json({ message: err.message })
            break;
        case "Unauthorized":
            res.status(err.code).json({ message: err.message })
            break;
        case "JsonWebTokenError":
            res.status(401).json({ message: 'JWT must be provided' })
            break;
        default:
            res.status(500).json({ message: 'Internal Server Error' })
            break;
    }

}

module.exports = errorHandler