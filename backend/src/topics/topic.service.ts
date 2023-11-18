import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationException } from "src/@exceptions";
import { Repository } from "typeorm";
import { Topic } from "./topic.entity";
import { User } from "src/users/user.entity";

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>
    ) {}

    findAll(): Promise<Topic[]> {
        return this.repository.find({
            order: {
                id: 'DESC'
            }
        });
    }

    findById(id: number): Promise<Topic>{
        return this.repository.findOneBy({id: id})
    }

    findByUser(user: User): Promise<Topic[]> {
        return this.repository.find({
            where:{
                owner: {
                    id: user.id
                }
            },
            order: {
                id: 'DESC'
            }
        });
    }

    create(topic: Topic): Promise<Topic> {
        return this.repository.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async update(id: number, topic: Topic): Promise<Topic>{

        const found = await this.repository.findOneBy({id: id});

        if(!found) {
            throw new ApplicationException('Topic not found', 404);
        }

        //Garante que o objeto substituido terá o mesmo ID da requisição
        topic.id = id;

        return this.repository.save(topic);
    }
}