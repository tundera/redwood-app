import {
  coaches,
  coach,
  createCoach,
  updateCoach,
  deleteCoach,
} from './coaches'

describe('coaches', () => {
  scenario('returns all coaches', async (scenario) => {
    const result = await coaches()

    expect(result.length).toEqual(Object.keys(scenario.coach).length)
  })

  scenario('returns a single coach', async (scenario) => {
    const result = await coach({ id: scenario.coach.one.id })

    expect(result).toEqual(scenario.coach.one)
  })

  scenario('creates a coach', async (scenario) => {
    const result = await createCoach({
      input: {
        id: 'String',
        updatedAt: '2021-05-27T22:08:18Z',
        handle: 'String9092635',
        name: 'String2051283',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.updatedAt).toEqual('2021-05-27T22:08:18Z')
    expect(result.handle).toEqual('String9092635')
    expect(result.name).toEqual('String2051283')
  })

  scenario('updates a coach', async (scenario) => {
    const original = await coach({ id: scenario.coach.one.id })
    const result = await updateCoach({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a coach', async (scenario) => {
    const original = await deleteCoach({ id: scenario.coach.one.id })
    const result = await coach({ id: original.id })

    expect(result).toEqual(null)
  })
})
