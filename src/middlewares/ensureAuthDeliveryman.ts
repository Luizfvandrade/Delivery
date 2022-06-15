import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

async function ensureAuthDeliveryman(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Missing token!' })
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub } = verify(token, '36d75b4b0757d46968a9832001124ef6') as IPayload

        req.id_client = sub

        return next()
    } catch (error) {
        throw new Error('Invalid token')
    }
}

export { ensureAuthDeliveryman }
