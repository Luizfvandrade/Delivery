import { Request, Response } from 'express'
import { AuthUserUseCase } from './AuthClientUseCase'

class AuthUserController {
  async handler(req: Request, res: Response) {
    const { username, password } = req.body

    const authUserUseCase = new AuthUserUseCase()

    const result = await authUserUseCase.execute({
      username,
      password,
    })

    return res.json(result)
  }
}

export { AuthUserController }