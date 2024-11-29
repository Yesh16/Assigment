const http = require('http');

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === "/api") {
        response.writeHead(200, { 'Content-Type': 'application/json'});
        const responseObject = {
            message: 'Hello, this is your JSON response!',
            success: true
        };
        response.end(JSON.stringify(responseObject))
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain '});
        response.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});