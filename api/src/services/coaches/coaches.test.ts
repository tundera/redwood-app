import { coaches } from './coaches'

describe('coaches', () => {
  scenario('returns all coaches', async (scenario) => {
    const result = await coaches()

    expect(result.length).toEqual(Object.keys(scenario.coach).length)
  })
})
