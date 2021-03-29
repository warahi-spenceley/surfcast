import nock from 'nock'
import { getWaimaramaData } from './hawkesBay'

describe('getWaimaramaData', () => {
  const fakeMarineWeatherData = [{
    date: '2021-01-01',
    astronomy: [{
      sunrise: '6:30am',
      sunset: '7:00pm'
    }],
    maxtempC: '23',
    mintempC: '21'
  }]
  const scope = nock('http://api.worldweatheronline.com/premium/v1/marine.ashx')
    .get('?&key=e2d788c2011f4c7787c13418211603&format=json&q=-39.8148531,176.9923951&tide=yes')
    .reply(200, fakeMarineWeatherData)

  test('returns marine weather data from api', () => {
    expect.assertions(2)
    return getWaimaramaData()
      .then((marineWeatherData) => {
        expect(marineWeatherData).toEqual(fakeMarineWeatherData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
