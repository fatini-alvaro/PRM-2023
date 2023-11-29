import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/topics/topic.entity";
import { Repository } from "typeorm";
import { Like } from "./like.entity";
import { User } from "src/users/user.entity";

@Injectable()
export class LikeService {

    constructor(
        @InjectRepository(Like)
        private readonly repository: Repository<Like>
    ) {}

    findByTopic(topic: Topic): Promise<Like[]> {
        return this.repository.find({
            where:{
                topic: {
                    id: topic.id
                }
            }
        });
    }

    findByTopicAndUser(topic: Topic, user: User): Promise<Like[]> {
        return this.repository.find({
            where:{
                topic: {
                    id: topic.id
                },
                user: {
                    id: user.id
                }
            },            
        });
    }
    create(like: Like): Promise<Like> {
        return this.repository.save(like);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}