const { connect } = require('@aragon/connect');

const fetchOrganizationData = async () => {
  // Fetch data from the DAO
  const org = await connect('elimuai.aragonid.eth', 'thegraph');
  console.log(`org: ${org}`);

  console.log('\nApps:');
  const apps = await org.apps();

  return apps;
};

module.exports = fetchOrganizationData;
