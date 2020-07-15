const express = require('express')
const fetchApps = require('./lib/fetch_apps')
const http = require('http')

const app = express()
const port = 3000

// Display information about the DAO
app.get('/apps', async (req, res) => {
  const apps = await fetchApps()
  res.write(`apps: ${apps}`)
  res.send()
})

app.listen(port, () => {
  console.info(`App listening at http://localhost:${port}`)
})
