// Node.js webapp for displaying information about the elimu.ai Community DAO at https://mainnet.aragon.org/#elimuai

const fetchOrgDataAsync = async() => {
	console.log('fetchOrgDataAsync');

	// Fetch data from the DAO
	const { connect } = require('@aragon/connect');
	const org = await connect('elimuai.aragonid.eth', 'thegraph');
	console.log(`org: ${org}`);

	console.log('\nApps:');
    const apps = await org.apps();
    apps.map(console.log);

	// Initialize the web server
	initializeWebServer(apps);
}
fetchOrgDataAsync();

function initializeWebServer(apps) {
	const http = require('http');
	const hostname = '127.0.0.1';
	const port = 3000;
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');

		// Display information about the DAO
		res.end(`Apps: ${apps}`);
	});
	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
}
