import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from 'src/entities/topic.entity';
import { Repository } from "typeorm";

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Topic)
        private readonly topic: Repository<Topic>
    ) {}

    findAll(): Promise<Topic[]> {
        return this.topic.find();
    }

    findById(id: number): Promise<Topic>{
        return this.topic.findOneBy({id: id})
    }

    create(topic: Topic): Promise<Topic> {
        return this.topic.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.topic.delete(id);
    }
}