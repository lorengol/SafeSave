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
    income: number;

}
export { BankAccount };