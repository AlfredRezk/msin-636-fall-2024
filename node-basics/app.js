const http = require("http");

const app = require('./modules/routes');

const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, console.log(`Server running...`));
