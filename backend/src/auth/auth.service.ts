import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { ApplicationException } from "src/@exceptions";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ){}

  async validateCredential(username: string, password: string): Promise<User>{
    const found : User = await this.repository.findOneBy({username: username});

    if(!found){
      throw new ApplicationException('Invalid user', 401)
    }

    if(found.password !== password){
      throw new ApplicationException('Password error', 401)
    } 

    return found;
  }

}