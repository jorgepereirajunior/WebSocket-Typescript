import { Socket } from 'socket.io'
import { sockets } from './http'

sockets.on('connection', (socketClient: Socket) => {
  console.log(`${socketClient.id} conectado`)
})