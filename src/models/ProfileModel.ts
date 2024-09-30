import { BaseEntity, Column, Entity, 
    OneToOne, 
    PrimaryGeneratedColumn } from "typeorm";
// import { User } from "./UserModel";

@Entity({ name: "profile" })
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column({ nullable: false }) gender: string;
    @Column({ nullable: true }) skill: string;

    // @OneToOne(() => User, 
    //     (user) => user.profile) user: User
};


