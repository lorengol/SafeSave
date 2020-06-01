import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Business } from './Business';
import { BankAccount } from './BankAccount';
import { CreditCard } from './CreditCard';

@Entity('expenses')
class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  business_id: number;

  @OneToOne((type) => Business, {
    eager: true,
  })
  @JoinColumn({name:'business_id'})
  business: Business;

  @Column()
  credit_card_id: number;

  @OneToOne((type) => CreditCard, {
    eager: true,
  })
  @JoinColumn({name:'credit_card_id'})
  credit_Card: CreditCard;

  @Column()
  bank_account_id: number;

  @OneToOne((type) => BankAccount, {
    eager: true,
  })
  @JoinColumn({name:'bank_account_id'})
  bank_account: BankAccount;

  @Column()
  expense: number;

  @Column()
  date: string;
}
export { Expense };
