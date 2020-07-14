const { connect } = require('@aragon/connect');

const fetchApps = async () => {
  console.log('fetchApps');

  // Fetch data from the DAO
  const org = await connect('elimuai.aragonid.eth', 'thegraph');
  console.log(`org: ${org}`);

  const apps = await org.apps();
  console.log(`apps: ${apps}`);

  return apps;
};

module.exports = fetchApps;
