const { connect } = require('@aragon/connect')

const fetchApps = async () => {
  console.info('fetchApps')

  // Fetch data from the DAO
  const org = await connect('elimuai.aragonid.eth', 'thegraph')
  console.debug(`fetchApps org: ${org}`)

  const apps = await org.apps()
  console.debug(`fetchApps apps: ${apps}`)

  return apps
}

module.exports = fetchApps
