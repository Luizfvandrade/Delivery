import { Request, Response } from 'express'
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase'

class FindAllAvailableController {
  async handler(req: Request, res: Response) {
    const findAllWithoutEndDateUseCase = new FindAllAvailableUseCase()

    const result = await findAllWithoutEndDateUseCase.execute()

    return res.json(result)
  }
}

export { FindAllAvailableController }