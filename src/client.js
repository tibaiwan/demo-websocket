var ws = new WebSocket("ws://localhost:8181");

ws.onopen = function (e) {
    console.log('ws onopen', e);
}

ws.onmessage = function(msg) {
    console.log('ws onmessage: ', msg.data)
    if (msg.data == 'count: 5') {
        ws.close()
        console.log('WebSocket close')
    }
}

ws.onerror = function (e) {
    console.log('ws onerror', e);
} 

ws.onclose = function (e) {
    console.log('ws onclose', e);
}   

function sendMessage() {
    const value = document.getElementById('message').value
    console.log('sendMessage: ', value)
    ws.send(value);
}

document.getElementById('btn').onclick = sendMessage;
