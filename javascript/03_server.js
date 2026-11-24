const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('¡Hola, Josué! Servidor funcionando correctamente.');
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});