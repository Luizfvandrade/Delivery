import { prisma } from '../../../../../database/prismaClient'

interface ICreateDeliveries {
  id_client: string
  item_name: string
}

class CreateDeliveriesUseCase {
  async execute({ id_client, item_name }: ICreateDeliveries) {
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name,
      }
    })

    return delivery
  }
}

export { CreateDeliveriesUseCase }