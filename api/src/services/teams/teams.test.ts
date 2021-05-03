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
        updatedAt: '2021-05-03T17:34:51Z',
        handle: 'String5368316',
        name: 'String1227659',
        slug: 'String2401341',
        city: 'String',
        abbreviation: 'String3401757',
        logo: 'String5654599',
        logoSlug: 'String7920895',
        conference: 'String',
        division: 'String',
        established: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-05-03T17:34:51Z')
    expect(result.handle).toEqual('String5368316')
    expect(result.name).toEqual('String1227659')
    expect(result.slug).toEqual('String2401341')
    expect(result.city).toEqual('String')
    expect(result.abbreviation).toEqual('String3401757')
    expect(result.logo).toEqual('String5654599')
    expect(result.logoSlug).toEqual('String7920895')
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
