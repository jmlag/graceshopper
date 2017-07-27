// can remove this file if not using

import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('connect', function () {
  console.log('Connected!');
});

export default socket
