import request from 'superagent'

const baseUrl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?key='
const format = '&format=json'
const tide = '&tide=yes'

// export function getWaimaramaData () {
//   const coors = '-39.8148531,176.9923951'
//   return request.get(`${baseUrl}?key=${process.env.REACT_APP_WWO_KEY}&q=${coors}fx=yes&tide=yes`)
//     .then(res => {
//       console.log(res.body)
//       return res.body
//     })
// }

export function getWaimaramaData () {
  const coors = '&q=-39.8148531,176.9923951'
  return request.get(`${baseUrl}${process.env.REACT_APP_WWO_KEY}${format}${coors}${tide}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

getWaimaramaData().then(console.log())
