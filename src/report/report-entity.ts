import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Report {

    @PrimaryGeneratedColumn()
    private id: number;
    @Column()
    private carReport: string;

    @Column()
    private ownerName: string;
    @Column()
    private salePrice: number;
}