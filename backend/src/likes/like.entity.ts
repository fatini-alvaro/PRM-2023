import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Topic } from "src/topics/topic.entity";

@Entity('topic_user_like')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, {eager: true, nullable: false})
  @JoinColumn({name: 'user_id'})
  user: User;

  @ManyToOne(() => Topic, {eager: true, nullable: false})
  @JoinColumn({name: 'topic_id'})
  topic: Topic;
}