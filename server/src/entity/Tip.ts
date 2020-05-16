import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("tips")
class Tip {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tip_content: string;

    @Column()
    category_Id: number;
}
export { Tip };