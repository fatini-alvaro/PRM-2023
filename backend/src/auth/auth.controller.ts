import { Body, ClassSerializerInterceptor, Controller, HttpCode, HttpException, HttpStatus, Post, UnauthorizedException, UseInterceptors } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/users/user.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() credential: Record<string, string>) {

        const found = await this.service.validateCredential(credential.username, credential.password);

        if (!found) {
            throw new UnauthorizedException();
        }

        const payload = {userId: found.id, userName: found.username, fullName: found.fullname}
        const token = await this.jwtService.signAsync(payload);

        return {
            accessToken: token
        };
    }

    @Post('signup')
    async signUp(@Body() user: User): Promise<User> {

        const found = await this.userService.findByUsername(user.username);

        if (found) {
            throw new HttpException('Este nome de usuário já está em uso', HttpStatus.CONFLICT)
        }

        return this.userService.create(user);
    }

}