const { connect } = require('@aragon/connect')

const fetchApps = async () => {
  console.info('fetchApps')

  // See https://connect.aragon.org/guides/getting-started#connecting-to-an-alternative-network
  const org = await connect('elimuai.aragonid.eth', 'thegraph', { chainId: 4 })
  // if (mainnet) {
  //   org = await connect('elimuai.aragonid.eth', 'thegraph')
  // }
  console.debug(`fetchApps`, `org: ${org}`)

  const apps = await org.apps()
  console.debug(`fetchApps`, `apps: ${apps}`)

  return apps
}

module.exports = fetchApps
