const express = require('express')
const fetchApps = require('./lib/fetch_apps')
const fetchFinanceTransactions = require('./lib/fetch_finance_transactions')
const fetchTokenHolders = require('./lib/fetch_token_holders')
const fetchVotes = require('./lib/fetch_votes')
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

// Fetch the DAO's finance transactions
server.get('/finance-transactions', async (req, res) => {
  console.info(`req.url: "${req.url}"`)

  res.setHeader('Content-Type', 'application/json')

  const financeTransactions = await fetchFinanceTransactions()
  financeTransactions.map(console.info)
  console.debug(`financeTransactions.length: ${financeTransactions.length}`)

  // Convert to JSON
  let jsonArray = []
  financeTransactions.forEach((financeTransaction, i) => {
    console.debug(`financeTransaction.id: "${financeTransaction.id}"`)
    jsonArray.push(financeTransaction)
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

// Fetch the DAO's votes
server.get('/votes', async (req, res) => {
  console.info(`req.url: "${req.url}"`)

  res.setHeader('Content-Type', 'application/json')

  const votes = await fetchVotes()
  votes.map(console.info)
  console.debug(`votes.length: ${votes.length}`)

  // Convert to JSON
  let jsonArray = []
  votes.forEach((vote, i) => {
    console.debug(`vote.id: "${vote.id}"`)
    jsonArray.push(vote)
  })
  console.debug(`jsonArray.length: ${jsonArray.length}`)
  let jsonString = JSON.stringify(jsonArray)
  res.write(jsonString)

  res.send()
})

const identiconRoute = require('./route/identicon/index');
server.use('/identicon', identiconRoute);

server.listen(port, () => {
  console.info(`process.env.PROD: ${process.env.PROD}`)
  console.info(`Server listening at http://localhost:${port}`)
})
