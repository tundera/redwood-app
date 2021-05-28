import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(() => requireAuth({ role: ['admin'] }))
  rules.skip({ only: ['colorSchemes'] })
}

export const colorSchemes = () => {
  return db.colorScheme.findMany()
}

export const colorScheme = ({ id }: Prisma.ColorSchemeWhereUniqueInput) => {
  return db.colorScheme.findUnique({
    where: { id },
  })
}

interface CreateColorSchemeArgs {
  input: Prisma.ColorSchemeCreateInput
}

export const createColorScheme = ({ input }: CreateColorSchemeArgs) => {
  return db.colorScheme.create({
    data: input,
  })
}

interface UpdateColorSchemeArgs extends Prisma.ColorSchemeWhereUniqueInput {
  input: Prisma.ColorSchemeUpdateInput
}

export const updateColorScheme = ({ id, input }: UpdateColorSchemeArgs) => {
  return db.colorScheme.update({
    data: input,
    where: { id },
  })
}

export const deleteColorScheme = ({
  id,
}: Prisma.ColorSchemeWhereUniqueInput) => {
  return db.colorScheme.delete({
    where: { id },
  })
}
