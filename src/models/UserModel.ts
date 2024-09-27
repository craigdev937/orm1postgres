import { BaseEntity, Column, Entity, JoinColumn,
    OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./ProfileModel";

@Entity({name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column() age: number;
    @Column() isActive: boolean;

    @OneToOne(() => Profile, { cascade: true }) 
    @JoinColumn() profile: Profile;
};


