import { SocketDto } from '@/dtos/socket.dto'

class SocketService {
    public async hiTest(arg: SocketDto, response: Function): Promise<void> {
        const data: SocketDto = arg
        console.log('data', data)

        response('get it:' + Date.now())
    }
}

export default SocketService
