import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(() => requireAuth({ role: ['admin'] }))
  rules.skip({ only: ['coaches'] })
}

export const coaches = () => {
  return db.coach.findMany()
}

export const coach = ({ id }: Prisma.CoachWhereUniqueInput) => {
  return db.coach.findUnique({
    where: { id },
  })
}

interface CreateCoachArgs {
  input: Prisma.CoachCreateInput
}

export const createCoach = ({ input }: CreateCoachArgs) => {
  return db.coach.create({
    data: input,
  })
}

interface UpdateCoachArgs extends Prisma.CoachWhereUniqueInput {
  input: Prisma.CoachUpdateInput
}

export const updateCoach = ({ id, input }: UpdateCoachArgs) => {
  return db.coach.update({
    data: input,
    where: { id },
  })
}

export const deleteCoach = ({ id }: Prisma.CoachWhereUniqueInput) => {
  return db.coach.delete({
    where: { id },
  })
}
