const express = require('express')
const fetchApps = require('./lib/fetch_apps')
const http = require('http')

const server = express()
const port = 3000

// Display information about the DAO
server.get('/apps', async (req, res) => {
  console.info(`req.url: "${req.url}"`)

  res.setHeader('Content-Type', 'application/json')

  // Fetch the DAO's Apps
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

server.listen(port, () => {
  console.info(`Server listening at http://localhost:${port}`)
})
