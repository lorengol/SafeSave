import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("banks")
class Bank {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
export { Bank };