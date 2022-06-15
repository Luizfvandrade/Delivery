import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"

interface IAuthUser {
  username: string
  password: string
}

class AuthUserUseCase {
  async execute({ username, password }: IAuthUser) {
    const client = await prisma.clients.findUnique({
      where: {
        username,
      }
    })

    if (!client) {
      throw new Error('User or password invalid!')
    }

    const passMatch = await compare(password, client.password)

    if (!passMatch) {
      throw new Error('User or password invalid!')
    }

    const token = sign(
      {
        username
      },
      '5b1d45f0534e394c1314733e345c0138',
      {
        subject: client.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { AuthUserUseCase }