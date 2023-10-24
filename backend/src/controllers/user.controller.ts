import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseInterceptors } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }
    @Get(':username')
    async findByUsername(@Param('username') username: string): Promise<User> {
        const found = await this.service.findByUsername(username);

        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }
    @Post()
    create(@Body() user: User): Promise<User> {
        return this.service.create(user);
    }
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(found.id);
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<User> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.service.update(found.id, user);
    }
}