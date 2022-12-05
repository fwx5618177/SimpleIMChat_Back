import SocketController from '@/controllers/socket.controller'
import { SocketStatus } from '@/interfaces/socket.interface'
import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

class SocketRoute {
    public socketController: SocketController = new SocketController()

    public initializeSockets(socketIO: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) {
        socketIO.on('connection' as SocketStatus, (socket: any) => {
            this.socketController.handleCountOnline(socketIO)
            this.socketController.handleConnection(socket)
        })
    }
}

export default SocketRoute
