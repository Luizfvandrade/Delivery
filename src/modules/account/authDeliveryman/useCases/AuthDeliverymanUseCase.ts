import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"

interface IAuthDeliveryman {
  username: string
  password: string
}

class AuthDeliverymanUseCase {
  async execute({ username, password }: IAuthDeliveryman) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username,
      }
    })

    if (!deliveryman) {
      throw new Error('User or password invalid!')
    }

    const passMatch = await compare(password, deliveryman.password)

    if (!passMatch) {
      throw new Error('User or password invalid!')
    }

    const token = sign(
      {
        username
      },
      '36d75b4b0757d46968a9832001124ef6',
      {
        subject: deliveryman.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { AuthDeliverymanUseCase }