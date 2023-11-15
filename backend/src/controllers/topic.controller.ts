import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { query } from "express";
import { Topic } from "src/entities/topic.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { TopicService } from "src/services/topic.service";
import { UserService } from "src/services/user.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('topics')
export class TopicController {
    constructor(
        private readonly service: TopicService,
        private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get()
    async findAll(@Query() query): Promise<Topic[]> {

        if (query?.username) {
            const found = await this.userService.findByUsername(query.username);

            if(!found) {
                throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST)
            }

            return this.service.findByUser(found)
        } else {
            return this.service.findAll();
        }

        return this.service.findAll();
    }
    
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }
   
    @Post()
    create(@Body() topic: Topic): Promise<Topic> {
        return this.service.create(topic);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(found.id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() topic: Topic): Promise<Topic> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return this.service.update(found.id, topic);
    }
}