const express = require('express')
const path = require('path')

const hawkesBaySpotsRoutes = require('./routes/hawkesBaySpots')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/hawkesBaySpots', hawkesBaySpotsRoutes)

module.exports = server
