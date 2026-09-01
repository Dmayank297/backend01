// This is basically a utility function to handle any kind of async function which can be used in multiple ways or places like db connection or more.
// promise way to handling a request
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export default asyncHandler

/*
Try catch of handling async request
const asyncHandler = (function) => async(req, res, next) => {
    try {
        await function(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
        success: false,
        message: err.message
        })
    }
}
*/