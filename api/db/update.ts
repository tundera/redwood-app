#!/usr/bin/env node

import teams from 'nba/data/teams.json'
import {db} from '../src/lib/db'
import { getUpdatedTeamData, updateTeamData } from './lib/teams'

export async function main() {
  console.log('Start updating ...')
  let teamsUpdated = 0

  const updatedTeams = []

  for (const team of teams) {
    const data = await getUpdatedTeamData(team.teamId)
    updatedTeams.push(data)

    teamsUpdated += 1

    console.log('Teams updated:', teamsUpdated)
  }

  for (const team of updatedTeams) {
    await updateTeamData(team)
    console.log(`Updated team: ${team.teamId} (${team.teamName})`)
  }

  console.log('Updates finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
