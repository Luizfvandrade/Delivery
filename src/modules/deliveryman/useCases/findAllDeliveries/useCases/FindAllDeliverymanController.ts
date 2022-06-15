import { Request, Response } from 'express'
import { FindAllDeliverymanUseCase } from './FindAllDeliverymanUseCase'

class FindAllDeliverymanController {
    async handler(req: Request, res: Response) {
        const { id_deliveryman } = req

        const findAllDeliveriesUseCase = new FindAllDeliverymanUseCase()

        const result = await findAllDeliveriesUseCase.execute(id_deliveryman)

        return res.json(result)
    }
}

export { FindAllDeliverymanController }