import request from 'superagent'

const baseUrl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?&key=e2d788c2011f4c7787c13418211603&format=json&tide=yes'

export function get90milebeachData () {
  const coors = '&q=-34.8266684,172.9619757'
  return request.get(`${baseUrl}${coors}`)
    .then(res => {
      return res.body.data.weather
    })
}
