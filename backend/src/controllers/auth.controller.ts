import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly service: AuthService
  ){}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() credential: Record<string, string>) {

    const found = await this.service.validateCredential(credential.username, credential.password); 

    if(!found){
      throw new UnauthorizedException();
    }

    return {
      statusReturn: "deu certo"
    }

  }

}