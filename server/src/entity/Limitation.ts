import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("limitations")
class Limitation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_Id: number;

    @Column()
    category_Id: number;

    @Column()
    limit: number;
}
export { Limitation };