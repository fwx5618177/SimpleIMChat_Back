import { SocketDto } from '@/dtos/socket.dto'
import { PrismaClient, Users } from '@prisma/client'

class SocketService {
    private users = new PrismaClient().users

    public async hiTest(arg: SocketDto): Promise<Users> {
        const data: SocketDto = arg
        console.log('data', data)
        const result: Users = await this.users.create({
            data: {
                createdTime: new Date(),
                name: 'fwx',
                pic: data.msg || 'test',
                lastTime: new Date(),
                status: false,
                unreadMsg: 0,
            },
        })

        if (!result) throw new Error(`Created error`)

        return result
    }

    public async findTest(arg: SocketDto): Promise<Users[]> {
        const data: SocketDto = arg

        if (!arg) throw new Error(`can't find the result`)

        const findData: Users[] = await this.users.findMany({
            where: {
                name: 'fwx',
            },
        })

        if (!findData) throw new Error(`can't find the result`)

        return findData
    }
}

export default SocketService
