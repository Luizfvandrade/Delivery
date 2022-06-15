import { prisma } from '../../../../../database/prismaClient'

interface IUpdateEndDate {
    id_delivery: string
    id_deliveryman: string
}

class UpdateEndDateUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman,
            },
            data: {
                end_at: new Date()
            }
        })

        if (result.count === 0) {
            return {
                message: 'nothing to update'
            }
        }

        if (result.count > 0) {
            return {
                message: 'updated'
            }
        }
    }
}

export { UpdateEndDateUseCase }