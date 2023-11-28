import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicModule } from "src/topics/topic.module";
import { Topic } from "src/topics/topic.entity";
import { User } from "src/users/user.entity";
import { UserModule } from "src/users/user.module";
import { RepostService } from "./repost.service";
import { RepostController } from "./repost.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Topic]),
    TopicModule, UserModule
  ],
  providers: [ RepostService ],
  controllers: [ RepostController ]
})
export class RepostModule {}