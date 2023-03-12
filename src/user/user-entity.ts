import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private email: string;
    @Column()
    @Exclude()
    private password: string;
}