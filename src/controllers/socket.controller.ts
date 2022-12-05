import { SocketDto } from '@/dtos/socket.dto'
import { SocketName } from '@/interfaces/socket.interface'
import SocketService from '@/services/socket.service'
import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

class SocketController {
    private socketService: SocketService = new SocketService()

    /**
     * 获取在线人数和统计
     * @param socket socketIO
     */
    public handleCountOnline(socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>): void {
        const count = socket.engine.clientsCount
        const size = socket.of('/').sockets.size
        console.log('online count:', count, 'size:', size)
    }

    /**
     * 新连接
     * @param socket
     */
    public handleConnection(socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>): void {
        this.handleReceive(socket, 'hi')
        this.handleCloseConnection(socket)
    }

    public handleReceive(socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socketName: SocketName): void {
        socket.on(socketName, (arg: SocketDto, callback: any) => {
            switch (socketName) {
                case 'hi':
                    this.socketService.hiTest(arg, callback)
            }
        })
    }

    /**
     * 关闭连接
     * @param socket
     */
    public handleCloseConnection(socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>): void {
        socket.on('disconnect', () => {
            console.log('disconnect')
        })
    }
}

export default SocketController
