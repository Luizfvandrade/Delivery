import { Request, Response } from 'express'
import { CreateClientUserCase } from './createClientUserCase'

class CreateClientController {
  async handler(req: Request, res: Response) {
    const { username, password } = req.body

    const createClientUserCase = new CreateClientUserCase()

    const result = await createClientUserCase.execute({
      username,
      password,
    })

    return res.json(result)
  }
}

export { CreateClientController }