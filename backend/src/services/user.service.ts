import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from 'src/entities/user.entity';
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<User>{
        return this.repository.findOneBy({id: id})
    }

    findByUsername(username: string): Promise<User>{
        return this.repository.findOneBy({username: username})
    }

    create(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}