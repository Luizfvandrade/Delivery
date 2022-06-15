import { prisma } from '../../../../../database/prismaClient'

class FindAllDeliverymanUseCase {
    async execute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryman.findMany({
            where: {
                id: id_deliveryman,
            },
            select: {
                Deliveries: true,
                id: true,
                username: true,
            }
        })

        return deliveries
    }
}

export { FindAllDeliverymanUseCase }