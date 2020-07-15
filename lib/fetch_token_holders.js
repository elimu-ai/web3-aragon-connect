const { connect } = require('@aragon/connect')
const { TokenManager } = require('@aragon/connect-thegraph-tokens')

const fetchTokenHolders = async () => {
  console.info('fetchTokenHolders')

  const org = await connect('elimuai.aragonid.eth', 'thegraph')
  console.debug(`fetchTokenHolders org: ${org}`)

  const tokens = new TokenManager(await org.app({
    appName: 'tokens.aragonpm.eth'
  }))

  const tokenDetails = await tokens.token()
  console.debug(`fetchTokenHolders tokenDetails: ${tokenHolders}`)

  const tokenHolders = await tokenDetails.holders()
  console.debug(`fetchTokenHolders tokenHolders: ${tokenHolders}`)

  return tokenHolders
}

module.exports = fetchTokenHolders
