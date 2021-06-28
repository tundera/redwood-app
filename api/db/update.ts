#!/usr/bin/env node

import teams from 'nba/data/teams.json'
import {db} from '../src/lib/db'
import { getUpdatedTeamData, updateTeamData } from './lib/teams'

export async function main() {
  console.log('Start updating ...')

  for (const team of teams) {
    const data = await getUpdatedTeamData(team.teamId)

    await updateTeamData(data)
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
    process.exit(0)
  })
