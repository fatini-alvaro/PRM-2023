import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Topic } from "src/entities/topic.entity";
import { TopicService } from "src/services/topic.service";

@Controller('topic')
export class TopicController {

    constructor(private readonly service: TopicService){}

    @Get()
    findAll(): Promise<Topic[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        return this.service.findById(id)
    }

    @Post()
    create(@Body() topic: Topic): Promise<Topic> {
        return this.service,this.create(topic)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void>  {
        return this.service.delete(id);
    }

}