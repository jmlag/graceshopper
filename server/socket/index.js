// if you guys aren't planning on using sockets, you can feel free to remove the
// socket-specific code from your codebase to clear up clutter

module.exports = (io) => {

  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
