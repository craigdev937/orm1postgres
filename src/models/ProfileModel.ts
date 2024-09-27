import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "profile" })
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column({ nullable: false }) gender: string;
    @Column({ nullable: true }) skill: string;
};


