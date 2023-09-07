import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false, length: 50})
  fullname: string;

  @Column({nullable: false, length: 20})
  username: string;

  @Column({nullable: false, length: 250})
  description: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;
}