const logger = require("../utils/winstonLogger")
const AppError = require("../utils/appError")


module.exports = {
    ErrorHandler: (error, req, res, next) => {

        if (error instanceof AppError) {
            logger.error(error.ErrorMessage)
            return res.status(error.StatusCode).json({
                status: "failure",
                message: error.message,
                error_message: error.ErrorMessage
            })
        }

        logger.error(error.message)
        return res.status(500).json({
            status: "failure",
            message: "Something went Wrong",
            error_message: error.message
        })
    }
}