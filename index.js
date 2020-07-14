const fetchApps = require('./lib/fetch_apps');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const apps = await fetchApps();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Display information about the DAO
  res.end(`apps: ${apps}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
