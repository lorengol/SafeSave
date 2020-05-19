import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("bank_accounts")
class BankAccount {

    @PrimaryGeneratedColumn()
    account_number: number;

    @Column()
    branch_number: number;

    @Column()
    bank_id: number;

    @Column()
    user_id: number;

    @Column()
    current: number;

    @Column()
    first_Name: string;

    @Column()
    last_Name: string;

    @Column()
    social_security_number: string;
}
export { BankAccount };