import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Topic } from "src/entities/topic.entity";
import { TopicService } from "src/services/topic.service";

@Controller('topics')
export class TopicController {

    constructor(private readonly service: TopicService){}

    @Get()
    findAll(): Promise<Topic[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() topic: Topic): Promise<Topic> {
        return this.service.create(topic)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void>  {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
        }

        return this.service.delete(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() topic: Topic): Promise<Topic> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
        }

        return this.service.update(id, topic);
    }
}