import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/topics/topic.entity";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity"

@Injectable()
export class CommentService {

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>
    ) {}

    findByTopic(topic: Topic): Promise<Comment[]> {
        return this.repository.find({
            where:{
                topic: {
                    id: topic.id
                }
            }
        });
    }

    create(topic: Comment): Promise<Comment> {
        return this.repository.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}