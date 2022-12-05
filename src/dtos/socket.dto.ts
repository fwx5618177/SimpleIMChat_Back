import { MaxLength, MinLength } from 'class-validator'

export class SocketDto {
    @MinLength(10, {
        message: `It's too short!`,
    })
    @MaxLength(300, {
        message: `It's too long!`,
    })
    public msg!: string
}
