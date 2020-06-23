const http = require('http');
const callback  = require('./controller').callbackService;

http.createServer(callback).listen(8003, () => {
    process.stdout.write('Node engine running on port 8003')
});