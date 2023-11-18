import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { Comment } from "./comment.entity";
import { TopicModule } from "src/topics/topic.module";
import { Topic } from "src/topics/topic.entity";
import { User } from "src/users/user.entity";
import { UserModule } from "src/users/user.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, Topic, User]),
    TopicModule, UserModule
  ],
  providers: [ CommentService ],
  controllers: [ CommentController ]
})
export class CommentModule {}