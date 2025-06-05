import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        res.json({ success: false, message: 'Not Authorized' })
    }
    try {
        const decodedToken = jwt.verify(token, process.env.jwt_secret)
        if (req.body) {
            req.body.userId = decodedToken.id
        } else {
            req.userId = decodedToken.id
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default authUser