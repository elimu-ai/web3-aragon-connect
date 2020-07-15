const express = require('express')
const fetchApps = require('./lib/fetch_apps')
const fetchTokenHolders = require('./lib/fetch_token_holders')
const http = require('http')

const server = express()
const port = 3000

// Fetch the DAO's Apps
server.get('/apps', async (req, res) => {
  console.info(`req.url: "${req.url}"`)

  res.setHeader('Content-Type', 'application/json')

  const apps = await fetchApps()
  apps.map(console.info)
  console.debug(`apps.length: ${apps.length}`)

  // Convert to JSON
  let jsonArray = []
  apps.forEach((app, i) => {
    console.debug(`app.name: "${app.name}"`)
    jsonArray.push(app)
  })
  console.debug(`jsonArray.length: ${jsonArray.length}`)
  let jsonString = JSON.stringify(jsonArray)
  res.write(jsonString)

  res.send()
})

// Fetch the DAO's token holders
server.get('/token-holders', async (req, res) => {
  console.info(`req.url: "${req.url}"`)

  res.setHeader('Content-Type', 'application/json')

  const tokenHolders = await fetchTokenHolders()
  tokenHolders.map(console.info)
  console.debug(`tokenHolders.length: ${tokenHolders.length}`)

  // Convert to JSON
  let jsonArray = []
  tokenHolders.forEach((tokenHolder, i) => {
    console.debug(`tokenHolder.address: "${tokenHolder.address}"`)
    jsonArray.push(tokenHolder)
  })
  console.debug(`jsonArray.length: ${jsonArray.length}`)
  let jsonString = JSON.stringify(jsonArray)
  res.write(jsonString)

  res.send()
})

server.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`)
})
