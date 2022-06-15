import { Request, Response } from 'express'
import { UpdateEndDateUseCase } from './UpdateEndDateUseCase'

class UpdateEndDateController {
    async handler(req: Request, res: Response) {
        const { id: id_delivery } = req.params
        const { id_deliveryman } = req.body

        const updateEndDateUseCase = new UpdateEndDateUseCase()

        const result = await updateEndDateUseCase.execute({ id_delivery, id_deliveryman })

        return res.json(result)
    }
}

export { UpdateEndDateController }