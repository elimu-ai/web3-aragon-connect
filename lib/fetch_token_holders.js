const { connect } = require('@aragon/connect')
const { TokenManager } = require('@aragon/connect-thegraph-tokens')

const fetchTokenHolders = async () => {
  console.info('fetchTokenHolders')

  const org = await connect('elimuai.aragonid.eth', 'thegraph')
  console.debug(`fetchTokenHolders org: ${org}`)

  const tokenManager = new TokenManager(
    '0xee45d21cb426420257bd4a1d9513bcb499ff443a', // https://mainnet.aragon.org/#/elimuai/0xee45d21cb426420257bd4a1d9513bcb499ff443a/
    'https://api.thegraph.com/subgraphs/name/aragon/aragon-tokens-mainnet', true
  )
  console.debug(`fetchTokenHolders tokenManager: ${tokenManager}`)

  const tokenDetails = await tokenManager.token()
  console.debug(`fetchTokenHolders tokenDetails: ${tokenDetails}`)

  const tokenHolders = await tokenDetails.holders()
  console.debug(`fetchTokenHolders tokenHolders: ${tokenHolders}`)

  return tokenHolders
}

module.exports = fetchTokenHolders
