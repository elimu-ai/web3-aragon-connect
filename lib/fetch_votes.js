const { connect, describeScript } = require('@aragon/connect')
const { Voting } = require('@aragon/connect-thegraph-voting')
const fetchApps = require('./fetch_apps')

const fetchVotes = async () => {
  console.info('fetchVotes')

  const voting = new Voting(
    '0xe3aa64c5ecf9085459326abe66c83d9472e3444a', // https://mainnet.aragon.org/#/elimuai/0xe3aa64c5ecf9085459326abe66c83d9472e3444a/
    'https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-mainnet'
  )
  console.debug(`fetchVotes`, `voting: ${voting}`)

  const votes = await voting.votes()
  console.debug(`fetchVotes`, `votes: ${votes}`)

  const apps = await fetchApps()
  const voteDescriptions = {}

  // make concurrent requests for scripts
  await Promise.all(votes.map(async vote => {
    const describedScript = await describeScript(vote.script, apps)
    voteDescriptions[vote.id] = describedScript[0].description
  }))

  votes.forEach(vote => {
    vote.description = voteDescriptions[vote.id]
  })

  return votes
}

module.exports = fetchVotes
