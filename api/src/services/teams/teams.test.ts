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
        updatedAt: '2021-05-27T22:08:53Z',
        handle: 'String1180012',
        name: 'String9999201',
        slug: 'String3963515',
        city: 'String',
        abbreviation: 'String9511778',
        logo: 'String128018',
        logoSlug: 'String6303620',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-05-27T22:08:53Z')
    expect(result.handle).toEqual('String1180012')
    expect(result.name).toEqual('String9999201')
    expect(result.slug).toEqual('String3963515')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String9511778')
    expect(result.logo).toEqual('String128018')
    expect(result.logoSlug).toEqual('String6303620')
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
