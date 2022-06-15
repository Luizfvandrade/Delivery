import { Request, Response } from 'express'
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase'

class FindAllDeliveriesController {
    async handler(req: Request, res: Response) {
        const { id_client } = req

        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()

        const result = await findAllDeliveriesUseCase.execute(id_client)

        return res.json(result)
    }
}

export { FindAllDeliveriesController }