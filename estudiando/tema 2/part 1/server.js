const http = require("node:http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("....prueba....");
});

const port = 3000;
server.listen(port, () => {
  console.log(`"server listenig on port http://localhost:${port}"`);
});
