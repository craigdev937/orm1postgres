import { BaseEntity, Entity, 
    PrimaryGeneratedColumn,
    Column, ManyToOne, } from "typeorm";
import { User } from "./UserModel";

@Entity({name: "todos"})
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column({nullable: false}) title: string;
    @Column({nullable: true}) description: string;
    @Column({default: false}) isCompleted: boolean;

    @ManyToOne(() => User, 
    (user) => user.todos) user: User;
};


