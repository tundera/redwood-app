import { teams, team, createTeam, updateTeam, deleteTeam } from './teams'

describe('teams', () => {
  scenario('returns all teams', async (scenario) => {
    const result = await teams()

    expect(result.length).toEqual(Object.keys(scenario.team).length)
  })

  scenario('returns a single team', async (scenario) => {
    const result = await team({ id: scenario.team.one.id })

    expect(result).toEqual(scenario.team.one)
  })

  scenario('creates a team', async (scenario) => {
    const result = await createTeam({
      input: {
        id: 'String',
        updatedAt: '2021-05-28T06:08:26Z',
        handle: 'String3441074',
        name: 'String6430639',
        slug: 'String994591',
        city: 'String',
        abbreviation: 'String5077627',
        logo: 'String8952887',
        logoSlug: 'String4202189',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-05-28T06:08:26Z')
    expect(result.handle).toEqual('String3441074')
    expect(result.name).toEqual('String6430639')
    expect(result.slug).toEqual('String994591')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String5077627')
    expect(result.logo).toEqual('String8952887')
    expect(result.logoSlug).toEqual('String4202189')
    expect(result.conference).toEqual('String')
    expect(result.division).toEqual('String')
    expect(result.established).toEqual('String')
  })

  scenario('updates a team', async (scenario) => {
    const original = await team({ id: scenario.team.one.id })
    const result = await updateTeam({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a team', async (scenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id })
    const result = await team({ id: original.id })

    expect(result).toEqual(null)
  })
})
