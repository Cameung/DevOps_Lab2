const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if(req.url === '/') {
    res.write('Welcome home!');
  }else {
    res.write('You got lost');
    res.write(JSON.stringify(url.parse(req.url)));
  }
  res.end('okay');
});

module.exports = app;