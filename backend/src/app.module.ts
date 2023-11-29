import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';
import { TopicModule } from './topics/topic.module';
import { ProfileModule } from './profiles/profile.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comments/comment.module';
import { RepostModule } from './reposts/repost.module';
import { LikeModule } from './likes/like.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'materdei',
      signOptions: {expiresIn: '24h'}
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023', 
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TopicModule,
    AuthModule,
    ProfileModule,
    CommentModule,
    RepostModule,
    LikeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}