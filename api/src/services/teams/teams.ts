import { Prisma } from '@prisma/client'
import { ResolverArgs } from '@redwoodjs/api/dist/types'
import { db } from 'src/lib/db'

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.findUnique({
    where: { id },
  })
}

interface CreateTeamArgs {
  input: Prisma.TeamCreateInput
}

export const createTeam = ({ input }: CreateTeamArgs) => {
  return db.team.create({
    data: input,
  })
}

interface UpdateTeamArgs extends Prisma.TeamWhereUniqueInput {
  input: Prisma.TeamUpdateInput
}

export const updateTeam = ({ id, input }: UpdateTeamArgs) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  Coach: (_obj, { root }: ResolverArgs<Prisma.TeamWhereUniqueInput>) =>
    db.team.findUnique({ where: { id: root.id } }).Coach(),
  ColorScheme: (_obj, { root }: ResolverArgs<Prisma.TeamWhereUniqueInput>) =>
    db.team.findUnique({ where: { id: root.id } }).ColorScheme(),
  Player: (_obj, { root }: ResolverArgs<Prisma.TeamWhereUniqueInput>) =>
    db.team.findUnique({ where: { id: root.id } }).Player(),
}
