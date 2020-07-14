const { connect } = require('@aragon/connect');

const fetchOrganizationData = async () => {
  console.log('fetchOrganizationData');

  // Fetch data from the DAO
  const org = await connect('elimuai.aragonid.eth', 'thegraph');
  console.log(`org: ${org}`);

  const apps = await org.apps();
  console.log(`apps: ${apps}`);

  return apps;
};

module.exports = fetchOrganizationData;
