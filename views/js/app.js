var socket = io();
socket.emit('onCustomEvent', {myData: 'ok'})