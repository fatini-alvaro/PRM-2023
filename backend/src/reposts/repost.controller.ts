import { ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";
import { RepostService } from "./repost.service";
import { Topic } from "src/topics/topic.entity";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('reposts')
export class RepostController {
    constructor(
        private readonly repostService: RepostService,
        private readonly topicService: TopicService) {}

    @UseGuards(AuthGuard)
    @Get()
    async filterByTopic(@Query() query): Promise<Topic[]> {

        if (!query?.topic) {
            throw new HttpException('Topico não informado', HttpStatus.BAD_REQUEST)
        }

        const found = await this.topicService.findById(query.topic);

        if(!found) {
            throw new HttpException('Topico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.repostService.findByTopic(found);
    }
}