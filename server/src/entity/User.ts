import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_Name: string;

    @Column()
    last_Name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    income: number;
    
    @Column()
    birth_date: Date;
}
export { User };