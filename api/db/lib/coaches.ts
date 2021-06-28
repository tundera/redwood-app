import { db } from '../../src/lib/db'
import type { BackupCoachData, Coach, CoachData } from '../types'

export function transformCoachData(coach: BackupCoachData) {
  return {
    ...coach,
    id: coach.id.toString(),
    createdAt: new Date(coach.createdAt),
    updatedAt: new Date(),
    handle: coach.handle.toString(),
    isAssistant: coach.isAssistant.toString(),
  }
}

export async function upsertCoachData(coach: CoachData) {
  // Update or create coach if not present in database
  await db.coach.upsert({
    where: { id: coach.coachId.toString() },
    create: {
      id: coach.coachId.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: coach.coachId.toString(),
      name: coach.coachName,
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
    },
    update: {
      id: coach.coachId.toString(),
      updatedAt: new Date(),
      type: coach.coachType,
      isAssistant: coach.isAssistant.toString(),
    },
  })

  // Connect coaches to or remove coaches from teams
  if (coach.teamId) {
    await db.coach.update({
      where: { id: coach.coachId.toString() },
      data: {
        team: {
          connect: {
            id: coach.teamId.toString(),
          },
        },
      },
    })
  } else {
    await db.coach.update({
      where: { id: coach.coachId.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}

export async function seedCoachData(coach: Coach) {
  // Create coach in database
  await db.coach.create({
    data: {
      id: coach.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: coach.handle,
      name: coach.name,
      type: coach.type,
      isAssistant: coach.isAssistant,
    },
  })

  // Connect coaches to or remove coaches from teams
  if (coach.teamId) {
    await db.coach.update({
      where: { id: coach.id.toString() },
      data: {
        team: {
          connect: {
            id: coach.teamId.toString(),
          },
        },
      },
    })
  } else {
    await db.coach.update({
      where: { id: coach.id.toString() },
      data: {
        team: {
          disconnect: true,
        },
      },
    })
  }
}
