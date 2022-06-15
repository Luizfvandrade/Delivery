import { Request, Response } from 'express'
import { CreateDeliveriesUseCase } from './CreateDeliveriesUseCase'

class CreateDeliveriesController {
  async handler(req: Request, res: Response) {
    const { id_client, item_name } = req.body

    const createDeliveriesUseCase = new CreateDeliveriesUseCase()

    const result = await createDeliveriesUseCase.execute({
      id_client,
      item_name,
    })

    return res.json(result)
  }
}

export { CreateDeliveriesController }