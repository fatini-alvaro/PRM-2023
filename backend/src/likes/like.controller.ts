import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";
import { LikeService } from "./like.service";
import { Like } from "./like.entity";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('likes')
export class LikeController {
    constructor(
        private readonly service: LikeService,
        private readonly topicService: TopicService) {}

    @UseGuards(AuthGuard)
    @Get()
    async findByTopic(@Query() query): Promise<Like[]> {

        if (!query?.topic) {
            throw new HttpException('Topico não informado', HttpStatus.BAD_REQUEST)
        }

        const found = await this.topicService.findById(query.topic);

        if(!found) {
            throw new HttpException('Topico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.service.findByTopic(found);
    }

    @Post()
    async create(@Body() like: Like): Promise<Like> {

        return this.service.create(like);
        
        // const found = await this.service.findByTopicAndUser( like.topic, like.user);

        // if (found) {
        //     await this.service.delete(found.id);
        // } else {
        //     return this.service.create(like);
        // }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.delete(id);
    }
}