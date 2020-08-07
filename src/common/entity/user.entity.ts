import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'full_name'})
    fullName: string;

    @Column({name: 'user_name'})
    userName: string;

    @Column({name: 'password'})
    password: string;

    @Column({name: 'created'})
    created: Date;

    @Column({name: 'modified'})
    modified: Date;
}