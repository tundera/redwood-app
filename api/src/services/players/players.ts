import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(() => requireAuth({ role: ['admin'] }))
  rules.skip({ only: ['players'] })
}

export const players = () => {
  return db.player.findMany()
}

export const player = ({ id }: Prisma.PlayerWhereUniqueInput) => {
  return db.player.findUnique({
    where: { id },
  })
}

interface CreatePlayerArgs {
  input: Prisma.PlayerCreateInput
}

export const createPlayer = ({ input }: CreatePlayerArgs) => {
  return db.player.create({
    data: input,
  })
}

interface UpdatePlayerArgs extends Prisma.PlayerWhereUniqueInput {
  input: Prisma.PlayerUpdateInput
}

export const updatePlayer = ({ id, input }: UpdatePlayerArgs) => {
  return db.player.update({
    data: input,
    where: { id },
  })
}

export const deletePlayer = ({ id }: Prisma.PlayerWhereUniqueInput) => {
  return db.player.delete({
    where: { id },
  })
}
