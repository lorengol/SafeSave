import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("credit_cards")
class CreditCard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    card_number: number;

    @Column()
    card_holder_name: string;

    @Column()
    expiration_date: Date;

    @Column()
    user_id: number;

    @Column()
    account_number: number;

    @Column()
    CVV: number;

}
export { CreditCard };