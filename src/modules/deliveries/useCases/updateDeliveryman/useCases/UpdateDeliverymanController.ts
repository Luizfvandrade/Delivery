import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase'

class UpdateDeliverymanController {
    async handler(req: Request, res: Response) {
        const { id: id_delivery } = req.params
        const { id_deliveryman } = req.body

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()

        const result = await updateDeliverymanUseCase.execute({ id_delivery, id_deliveryman })

        return res.json(result)
    }
}

export { UpdateDeliverymanController }