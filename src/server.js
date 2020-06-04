var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });

wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        ws.send('server received: ' + message)
        if (message == 10) {
            sendInterMsg(ws)
        }
    });
    
});

var count = 0;
function sendInterMsg(ws) {
    console.log('sendInterMsg')
    setInterval(() => {
        console.log('send count', count)
        ws.send('count: ' + count)
        count = count + 1
    }, 5000)
}
