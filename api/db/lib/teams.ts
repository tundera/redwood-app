import type { Team } from '@prisma/client'
import type {
  BackupTeamData,
  TeamData,
  TeamRoster,
  UpdatedTeamData,
  TeamInfoCommon,
} from '../types'

import nba from 'nba'

import {db} from '../../src/lib/db'
import { upsertCoachData } from '../lib/coaches'
import { upsertPlayerData } from '../lib/players'

async function getTeamInfo(teamId: number): Promise<TeamData> {
  return await nba.stats.teamInfoCommon({ TeamID: teamId })
}

async function getTeamRoster(teamId: number): Promise<TeamRoster> {
  return await nba.stats.commonTeamRoster({ TeamID: teamId })
}

export const getUpdatedTeamData = async (teamId: number) => {
  const { teamInfoCommon } = await getTeamInfo(teamId)
  const [team] = teamInfoCommon as [TeamInfoCommon]

  const { commonTeamRoster: players, coaches } = await getTeamRoster(teamId)

  return {
    ...team,
    players,
    coaches,
  }
}

export const transformTeamData = (data: BackupTeamData) => {
  return {
    ...data,
    id: data.id,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(),
    handle: data.handle,
    established: data.established,
  }
}

export const updateTeamData = async (data: UpdatedTeamData) => {
  const { players, coaches, ...team } = data

  await db.team.update({
    where: { handle: team.teamId.toString() },
    data: {
      id: team.teamId.toString(),
      updatedAt: new Date(),
      name: team.teamName,
      slug: team.teamSlug,
      city: team.teamCity,
      abbreviation: team.teamAbbreviation,
      wins: team.w,
      losses: team.l,
      winPercentage: team.pct,
      conference: team.teamConference,
      division: team.teamDivision,
    },
  })

  for (const player of players) {
    await upsertPlayerData(player)
  }

  for (const coach of coaches) {
    await upsertCoachData(coach)
  }
}

export const seedTeamData = async (team: Team) => {
  await db.team.create({
    data: {
      id: team.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      handle: team.handle,
      name: team.name,
      slug: team.slug,
      city: team.city,
      established: team.established,
      abbreviation: team.abbreviation,
      logo: team.logo,
      logoSlug: team.logoSlug,
      wins: team.wins,
      losses: team.losses,
      winPercentage: team.winPercentage,
      conference: team.conference,
      division: team.division,
    },
  })
}
