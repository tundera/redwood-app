#!/usr/bin/env node

import rawCoaches from './backups/documents/coach.json'
import rawSchemes from './backups/documents/color-scheme.json'
import rawPlayers from './backups/documents/player.json'
import rawTeams from './backups/documents/team.json'

import {db} from '../src/lib/db'
import { seedCoachData, transformCoachData } from './lib/coaches'
import { seedColorSchemes, transformColorSchemeData } from './lib/colors'
import { seedPlayerData, transformPlayerData } from './lib/players'
import { seedTeamData, transformTeamData } from './lib/teams'

async function main() {
  console.log('Start seeding ...')

  const teams: any = []

  for (const rawTeam of rawTeams) {
    teams.push(transformTeamData(rawTeam))
  }

  for (const team of teams) {
    await seedTeamData(team)
    console.log(`Updated team with id ${team.id} (${team.name})`)
  }

  console.log('Done seeding teams')

  const players: any = []

  for (const rawPlayer of rawPlayers) {
    players.push(transformPlayerData(rawPlayer))
  }

  for (const player of players) {
    await seedPlayerData(player)
    console.log(`Updated Player with id ${player.id} (${player.name})`)
  }

  console.log('Done seeding players')

  const coaches: any = []

  for (const rawCoach of rawCoaches) {
    coaches.push(transformCoachData(rawCoach))
  }

  for (const coach of coaches) {
    await seedCoachData(coach)
    console.log(`Updated Coach with id ${coach.id} (${coach.name})`)
  }

  const schemes: any = []

  for (const rawScheme of rawSchemes) {
    schemes.push(transformColorSchemeData(rawScheme))
  }

  for (const scheme of schemes) {
    await seedColorSchemes(scheme)
    console.log(`Updated color scheme for team with id ${scheme.teamId}`)
  }

  console.log('Done seeding color schemes')

  console.log('✅ Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    console.log('Prisma client disconnected')
    process.exit(0)
  })
