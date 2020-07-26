const { connect } = require('@aragon/connect')
const { TokenManager } = require('@aragon/connect-thegraph-tokens')

const fetchTokenHolders = async () => {
  console.info('fetchTokenHolders')

  const org = await connect('elimuai.aragonid.eth', 'thegraph')
  console.debug(`fetchTokenHolders`, `org: ${org}`)

  const APP_ADDRESS = '0xcfc816708740e121dd280969f05cc7e95d977177' // https://rinkeby.aragon.org/#/elimuai/0xcfc816708740e121dd280969f05cc7e95d977177/
  const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/aragon/aragon-tokens-rinkeby'
  // if (mainnet) {
  //   const APP_ADDRESS = '0xee45d21cb426420257bd4a1d9513bcb499ff443a' // https://mainnet.aragon.org/#/elimuai/0xee45d21cb426420257bd4a1d9513bcb499ff443a/
  //   const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/aragon/aragon-tokens-mainnet'
  // }
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
