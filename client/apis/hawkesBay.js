import request from 'superagent'

const baseUrl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?&key=e2d788c2011f4c7787c13418211603&format=json&tide=yes'

export function getWaimaramaData () {
  const coors = '&q=-39.8148531,176.9923951'
  return request.get(`${baseUrl}${coors}`)
    .then(res => {
      return res.body.data.weather
    })
}

export function getOceanbeachData () {
  const coors = '&q=-39.743167,177.0099003'
  return request.get(`${baseUrl}${coors}`)
    .then(res => {
      return res.body.data.weather
    })
}
export function getWaipatikiData () {
  const coors = '&q=-39.3001521,176.97404'
  return request.get(`${baseUrl}${coors}`)
    .then(res => {
      return res.body.data.weather
    })
}
export function getTeAwangaData () {
  const coors = '&q=-39.6143705,176.9592222'
  return request.get(`${baseUrl}${coors}`)
    .then(res => {
      return res.body.data.weather
    })
}
