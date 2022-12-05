import { Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

const SocketMiddleware = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>, next: any) => {
    try {
        const authorization = socket.handshake.auth.token

        if (!authorization) {
            const err: any = new Error('not authorized')

            err.data = {
                content: '认证失败',
            }

            throw err
        }

        // 密码检验
        const token = authorization.slice(7)
        // verify(token, jwt.secret)
        console.log(authorization, token)

        next()
    } catch (err) {
        console.log(err)

        next(err)
    }
}

export default SocketMiddleware
