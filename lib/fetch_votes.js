const { connect } = require('@aragon/connect')
const { Voting } = require('@aragon/connect-thegraph-voting')

const fetchVotes = async () => {
  console.info('fetchVotes')

  const voting = new Voting(
    '0xe3aa64c5ecf9085459326abe66c83d9472e3444a', // https://mainnet.aragon.org/#/elimuai/0xe3aa64c5ecf9085459326abe66c83d9472e3444a/
    'https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-mainnet'
  )
  console.debug(`fetchVotes`, `voting: ${voting}`)

  const votes = await voting.votes()
  console.debug(`fetchVotes`, `votes: ${votes}`)

  return votes
}

module.exports = fetchVotes
