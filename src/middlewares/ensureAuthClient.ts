import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

async function ensureAuthClient(
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
        const { sub } = verify(token, '5b1d45f0534e394c1314733e345c0138') as IPayload

        req.id_client = sub

        return next()
    } catch (error) {
        throw new Error('Invalid token')
    }
}

export { ensureAuthClient }
