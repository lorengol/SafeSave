import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("categories")
class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
export { Category };