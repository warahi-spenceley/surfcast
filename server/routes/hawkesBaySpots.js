const express = require('express')

const db = require('../db/hawkesBaySpots')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHawkesBaySpots()
    .then(results => {
      res.json(results)
      // res.json({ fruits: results.map(fruit => fruit.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
