import { ClassSerializerInterceptor, Controller, Get, HttpCode, HttpException, HttpStatus, Param, UseInterceptors } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('profiles')
export class ProfileController {

  constructor(private userService: UserService) {}

  @Get(':username')
  getProfile(@Param('username') username:string):Promise<User> {
    const found = this.userService.findByUsername(username);

    if (!found) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return found;
  }

}