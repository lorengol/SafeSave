import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Bank } from './Bank';
import { User } from './User';

@Entity('bank_accounts')
class BankAccount {
  @PrimaryColumn()
  account_number: number;

  @Column()
  branch_number: number;

  @Column()
  bank_id: number;

  @OneToOne((type) => Bank, {
    eager: true,
  })
  @JoinColumn()
  bank: Bank;

  @Column()
  user_id: number;

  @OneToOne((type) => User, {
    eager: true,
  })
  @JoinColumn()
  user: User;

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
