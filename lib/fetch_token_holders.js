const { connect } = require('@aragon/connect')
const { TokenManager } = require('@aragon/connect-thegraph-tokens')

const fetchTokenHolders = async () => {
  console.info('fetchTokenHolders')

  const org = await connect('elimuai.aragonid.eth', 'thegraph')
  console.debug(`fetchTokenHolders`, `org: ${org}`)

  let APP_ADDRESS = '0xcfc816708740e121dd280969f05cc7e95d977177' // https://rinkeby.aragon.org/#/elimuai/0xcfc816708740e121dd280969f05cc7e95d977177/
  let SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/aragon/aragon-tokens-rinkeby'
  if (process.env.NODE_ENV === 'production') {
    APP_ADDRESS = '0xee45d21cb426420257bd4a1d9513bcb499ff443a' // https://mainnet.aragon.org/#/elimuai/0xee45d21cb426420257bd4a1d9513bcb499ff443a/
    SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/aragon/aragon-tokens-mainnet'
  }
  const tokenManager = new TokenManager(
    APP_ADDRESS,
    SUBGRAPH_URL,
    true
  )
  console.debug(`fetchTokenHolders`, `tokenManager: ${tokenManager}`)

  const tokenDetails = await tokenManager.token()
  console.debug(`fetchTokenHolders`, `tokenDetails: ${tokenDetails}`)

  const tokenHolders = await tokenDetails.holders()
  console.debug(`fetchTokenHolders`, `tokenHolders: ${tokenHolders}`)

  return tokenHolders
}

module.exports = fetchTokenHolders
