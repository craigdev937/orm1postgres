import { BaseEntity, Column, Entity, OneToMany,
    PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./TodoModel";

@Entity({name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column() age: number;
    @Column() isActive: boolean;

    @OneToMany(() => Todo, 
    (todo) => todo.user,
    {cascade: true, eager: true}) todos: Todo[];
};


// @OneToOne(() => Profile, (profile) => 
    // profile.user, { 
    //     cascade: true
    // }) 
    // @JoinColumn() profile: Profile;