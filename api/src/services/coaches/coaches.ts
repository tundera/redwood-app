import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const coaches = () => {
  return db.coach.findMany()
}
