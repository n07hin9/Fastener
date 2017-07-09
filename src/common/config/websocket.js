export default {
    on: true,
    type: 'socket.io',
    allow_origin: '',
    adp: undefined,
    path: '',
    messages: {
        open: 'api/socketio/open',
        close: 'api/socketio/close',
        addsite: 'api/private/addsite',
    }
};