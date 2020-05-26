import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BankAccount } from './BankAccount';

@Entity('savings')
class Saving {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_number: number;

  @OneToOne((type) => BankAccount, {
    eager: true,
  })
  @JoinColumn()
  bank_account: BankAccount;

  @Column()
  savings: number;
}
export { Saving };
